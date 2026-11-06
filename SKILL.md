---
name: video-promo-kit
description: >-
  Everything after a video is rendered, for any video style (whiteboard, motion explainer,
  tutorial): YouTube thumbnail variants built as Remotion stills with vector medical illustrations
  (hospital, blood bank fridge, doctor, checklist), a phone-size readability check, social
  carousels (1:1 square by default for Instagram, 4:5 optional) exported as PNGs plus a LinkedIn
  PDF with co-branding and a QR code, YouTube title/description/chapters/tags, LinkedIn post
  (Unicode bold, link in first comment), Instagram caption, WhatsApp announcement, the YouTube
  Studio upload-and-schedule recipe through the Chrome extension, and Instagram profile set-up.
  Use when asked for thumbnails, a carousel, social posts, a YouTube description or upload,
  promoting or announcing a video, or setting up a creator profile. Self-contained: template,
  scripts, brand assets and a worked example are inside the skill.
license: MIT
metadata:
  author: Dr Atul Tiwari
  version: "1.0.0"
  measuredOn: "2026-10-14"
---

# Video promo kit

Built from promoting *Fridges Hacked: What Doctors Must Learn About AI Security* (Oct 2026). The
template is a small standalone Remotion project, installed as `<video-project>/promo`, so it
works next to any video project.

```bash
node ~/.claude/skills/video-promo-kit/scripts/install.mjs <video-project>/promo
cd <video-project>/promo && npm run dev     # Studio: Thumbnails/ and Carousel/ folders
```

## The order (owner gates in bold)

1. **Thumbnails:** 5+ distinct concepts as data in `src/data/promo.json` → `npm run thumbs` →
   phone check → contact sheet to the owner. Iterate on feedback. **The owner picks the final;
   never choose it yourself.** Save it as `out/<name>-thumbnail-FINAL.png` (1280×720, < 2 MB).
   See references/thumbnails.md.
2. **YouTube text:** title options (owner picks), description with real chapters, sources,
   links, notes; 15 tags. See references/copy.md.
3. **Upload and schedule:** YouTube Studio through the Chrome extension; the owner drags the
   video in. Read every field back. See references/publishing.md.
4. **Carousel:** 10 teaser slides (`src/data/carousel.json`, `"format": "square"`) →
   `npm run carousel` → PNGs (Instagram) + PDF (LinkedIn). See references/carousel.md.
5. **Social copy:** LinkedIn post + first comment, Instagram caption, WhatsApp message. See
   references/copy.md.
6. **Profiles** (optional): Instagram Creator set-up; a brand account is created **by the owner**,
   never by the agent. See references/publishing.md.

## Files

| Path | What |
|---|---|
| `template/` | Remotion promo project: `thumbnails/` (11 variants A–K), `illustrations.tsx`, `carousel/` (10 slide kinds, square/portrait), `components/` (Backdrop moods, Icon, QrCode, Watermark, PaperTexture), `public/brand/` (VRL seal: white for dark, blue for light) |
| `template/scripts/` | `render-thumbnails.mjs`, `render-carousel.mjs`, `carousel-pdf.py`, `phone-check.py`, `li_format.py` |
| `references/` | thumbnails, carousel, copy, publishing |
| `examples/fridge-hack/` | Final thumbnail, all 11 thumbnail options, 1:1 and 4:5 carousel sheets, metadata, description, LinkedIn post + first comment, Instagram caption, WhatsApp message |

## Owner preferences (Dr. Atul Tiwari, Medical AI Simplified)

- Educational framing ("7 lessons for Healthcare AI"), never threats ("Hospitals next?").
- The subject is the largest text; "Healthcare AI" over "Hospital AI".
- Watermark "© 2026 Dr. Atul Tiwari" on thumbnails and slides; Vedant Research Labs co-branding
  on promo material.
- Instagram carousel images 1:1. Links: video `youtu.be/…`, consultation
  `https://book.atultiwari.com/p/dr-atul-tiwari`, WhatsApp group
  `https://chat.whatsapp.com/ET6jeZwee88KhKC4PICuiK?mode=gi_t`.
- Ask when in doubt. Never publish, post, or change an account without explicit approval.
