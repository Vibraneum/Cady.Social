# GitHub Pages Setup Guide

## Quick Setup Instructions

### 1. Initialize Git Repository

Open Command Prompt or PowerShell in the `D:\Personhood\Website` directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Personhood website"
```

### 2. GitHub Repository

The repository already exists at: https://github.com/Vibraneum/Cady.Social

Make sure it's set to **Public** (required for free GitHub Pages).

### 3. Push to GitHub

Run these commands:

```bash
git branch -M main
git remote add origin https://github.com/Vibraneum/Cady.Social.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: `main` and folder: `/ (root)`
6. Click "Save"

### 5. Your Site Will Be Live!

After a few minutes, your site will be available at:
```
https://vibraneum.github.io/Cady.Social/
```

Or if you've configured a custom domain already:
```
https://cady.social/
```

---

## Custom Domain Setup (Optional)

If you want to use `personhood.com` or another custom domain:

1. In your domain registrar (GoDaddy, Namecheap, etc.), add these DNS records:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: A, Name: @, Value: 185.199.109.153
   - Type: A, Name: @, Value: 185.199.110.153
   - Type: A, Name: @, Value: 185.199.111.153
   - Type: CNAME, Name: www, Value: YOUR-USERNAME.github.io

2. In GitHub repository Settings > Pages:
   - Enter your custom domain
   - Check "Enforce HTTPS" (after DNS propagates, ~24hrs)

---

## Adding Video Links

Edit `index.html` and replace the placeholder links (marked with `#`) with your actual video URLs:

```html
<!-- Around line 47 in index.html -->
<div class="hero-links">
    <a href="YOUR-DEMO-VIDEO-URL" class="hero-link" target="_blank">Watch 3-min Demo</a>
    <span>•</span>
    <a href="YOUR-EXPLAINER-URL" class="hero-link" target="_blank">Cady Explainer</a>
    <span>•</span>
    <a href="YOUR-INTRO-VIDEO-URL" class="hero-link" target="_blank">Intro Video</a>
</div>
```

After editing, commit and push:
```bash
git add index.html
git commit -m "Add video links"
git push
```

---

## Need Help?

Contact ved@loocafe.com
