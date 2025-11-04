# 🚀 DEPLOY NOW - All Commands Ready

## Your website is READY. Here's what to do:

---

## ✅ STEP 1: Finish Setup (Run These Commands)

Open **Command Prompt** or **PowerShell**, navigate to your folder:

```cmd
cd D:\Personhood\Website
```

Then run these one by one:

### A. Merge CSS (if not done):
```cmd
type styles-additions.css >> styles.css 2>nul
del styles-additions.css 2>nul
echo CSS merged!
```

### B. Move Cady Logo:
```cmd
copy CADY_logo_V1.webp assets\cady-logo.webp
echo Logo copied!
```

### C. Check everything is ready:
```cmd
dir assets
```

You should see:
- personhood-logo.png
- cady-logo.webp
- app-discover.png
- app-chat.png
- app-profile.png

---

## ✅ STEP 2: Setup Waitlist Form (Choose One)

### OPTION A: Google Forms (RECOMMENDED)
**Best for: Auto-collect to spreadsheet, mass email later**

1. Go to https://forms.google.com/
2. Create form with Email + Name fields
3. Link to Google Sheets (Responses tab → green icon)
4. Get embed code (Send → < >)
5. Replace form in `index.html` lines 91-104

**See:** `WAITLIST-COMPLETE-SOLUTION.md` for full guide

---

### OPTION B: Keep Current Setup (Formsubmit)
**Good for: Simple, emails to inbox**

**Already configured in your index.html!**

Just update line 91 if you want different email:
```html
<form action="https://formsubmit.co/YOUR-EMAIL@gmail.com" method="POST">
```

**How it works:**
- Someone signs up → You get email notification
- Manually copy emails to spreadsheet
- Use Mailchimp/Gmail to send mass email when launching

---

## ✅ STEP 3: Deploy to GitHub

### Initialize Git:
```cmd
git init
```

### Add all files:
```cmd
git add .
```

### Commit:
```cmd
git commit -m "Launch Cady.Social - Personhood website"
```

### Set branch:
```cmd
git branch -M main
```

### Add remote:
```cmd
git remote add origin https://github.com/Vibraneum/Cady.Social.git
```

### Push to GitHub:
```cmd
git push -u origin main
```

**Note:** You might need to authenticate with GitHub. Follow prompts.

---

## ✅ STEP 4: Enable GitHub Pages

1. Go to: https://github.com/Vibraneum/Cady.Social
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

**Wait 2-5 minutes...**

Your site will be live at:
```
https://vibraneum.github.io/Cady.Social/
```

---

## ✅ STEP 5: Setup Custom Domain (cady.social)

### In GitHub (Pages settings):
1. Under "Custom domain", enter: `cady.social`
2. Click **Save**
3. Check **Enforce HTTPS** (after DNS propagates)

### In Your Domain Registrar (GoDaddy/Namecheap/etc):

Add these DNS records:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: vibraneum.github.io
```

**Wait 24-48 hours for DNS to propagate.**

Then your site will be live at: **https://cady.social/**

---

## 🎯 Quick Reference

### Your URLs:
- GitHub Pages: https://vibraneum.github.io/Cady.Social/
- Custom Domain: https://cady.social/ (after DNS)

### Your Pages:
- Homepage: /index.html
- About Personhood: /about.html
- About Cady: /cady.html
- Founder: /founder.html
- Contact: /contact.html

### Your Social Links (all working):
- X: https://x.com/VedanthNath
- Instagram: https://www.instagram.com/vedanthirl/
- LinkedIn: https://www.linkedin.com/in/vedanthnath/
- Calendar: https://calendar.app.google/BGZUoEL4aDvgBvr77
- Email: ved@loocafe.com

### Resources Linked:
- Google Drive: https://drive.google.com/drive/folders/14K9ByljSKxul3hLAPk7Yriq_6f-3B-E4

---

## ✅ Testing Checklist

After site is live:

- [ ] Test on desktop browser
- [ ] Test on mobile phone
- [ ] Click all navigation links
- [ ] Click all social links
- [ ] Submit test waitlist signup
- [ ] Check Google Sheets (if using Google Forms)
- [ ] Verify logo displays
- [ ] Check all images load
- [ ] Test on different browsers

---

## 🆘 Troubleshooting

### Git authentication error?
Use GitHub CLI or Personal Access Token

### CSS looks wrong?
Make sure styles-additions.css was merged

### Images not showing?
Check they're in `assets/` folder

### Form not working?
- Formsubmit: Check email in form action
- Google Forms: Check embed code is correct

### DNS not working?
Wait 24-48 hours, check DNS propagation at: https://dnschecker.org/

---

## 🎉 YOU'RE DONE!

Your website is:
- ✅ Multi-page (Home, About, Cady, Founder, Contact)
- ✅ Mobile responsive
- ✅ Has "Private Alpha" badge
- ✅ Collects waitlist emails
- ✅ Links to all your socials
- ✅ Shows company legal info
- ✅ Professional and ready to share

---

## 📧 Questions?

Check these guides:
- `START-HERE.md` - Overview
- `WAITLIST-COMPLETE-SOLUTION.md` - Email collection + mass send
- `FINAL-SETUP.md` - Detailed setup

Or email: ved@loocafe.com

---

**Now go launch! Share it, get signups, build your community!** 🚀
