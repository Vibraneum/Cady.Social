# ⚡ Single Command Setup + Mass Email Guide

## 🚀 ONE COMMAND TO RULE THEM ALL

**Just run: `setup()`**

That's it! Everything is done for you.

---

## 📋 What You Need To Do

### 1. Open Your Spreadsheet
https://docs.google.com/spreadsheets/d/1_bc0mhT2G-1dF6Fffi0Sb2_pB9oZUhuu4N3t59xmI28/edit

### 2. Go to Apps Script
- **Extensions** → **Apps Script**

### 3. Copy New Code
- Open: `/mnt/d/Personhood/Website/waitlist-appscript.js`
- Copy ALL the code (Ctrl+A, Ctrl+C)
- Paste into Apps Script (replace everything)
- Click **Save** (💾)

### 4. Run setup()
- Function dropdown → Select: **`setup`**
- Click **Run** (▶)
- Authorize (first time only)
- ✅ Done!

**What happens:**
1. Creates beautiful spreadsheet with all formatting
2. Sends you test emails
3. Shows you next steps

---

## 📊 Your New Spreadsheet

### Columns:
```
# │ Timestamp      │ Name   │ Email            │ Status │ Last Contacted │ Notes
──┼────────────────┼────────┼──────────────────┼────────┼────────────────┼───────
1 │ 06/01/25 21:45 │ Sarah  │ sarah@gmail.com  │ New    │                │
2 │ 06/01/25 22:10 │ Mike   │ mike@yahoo.com   │ New    │                │
```

### Features:
- ✅ Serial numbers auto-increment
- ✅ DD/MM/YY date format
- ✅ Status dropdown (7 options)
- ✅ Color-coded status cells
- ✅ **Last Contacted column** (tracks when you emailed them)
- ✅ Notes for comments/actions
- ✅ Frozen header row
- ✅ Perfect column widths

---

## 📧 MASS EMAIL FUNCTIONS

### **Email Everyone**
```
Function: emailAllUsers()
```
- Emails ALL users on waitlist
- Updates "Last Contacted" column
- Shows confirmation dialog
- Logs each email sent

**Use case:** Send update to entire waitlist

---

### **Email New Signups Only**
```
Function: emailNewSignups()
```
- Emails only users with "New" status
- Perfect for welcoming recent joiners
- Updates "Last Contacted" column

**Use case:** Welcome new users who just joined

---

### **Email Interested Users Only**
```
Function: emailInterested()
```
- Emails only users with "Interested" status
- Perfect for targeting engaged users
- Updates "Last Contacted" column

**Use case:** Send invites to highly engaged users

---

## 🎯 How to Use Mass Emails

### Step 1: Choose Your Function
```
In Apps Script:
- Function dropdown → Select emailAllUsers (or emailNewSignups, emailInterested)
```

### Step 2: Run It
```
- Click Run (▶)
- You'll see a confirmation dialog
```

### Step 3: Confirm
```
Dialog shows:
"Send email to 25 users?

This will:
- Send individual emails to each person
- Update "Last Contacted" column
- Use the welcome email template

[YES] [NO]"
```

### Step 4: Check Results
```
✅ Emails Sent!

Successfully sent: 24
Failed: 1

"Last Contacted" column updated!
```

---

## 📝 Manual Use (Clean & Easy)

### Tracking Your Users:

1. **Change Status**
   - Click Status cell → Dropdown appears
   - Select: New, Contacted, Interested, Invited, Active, etc.
   - Cell changes color automatically!

2. **Add Notes**
   - Click Notes cell → Type anything
   - "Wants early access"
   - "Friend of John"
   - "VIP user"

3. **Check Last Contacted**
   - See when you last emailed them
   - Empty = never contacted
   - Shows date: "06/01/25 21:45"

4. **Filter by Status**
   - Click Status header → Filter icon
   - Select "Interested" → See only interested users
   - Great for targeted actions!

5. **Export Data**
   - File → Download → CSV
   - Import to Mailchimp, SendGrid, etc.

---

## 🔥 Example Workflow

### Scenario: You want to invite 10 interested users

**Step 1: Update Status**
```
- Look at your waitlist
- Find 10 users who replied positively
- Change their Status to "Interested"
```

**Step 2: Filter**
```
- Click Status header → Filter
- Select "Interested" only
- You now see only those 10 users
```

**Step 3: Mass Email**
```
- Run: emailInterested()
- Confirm in dialog
- 10 emails sent!
- "Last Contacted" updated automatically
```

**Step 4: Update Status Again**
```
- Change their Status to "Invited"
- Add Notes: "Sent invite on 06/01/25"
```

**Step 5: Track Who Joins**
```
- When someone starts using Cady
- Change their Status to "Active"
- Add Notes: "Active user since 07/01/25"
```

---

## ⚠️ Important Notes

### How Emails Are Sent:
- **Individual sends** (NOT BCC)
- Each person gets their own email
- Looks personal, not mass email
- Uses the beautiful welcome email template
- From: Personhood <ved@loocafe.com>

### Why Not BCC?
- BCC looks like spam
- Individual emails have better deliverability
- More personal feel
- Can track who opens (if you add tracking later)

### Last Contacted Column:
- **Auto-updated** when you use mass email functions
- Format: DD/MM/YY HH:mm (matches Timestamp)
- Empty by default (never contacted)
- You can manually update it too

### Email Template:
Mass emails use the same template as form signups:
- "Hey [Name],"
- "You're officially on the Cady waitlist..."
- Welcome message
- CTA to book founder call

---

## 🛠️ Available Functions

### Setup:
- **`setup()`** - Run everything at once (RECOMMENDED)
- `setupSheet()` - Just setup sheet
- `testEmails()` - Just test emails

### Mass Emails:
- **`emailAllUsers()`** - Email everyone
- **`emailNewSignups()`** - Email "New" status only
- **`emailInterested()`** - Email "Interested" status only

### Internal (don't run these):
- `doPost()` - Handles form submissions
- `saveToSheet()` - Saves data to sheet
- `sendUserConfirmation()` - Sends email
- `sendAdminNotification()` - Notifies you

---

## 🎉 Complete Setup Checklist

1. ✅ Copy new code to Apps Script
2. ✅ Run `setup()`
3. ✅ Check ved@loocafe.com for test emails
4. ✅ Deploy as Web App
5. ✅ Execute as: Me, Who has access: Anyone
6. ✅ Copy Web App URL
7. ✅ Paste URL into script.js line 57
8. ✅ Commit and push to GitHub

**That's it! Now you can:**
- Receive signups automatically
- Email all users at once
- Filter by status
- Track communications
- Take manual actions

---

## 💡 Pro Tips

### Segment Your Users:
```
New → Recently joined
Contacted → You reached out
Interested → Replied positively
Invited → Sent access/invite
Active → Using Cady
Not Interested → No response
Declined → Explicitly said no
```

### Use Notes Column:
```
"Referred by John"
"Wants mobile app"
"Power user - 2hr sessions"
"Character.AI user"
"VIP - early supporter"
```

### Mass Email Strategy:
```
Week 1: emailNewSignups() → Welcome everyone
Week 2: emailInterested() → Send update to engaged users
Week 3: emailAllUsers() → Product launch announcement
```

### Track Your Funnel:
```
100 New signups
 ↓ emailNewSignups()
50 Interested (replied)
 ↓ emailInterested()
20 Invited (sent access)
 ↓
10 Active (using Cady)
```

---

## 🚀 Ready to Go!

You now have:
- ✅ Single command setup
- ✅ Beautiful spreadsheet
- ✅ Mass email capability
- ✅ Status tracking
- ✅ Communication tracking
- ✅ Clean manual interface

**Just run:** `setup()`

Then you're ready to manage your waitlist like a pro! 🎉

---

**Questions?** Check the logs (View → Logs in Apps Script) to see what's happening.
