# ⚡ Quick Setup - Google Sheets Waitlist

## What You Need to Do (5 steps, ~10 minutes)

### 1️⃣ Create Google Sheet
- Go to https://sheets.google.com
- Sign in with `ved@loocafe.com`
- Create blank sheet named: **"Cady Waitlist"**
- Add headers in Row 1: `Timestamp | Email | Name | Status | Notes`

### 2️⃣ Copy Apps Script Code
- In Google Sheet: **Extensions** → **Apps Script**
- Delete existing code
- Open `waitlist-appscript.js` from this repo
- Copy ALL code and paste into Apps Script
- Click **Save** (💾)

### 3️⃣ Test Email Templates (Optional but Recommended)
- In Apps Script, select function dropdown: `testEmails`
- Click **Run** (▶)
- **First time**: Authorize permissions
  - Click "Review Permissions"
  - Choose your account
  - "Advanced" → "Go to Cady Waitlist Handler"
  - "Allow"
- Check `ved@loocafe.com` inbox - you'll see 2 beautiful test emails! 🎉

### 4️⃣ Deploy Web App
- Click **Deploy** → **New deployment**
- Gear icon → Select **Web app**
- Settings:
  - Execute as: **Me**
  - Who has access: **Anyone**
- Click **Deploy**
- **COPY THE URL** (looks like: `https://script.google.com/macros/s/AKfycbz.../exec`)

### 5️⃣ Update Website Code
- Open `script.js` in this repo
- Find line 57: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
- Replace with your copied URL:
  ```javascript
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz.../exec';
  ```
- Save file
- Commit and push to GitHub

---

## 🎉 Done! Test It

1. Go to https://cady.social
2. Scroll to waitlist
3. Enter your email
4. You should see:
   - ✅ Loading spinner
   - ✅ Success message "Check your email for confirmation!"
   - ✅ New row in Google Sheet
   - ✅ Beautiful welcome email to user
   - ✅ Admin notification to ved@loocafe.com

---

## 📧 Email Preview

**User receives:**
- Beautiful gradient header with Personhood branding
- Personalized welcome message
- Explanation of what Cady is
- CTA to book founder call
- Clean, professional design

**You receive (ved@loocafe.com):**
- Clean table with: Name, Email, Timestamp
- Quick actions: View spreadsheet, Reply to user
- Instant notification for every signup

---

## 🛠️ Managing Signups

**Your Google Sheet:**
- All signups appear automatically
- Add status: "New" → "Contacted" → "Invited"
- Add notes about each user
- Export to CSV anytime
- Track growth over time

---

## ❓ Troubleshooting

**Form submits but no data in sheet:**
- Double-check the URL in `script.js` line 57

**No emails received:**
- Check spam folder
- Verify authorization was completed in Step 3

**"Authorization required" error:**
- Run `testEmails` function again and re-authorize

---

**Full detailed guide:** See `GOOGLE-SHEETS-SETUP.md`

**Need help?** Check Apps Script logs: View → Logs
