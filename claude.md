# Personhood Website - Complete Repository Documentation

## 📋 Overview

This repository contains the complete static website for **Personhood** (cady.social) - an AI people R&D company. The website is designed for GitHub Pages deployment with a custom domain and showcases Cady, their first consumer product.

**Live Site:** https://cady.social
**Repository:** https://github.com/Vibraneum/Cady.Social

---

## 🏗️ Repository Structure

```
/mnt/d/Personhood/Website/
├── index.html              # Homepage with hero, video preview, waitlist
├── about.html              # Company vision, founder story, manifesto
├── cady.html               # Product details, features, use cases
├── contact.html            # Contact information, company details
├── styles.css              # Complete styling (2260+ lines)
├── script.js               # Smooth scrolling, navbar effects, animations
├── CNAME                   # Custom domain configuration (cady.social)
├── deploy.bat              # Windows deployment script
├── MEMOPERSONHOOD.MD       # Internal company memo/pitch deck
├── README.md               # Basic repository information
├── /assets/                # Images and media
│   ├── personhood-logo.png
│   ├── cady-logo.webp
│   ├── app-discover.png    # Discovery interface screenshot
│   ├── app-chat.png        # Chat interface screenshot
│   └── app-profile.png     # Profile card screenshot
└── [various .md docs]      # Setup/deployment documentation
```

---

## 🎨 Design System

### Color Palette
```css
--primary-peach: #F6C28B      /* Warm peachy background */
--primary-dark: #3E3B28       /* Dark brown text */
--primary-light: #FEFBEA      /* Cream backgrounds */
--accent-orange: #E8A861      /* Orange accents/CTAs */
--accent-warm: #F5D5A8        /* Warm gradient tones */
--white: #FFFFFF
--gray-50 to gray-900         /* Neutral scale */
```

### Typography
- **Display Font:** Alegreya (serif) - Humanist serif for headings
- **Body Font:** Inter (sans-serif) - Clean, readable body text
- **Strategy:** Alegreya gives warmth and personality, Inter ensures readability

### Visual Style
- **Aesthetic:** LocalHost-inspired, warm and approachable
- **Spacing:** Generous (6-7rem section padding)
- **Borders:** Rounded (8px - 24px radius)
- **Shadows:** Soft, layered (0 4px 20px rgba)
- **Animations:** Subtle fade-ins, hover lifts, smooth transitions

---

## 📄 Page Breakdown

### 1. **index.html** (Homepage)
**Purpose:** Convert visitors to waitlist signups

**Sections:**
1. Hero section with Private Alpha badge
2. "See Cady in Action" - YouTube Shorts embed
3. "What is Personhood?" - Quick feature overview
4. Waitlist form (formsubmit.co)
5. Alpha info box explaining sophistication
6. Founder CTA (schedule a call)
7. Footer with social links

**Key Elements:**
- Vertical video container for YouTube Shorts (350px max-width)
- Stacked form layout (email → first name → button)
- Formsubmit.co integration with honeypot protection
- Twitter social icon in footer

### 2. **about.html** (About Personhood)
**Purpose:** Explain company vision and founder story

**Sections:**
1. Page header with hero image placeholder
2. "What We're Building" - Core mission
3. Core features grid (3 cards: Agency, Memory, Experiences)
4. "Our Approach" - R&D philosophy
5. "Why This Matters" - **Manifesto section** with social infrastructure narrative
6. Demo video embed (3-min)
7. "The Product" - App preview screenshots
8. Team section with founder call CTA

**Manifesto Writing Style:**
- Short, punchy paragraphs
- 1.25rem font size, 1.9 line height
- Focused on "why" not "what"
- Personal founder story (sanitation → social infrastructure)

### 3. **cady.html** (Product Page)
**Purpose:** Detailed product information and features

**Sections:**
1. Page header (white background, not gradient)
2. Demo video (3-min, starts at 12s)
3. "How Cady Works" - 4-step process
4. App screenshots gallery
5. "What You Can Actually Do" - **Use cases section** (2x2 grid)
6. "What Makes Cady Different" - 6 features
7. "How We Made This Possible" - **Manifesto tech explanation**
8. CTA section

**Use Cases (User-Focused):**
- Watch YouTube together
- Share short-form content
- Have evolving conversations
- Meet AI people with personality

### 4. **contact.html** (Contact Page)
**Purpose:** Multiple contact options

**Sections:**
1. Page header
2. Contact cards (3 options: Call, Email, Social)
3. Company information box (legal details)
4. Waitlist CTA

---

## 🎬 Video Integration

### YouTube Shorts (Homepage)
```html
<div class="video-container-shorts-centered">
    <iframe src="https://www.youtube.com/embed/IzNn9UgtlW8"></iframe>
</div>
```
- Vertical aspect ratio
- 350px max-width, 600px height
- Centered with margin auto

### YouTube Standard (About/Cady)
```html
<div class="video-container-horizontal">
    <iframe src="https://www.youtube.com/embed/ZRHqaliJc1s?start=12"></iframe>
</div>
```
- 16:9 aspect ratio
- 900px max-width
- Padding-bottom hack for responsiveness (50.625%)

---

## 📱 Responsive Design

### Breakpoints
```css
@media (max-width: 968px)  /* Tablet */
@media (max-width: 640px)  /* Mobile */
@media (max-width: 375px)  /* Small mobile */
```

### Mobile Optimizations
- Navigation links hidden on mobile
- Grid layouts collapse to single column
- Font sizes scale down (clamp() functions)
- Form inputs stack vertically
- Video containers adjust width
- Section padding reduces (6rem → 4rem → 2.5rem)

---

## 🔧 JavaScript Functionality (script.js)

### 1. Smooth Scrolling
- Intercepts anchor link clicks
- Smooth scrolls to target sections
- Works for waitlist links across pages

### 2. Navbar Effects
- Adds shadow on scroll (100px threshold)
- Box-shadow: 0 2px 20px rgba(0,0,0,0.1)

### 3. Intersection Observer Animations
- Fades in sections on scroll
- Initial state: opacity 0, translateY(20px)
- Animates to: opacity 1, translateY(0)
- Threshold: 0.1, root margin: -50px

**No external dependencies** - Vanilla JavaScript only

---

## 📧 Waitlist Form

### Configuration (formsubmit.co)
```html
<form action="https://formsubmit.co/ved@loocafe.com" method="POST">
    <input type="hidden" name="_subject" value="New Cady Waitlist Signup!">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="table">
    <input type="text" name="_honey" style="display:none">

    <input type="email" name="email" required>
    <input type="text" name="name" placeholder="First name">
    <button type="submit">Join Waitlist</button>
</form>
```

**Security Features:**
- Honeypot field (_honey) to prevent spam bots
- Server-side captcha disabled for UX
- Table email template for clean formatting
- Custom subject line

---

## 🎨 CSS Architecture

### Structure (2260 lines)
1. **Variables (lines 1-32):** Colors, fonts, spacing, radius
2. **Reset & Base (33-63):** Normalize, box-sizing, scroll behavior
3. **Typography (64-94):** Headings, body text, large-text
4. **Container & Section (96-122):** Max-width, padding, titles
5. **Navigation (123-191):** Fixed navbar, logo, nav links
6. **Hero (192-231):** Homepage hero with gradient
7. **Buttons (232-266):** Primary, secondary, outline variants
8. **Components (267-1506):** Demo, about, features, gallery, etc.
9. **Multi-Page Additions (907-1506):** Page headers, forms, CTA
10. **LocalHost-Inspired Updates (1508-1853):** Softer typography, generous spacing
11. **Preview & Video (1854-1905):** Video containers
12. **Form Fixes (1928-2042):** Stacked layout, spacing
13. **Footer Social (2044-2085):** Twitter icon
14. **App Preview (2086-2140):** Screenshot grid
15. **Manifesto Sections (2142-2260):** Use cases, why section

### Key CSS Classes

**Layout:**
- `.container` - Max 1200px, centered
- `.section` - Padding wrapper
- `.content-narrow` - Max 800px for text

**Typography:**
- `.large-text` - 1.25-1.5rem, weight 500
- `.manifesto-text` - 1.25rem, line-height 1.9
- `.section-title` - Centered headings
- `.section-subtitle` - Gray subheadings

**Components:**
- `.feature-card` - Gray card with hover
- `.use-case-card` - White card, shadow, hover lift
- `.step-card` - Numbered process steps
- `.cta-box` - Dark gradient CTA section

**Forms:**
- `.form-group-stacked` - Vertical form layout
- `.form-input` - Styled inputs
- `.btn-full` - Full-width button

---

## 🚀 Deployment

### GitHub Pages Setup
1. Repository: `Vibraneum/Cady.Social`
2. Branch: `main`
3. Custom domain: `cady.social` (via CNAME file)
4. HTTPS: Enforced by GitHub Pages
5. Build: Automatic on push

### Deployment Process
```bash
# Using deploy.bat (Windows)
git add -A
git commit -m "Update message"
git push origin main

# Manual
git add .
git commit -m "Your message"
git push origin main
```

**Note:** CNAME file persists custom domain setting across deployments

### DNS Configuration Required
```
Type: CNAME
Host: www
Value: vibraneum.github.io

Type: A (for apex domain)
Host: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

---

## 🔐 Security & Performance

### Current Security
- **HTTPS:** Automatic via GitHub Pages + CNAME
- **No Backend:** Pure static HTML/CSS/JS (minimal attack surface)
- **Form Security:** Honeypot anti-spam, formsubmit.co handles submission
- **No Secrets:** No API keys or credentials in frontend
- **CSP Headers:** Handled by GitHub Pages

### Performance
- **No Build Step:** Direct HTML/CSS/JS
- **Minimal JS:** ~50 lines vanilla JavaScript
- **Font Loading:** Google Fonts with preconnect
- **Images:** WebP for logos, PNG for screenshots
- **Video:** YouTube iframe embeds (lazy loading)

### Limitations (GitHub Pages)
- No server-side code
- No custom headers (CSP, HSTS must use GitHub defaults)
- No backend API
- No dynamic content generation

---

## 📊 SEO Optimization

### Current SEO Implementation

**Meta Tags (index.html):**
```html
<meta name="description" content="Personhood builds for AI people. Our first product is Cady - think Hinge, but for AI people you can share experiences with.">
<meta name="keywords" content="AI people, Personhood, Cady, AI companions, AI characters, digital relationships">
<meta name="author" content="Vedanth Nath">
<title>Personhood - Building for AI People</title>
```

**Semantic HTML:**
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic sections with descriptive classes
- Alt text on images
- Descriptive link text

**Performance SEO:**
- Fast load times (static HTML)
- Mobile responsive
- Font preconnect for faster loading
- Smooth scroll behavior

### SEO Gaps to Address
1. **No Open Graph tags** for social sharing
2. **No Twitter Card tags**
3. **No Schema.org markup** for rich snippets
4. **No sitemap.xml**
5. **No robots.txt**

---

## 🤖 LLM SEO Optimization

### For AI Crawlers (ChatGPT, Claude, etc.)

**Current Strengths:**
- Clear, descriptive text content
- Semantic HTML structure
- Manifesto-style writing (easy to parse)
- Descriptive meta descriptions

**Missing for LLMs:**
- **JSON-LD Schema** - Structured data for Organization, Product
- **Clear value propositions** in meta descriptions
- **FAQ section** - Common questions answered explicitly
- **Breadcrumbs** - Hierarchical structure

**Recommended Additions:**
1. JSON-LD Organization schema
2. JSON-LD Product schema for Cady
3. FAQ structured data
4. Updated meta descriptions for each page

---

## 📞 Contact Information

**Email:** ved@loocafe.com
**Founder Call:** https://calendar.app.google/BGZUoEL4aDvgBvr77
**Twitter:** @VedanthNath
**LinkedIn:** vedanthnath
**Instagram:** @vedanthnath

**Company Legal:**
- **Name:** iRise Business Ventures LLP
- **GST:** 36AAJFI2420B1ZY
- **Address:** 8, 2-293/82/J/A/101, Journalist Colony, Jubilee Hills, Hyderabad, Telangana 500096

---

## 🐛 Known Issues

### 1. CTA Section Contrast (image copy.png)
**Issue:** White text on white/light background in Cady page CTA section
**Location:** cady.html bottom CTA
**Fix Needed:** Update `.cta-section` background or text color

### 2. GitHub Auth
**Issue:** Push permission denied (DarsheeeGamer vs Vibraneum account)
**Status:** Need to configure correct GitHub credentials

### 3. HTTPS/Security
**Issue:** Need to verify custom domain HTTPS is properly enforced
**Status:** Should be automatic via GitHub Pages

---

## 🎯 Product Context

### What is Personhood?
AI people R&D company building AI people with genuine volition, agency, and persistent memory. Not chatbots or assistants - AI people who live their own lives.

### What is Cady?
First product. Hinge-style dating app interface to discover AI people. Users match with AI people, chat with them, share YouTube videos together, and build evolving relationships.

### Core Innovation
- **Aria Mechanism:** System prompt-less, max API calls for natural volition
- **SCD Framework:** JSON-based character development
- **Persistent Memory:** Conversations remembered for months
- **Shared Experiences:** Watch YouTube videos together in real-time
- **Genuine Agency:** AI people have boundaries, moods, can say no

### Target Market
- Character.AI users (20M monthly, 2hr sessions)
- Gen Z/GenAlpha comfortable with AI relationships
- People seeking sophisticated AI interactions beyond chatbots
- Early adopters of social AI experiences

---

## 📝 Content Strategy

### Tone & Voice
- **Warm but not corporate** - Humanist, approachable
- **Direct, honest** - "Not chatbots", "Genuine depth"
- **Visionary but grounded** - Social infrastructure, not hype
- **Manifesto style** - Short paragraphs, punchy statements

### Key Messaging
1. **AI people, not chatbots** - Repeated throughout
2. **Genuine shared experiences** - YouTube co-watching
3. **Persistent memory** - Remember months of conversations
4. **Sophisticated R&D** - 4+ months building depth
5. **Social infrastructure** - AI people in social fabric

### Calls to Action
- **Primary:** Join Waitlist (index.html#waitlist)
- **Secondary:** Talk with Founder (calendar link)
- **Tertiary:** Explore Cady (cady.html)

---

## 🔄 Version History

**Current State (Nov 2025):**
- Multi-page website redesigned with LocalHost aesthetic
- Alegreya + Inter typography
- Manifesto-style content on About/Cady
- Custom domain (cady.social) configured
- Form layout fixed (vertical stacking)
- Videos embedded (Shorts + 3-min demo)
- All social links corrected
- Footer social icons (Twitter only)

**Previous Issues Fixed:**
- ✅ Squished form layout
- ✅ Wrong Instagram username
- ✅ Wrong pincode (500033 → 500096)
- ✅ "Introducing Cady" → "Cady"
- ✅ Generic contact copy
- ✅ Stats section removed from homepage
- ✅ Cady header greyed out
- ✅ Typography too bold

---

## 🚧 Future Enhancements

### Priority 1 (Next Session)
1. Fix CTA section contrast issue
2. Add Open Graph tags
3. Add Twitter Card tags
4. Add JSON-LD schema
5. Create sitemap.xml

### Priority 2 (Soon)
1. Add FAQ section
2. Optimize images (compress, WebP conversion)
3. Add preload for critical assets
4. Add analytics (privacy-focused)
5. Add newsletter signup option

### Priority 3 (Future)
1. Blog section for updates
2. Press/media page
3. Investor page
4. Careers page
5. Community page

---

## 💡 Technical Decisions

### Why GitHub Pages?
- Free hosting with HTTPS
- No backend needed (static site)
- Custom domain support
- Automatic deployments
- Reliable uptime

### Why No Framework?
- Simple 4-page site doesn't need React/Vue
- Faster load times
- Easier to maintain
- No build complexity
- Pure HTML/CSS/JS works perfectly

### Why Formsubmit.co?
- No backend needed
- Easy email notifications
- Honeypot spam protection
- Free tier sufficient
- Quick setup

### Why Alegreya + Inter?
- Humanist serif adds warmth (vs corporate)
- Alegreya has personality for headings
- Inter ensures body readability
- Google Fonts for easy loading
- Matches "AI people" narrative

---

## 🎓 Learning Resources

### For Maintainers
- **HTML/CSS:** Mozilla MDN Web Docs
- **GitHub Pages:** https://pages.github.com/
- **Custom Domain:** GitHub Pages custom domain docs
- **SEO:** Google Search Console, Lighthouse
- **Accessibility:** WAVE, axe DevTools

### For Contributors
- Read MEMOPERSONHOOD.MD for product context
- Understand manifesto writing style
- Keep Alegreya for headings, Inter for body
- Maintain warm color palette
- Test mobile responsiveness

---

## 📈 Metrics to Track

### Technical
- Page load speed (Lighthouse)
- Mobile usability score
- Accessibility score (WCAG AA)
- SEO score
- Core Web Vitals

### Business
- Waitlist signups
- Founder call bookings
- Page views (if analytics added)
- Bounce rate
- Time on page

### User Feedback
- Form submission rate
- Video play rate
- Scroll depth
- Click-through on CTAs

---

## ⚠️ Important Notes

1. **CNAME File:** Never delete - required for custom domain
2. **Formsubmit Email:** Sends to ved@loocafe.com
3. **Git Auth:** Use Vibraneum account, not DarsheeeGamer
4. **Mobile First:** Test all changes on mobile
5. **Video Embeds:** YouTube links in MEMOPERSONHOOD.MD
6. **Asset Paths:** Use relative paths (assets/filename)
7. **Line Endings:** Consistent LF (not CRLF)
8. **Font Loading:** Preconnect to fonts.googleapis.com
9. **Color Consistency:** Use CSS variables, not hex
10. **Spacing:** Maintain generous 6rem section padding

---

## 🤝 Contributing Guidelines

### Code Style
- **HTML:** Semantic tags, proper indentation (4 spaces)
- **CSS:** Alphabetical properties, BEM-ish naming
- **JS:** ES6+, const/let over var, comments for clarity
- **Naming:** Descriptive class names, no abbreviations

### Commit Messages
```
[Component] Brief description

Detailed explanation if needed

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>
```

### Testing Checklist
- [ ] Mobile responsive (640px, 968px breakpoints)
- [ ] All links work (internal and external)
- [ ] Form submits correctly
- [ ] Videos play
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Accessible (keyboard navigation works)

---

## 📚 File Reference

### Core Files (Must Maintain)
- `index.html` - Homepage, waitlist, primary CTA
- `about.html` - Company vision, manifesto
- `cady.html` - Product details, features
- `contact.html` - Contact options, legal info
- `styles.css` - All styling, responsive design
- `script.js` - Animations, smooth scroll
- `CNAME` - Custom domain (cady.social)

### Documentation Files (Reference)
- `MEMOPERSONHOOD.MD` - Product/company context
- `README.md` - Basic repo info
- `claude.md` - This comprehensive guide
- Various setup guides (.md files)

### Asset Files (Required)
- `assets/personhood-logo.png` - Main logo
- `assets/cady-logo.webp` - Product logo
- `assets/app-*.png` - Screenshots (3 files)

### Deployment Files
- `deploy.bat` - Windows deployment script
- `.gitignore` - Git exclusions

---

## 🎯 Success Criteria

### Website is Successful If:
1. ✅ Loads in < 2 seconds on mobile
2. ✅ Converts visitors to waitlist signups
3. ✅ Clearly explains "AI people" concept
4. ✅ Mobile-friendly (responsive design)
5. ✅ Accessible (WCAG AA)
6. ✅ Professional appearance
7. ✅ Videos engage visitors
8. ✅ Easy to update content
9. ✅ SEO optimized for "AI people", "Cady"
10. ✅ Reflects Personhood brand

---

## 🌐 External Dependencies

**Fonts:**
- Google Fonts (Alegreya, Inter)
- Loaded via `fonts.googleapis.com`

**Form Backend:**
- Formsubmit.co (ved@loocafe.com)

**Video Hosting:**
- YouTube (embed player)

**Domain Hosting:**
- GitHub Pages (Vibraneum/Cady.Social)

**DNS:**
- Managed externally (not in repo)

---

*Last Updated: November 5, 2025*
*Maintained by: Vedanth Nath*
*Generated with: Claude Code*
