import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

def send_contact_email(name: str, email: str, message: str) -> bool:
    """
    Send contact form email using Gmail SMTP
    
    Args:
        name: Name of the person contacting
        email: Email of the person contacting
        message: Message content
        
    Returns:
        bool: True if email sent successfully, False otherwise
    """
    try:
        # Get SMTP configuration from environment
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', 587))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        email_from = os.environ.get('EMAIL_FROM')
        email_to = os.environ.get('EMAIL_TO')
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'New Contact Form Submission from {name}'
        msg['From'] = email_from
        msg['To'] = email_to
        msg['Reply-To'] = email
        
        # Create HTML email body
        html_body = f"""
        <html>
            <head>
                <style>
                    body {{
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                    }}
                    .container {{
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #f9f9f9;
                    }}
                    .header {{
                        background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
                        color: white;
                        padding: 20px;
                        border-radius: 5px;
                        text-align: center;
                    }}
                    .content {{
                        background: white;
                        padding: 30px;
                        margin-top: 20px;
                        border-radius: 5px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }}
                    .field {{
                        margin-bottom: 20px;
                    }}
                    .label {{
                        font-weight: bold;
                        color: #06b6d4;
                        margin-bottom: 5px;
                    }}
                    .value {{
                        padding: 10px;
                        background-color: #f3f4f6;
                        border-left: 3px solid #06b6d4;
                        margin-top: 5px;
                    }}
                    .footer {{
                        text-align: center;
                        margin-top: 20px;
                        color: #666;
                        font-size: 12px;
                    }}
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>💌 New Contact Form Submission</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">👤 Name:</div>
                            <div class="value">{name}</div>
                        </div>
                        <div class="field">
                            <div class="label">📧 Email:</div>
                            <div class="value">{email}</div>
                        </div>
                        <div class="field">
                            <div class="label">💬 Message:</div>
                            <div class="value">{message}</div>
                        </div>
                        <div class="field">
                            <div class="label">🕒 Received:</div>
                            <div class="value">{datetime.now().strftime('%B %d, %Y at %I:%M %p')}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This email was sent from your portfolio website contact form.</p>
                        <p>Reply directly to this email to respond to {email}</p>
                    </div>
                </div>
            </body>
        </html>
        """
        
        # Create plain text version as fallback
        text_body = f"""
        New Contact Form Submission
        
        Name: {name}
        Email: {email}
        
        Message:
        {message}
        
        Received: {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
        
        ---
        This email was sent from your portfolio website contact form.
        Reply directly to this email to respond to {email}
        """
        
        # Attach both versions
        part1 = MIMEText(text_body, 'plain')
        part2 = MIMEText(html_body, 'html')
        msg.attach(part1)
        msg.attach(part2)
        
        # Send email
        logger.info(f"Connecting to SMTP server {smtp_host}:{smtp_port}")
        with smtplib.SMTP(smtp_host, smtp_port, timeout=30) as server:
            server.set_debuglevel(1) # This will print detailed SMTP logs to Render
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
            
        logger.info(f"Contact email sent successfully to {email_to}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send contact email: {str(e)}")
        return False


