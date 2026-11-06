# Copy: YouTube, LinkedIn, Instagram, WhatsApp

Worked examples of every piece are in `examples/fridge-hack/`. Reuse their structure.

## YouTube

- **Title:** offer 3 options; the owner picks. Final: "Fridges Hacked: What Doctors Must Learn
  About AI Security" (57 characters). Keep it under 70 so it isn't truncated; it complements
  the thumbnail rather than repeating it.
- **Description** (`description.txt`, ~3,800 of 5,000 characters), in this order:
  1. a 2-line hook (shown before "…more");
  2. what the video covers + "made for clinicians, pathologists…";
  3. ⏱️ CHAPTERS from the real timings (`npm run chapters` in the video project): first at 0:00,
     ≥ 3 chapters, each ≥ 10 s;
  4. ✅ the checklist;
  5. 🩺 1:1 consultation link;
  6. 💬 WhatsApp group link;
  7. ❓ the comment question;
  8. 📚 sources with URLs;
  9. ℹ️ notes: facts as of <date>, "not publicly attributed", illustrative visuals,
     "not legal/compliance advice", **"Narration uses an AI-generated clone of my own voice."**;
  10. © line;
  11. 3 hashtags (they render above the title).
- **Tags:** 15, ≤ 500 characters including the channel's default tags (which Studio adds
  automatically; final total 469/500).

## LinkedIn post (`li_format.py` for bold)

Write a draft with `**bold**` markers, then `python3 -I scripts/li_format.py draft.txt post.txt`.
Bold only the hook, mini-headings and one key phrase. URLs, #tags and @mentions stay plain
automatically.

- **Structure:** hook (2 lines before "…see more") → event in 3 sentences → "It wasn't an AI
  attack." → **why doctors should care** → 1️⃣–5️⃣ "In the carousel 👇" → "**The full
  11-minute video** explains failure #5… ▶️ Link in the first comment 👇" → comment question →
  "A Vedant Research Labs explainer, by Dr. Atul Tiwari." → 8 hashtags.
- **Link in the first comment** (LinkedIn shows outside links to fewer people). The first
  comment holds the video link + consultation link; the owner posts it right after publishing.
- Attach the carousel PDF as a document and give it a title. Retype company names as
  `@Vedant Research Labs` after pasting, so they link.

## Instagram caption

~1,200 characters:

- hook;
- 3 short paragraphs;
- "Swipe 👉 for:" + 5 bullets;
- "🎥 Full video: link in bio, or scan the QR code on the last slide";
- comment question;
- "🔖 Save this. Share it with a colleague…";
- "Dr. Atul Tiwari · Vedant Research Labs";
- **5 hashtags only** (Instagram's current guidance).

Links aren't clickable in captions, so put the video link in the bio first.

## WhatsApp group message

~870 characters, using WhatsApp's own markup (`*bold*`, `_italic_`):

- 🌡️ *New video: <title>*;
- 2 sentences on the event and why it matters;
- "In 11 minutes:" + 4 ✅ lines;
- **▶️ Watch: <link> on its own line** (so WhatsApp builds a preview card with the thumbnail);
- a question for the group;
- "Please share with colleagues 🙏".

Send only after the video is public: WhatsApp caches the first preview, even "unavailable".
Relative dates ("last weekend") go stale, so update them if sent later.

## Timing (Indian doctors)

- Weekday 7–9 PM IST (after OPD) or 8–9 AM IST (before OPD) when news-timely.
- Avoid ~1 AM: notifications get buried and the early views that help the video spread don't
  arrive.
- For a news hook, 12 hours matters less than the hour; the explainer angle stays relevant for
  weeks.
