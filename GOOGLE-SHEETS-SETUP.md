# Google Sheets Waitlist Setup Guide

## Step-by-Step Instructions

### Part 1: Create Google Sheet

1. **Go to Google Sheets**: https://sheets.google.com
2. **Sign in** with ved@loocafe.com (or your Google account)
3. **Create new spreadsheet**:
   - Click "Blank" to create new sheet
   - Name it: **"Cady Waitlist"**
4. **Add column headers** in Row 1:
   ```
   A1: Timestamp
   B1: Email
   C1: Name
   D1: Status
   E1: Notes
   ```
5. **Optional**: Format the header row
   - Select Row 1
   - Background color: #F6C28B (peach)
   - Text color: #3E3B28 (dark)
   - Bold text

---

### Part 2: Set Up Apps Script

1. **Open Apps Script Editor**:
   - In your Google Sheet, click **Extensions** → **Apps Script**
   - This opens a new tab with code editor

2. **Delete default code**:
   - You'll see a function `myFunction()` - delete everything

3. **Copy the Apps Script code**:
   - Open the file: `waitlist-appscript.js` in this repository
   - Copy ALL the code
   - Paste it into the Apps Script editor

4. **Save the project**:
   - Click the 💾 Save icon (or Ctrl+S / Cmd+S)
   - Name the project: **"Cady Waitlist Handler"**

5. **Test the setup** (optional but recommended):
   - In the function dropdown at top, select `testEmails`
   - Click the ▶ Run button
   - **First time**: You'll need to authorize permissions
     - Click "Review Permissions"
     - Choose your Google account
     - Click "Advanced" → "Go to Cady Waitlist Handler (unsafe)"
     - Click "Allow"
   - Check ved@loocafe.com inbox for test emails
   - You should receive 2 beautiful HTML emails

---

### Part 3: Deploy as Web App

1. **Click "Deploy"** button (top right) → **"New deployment"**

2. **Configure deployment**:
   - Click the gear icon ⚙️ next to "Select type"
   - Select **"Web app"**

3. **Fill in settings**:
   - **Description**: "Cady Waitlist Form Handler"
   - **Execute as**: **Me** (ved@loocafe.com)
   - **Who has access**: **Anyone**

4. **Click "Deploy"**

5. **Authorize** (if prompted):
   - Click "Authorize access"
   - Choose your account
   - Allow permissions

6. **Copy the Web App URL**:
   - You'll see a URL like:
     ```
     https://script.google.com/macros/s/AKfycbz.../exec
     ```
   - **COPY THIS URL** - you'll need it in the next step
   - Click "Done"

---

### Part 4: Update Website Form

1. **Open** `index.html` in the website repository

2. **Find the waitlist form** (search for `formsubmit.co`)

3. **Replace** the old form code with the new JavaScript-based form

4. **Add the Web App URL**:
   - In `script.js`, find `GOOGLE_SCRIPT_URL`
   - Paste your copied URL from Part 3, Step 6

5. **Save and deploy** the website changes

---

## Email Templates Preview

### User Confirmation Email
- **Subject**: "You're on the Cady waitlist! 🎉"
- **Design**: Warm gradient header with Personhood colors
- **Content**:
  - Personalized greeting
  - Welcome message
  - Explanation of Cady's uniqueness
  - CTA to book founder call
  - Signature from Vedanth

### Admin Notification Email
- **Subject**: "🎉 New Cady Waitlist Signup!"
- **Design**: Clean table layout
- **Content**:
  - Name, email, timestamp
  - Quick actions: View spreadsheet, Reply to user
  - Sent to: ved@loocafe.com

---

## Testing the Setup

### Test Form Submission
1. Go to https://cady.social
2. Scroll to waitlist section
3. Enter test email and name
4. Click "Join Waitlist"
5. Check for:
   - ✅ Loading spinner appears
   - ✅ Success message shows
   - ✅ New row appears in Google Sheet
   - ✅ User receives confirmation email
   - ✅ Admin receives notification email

### Troubleshooting

**Problem**: "Authorization required" error
- **Solution**: Re-run the `testEmails` function and authorize permissions

**Problem**: Form submits but no data in sheet
- **Solution**: Check Web App URL is correct in `script.js`

**Problem**: No emails received
- **Solution**:
  - Check spam folder
  - Verify `ADMIN_EMAIL` in Apps Script is `ved@loocafe.com`
  - Re-run authorization

**Problem**: CORS error in browser console
- **Solution**: Make sure "Who has access" is set to "Anyone" in deployment settings

---

## Managing the Waitlist

### Viewing Signups
- Open your Google Sheet: All signups appear automatically
- Columns: Timestamp, Email, Name, Status, Notes

### Tracking Status
- Use "Status" column to track: New, Contacted, Invited, Active, etc.
- Use "Notes" column for any additional information

### Exporting Data
- File → Download → CSV (for email marketing tools)
- Or copy-paste directly into other tools

### Analytics
- Use Google Sheets formulas to count signups:
  ```
  =COUNTA(B:B)-1  (total signups)
  ```
- Create charts for signup trends over time

---

## Security & Privacy

✅ **Form submissions**: Secured via HTTPS
✅ **Data storage**: Private Google Sheet (only you have access)
✅ **Email notifications**: Sent via your Gmail account
✅ **No third-party services**: Direct Google Apps Script
✅ **GDPR compliant**: Users control their data

---

## Updating the Code

If you need to modify emails or functionality:

1. Open Apps Script editor (Extensions → Apps Script)
2. Make changes to the code
3. Click Save (💾)
4. **Important**: Click Deploy → Manage Deployments
5. Click the ✏️ edit icon on your active deployment
6. Change "Version" to "New version"
7. Click "Deploy"

This ensures changes take effect immediately.

---

## Support

If you run into issues:
1. Check the Apps Script logs: View → Logs (in Apps Script editor)
2. Test individual functions using the `testEmails` function
3. Verify deployment settings are correct
4. Check browser console for JavaScript errors

---

**Setup created with Claude Code**
**Last updated**: 2025-01-06
