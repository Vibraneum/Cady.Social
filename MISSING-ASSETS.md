# Missing Assets & Optimization Needs

**Status:** Code 100% Complete | Assets Need Creation
**Date:** November 5, 2025

---

## ⚠️ Critical Missing Assets

### 1. **Hero Images** (Referenced but Don't Exist)

These images are referenced in HTML but files don't exist:

#### index.html:93
```html
<img src="assets/hero-home.webp" alt="People connecting together" class="hero-image" onerror="this.style.display='none'">
```
- **File:** `/assets/hero-home.webp`
- **Status:** ❌ MISSING
- **Impact:** Homepage hero section has no image (hidden via onerror)
- **Action:** Create or remove reference

#### about.html
```html
<img src="assets/hero-about.webp" alt="Community and connection" class="header-hero-image" onerror="this.style.display='none'">
```
- **File:** `/assets/hero-about.webp`
- **Status:** ❌ MISSING
- **Impact:** About page header has no image (hidden via onerror)
- **Action:** Create or remove reference

**Recommendation:** Either create these hero images OR remove the `<img>` tags

---

### 2. **Favicon Files** (Critical for Branding)

ALL favicon files referenced in HTML are missing:

- ❌ `/favicon.ico` (root directory)
- ❌ `/assets/favicon-16x16.png`
- ❌ `/assets/favicon-32x32.png`
- ❌ `/assets/apple-touch-icon.png` (180x180)
- ❌ `/assets/android-chrome-192x192.png`
- ❌ `/assets/android-chrome-512x512.png`

**Impact:** No favicon in browser tabs, bookmarks, or mobile home screen

**Action:** Use RealFaviconGenerator.net to create full package

---

### 3. **Open Graph Social Media Images**

ALL OG images referenced in meta tags are missing:

- ❌ `/assets/og-image.png` (1200x630) - Homepage
- ❌ `/assets/og-image-about.png` (1200x630) - About page
- ❌ `/assets/og-image-cady.png` (1200x630) - Cady page

**Impact:** No rich preview when shared on Facebook/LinkedIn

---

## 🔧 Image Optimization Needs

### Existing Images are TOO LARGE:

| File | Current Size | Recommended |
|------|--------------|-------------|
| app-discover.png | **2.6 MB** | < 500 KB |
| app-profile.png | 727 KB | < 300 KB |
| app-chat.png | 392 KB | < 250 KB |

**Action:** Compress using TinyPNG.com or convert to WebP

---

## ✅ All Code Complete

- [x] Meta tags (OG, Twitter, canonical)
- [x] JSON-LD schemas (8 types)
- [x] sitemap.xml & robots.txt
- [x] CSP security headers
- [x] Plausible analytics
- [x] Image lazy loading
- [x] Width/height on all images
- [x] FAQ section with schema
- [x] Performance optimizations

---

## 🎯 Next Steps

1. Create favicon package (RealFaviconGenerator.net)
2. Optimize existing images (TinyPNG.com)
3. Create OG images (Canva 1200x630)
4. Decide on hero images (create or remove)

**Time: ~1-2 hours design work**

See IMPLEMENTATION-NOTES.md for detailed instructions.
