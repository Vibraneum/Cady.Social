# 🎬 How to Upload Your Video

## 📥 Step 1: Download Video from Twitter

### Option A: Use Twitter Video Downloader (Easiest)

1. Go to: https://twittervideodownloader.com/
2. Paste your tweet URL:
   ```
   https://twitter.com/VedanthNath/status/1980011437922701329
   ```
3. Click "Download"
4. Choose **highest quality** (usually 1280x720 or better)
5. Save as: `cady-demo.mp4`

### Option B: Use yt-dlp (Best Quality)

If you have yt-dlp installed:
```bash
yt-dlp https://twitter.com/VedanthNath/status/1980011437922701329 -o cady-demo.mp4
```

### Option C: Use SaveTweet

1. Go to: https://savetweet.net/
2. Paste your tweet URL
3. Click "Download"
4. Save as: `cady-demo.mp4`

---

## 📁 Step 2: Add Video to Your Repository

### Where to Put the Files:

```
/mnt/d/Personhood/Website/assets/
├── cady-demo.mp4          ← Main video file (required)
├── cady-demo.webm         ← WebM version (optional, for better browser support)
└── video-thumbnail.jpg    ← Thumbnail image (optional, shows before play)
```

### File Requirements:

**cady-demo.mp4** (REQUIRED)
- Format: MP4
- Max size: ~10-15MB recommended
- Codec: H.264
- This is your main video

**video-thumbnail.jpg** (OPTIONAL)
- Format: JPG
- Size: Same aspect ratio as video (9:16)
- Recommended: 720x1280 or 1080x1920
- Shows before user clicks play
- Take a screenshot from your video

**cady-demo.webm** (OPTIONAL)
- Format: WebM
- Better compression, smaller file size
- Browser fallback option

---

## 💻 Step 3: Upload Files

### Using Git:

1. **Copy video to assets folder:**
   ```bash
   cp /path/to/downloaded/cady-demo.mp4 /mnt/d/Personhood/Website/assets/
   ```

2. **Optional: Add thumbnail:**
   ```bash
   cp /path/to/thumbnail.jpg /mnt/d/Personhood/Website/assets/video-thumbnail.jpg
   ```

3. **Commit and push:**
   ```bash
   cd /mnt/d/Personhood/Website
   git add assets/cady-demo.mp4
   git add assets/video-thumbnail.jpg  # if you have it
   git commit -m "Add Cady demo video"
   git push origin main
   ```

### Using Windows Explorer:

1. Open: `D:\Personhood\Website\assets\`
2. Paste `cady-demo.mp4` into this folder
3. Paste `video-thumbnail.jpg` (if you have it)
4. Open Git Bash or terminal
5. Run:
   ```bash
   git add assets/cady-demo.mp4
   git commit -m "Add Cady demo video"
   git push origin main
   ```

---

## 🎨 Step 4: Create Thumbnail (Optional but Recommended)

### Why Add a Thumbnail?

- Shows before video plays
- Looks more professional
- Faster page load (image lighter than video)

### How to Create:

**Option 1: Screenshot from Video**
1. Open video in any player
2. Pause at a good frame
3. Take screenshot (Windows: Win+Shift+S)
4. Save as `video-thumbnail.jpg`

**Option 2: Use Your Existing Thumbnail**
- If you already made a 9:16 thumbnail for Twitter
- Just use that same file
- Save as `video-thumbnail.jpg`

**Option 3: Create in Canva**
1. Go to Canva
2. Create custom size: 1080 x 1920 (9:16)
3. Design your thumbnail
4. Download as JPG
5. Save as `video-thumbnail.jpg`

---

## ⚡ Quick Start (TL;DR)

1. **Download video** from Twitter using twittervideodownloader.com
2. **Save as** `cady-demo.mp4`
3. **Copy to** `/mnt/d/Personhood/Website/assets/`
4. **Optional**: Add thumbnail as `video-thumbnail.jpg`
5. **Commit**:
   ```bash
   git add assets/cady-demo.mp4
   git commit -m "Add demo video"
   git push
   ```
6. **Done!** Video now plays on cady.social

---

## 🎯 File Sizes & Optimization

### Target File Sizes:

- **cady-demo.mp4**: 5-15MB (ideal for web)
- **video-thumbnail.jpg**: 100-500KB

### If Video is Too Large:

**Option 1: Use HandBrake (Free)**
1. Download: https://handbrake.fr/
2. Open your video
3. Preset: "Web" → "Gmail Large 3 Minutes 720p30"
4. Save as `cady-demo.mp4`

**Option 2: Online Compressor**
1. Go to: https://www.freeconvert.com/video-compressor
2. Upload your video
3. Choose "High quality" compression
4. Download compressed version

**Option 3: Use FFmpeg**
```bash
ffmpeg -i original.mp4 -vcodec h264 -acodec aac -b:v 2M cady-demo.mp4
```

---

## ✅ What Happens After Upload

Once you push to GitHub:

1. **GitHub Pages rebuilds** (takes 1-2 minutes)
2. **Video appears** on cady.social
3. **Users can**:
   - Click play button
   - See thumbnail before playing (if added)
   - Watch full video
   - Click "Watch on Twitter" link below

---

## 📊 Benefits of Direct Upload

✅ **Fast loading** - No external embed
✅ **Full control** - Custom player styling
✅ **No tracking** - No Twitter scripts
✅ **Clean UI** - Just video + play button
✅ **Mobile friendly** - Native HTML5 video
✅ **Offline capable** - Video hosted with your site

---

## 🎬 What the Player Looks Like

```
┌─────────────────────────┐
│                         │
│   [Video thumbnail or   │
│    playing video]       │
│                         │
│   ▶️  [Play controls]   │
│                         │
├─────────────────────────┤
│  🐦 Watch on Twitter    │  ← Caption with link
└─────────────────────────┘
```

- **Top**: Video player (9:16 ratio)
- **Bottom**: Link to your Twitter post
- **Style**: Warm peach gradient background
- **Corners**: Rounded
- **Shadow**: Subtle depth

---

## ❓ FAQ

**Q: What if I don't have a thumbnail?**
A: No problem! The video will show a black screen until play. Still works fine.

**Q: Can I use a different filename?**
A: Yes! Just update `index.html`:
```html
<source src="assets/YOUR-FILENAME.mp4" type="video/mp4">
```

**Q: Will this work on mobile?**
A: Yes! HTML5 video works on all modern devices.

**Q: What if the file is too big for GitHub?**
A: Compress it (see "If Video is Too Large" section above). GitHub limit is 100MB but you want 5-15MB ideally.

---

## 🚀 Ready to Upload?

1. Download video from Twitter
2. Save as `cady-demo.mp4`
3. Copy to `assets/` folder
4. Git add + commit + push
5. Wait 2 minutes
6. Check cady.social ✅

**Need help?** All the code is already in place - just add the video file!
