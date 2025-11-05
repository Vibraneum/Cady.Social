# Hero Images Specification for Personhood Website

## Color Palette Reference
- **Primary Warm Tones:** Peach (#F6C28B), Soft Orange (#E8A861)
- **Neutrals:** Warm Cream (#FEFBEA), Soft Beige (#F5D5A8)
- **Accents:** Deep Brown (#3E3B28), Warm White (#FFFFFF)
- **Lighting:** Natural, warm, golden hour feel

---

## IMAGE 1: Homepage Hero

### Technical Specifications
- **Dimensions:** 1400px × 800px (landscape)
- **Format:** WebP or PNG
- **File name:** `hero-home.webp` or `hero-home.png`
- **File size:** Under 500KB (optimized for web)

### Visual Concept: "Community & Connection"

**Core Idea:**
People sitting together in a relaxed, authentic setting — capturing the essence of genuine connection and shared experiences.

**Scene Description:**
- **People:** 2-4 individuals in casual, comfortable setting
- **Setting Options:**
  - Cozy living room with couch
  - Warm cafe/coffee shop corner
  - Comfortable outdoor patio with warm lighting
- **Activity:**
  - Laughing together
  - Watching something together on a screen/phone
  - Having animated conversation
  - Sharing a moment of genuine connection

**Mood & Atmosphere:**
- **Feeling:** Warm, welcoming, authentic
- **Energy:** Relaxed but engaged
- **Vibe:** Friends spending quality time together
- **Lighting:** Natural, soft, warm (golden hour or cozy indoor lighting)

**What to AVOID:**
- ❌ Corporate/staged stock photo look
- ❌ Overly polished or artificial
- ❌ Cold or sterile environments
- ❌ People staring at camera
- ❌ Futuristic/sci-fi elements
- ❌ Cliché tech imagery (robots, holograms, etc.)

**What to INCLUDE:**
- ✅ Natural, candid expressions
- ✅ Warm color tones (peach, orange, cream undertones)
- ✅ Comfortable, inviting space
- ✅ Sense of togetherness
- ✅ Soft, diffused lighting
- ✅ Casual, approachable aesthetics

**Composition:**
- Central focus on people interacting
- Warm background with soft bokeh effect (optional)
- Balanced composition with breathing room
- Horizontal orientation (landscape)

**Diversity Considerations:**
- Include diverse representation naturally
- Mixed genders, ages, backgrounds
- Authentic representation over tokenism

---

## IMAGE 2: About Page Hero

### Technical Specifications
- **Dimensions:** 1400px × 600px (wider landscape)
- **Format:** WebP or PNG
- **File name:** `hero-about.webp` or `hero-about.png`
- **File size:** Under 400KB (optimized for web)

### Visual Concept: "Collective & Social Fabric"

**Core Idea:**
A broader view of community and connection — more people, more abstract, representing the social fabric we're building.

**Scene Description:**
- **People:** 4-8 individuals in gathering/community setting
- **Setting Options:**
  - Diverse group in circular gathering (aerial/elevated view)
  - Community table with people engaged in conversation
  - Abstract/artistic representation of people connecting
  - Overlapping silhouettes or figures suggesting community
- **Activity:**
  - Group discussion/collaboration
  - Shared experience (watching, listening, reacting together)
  - Natural social interaction

**Mood & Atmosphere:**
- **Feeling:** Thoughtful, visionary, inclusive
- **Energy:** Collaborative, engaging
- **Vibe:** "We're building something bigger together"
- **Lighting:** Warm but can be slightly more dramatic/artistic

**Style Options:**
1. **Photographic:** Real people in authentic community setting
2. **Illustrated/Artistic:** Stylized figures representing connection
3. **Hybrid:** Photo with artistic overlays/effects

**What to AVOID:**
- ❌ Too corporate or business-meeting vibe
- ❌ Overly abstract/unrecognizable
- ❌ Dark or cold tones
- ❌ Cluttered or chaotic composition

**What to INCLUDE:**
- ✅ Sense of belonging and community
- ✅ Warm, inviting color palette
- ✅ Clear visual hierarchy
- ✅ Intentional composition
- ✅ Diversity and inclusivity
- ✅ Slightly elevated/thoughtful perspective

**Composition:**
- Wider horizontal frame (600px height vs 800px for homepage)
- Can be more aerial/overhead perspective
- Central gathering point with space around edges
- Balanced, intentional arrangement

---

## Image Creation Methods

### Option 1: AI Generation
**Tools:** Midjourney, DALL-E 3, Stable Diffusion

**Sample Prompts:**

**Homepage Hero:**
```
Warm, cozy scene of 3 friends sitting together on a comfortable couch,
laughing and looking at a phone together, natural golden hour lighting,
peach and orange warm tones, authentic and candid moment, soft focus
background, welcoming atmosphere, photorealistic, high quality
```

**About Page Hero:**
```
Aerial view of diverse group of 6 people sitting in circular gathering,
warm cafe setting, engaged in conversation, natural interaction, warm
peach and orange color palette, soft lighting, sense of community and
connection, photorealistic, welcoming atmosphere
```

### Option 2: Stock Photography
**Sources:** Unsplash, Pexels (free), or premium stock sites

**Search Terms:**
- "friends hanging out cozy"
- "people laughing together warm lighting"
- "community gathering authentic"
- "diverse friends casual setting"
- "coworking community warm"

**Post-Processing:**
- Apply warm color grading (increase orange/peach tones)
- Adjust exposure for soft, warm feel
- Slight blur/bokeh on edges for focus
- Optimize and compress for web

### Option 3: Custom Photography
**Setup:**
- Golden hour or warm artificial lighting
- Comfortable, lived-in setting
- Natural direction (minimal posing)
- Multiple angles and compositions
- Focus on authentic moments

---

## Integration Plan

### Placement in Design

**Homepage (index.html):**
```html
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="alpha-badge">Private Alpha</div>
            <h1>Building AI People</h1>
            <p class="hero-subtitle">...</p>
            <div class="hero-cta">
                <a href="cady.html" class="btn">Discover Cady</a>
                <a href="#waitlist" class="btn">Join Waitlist</a>
            </div>
        </div>
        <div class="hero-image">
            <img src="assets/hero-home.webp" alt="People connecting together">
        </div>
    </div>
</section>
```

**About Page (about.html):**
```html
<section class="page-header">
    <div class="container">
        <h1>About Personhood</h1>
        <p>AI people R&D company</p>
    </div>
    <div class="header-image">
        <img src="assets/hero-about.webp" alt="Community and connection">
    </div>
</section>
```

---

## Quality Checklist

Before finalizing images, ensure:

- [ ] Dimensions are exact (1400×800 and 1400×600)
- [ ] File format is WebP (preferred) or PNG
- [ ] File size is optimized (under 500KB each)
- [ ] Colors match warm palette (peach/orange tones)
- [ ] Lighting is warm and inviting
- [ ] Composition is balanced and intentional
- [ ] People look natural and authentic
- [ ] Images evoke desired emotion (connection, community)
- [ ] High enough resolution for retina displays
- [ ] Compressed without visible quality loss

---

## Next Steps

1. **Create or source both images** based on specifications above
2. **Save as:** `hero-home.webp` and `hero-about.webp`
3. **Place in:** `/mnt/d/Personhood/Website/assets/` folder
4. **Confirm with developer** before full integration
5. **Test on website** to ensure proper display and loading

---

## Notes

- Images should complement, not distract from, the content
- Keep the focus on **authentic human connection**
- Warm tones should feel natural, not over-processed
- Both images should feel cohesive but distinct in purpose
- Mobile responsiveness will be handled in CSS (images will scale)

---

**Once images are ready, place them in `/assets/` folder and let me know to proceed with integration!**
