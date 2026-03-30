"# API Contracts & Implementation Details

## Contact Form Integration

### Backend Implementation ✅

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  \"name\": \"string (1-100 chars, required)\",
  \"email\": \"valid email (required)\",
  \"message\": \"string (1-2000 chars, required)\"
}
```

**Response (Success - 200):**
```json
{
  \"success\": true,
  \"message\": \"Thank you for reaching out! I'll get back to you soon.\"
}
```

**Response (Error - 500):**
```json
{
  \"detail\": \"Error message describing the issue\"
}
```

### Email Service Configuration

**Service:** Gmail SMTP
**Configuration (in `/app/backend/.env`):**
- SMTP_HOST: smtp.gmail.com
- SMTP_PORT: 587
- SMTP_USER: lakshmisowjanya275@gmail.com
- SMTP_PASSWORD: [App Password]
- EMAIL_FROM: lakshmisowjanya275@gmail.com
- EMAIL_TO: lakshmisowjanya275@gmail.com

### Email Template

When a user submits the contact form:
1. **HTML Email** sent to lakshmisowjanya275@gmail.com containing:
   - Name of sender
   - Email of sender (set as Reply-To)
   - Message content
   - Timestamp
   - Styled with cyan/blue gradient matching website theme

2. **Plain Text Fallback** for email clients that don't support HTML

3. **Database Record** saved to `contact_submissions` collection in MongoDB:
   ```json
   {
     \"id\": \"uuid\",
     \"name\": \"sender name\",
     \"email\": \"sender email\",
     \"message\": \"message content\",
     \"timestamp\": \"ISO datetime\",
     \"email_sent\": true
   }
   ```

### Frontend Implementation ✅

**Component:** `/app/frontend/src/components/Contact.jsx`

**Changes Made:**
1. Added axios import
2. Added backend API URL configuration
3. Updated `handleSubmit` to make API call to `/api/contact`
4. Added loading state (`isSubmitting`) to disable button during submission
5. Added error handling with destructive toast variant
6. Success toast shows backend response message

**User Experience:**
- Form validates required fields (name, email, message)
- Submit button shows \"Processing...\" while sending
- Success: Green toast notification + form resets
- Error: Red destructive toast with error message
- All emails go to lakshmisowjanya275@gmail.com

### Mock Data Removed

**File:** `/app/frontend/src/mock.js`
- Contact form NO LONGER MOCKED
- All other data (profile, experience, skills, projects, services) still uses mock data

### Testing Status

**Backend:** ✅ Running on port 8001
**Frontend:** ✅ Running on port 3000, compiled successfully
**Integration:** ✅ Frontend connected to backend API

### Next Steps for Full Backend Integration

Currently only the **contact form** is integrated with backend. Still mocked:
- Profile data
- Experience data
- Skills data
- Services data
- Projects/Portfolio data

These can be moved to backend/database if needed, but for a portfolio website, static mock data is typically sufficient.
"