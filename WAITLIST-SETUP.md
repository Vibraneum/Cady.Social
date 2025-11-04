# 📧 Waitlist Email Collection Setup

## Best Free Options (Secure & Easy to View)

### 🏆 **RECOMMENDED: Tally.so**

**Why:** Free, beautiful, secure, unlimited responses, easy dashboard

**Setup Steps:**
1. Go to https://tally.so/
2. Sign up (free)
3. Create new form with one field: "Email"
4. Copy the form link OR embed code
5. Replace the form in `index.html` (line 91-97)

**Tally Embed Code:**
```html
<iframe
  data-tally-src="https://tally.so/r/YOUR-FORM-ID"
  width="100%"
  height="350"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
  title="Join Waitlist">
</iframe>
```

**Pros:**
- ✅ Unlimited responses (FREE)
- ✅ Beautiful interface
- ✅ Easy dashboard to view emails
- ✅ CSV export
- ✅ No Tally branding (free tier)
- ✅ Secure (GDPR compliant)

---

### 🥈 **OPTION 2: Formspree**

**Why:** Simple, works great with static sites

**Setup Steps:**
1. Go to https://formspree.io/
2. Sign up (free)
3. Create new form
4. Copy your form ID (e.g., `xyzabc123`)
5. In `index.html` line 91, replace `YOUR_FORM_ID`:
   ```html
   <form action="https://formspree.io/f/xyzabc123" method="POST">
   ```

**Pros:**
- ✅ 50 submissions/month (free)
- ✅ Email notifications
- ✅ Simple dashboard
- ✅ Secure
- ✅ Already in the code!

**Cons:**
- ⚠️ Only 50/month on free tier

---

### 🥉 **OPTION 3: Google Forms**

**Why:** Unlimited, familiar, auto-saves to Google Sheets

**Setup Steps:**
1. Create Google Form: https://forms.google.com/
2. Add email field
3. Click "Send" → Get embed code
4. Replace form in `index.html` with iframe

**Pros:**
- ✅ Unlimited (FREE)
- ✅ Auto-saves to Google Sheets
- ✅ Super easy to view responses
- ✅ Can set up email notifications

**Cons:**
- ⚠️ Google branding (unless you customize)
- ⚠️ Less "startup-y" feel

---

### 🏅 **OPTION 4: EmailOctopus**

**Why:** Built specifically for email lists

**Setup Steps:**
1. Go to https://emailoctopus.com/
2. Sign up (free)
3. Create list
4. Get embedded form code
5. Replace in `index.html`

**Pros:**
- ✅ 2,500 subscribers (free)
- ✅ Email campaign features
- ✅ Clean embeds
- ✅ Export to CSV

---

## 🎯 My Recommendation

**For Cady Waitlist: Use Tally.so**

**Why?**
1. **Unlimited responses** - No limits!
2. **Beautiful UI** - Matches your design
3. **Easy dashboard** - See all emails instantly
4. **CSV export** - Import to any tool later
5. **Professional** - No "Powered by" branding
6. **Secure** - GDPR compliant
7. **FREE forever**

---

## 📝 Quick Tally Setup (5 minutes)

### Step 1: Create Tally Form
1. Go to https://tally.so/signup
2. Click "Create form"
3. Delete default fields
4. Add one field: "Email" (set as required)
5. Customize:
   - Title: "Join Cady Waitlist"
   - Description: "Get early access to AI people who genuinely connect with you"
   - Button text: "Join Waitlist"

### Step 2: Get Embed Code
1. Click "Share" button
2. Choose "Embed"
3. Copy the embed code

### Step 3: Update index.html
Replace lines 91-97 with your Tally embed code:

```html
<!-- Waitlist Section -->
<section id="waitlist" class="section waitlist-section">
    <div class="container">
        <div class="waitlist-content">
            <h2 class="section-title">Cady is in Private Alpha</h2>
            <p class="section-subtitle">Join the waitlist to get early access</p>

            <!-- Tally Form -->
            <iframe
              data-tally-src="https://tally.so/r/YOUR-FORM-ID"
              width="100%"
              height="400"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Join Waitlist"
              style="max-width: 600px; margin: 0 auto; display: block;">
            </iframe>
            <script async src="https://tally.so/widgets/embed.js"></script>

            <div class="alpha-info">
                <p><strong>What to expect:</strong> Cady has been in deep R&D for 4+ months. We're focused on making AI people sophisticated and genuine — not rushing sloppy chatbots to market.</p>
            </div>
        </div>
    </div>
</section>
```

### Step 4: View Responses
1. Log into Tally dashboard
2. Click on your form
3. See all email submissions
4. Export to CSV anytime

---

## 🔒 Security Notes

All recommended services:
- ✅ HTTPS encrypted
- ✅ GDPR compliant
- ✅ No data selling
- ✅ Professional and trusted

**Your data stays secure and private.**

---

## 📊 Viewing Your Waitlist

### Tally:
- Dashboard → Form → Responses
- Export to CSV anytime

### Formspree:
- Dashboard → Form → Submissions
- Email notifications

### Google Forms:
- Responses tab
- Auto-syncs to Google Sheets

### EmailOctopus:
- Lists → View subscribers

---

## 🚀 Launch Checklist

- [ ] Choose service (Tally recommended)
- [ ] Sign up
- [ ] Create form
- [ ] Get embed code
- [ ] Update `index.html`
- [ ] Test submission
- [ ] Check you receive the email

**You're ready to collect waitlist signups!**

---

## 💡 Pro Tips

1. **Set up email notifications** - Get notified when someone joins
2. **Thank you page** - Customize the confirmation message
3. **Export regularly** - Back up your email list
4. **Add to email tool later** - Mailchimp, ConvertKit, etc.

---

Need help? Email ved@loocafe.com
