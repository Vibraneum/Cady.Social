# Removing .html Extensions from URLs

**Current URLs:**
- https://cady.social/about.html
- https://cady.social/cady.html
- https://cady.social/contact.html

**Desired URLs:**
- https://cady.social/about
- https://cady.social/cady
- https://cady.social/contact

---

## ✅ Recommended Solution: Folder Structure

### How It Works
Instead of `about.html`, create `/about/index.html`

GitHub Pages will serve:
- `https://cady.social/about/` as `https://cady.social/about`

### Implementation Steps

1. **Create folder structure:**
```bash
mkdir about cady contact
mv about.html about/index.html
mv cady.html cady/index.html
mv contact.html contact/index.html
```

2. **Update all internal links:**

Change FROM:
```html
<a href="about.html">About</a>
<a href="cady.html">Cady</a>
<a href="contact.html">Contact</a>
```

Change TO:
```html
<a href="/about">About</a>
<a href="/cady">Cady</a>
<a href="/contact">Contact</a>
```

3. **Update all href references:**
   - Navigation links (all pages)
   - CTA links ("Join Waitlist", "Explore Cady")
   - Footer links
   - Canonical URLs in meta tags
   - Open Graph URLs
   - JSON-LD schemas

### Files to Update

**Navigation (all 4 files):**
```html
<!-- OLD -->
<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="cady.html">Cady</a>
<a href="contact.html">Contact</a>

<!-- NEW -->
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/cady">Cady</a>
<a href="/contact">Contact</a>
```

**Meta Tags (about/index.html, cady/index.html, contact/index.html):**
```html
<!-- OLD -->
<link rel="canonical" href="https://cady.social/about.html">

<!-- NEW -->
<link rel="canonical" href="https://cady.social/about">
```

**Homepage CTAs (index.html):**
```html
<!-- OLD -->
<a href="about.html" class="btn btn-outline">Learn More About Personhood</a>
<a href="cady.html" class="btn btn-outline">Explore Cady</a>

<!-- NEW -->
<a href="/about" class="btn btn-outline">Learn More About Personhood</a>
<a href="/cady" class="btn btn-outline">Explore Cady</a>
```

---

## 🚀 Quick Migration Script

Create this script as `migrate-to-folders.sh`:

```bash
#!/bin/bash

# Create folders
mkdir -p about cady contact

# Move files
mv about.html about/index.html
mv cady.html cady/index.html
mv contact.html contact/index.html

# Update navigation in all files
find . -name "index.html" -type f -exec sed -i 's/href="index.html"/href="\/"​/g' {} +
find . -name "index.html" -type f -exec sed -i 's/href="about.html"/href="\/about"/g' {} +
find . -name "index.html" -type f -exec sed -i 's/href="cady.html"/href="\/cady"/g' {} +
find . -name "index.html" -type f -exec sed -i 's/href="contact.html"/href="\/contact"/g' {} +

# Update canonical URLs
find ./about -name "index.html" -exec sed -i 's/about.html/about/g' {} +
find ./cady -name "index.html" -exec sed -i 's/cady.html/cady/g' {} +
find ./contact -name "index.html" -exec sed -i 's/contact.html/contact/g' {} +

echo "✅ Migration complete!"
echo "Test locally before deploying"
```

---

## ⚠️ Alternative: Keep Current Structure

If you prefer NOT to reorganize:

### Option 1: URL Rewriting (Requires Custom Server)
❌ **Not possible** on GitHub Pages (no .htaccess, no server config)

### Option 2: Accept .html Extensions
✅ **Keep current structure** - `.html` extensions are acceptable
- Google indexes both versions equally
- SEO impact: minimal
- User experience: slightly less clean URLs

### Option 3: Use Jekyll
GitHub Pages supports Jekyll which can remove .html automatically:

1. Create `_config.yml`:
```yaml
permalink: pretty
```

2. Rename files to use Jekyll front matter:
```markdown
---
layout: default
permalink: /about/
---
<!DOCTYPE html>
...
```

❌ **Downside:** Adds complexity, requires learning Jekyll

---

## 📊 Pros & Cons

### Folder Structure (Recommended)
✅ Clean URLs without .html
✅ Works on GitHub Pages
✅ No extra dependencies
❌ Requires reorganizing files
❌ Requires updating all links (one-time)

### Keep .html Extensions
✅ No changes needed
✅ Everything works as-is
❌ URLs have `.html` extension
⚠️ Slightly less professional appearance

---

## 🎯 My Recommendation

**Use folder structure** if:
- You want completely clean URLs
- You're willing to spend 30 mins reorganizing
- Professional URL appearance matters

**Keep .html extensions** if:
- You want to launch NOW
- Clean URLs aren't a priority
- You prefer simpler structure

---

## 🔧 Implementation Checklist

If you choose folder structure:

### Step 1: Reorganize Files
- [ ] Create `/about`, `/cady`, `/contact` folders
- [ ] Move HTML files to `index.html` in each folder
- [ ] Test file structure locally

### Step 2: Update All Links
- [ ] Navigation links (4 files)
- [ ] CTA links (index.html)
- [ ] Footer links (4 files)
- [ ] Canonical URLs (3 files)
- [ ] Open Graph URLs (3 files)
- [ ] Twitter Card URLs (3 files)
- [ ] JSON-LD schemas (4 files)

### Step 3: Update Assets
- [ ] Ensure CSS/JS paths still work (`../styles.css`)
- [ ] Ensure image paths still work (`../assets/`)
- [ ] Update CNAME file (no changes needed)

### Step 4: Test
- [ ] Test all links work locally
- [ ] Test navigation across pages
- [ ] Test form submission
- [ ] Test video embeds

### Step 5: Deploy
- [ ] Commit changes
- [ ] Push to GitHub
- [ ] Verify URLs work: `cady.social/about`
- [ ] Check all 4 pages load correctly

---

## 💡 Bottom Line

**For launch:**
Current structure with `.html` is fine. Launch now, optimize URLs later if needed.

**For perfection:**
Folder structure gives cleanest URLs but requires 30-60 mins of link updates.

Your choice!

---

*Created: November 5, 2025*
