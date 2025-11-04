# How to Add YouTube Videos

## Quick Guide

Your YouTube video URLs look like this:
```
https://www.youtube.com/watch?v=XXXXXXXXXXX
```

You need the **VIDEO_ID** part (the XXXXXXXXXXX after `v=`)

---

## Step 1: Get Your Video IDs

For each video, copy the ID from the URL:
- **3-min demo**: Get ID from your YouTube URL
- **Cady explainer**: Get ID from your YouTube URL
- **Intro video**: Get ID from your YouTube URL

---

## Step 2: Update index.html

Open `index.html` and find these lines (around line 59, 66, and 73):

```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1" ...
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2" ...
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3" ...
```

Replace:
- `YOUR_VIDEO_ID_1` with your 3-min demo video ID
- `YOUR_VIDEO_ID_2` with your Cady explainer video ID
- `YOUR_VIDEO_ID_3` with your intro video ID

---

## Example

If your YouTube URL is:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

The video ID is: `dQw4w9WgXcQ`

So you'd change:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1" ...
```

To:
```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" ...
```

---

## Alternative: Provide URLs to Me

Just give me the three YouTube URLs and I'll add them for you:

1. 3-min demo URL: ___________
2. Cady explainer URL: ___________
3. Intro video URL: ___________

---

## Don't Have YouTube Videos Yet?

You can:
1. **Remove the demo section** (I can help with this)
2. **Use the local video** (`1020(1).mp4`) - upload to YouTube first
3. **Link directly** to videos instead of embedding

Let me know what you prefer!
