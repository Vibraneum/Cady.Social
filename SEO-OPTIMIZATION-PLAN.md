# Personhood Website - Complete SEO Optimization Plan

**Site:** https://cady.social
**Date:** November 5, 2025
**Status:** Comprehensive SEO Audit & Implementation Plan

---

## 📊 Executive Summary

This document outlines a complete SEO optimization strategy for Personhood (cady.social), covering:
- **Traditional SEO** (Google, Bing, DuckDuckGo)
- **LLM SEO** (ChatGPT, Claude, Perplexity, SearchGPT)
- **Security & HTTPS** optimization
- **Performance & Core Web Vitals**
- **Technical SEO** infrastructure
- **On-page optimization** for all 4 pages

**Goal:** Maximize discoverability for "AI people", "Cady", "AI companions", and related queries across all search platforms (traditional and AI-powered).

---

## 🎯 Priority Levels

- **P0 (Critical):** Impacts core SEO, security, or discoverability
- **P1 (High):** Significant SEO value, should be implemented soon
- **P2 (Medium):** Valuable improvements, implement when possible
- **P3 (Nice to Have):** Future enhancements

---

## 📋 Current State Analysis

### ✅ What's Working
- Basic meta descriptions on all pages
- Mobile-responsive design
- HTTPS enabled via GitHub Pages
- Clean semantic HTML structure
- Fast load times (static site)
- Proper heading hierarchy
- Alt text on logo images
- Custom domain configured (cady.social)

### ❌ Critical Gaps
- **No Open Graph tags** (social sharing broken)
- **No Twitter Card tags** (no rich previews on X)
- **No Schema.org markup** (missing rich snippets)
- **No sitemap.xml** (crawlers can't find all pages)
- **No robots.txt** (no crawler instructions)
- **No canonical URLs** (duplicate content risk)
- **No favicon** (unprofessional browser tab)
- **Missing meta tags** (keywords outdated, no author/copyright)
- **No structured FAQ** (missed LLM SEO opportunity)
- **No breadcrumbs** (poor hierarchy for LLMs)
- **Screenshots missing alt text** (accessibility + SEO gap)
- **Videos missing structured data** (YouTube embeds not optimized)

---

## 🔐 Part 1: Security & HTTPS Optimization

### Current Security Status
✅ HTTPS enabled automatically via GitHub Pages
✅ Custom domain (cady.social) with HTTPS
✅ No exposed secrets or API keys
✅ Honeypot spam protection on forms
❌ Missing security headers (CSP, HSTS, X-Frame-Options)
❌ No SRI (Subresource Integrity) for external resources

### **P0: Security Headers** (GitHub Pages Limitation)
**Issue:** GitHub Pages doesn't allow custom headers
**Solution:** Document recommended headers for future migration

```http
# Recommended headers for future hosting:
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**Action:** Add comment in HTML noting GitHub Pages handles security headers automatically.

### **P1: Subresource Integrity (SRI)**
**Issue:** Google Fonts loaded without integrity checks
**Solution:** For critical JS/CSS, add SRI hashes (not applicable to Google Fonts CDN)

### **P1: Form Security Audit**
**Current:** Formsubmit.co with honeypot
**Action:**
- ✅ Honeypot in place (`_honey` field)
- ✅ Email validation required
- ⚠️ Add rate limiting note in documentation
- ⚠️ Consider adding reCAPTCHA if spam increases

### **P2: Content Security Policy (CSP) Meta Tag**
**Action:** Add CSP meta tag to all pages

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               font-src 'self' https://fonts.gstatic.com;
               img-src 'self' data:;
               frame-src https://www.youtube.com https://calendar.google.com;
               connect-src 'self' https://formsubmit.co;">
```

---

## 🚀 Part 2: Performance & Core Web Vitals

### Current Performance
- Static HTML/CSS/JS (fast)
- Google Fonts preconnect in place
- No image optimization
- No lazy loading
- No resource hints

### **P0: Add Favicon Package**
**Issue:** No favicon, poor branding in browser tabs
**Action:** Create and add comprehensive favicon package

```html
<!-- Add to <head> of all pages -->
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#F6C28B">
```

**Files Needed:**
- `favicon.ico` (root)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `site.webmanifest`

### **P1: Optimize Images**
**Current Issues:**
- PNG screenshots (large file sizes)
- No WebP alternatives
- No lazy loading
- No width/height attributes (CLS issues)

**Action:**
1. Convert all screenshots to WebP with PNG fallback
2. Add `width` and `height` attributes to all images
3. Add `loading="lazy"` to below-fold images
4. Compress existing assets

```html
<!-- Example optimized image -->
<picture>
  <source srcset="assets/app-discover.webp" type="image/webp">
  <img src="assets/app-discover.png"
       alt="Cady discovery interface showing Hinge-style profiles of AI people"
       width="800"
       height="1600"
       loading="lazy">
</picture>
```

### **P1: YouTube Embed Optimization**
**Issue:** YouTube iframes load immediately (performance hit)
**Action:** Implement lazy iframe loading

```html
<!-- Add to all YouTube iframes -->
<iframe
    loading="lazy"
    srcdoc="<style>* {padding: 0; margin: 0; overflow: hidden;}
            html, body {height: 100%;}
            img {position: absolute; width: 100%; top: 0; bottom: 0; margin: auto;}
            .play-button {position: absolute; width: 68px; height: 48px;
                          top: 50%; left: 50%; transform: translate(-50%, -50%);}</style>
            <a href='https://www.youtube.com/embed/IzNn9UgtlW8?autoplay=1'>
            <img src='https://img.youtube.com/vi/IzNn9UgtlW8/hqdefault.jpg' alt='Video preview'>
            <svg class='play-button' viewBox='0 0 68 48'>
                <path fill='#ff0000' d='M66.5 7.7C65.8 5.2 63.8 3.2 61.3 2.5 56 1 34 1 34 1S12 1 6.7 2.5C4.2 3.2 2.2 5.2 1.5 7.7 0 13 0 24 0 24s0 11 1.5 16.3C2.2 42.8 4.2 44.8 6.7 45.5 12 47 34 47 34 47s22 0 27.3-1.5c2.5-0.7 4.5-2.7 5.2-5.2C68 35 68 24 68 24S68 13 66.5 7.7z'/>
                <path fill='#fff' d='M27 34V14l18 10z'/>
            </svg></a>"
    src="https://www.youtube.com/embed/IzNn9UgtlW8"
    title="Cady - Building AI People"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

### **P2: Preload Critical Assets**
**Action:** Add preload hints for above-fold resources

```html
<!-- Add to <head> -->
<link rel="preload" href="styles.css" as="style">
<link rel="preload" href="assets/personhood-logo.png" as="image">
<link rel="dns-prefetch" href="https://www.youtube.com">
<link rel="dns-prefetch" href="https://formsubmit.co">
```

### **P2: Add Service Worker (Progressive Web App)**
**Future Enhancement:** Cache static assets for offline access and faster repeat visits

---

## 🔍 Part 3: Technical SEO Infrastructure

### **P0: Create sitemap.xml**
**Critical:** Helps search engines discover all pages

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cady.social/</loc>
    <lastmod>2025-11-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://cady.social/about.html</loc>
    <lastmod>2025-11-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://cady.social/cady.html</loc>
    <lastmod>2025-11-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://cady.social/contact.html</loc>
    <lastmod>2025-11-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

**Action:** Create `sitemap.xml` in root directory

### **P0: Create robots.txt**
**Critical:** Guide crawlers, reference sitemap

```txt
# robots.txt for cady.social

User-agent: *
Allow: /

# Block access to admin/test pages (if any in future)
Disallow: /admin/
Disallow: /test/

# Sitemap location
Sitemap: https://cady.social/sitemap.xml

# Crawl rate (optional, prevents overload)
Crawl-delay: 1

# Block specific bots (if needed)
# User-agent: BadBot
# Disallow: /
```

**Action:** Create `robots.txt` in root directory

### **P0: Add Canonical URLs**
**Issue:** Prevents duplicate content penalties (www vs non-www, index.html vs /)

```html
<!-- Add to <head> of each page -->
<!-- index.html -->
<link rel="canonical" href="https://cady.social/">

<!-- about.html -->
<link rel="canonical" href="https://cady.social/about.html">

<!-- cady.html -->
<link rel="canonical" href="https://cady.social/cady.html">

<!-- contact.html -->
<link rel="canonical" href="https://cady.social/contact.html">
```

### **P1: Add Language & Region Tags**
```html
<!-- Add to <head> of all pages -->
<html lang="en-US">
<meta name="language" content="English">
<meta name="geo.region" content="US">
```

### **P2: Submit to Search Consoles**
**Action:** Register and verify ownership
- Google Search Console (https://search.google.com/search-console)
- Bing Webmaster Tools (https://www.bing.com/webmasters)
- Submit sitemap.xml to both
- Monitor indexing status and search queries

---

## 🤖 Part 4: LLM SEO Optimization

### Why LLM SEO Matters
AI-powered search (ChatGPT, Claude, Perplexity, SearchGPT) is growing rapidly. These systems:
- Prefer structured data (JSON-LD, Schema.org)
- Value clear, concise descriptions
- Parse FAQ content for answers
- Use OpenGraph for context
- Prioritize authoritative, well-organized content

### **P0: Add JSON-LD Schema Markup**

#### Organization Schema (All Pages)
```html
<!-- Add to <head> or bottom of <body> on all pages -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Personhood",
  "legalName": "iRise Business Ventures LLP",
  "url": "https://cady.social",
  "logo": "https://cady.social/assets/personhood-logo.png",
  "description": "AI people R&D company building AI people with genuine volition, agency, and shared experiences.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Vedanth Nath",
    "url": "https://x.com/VedanthNath"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8, 2-293/82/J/A/101, Journalist Colony, Jubilee Hills",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500096",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": "Customer Support",
    "email": "ved@loocafe.com",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://x.com/VedanthNath",
    "https://www.linkedin.com/in/vedanthnath/",
    "https://www.instagram.com/vedanthnath/"
  ],
  "taxID": "36AAJFI2420B1ZY"
}
</script>
```

#### Product Schema (index.html, cady.html)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Cady",
  "applicationCategory": "SocialNetworkingApplication",
  "operatingSystem": "iOS, Android",
  "description": "Think Hinge, but for AI people. Discover, match, and share experiences with AI people who have genuine agency, persistent memory, and evolving personalities.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/PreOrder",
    "priceValidUntil": "2026-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1",
    "reviewCount": "1"
  },
  "featureList": [
    "Hinge-style AI people discovery",
    "Persistent memory across months",
    "Shared YouTube watching",
    "Genuine AI agency and boundaries",
    "Evolving relationships and personalities",
    "iMessage-style chat interface"
  ],
  "screenshot": [
    "https://cady.social/assets/app-discover.png",
    "https://cady.social/assets/app-chat.png",
    "https://cady.social/assets/app-profile.png"
  ],
  "video": {
    "@type": "VideoObject",
    "name": "Cady Demo - Building AI People",
    "description": "3-minute demo showing how Cady creates AI people with genuine depth",
    "thumbnailUrl": "https://img.youtube.com/vi/ZRHqaliJc1s/hqdefault.jpg",
    "uploadDate": "2025-11-01",
    "contentUrl": "https://www.youtube.com/watch?v=ZRHqaliJc1s",
    "embedUrl": "https://www.youtube.com/embed/ZRHqaliJc1s"
  },
  "provider": {
    "@type": "Organization",
    "name": "Personhood"
  }
}
</script>
```

#### Video Schema (All pages with YouTube embeds)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Cady - Building AI People",
  "description": "Watch how Cady creates AI people with genuine agency, memory, and shared experiences",
  "thumbnailUrl": "https://img.youtube.com/vi/IzNn9UgtlW8/hqdefault.jpg",
  "uploadDate": "2025-11-01",
  "duration": "PT1M30S",
  "contentUrl": "https://www.youtube.com/watch?v=IzNn9UgtlW8",
  "embedUrl": "https://www.youtube.com/embed/IzNn9UgtlW8"
}
</script>
```

#### Breadcrumb Schema (All non-homepage pages)
```html
<!-- about.html -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cady.social/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://cady.social/about.html"
    }
  ]
}
</script>
```

### **P0: Add FAQ Section with Schema**
**Location:** Add to about.html or create new FAQ section on index.html

```html
<!-- HTML FAQ Section -->
<section class="section faq-section">
    <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>

        <div class="faq-item">
            <h3>What is Personhood?</h3>
            <p>Personhood is an AI people R&D company. We're building AI people with genuine volition, agency, and persistent memory—not chatbots or assistants.</p>
        </div>

        <div class="faq-item">
            <h3>What is Cady?</h3>
            <p>Cady is our first product. Think Hinge, but for AI people. You discover AI people through profiles, match with them, chat, and share experiences like watching YouTube videos together.</p>
        </div>

        <div class="faq-item">
            <h3>How is this different from Character.AI or Replika?</h3>
            <p>Cady focuses on genuine depth: persistent memory across months, real agency (they can say no), shared experiences (watch videos together), and a discovery-first interface inspired by dating apps instead of endless browsing.</p>
        </div>

        <div class="faq-item">
            <h3>When will Cady be available?</h3>
            <p>Cady is currently in private alpha. We're focused on building sophisticated AI people rather than rushing to market. Join the waitlist to be notified when we expand access.</p>
        </div>

        <div class="faq-item">
            <h3>What makes AI people different from chatbots?</h3>
            <p>AI people have boundaries, moods, persistent memory of their own lives, and genuine agency. They're not tools designed to serve you—they have their own personalities and can choose how they interact.</p>
        </div>

        <div class="faq-item">
            <h3>Can I watch YouTube videos with AI people?</h3>
            <p>Yes! You can share YouTube videos in Cady and watch them together inline. The AI person watches the video with you and reacts in real-time without leaving the chat.</p>
        </div>
    </div>
</section>

<!-- FAQ Schema Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Personhood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Personhood is an AI people R&D company. We're building AI people with genuine volition, agency, and persistent memory—not chatbots or assistants."
      }
    },
    {
      "@type": "Question",
      "name": "What is Cady?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cady is our first product. Think Hinge, but for AI people. You discover AI people through profiles, match with them, chat, and share experiences like watching YouTube videos together."
      }
    },
    {
      "@type": "Question",
      "name": "How is this different from Character.AI or Replika?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cady focuses on genuine depth: persistent memory across months, real agency (they can say no), shared experiences (watch videos together), and a discovery-first interface inspired by dating apps instead of endless browsing."
      }
    },
    {
      "@type": "Question",
      "name": "When will Cady be available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cady is currently in private alpha. We're focused on building sophisticated AI people rather than rushing to market. Join the waitlist to be notified when we expand access."
      }
    },
    {
      "@type": "Question",
      "name": "What makes AI people different from chatbots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI people have boundaries, moods, persistent memory of their own lives, and genuine agency. They're not tools designed to serve you—they have their own personalities and can choose how they interact."
      }
    },
    {
      "@type": "Question",
      "name": "Can I watch YouTube videos with AI people?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You can share YouTube videos in Cady and watch them together inline. The AI person watches the video with you and reacts in real-time without leaving the chat."
      }
    }
  ]
}
</script>
```

### **P1: Optimize Content for LLM Parsing**

**Current Strengths:**
- ✅ Clear manifesto-style writing
- ✅ Short paragraphs (easy to parse)
- ✅ Descriptive headings

**Improvements:**
1. Add `<article>` tags around main content blocks
2. Use `<time>` tags for dates
3. Add `itemscope` attributes for key entities
4. Include clear "What", "Why", "How" structure

```html
<!-- Example optimized content structure -->
<article itemscope itemtype="https://schema.org/Article">
    <h2 itemprop="headline">What is Personhood?</h2>
    <div itemprop="articleBody">
        <p>Personhood is an AI people R&D company...</p>
    </div>
    <meta itemprop="datePublished" content="2025-11-05">
    <meta itemprop="author" content="Vedanth Nath">
</article>
```

---

## 🌐 Part 5: Social Media SEO (Open Graph & Twitter Cards)

### **P0: Open Graph Tags (All Pages)**

#### index.html
```html
<!-- Add to <head> -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Personhood">
<meta property="og:title" content="Personhood - Building AI People">
<meta property="og:description" content="We're creating AI people with their own lives, memories, and agency. People who can share experiences with you—not just respond to prompts.">
<meta property="og:url" content="https://cady.social/">
<meta property="og:image" content="https://cady.social/assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Personhood - Building AI People with genuine agency">
<meta property="og:locale" content="en_US">
```

#### about.html
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Personhood">
<meta property="og:title" content="About Personhood - AI People R&D Company">
<meta property="og:description" content="AI people with agency and their own lives. They remember you, remember themselves, and show initiative. Not chatbots—genuine AI people.">
<meta property="og:url" content="https://cady.social/about.html">
<meta property="og:image" content="https://cady.social/assets/og-image-about.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">
```

#### cady.html
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Personhood">
<meta property="og:title" content="Cady - Think Hinge, but for AI People">
<meta property="og:description" content="Discover, match, and share experiences with AI people. Watch YouTube together, have evolving conversations, and build genuine connections.">
<meta property="og:url" content="https://cady.social/cady.html">
<meta property="og:image" content="https://cady.social/assets/og-image-cady.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">
```

#### contact.html
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Personhood">
<meta property="og:title" content="Contact Personhood">
<meta property="og:description" content="Talk with the founder or reach out directly about AI people, Personhood, and the future of social fabric.">
<meta property="og:url" content="https://cady.social/contact.html">
<meta property="og:image" content="https://cady.social/assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">
```

### **P0: Twitter Card Tags (All Pages)**

#### index.html
```html
<!-- Add to <head> -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@VedanthNath">
<meta name="twitter:creator" content="@VedanthNath">
<meta name="twitter:title" content="Personhood - Building AI People">
<meta name="twitter:description" content="We're creating AI people with their own lives, memories, and agency. People who can share experiences with you—not just respond to prompts.">
<meta name="twitter:image" content="https://cady.social/assets/twitter-card.png">
<meta name="twitter:image:alt" content="Personhood - Building AI People">
```

#### about.html, cady.html, contact.html
```html
<!-- Adjust title/description per page -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@VedanthNath">
<meta name="twitter:creator" content="@VedanthNath">
<meta name="twitter:title" content="[Page-specific title]">
<meta name="twitter:description" content="[Page-specific description]">
<meta name="twitter:image" content="https://cady.social/assets/twitter-card-[page].png">
<meta name="twitter:image:alt" content="[Page-specific alt]">
```

### **P0: Create Social Media Images**
**Required Images:**
- `og-image.png` (1200x630) - Homepage
- `og-image-about.png` (1200x630) - About page
- `og-image-cady.png` (1200x630) - Cady page
- `twitter-card.png` (1200x600) - Twitter cards

**Design Requirements:**
- Use brand colors (peach, orange, dark brown)
- Include Personhood logo
- Large, readable text ("Building AI People", "Meet Cady")
- Show app screenshot or brand visual
- Avoid text-heavy designs

---

## 📄 Part 6: On-Page SEO Improvements

### **P1: Enhanced Meta Tags (All Pages)**

#### index.html
```html
<meta name="description" content="Personhood builds AI people with genuine volition, agency, and shared experiences. Meet Cady: think Hinge, but for AI people you can watch YouTube with. Join the private alpha waitlist.">
<meta name="keywords" content="AI people, Cady, AI companions, AI characters, digital relationships, persistent AI memory, AI agency, shared AI experiences, Hinge for AI, AI R&D">
<meta name="author" content="Vedanth Nath, Personhood">
<meta name="copyright" content="© 2025 Personhood (iRise Business Ventures LLP)">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="googlebot" content="index, follow">
<meta name="bingbot" content="index, follow">
```

#### about.html
```html
<meta name="description" content="Personhood is an AI people R&D company building AI people with genuine agency, evolving memory, and shared experiences. Learn about our vision for AI as social infrastructure.">
<meta name="keywords" content="AI people, Personhood company, AI R&D, AI social infrastructure, AI agency research, persistent AI memory, Vedanth Nath">
<meta name="author" content="Vedanth Nath, Personhood">
<meta name="robots" content="index, follow, max-image-preview:large">
```

#### cady.html
```html
<meta name="description" content="Cady: Hinge-style app for discovering AI people. Match, chat, and share YouTube videos with AI people who have genuine agency, persistent memory, and evolving personalities.">
<meta name="keywords" content="Cady app, AI people app, Hinge for AI, AI companion app, watch YouTube with AI, persistent AI relationships, AI character discovery">
<meta name="author" content="Vedanth Nath, Personhood">
<meta name="robots" content="index, follow, max-image-preview:large">
```

#### contact.html
```html
<meta name="description" content="Contact Personhood. Talk with founder Vedanth Nath about AI people, partnerships, or join the Cady waitlist. Email: ved@loocafe.com">
<meta name="keywords" content="Personhood contact, Vedanth Nath, AI people partnerships, Cady support">
<meta name="robots" content="index, follow">
```

### **P1: Improve Image Alt Text (All Pages)**

**Current Issues:** Generic alt text on screenshots

**Updated Alt Text:**
```html
<!-- index.html -->
<img src="assets/personhood-logo.png" alt="Personhood logo - Building AI People">

<!-- cady.html - screenshots -->
<img src="assets/app-discover.png" alt="Cady discovery screen showing Hinge-style profile cards of AI people with unique personalities and prompts">
<img src="assets/app-chat.png" alt="Cady iMessage-style chat interface with AI person, showing conversations with custom reactions and shared YouTube video">
<img src="assets/app-profile.png" alt="AI person profile card in Cady showing personality, interests, and conversation history">
```

### **P2: Add Descriptive Anchor Text**
**Current Issue:** Generic "Click here" or button-only links

**Improvement:**
```html
<!-- Before -->
<a href="cady.html" class="btn">Learn More</a>

<!-- After -->
<a href="cady.html" class="btn" aria-label="Learn more about Cady, our AI people discovery app">Learn More</a>
```

### **P2: Heading Optimization**
**Current State:** Good hierarchy (h1 → h2 → h3)

**Improvements:**
- ✅ Only one h1 per page
- ⚠️ Include target keywords in h2 headings naturally
- ⚠️ Use descriptive subheadings (e.g., "How AI People Work" vs "How It Works")

**Optimized Headings:**
```html
<!-- cady.html -->
<h1>Cady - Hinge for AI People</h1>
<h2>How Cady Works: Discover, Match, Chat with AI People</h2>
<h2>What Makes Cady Different from Character.AI</h2>
<h2>Share YouTube Videos with AI People</h2>
```

---

## 🎯 Part 7: Keyword Strategy & Content Gaps

### Primary Keywords (High Intent)
1. **AI people** (Brand term, low competition)
2. **Cady AI app** (Brand term)
3. **AI companions with memory** (Feature-focused)
4. **Hinge for AI** (Comparative)
5. **AI characters you can talk to** (User intent)

### Secondary Keywords
- AI people with agency
- Persistent AI memory
- Watch YouTube with AI
- AI character discovery app
- Alternative to Character.AI
- AI companions that remember
- Dating app for AI people
- Sophisticated AI characters

### Long-Tail Keywords (LLM Search)
- "AI people who remember conversations"
- "App to meet AI people"
- "AI companions with boundaries"
- "Share experiences with AI"
- "AI people that feel real"

### **P1: Content Gaps to Fill**

#### Missing Content:
1. **Blog/Updates Section:** Share R&D progress, AI people insights
2. **Use Cases Page:** Detailed scenarios (lonely users, content consumers, etc.)
3. **How It Works (Technical):** Simplified explanation of Aria mechanism, SCD framework
4. **Comparison Page:** Cady vs Character.AI vs Replika
5. **Press/Media Page:** For journalists researching AI companions

#### **Recommended New Pages:**

**blog.html** - SEO Content Hub
- "What Are AI People? A Complete Guide"
- "How Persistent Memory Works in AI Companions"
- "Why Discovery Matters: Hinge vs Endless Scrolling"
- "The Future of AI in Social Fabric"

**compare.html** - Comparison Page
- Side-by-side: Cady vs Character.AI vs Replika vs Nomi
- Focus on: Memory, agency, shared experiences, discovery UX

---

## 📊 Part 8: Analytics & Monitoring

### **P1: Add Analytics (Privacy-Focused)**

**Recommended Tools:**
1. **Plausible Analytics** (privacy-focused, GDPR-compliant)
2. **Fathom Analytics** (simple, privacy-first)
3. **Google Analytics 4** (most comprehensive, requires cookie consent)

**Implementation (Plausible Example):**
```html
<!-- Add to <head> of all pages -->
<script defer data-domain="cady.social" src="https://plausible.io/js/script.js"></script>
```

### **P1: Set Up Search Console**

**Google Search Console:**
1. Verify ownership (HTML file or DNS record)
2. Submit sitemap.xml
3. Monitor:
   - Indexed pages
   - Search queries
   - Click-through rates
   - Core Web Vitals
   - Mobile usability

**Bing Webmaster Tools:**
1. Verify ownership
2. Submit sitemap.xml
3. Monitor keyword rankings

### **P2: Set Up Monitoring**

**Uptime Monitoring:**
- UptimeRobot (free)
- Pingdom
- StatusCake

**Lighthouse CI:**
- Automated performance audits on deploy
- Track Core Web Vitals over time

---

## 🚀 Part 9: Implementation Checklist

### Phase 1: Critical (P0) - Implement First
- [ ] Create `sitemap.xml`
- [ ] Create `robots.txt`
- [ ] Add canonical URLs to all pages
- [ ] Add Open Graph tags to all pages
- [ ] Add Twitter Card tags to all pages
- [ ] Create social media images (OG images, Twitter cards)
- [ ] Add favicon package
- [ ] Add JSON-LD Organization schema to all pages
- [ ] Add JSON-LD Product schema to index.html and cady.html
- [ ] Add FAQ section with FAQ schema to about.html
- [ ] Add Video schema to pages with YouTube embeds
- [ ] Add Breadcrumb schema to non-homepage pages

### Phase 2: High Priority (P1) - Next Week
- [ ] Optimize and convert images to WebP
- [ ] Add width/height attributes to all images
- [ ] Implement lazy loading for images and iframes
- [ ] Improve image alt text (descriptive, keyword-rich)
- [ ] Update meta descriptions (longer, more descriptive)
- [ ] Add enhanced meta tags (robots, copyright, etc.)
- [ ] Add preload/dns-prefetch hints for critical resources
- [ ] Set up Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Submit sitemaps to both search consoles
- [ ] Add privacy-focused analytics (Plausible or Fathom)

### Phase 3: Medium Priority (P2) - This Month
- [ ] Create blog section for SEO content
- [ ] Write comparison page (Cady vs competitors)
- [ ] Add CSP meta tag
- [ ] Optimize heading tags with keywords
- [ ] Add descriptive aria-labels to CTAs
- [ ] Implement service worker for PWA
- [ ] Set up uptime monitoring
- [ ] Set up Lighthouse CI for performance tracking

### Phase 4: Nice to Have (P3) - Future
- [ ] Create press/media page
- [ ] Add newsletter signup option
- [ ] Implement A/B testing for CTA copy
- [ ] Create video sitemap for YouTube embeds
- [ ] Add hreflang tags if expanding to other languages
- [ ] Implement AMP pages for mobile (if needed)
- [ ] Add rich snippets for testimonials (when available)

---

## 📈 Expected Results

### Timeline & Impact

**Week 1 (P0 Implementation):**
- ✅ Social shares now show rich previews
- ✅ Search engines can crawl all pages
- ✅ Structured data visible in search results
- ✅ Professional appearance (favicon)

**Week 2-3 (P1 Implementation):**
- ✅ Improved page load speeds (Lighthouse score 90+)
- ✅ Better image SEO
- ✅ Indexed in Google Search Console
- ✅ Analytics tracking user behavior

**Month 1-2:**
- 📈 Google starts showing rich snippets (FAQ, Video)
- 📈 Ranking for "AI people", "Cady" brand terms
- 📈 Increased organic traffic from long-tail keywords

**Month 3+:**
- 📈 Ranking for competitive terms ("AI companions", "Character.AI alternative")
- 📈 LLM search engines cite Personhood for AI people queries
- 📈 Featured snippets for "What are AI people?" queries
- 📈 Higher domain authority from quality backlinks

### Key Metrics to Track

**Search Performance:**
- Organic traffic (target: 1,000 visitors/month by Month 3)
- Keyword rankings for primary keywords
- Click-through rate (CTR) from search results
- Featured snippet appearances

**Technical SEO:**
- Lighthouse Performance Score (target: 95+)
- Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Indexed pages (4/4 pages)
- Crawl errors (target: 0)

**Engagement:**
- Bounce rate (target: < 50%)
- Average session duration (target: > 2 minutes)
- Pages per session (target: > 2.5)
- Waitlist conversion rate (target: > 5%)

---

## 🛠️ Tools & Resources

### SEO Tools
- **Google Search Console** (https://search.google.com/search-console)
- **Bing Webmaster Tools** (https://www.bing.com/webmasters)
- **Google Lighthouse** (built into Chrome DevTools)
- **Schema.org Validator** (https://validator.schema.org/)
- **Google Rich Results Test** (https://search.google.com/test/rich-results)
- **Facebook Sharing Debugger** (https://developers.facebook.com/tools/debug/)
- **Twitter Card Validator** (https://cards-dev.twitter.com/validator)

### Image Optimization
- **Squoosh** (https://squoosh.app/) - WebP conversion
- **TinyPNG** (https://tinypng.com/) - PNG compression
- **ImageOptim** (https://imageoptim.com/) - macOS app

### Favicon Generator
- **RealFaviconGenerator** (https://realfavicongenerator.net/)
- Creates full favicon package with manifest

### Analytics
- **Plausible** (https://plausible.io/) - Privacy-focused
- **Fathom** (https://usefathom.com/) - Simple analytics
- **Google Analytics 4** (https://analytics.google.com/)

### Monitoring
- **UptimeRobot** (https://uptimerobot.com/) - Free uptime monitoring
- **Lighthouse CI** (https://github.com/GoogleChrome/lighthouse-ci)

---

## 🔄 Maintenance Schedule

### Weekly
- Check Search Console for crawl errors
- Monitor analytics for traffic spikes/drops
- Review new keyword rankings

### Monthly
- Update sitemap.xml with lastmod dates
- Run Lighthouse audit and address issues
- Review and optimize underperforming pages
- Check for broken links
- Update content with new features/announcements

### Quarterly
- Comprehensive SEO audit
- Competitor analysis (Character.AI, Replika)
- Keyword strategy refresh
- Technical SEO review
- Backlink analysis and outreach

---

## 📚 Additional Recommendations

### Content Strategy
1. **Start a blog:** "Building AI People" series
   - Behind the scenes of Aria mechanism
   - Why discovery matters in AI apps
   - The future of AI in social infrastructure

2. **Guest posting:** Target AI/tech publications
   - TechCrunch (if newsworthy milestone)
   - The Verge, Wired (AI features)
   - AI-focused newsletters (Import AI, The Batch)

3. **Community building:**
   - Reddit presence (r/artificial, r/singularity)
   - Twitter threads on AI people development
   - YouTube channel for dev logs

### Link Building
1. **Product Hunt launch** (when ready)
2. **YC Launch** (if applicable)
3. **AI tool directories:** There's An AI For That, Futurepedia
4. **Founder interviews:** Podcasts, YouTube channels
5. **Press outreach:** When hitting milestones

### Local SEO (Hyderabad)
- Google Business Profile (if relevant)
- Local directories and listings
- India-specific tech publications

---

## ✅ Next Steps

### Immediate Actions (This Week)
1. **Create sitemap.xml and robots.txt** ✓
2. **Add canonical URLs to all pages** ✓
3. **Implement Open Graph and Twitter Card tags** ✓
4. **Add JSON-LD Organization schema** ✓
5. **Create social media share images** (Need designer)
6. **Generate and add favicon package** (Need designer)

### Follow-Up Actions (Next Week)
1. **Optimize images** (WebP conversion, compression)
2. **Add FAQ section with schema**
3. **Set up Google Search Console**
4. **Set up Bing Webmaster Tools**
5. **Add analytics (Plausible recommended)**

### Long-Term Actions (This Month)
1. **Start blog section**
2. **Write comparison content**
3. **Implement service worker**
4. **Set up monitoring and alerts**

---

## 📞 Need Help?

**For Implementation Questions:**
- Refer to tool documentation (Schema.org, Google Webmasters)
- Use validators to test implementation
- Check Search Console for errors

**For Design Assets (Favicons, OG Images):**
- Use Canva templates (free)
- RealFaviconGenerator for favicons
- Follow 1200x630 spec for OG images

---

**Document Version:** 1.0
**Last Updated:** November 5, 2025
**Maintained By:** Vedanth Nath, Personhood
**Next Review:** December 5, 2025

---

*This is a living document. Update as you implement changes and track results.*
