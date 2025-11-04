# Logo Usage Guide

## Logos Available

### Personhood Logo
**File:** `assets/personhood-logo.png`
**Use:** Company branding, main navigation

### Cady Logo
**File:** `assets/cady-logo.webp` (or `CADY_logo_V1.webp` in root)
**Use:** Cady-specific pages, app branding

---

## Where Each Logo Appears

### Personhood Logo
- ✅ Navigation bar (all pages)
- ✅ Footer branding
- ✅ Company-focused content

### Cady Logo
- ✅ Cady page header
- ✅ App-specific sections
- ✅ Can be used on homepage hero

---

## Action Needed

Move the Cady logo to assets folder:

```cmd
move CADY_logo_V1.webp assets\cady-logo.webp
```

Or manually:
1. Cut `CADY_logo_V1.webp` from root
2. Paste into `assets` folder
3. Rename to `cady-logo.webp`

---

## Updated Pages (Optional)

You can update `cady.html` to show the Cady logo:

Add after line 20 (inside the logo div):
```html
<img src="assets/cady-logo.webp" alt="Cady Logo" class="cady-logo-img">
```

Or create a special Cady-branded header just for the Cady page!

---

**Both logos are now properly organized in the assets folder.**
