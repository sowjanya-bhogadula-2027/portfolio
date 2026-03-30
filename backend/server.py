from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy import Column, String, DateTime, Integer, select
from sqlalchemy.orm import declarative_base
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
from email_service import send_contact_email


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# PostgreSQL connection
DATABASE_URL = os.environ['DATABASE_URL']
engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

Base = declarative_base()

# SQLAlchemy ORM Models
class StatusCheckDB(Base):
    __tablename__ = "status_checks"
    
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    client_name = Column(String, nullable=False)
    timestamp = Column(DateTime, nullable=False, default=datetime.now(timezone.utc))

class ContactSubmissionDB(Base):
    __tablename__ = "contact_submissions"
    
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String(100), nullable=False)
    email = Column(String, nullable=False)
    message = Column(String(2000), nullable=False)
    timestamp = Column(DateTime, nullable=False, default=datetime.now(timezone.utc))
    email_sent = Column(Integer, default=1)

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Pydantic Models for API requests/responses
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    
    class Config:
        from_attributes = True

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactFormSubmission(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=2000)

class ContactFormResponse(BaseModel):
    success: bool
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_id = str(uuid.uuid4())
    status_obj = StatusCheckDB(
        id=status_id,
        client_name=input.client_name,
        timestamp=datetime.now(timezone.utc)
    )
    
    try:
        async with AsyncSessionLocal() as session:
            session.add(status_obj)
            await session.commit()
            await session.refresh(status_obj)
    except Exception as e:
        logger.error(f"Status check database error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to save status check"
        )
    
    return StatusCheck(
        id=status_obj.id,
        client_name=status_obj.client_name,
        timestamp=status_obj.timestamp
    )

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    async with AsyncSessionLocal() as session:
        result = await session.execute(select(StatusCheckDB))
        status_checks = result.scalars().all()
    
    return [
        StatusCheck(
            id=check.id,
            client_name=check.client_name,
            timestamp=check.timestamp
        )
        for check in status_checks
    ]

@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(form_data: ContactFormSubmission):
    """
    Handle contact form submission and send email
    """
    try:
        logger.info(f"Received contact form submission from {form_data.name} ({form_data.email})")
        
        # Send email
        email_sent = send_contact_email(
            name=form_data.name,
            email=form_data.email,
            message=form_data.message
        )
        
        if email_sent:
            # Save to database for record keeping
            try:
                contact_doc = ContactSubmissionDB(
                    id=str(uuid.uuid4()),
                    name=form_data.name,
                    email=form_data.email,
                    message=form_data.message,
                    timestamp=datetime.now(timezone.utc),
                    email_sent=1
                )
                
                async with AsyncSessionLocal() as session:
                    session.add(contact_doc)
                    await session.commit()
                
                logger.info(f"Contact form processed successfully for {form_data.email}")
            except Exception as db_error:
                logger.error(f"Database error (non-fatal): {str(db_error)}")
                # Don't fail the request just because DB save failed - email was sent
                pass
            
            return ContactFormResponse(
                success=True,
                message="Thank you for reaching out! I'll get back to you soon."
            )
        else:
            raise HTTPException(
                status_code=500,
                detail="Failed to send email. Please try again later."
            )
            
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your request. Please try again later."
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_db():
    """Create tables on startup"""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.on_event("shutdown")
async def shutdown_db():
    """Close database connection on shutdown"""
    await engine.dispose()

