import os
import asyncio
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text

DATABASE_URL = os.environ.get('DATABASE_URL')

async def ping():
    if not DATABASE_URL:
        print("No DATABASE_URL found.")
        return
    
    engine = create_async_engine(DATABASE_URL)
    try:
        async with engine.connect() as conn:
            await conn.execute(text("SELECT 1"))
            print("Database Ping Successful! ✅")
    except Exception as e:
        print(f"Database Ping Failed: {e}")
    finally:
        await engine.dispose()

if __name__ == "__main__":
    asyncio.run(ping())