# 🔒 Fix HTTPS for cady.social

## ⚠️ Why Your Domain Shows "Not Secure"

Your website isn't using HTTPS yet. This happens because:
1. Custom domain (cady.social) is configured
2. But HTTPS enforcement isn't enabled on GitHub Pages
3. Need to wait for SSL certificate to provision

---

## ✅ How to Fix (5 Minutes)

### Step 1: Check Your GitHub Pages Settings

1. Go to your repo: https://github.com/Vibraneum/Cady.Social
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)

### Step 2: Verify Custom Domain

Under "Custom domain" you should see:
```
cady.social
```

If it's there, good! If not, add it.

### Step 3: Check DNS Configuration

**IMPORTANT:** Your DNS must be configured correctly first!

#### Required DNS Records:

**For Apex Domain (cady.social):**
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**For WWW Subdomain (www.cady.social):**
```
Type: CNAME
Host: www
Value: vibraneum.github.io
```

### Step 4: Enable HTTPS

1. In GitHub Pages settings
2. Find **"Enforce HTTPS"** checkbox
3. ✅ Check it

**If checkbox is greyed out:**
- GitHub is still provisioning SSL certificate
- Wait 24-48 hours after DNS changes
- Check back and enable it then

### Step 5: Wait for Certificate

After enabling:
- GitHub requests SSL certificate from Let's Encrypt
- Takes 5-30 minutes usually
- Sometimes up to 24 hours

---

## 🔍 Check Your DNS Right Now

### Option 1: Use Online Tool
Go to: https://www.whatsmydns.net/

Enter: `cady.social`

You should see all 4 GitHub IPs propagated globally.

### Option 2: Command Line (if you have terminal)
```bash
dig cady.social +short
```

Should show:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## 🛠️ Troubleshooting

### Problem: "Enforce HTTPS" is greyed out

**Reason:** DNS not configured correctly or certificate not ready

**Fix:**
1. Double-check DNS records (see Step 3)
2. Wait 24-48 hours after adding custom domain
3. Remove custom domain, save, re-add it
4. Try again tomorrow

### Problem: DNS configured but still not working

**Reason:** DNS propagation takes time

**Fix:**
1. Wait 24-48 hours for global DNS propagation
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito mode
4. Test on different device

### Problem: "Certificate error" or "NET::ERR_CERT_COMMON_NAME_INVALID"

**Reason:** Certificate is still provisioning

**Fix:**
1. Wait 30 minutes - 24 hours
2. Refresh the page
3. Check GitHub Pages settings again

### Problem: Custom domain keeps disappearing

**Reason:** CNAME file getting deleted

**Fix:**
- Make sure CNAME file is in your repo root
- Contains only: `cady.social`
- No extra lines or spaces
- Push it to GitHub again if needed

---

## 📋 Quick Checklist

Before HTTPS will work, you need:

- ✅ DNS A records pointing to GitHub IPs
- ✅ DNS CNAME record for www subdomain
- ✅ CNAME file in repo root
- ✅ Custom domain configured in GitHub Settings
- ✅ Wait 24-48 hours for DNS propagation
- ✅ Enable "Enforce HTTPS" in GitHub Settings
- ✅ Wait for SSL certificate (5min - 24hrs)

---

## 🎯 Expected Timeline

**Day 1:**
- Configure DNS records at your domain registrar
- Add CNAME file to repo
- Set custom domain in GitHub Pages

**Day 1-2:**
- Wait for DNS propagation (24-48 hours)
- Check if "Enforce HTTPS" becomes available

**Day 2-3:**
- Enable "Enforce HTTPS"
- Wait for SSL certificate (usually quick)
- Test https://cady.social

**Total time:** 1-3 days (mostly waiting for DNS)

---

## 🔐 How to Configure DNS

### Where is Your Domain Registered?

Your domain `cady.social` is registered somewhere (GoDaddy, Namecheap, Cloudflare, Google Domains, etc.)

### Steps for Any Registrar:

1. **Log in** to your domain registrar
2. **Find DNS settings** (might be called: DNS Management, DNS Records, Name Servers, Zone File)
3. **Delete old A records** (if any)
4. **Add 4 new A records** with GitHub IPs (see Step 3 above)
5. **Add CNAME record** for www subdomain
6. **Save changes**
7. **Wait 24-48 hours**

### Common Registrars:

**GoDaddy:**
- My Products → Domains → DNS

**Namecheap:**
- Domain List → Manage → Advanced DNS

**Cloudflare:**
- Select domain → DNS → Records

**Google Domains:**
- My domains → DNS

---

## ⚡ Quick Fix If You Control DNS

If you have access to your DNS right now:

1. **Add these A records:**
   ```
   cady.social → 185.199.108.153
   cady.social → 185.199.109.153
   cady.social → 185.199.110.153
   cady.social → 185.199.111.153
   ```

2. **Add this CNAME:**
   ```
   www.cady.social → vibraneum.github.io
   ```

3. **Wait 24 hours**

4. **Go to GitHub Pages settings**

5. **Enable "Enforce HTTPS"**

6. **Done!** ✅

---

## 🎉 When It's Working

You'll know HTTPS is working when:
- ✅ https://cady.social loads (green padlock)
- ✅ http://cady.social redirects to https://
- ✅ Browser shows "Secure" or padlock icon
- ✅ No certificate warnings

---

## 📞 Still Having Issues?

1. **Check GitHub Pages status:**
   - https://www.githubstatus.com/

2. **Verify DNS propagation:**
   - https://www.whatsmydns.net/

3. **Check CNAME file:**
   - https://github.com/Vibraneum/Cady.Social/blob/main/CNAME
   - Should contain only: `cady.social`

4. **GitHub Pages documentation:**
   - https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## 💡 Pro Tip

After HTTPS is working:
- Add HSTS header (auto by GitHub Pages)
- All traffic automatically uses HTTPS
- Google ranks HTTPS sites higher
- Users trust the site more

---

**TL;DR:**
1. Configure DNS records at your domain registrar
2. Wait 24-48 hours
3. Enable "Enforce HTTPS" in GitHub Pages settings
4. Wait for SSL certificate
5. Done!

The waiting is the hardest part, but it's automatic after that! 🚀
