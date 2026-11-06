# Carousel (Instagram + LinkedIn)

## Format

- **Default `"format": "square"` (1080×1080)**, the owner's choice for Instagram. The same PNGs
  become the LinkedIn PDF.
- `"portrait"` (1080×1350, 4:5) fills more of the feed. Use it if the owner asks.
- Slides are laid out for the 4:5 content area. In square they are scaled with CSS `zoom: 0.74`,
  which reflows layout, unlike `transform`. Body text therefore renders ~30 px: **keep square
  slides short** (≤ 35 words of body per slide) and use the larger text components.
- `npm run carousel` → `out/carousel/slide-NN.png` + `fridge-hack-carousel.pdf`. Rename the PDF
  in `scripts/carousel-pdf.py` per video.
- PDF links are **not clickable** on LinkedIn (it turns pages into images). Print the link,
  add a QR code, and put the link in the post's first comment.

## Frame (every slide)

- **Header:** white VRL seal (`public/brand/vrl-logo-white.png`) + "Vedant / Research Labs"
  left; author + "AI in healthcare" right.
- **Footer:** © line · "n / 10" · "SWIPE →" (not on the last slide).
- **Branding:** the white seal for dark slides; the blue seal (`vrl-logo-blue.png`) for light
  backgrounds such as an Instagram profile photo. Never put the blue seal on navy (it
  disappears).

## A teaser, not a summary

The carousel exists to send people to the video, so hold back the best parts:

| # | Slide kind | What it does |
|---|---|---|
| 1 | `cover` | The thumbnail's words + illustration row + **video link pill** |
| 2 | `night` | The event in 3 facts + the gauge |
| 3 | `numbers` | 4 stat tiles + one quote |
| 4 | `pivot` | The thesis ("This wasn't an AI attack. That's exactly the point.") |
| 5 | `failures` | N−1 failures named, **the last one shown as "? ? ?"**: "it's in the video" |
| 6 | `mirror` | 3 of 6 comparisons, then "+3 more in the video" |
| 7 | `agent` | The second incident + quote |
| 8 | `poison` | One striking number |
| 9 | `checklist` | 3 of 7 checks + 4 blank placeholders, then "+4 more checks in the video" |
| 10 | `cta` | **QR code + link**, 1:1 consultation link, "Save · Share with a colleague…" |

The video link goes on slides 1 and 10. Every fact slide carries a source line.

## Checks

Contact sheet of all slides: nothing overflows the footer; the body is readable at 390 px
wide; the QR code scans (test it with a phone camera); the link works only after the video is
public, so post after the release.
