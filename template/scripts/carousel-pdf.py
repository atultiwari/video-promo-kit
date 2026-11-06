#!/usr/bin/env python3
"""Join out/carousel/slide-NN.png into one PDF for a LinkedIn document post.

    python3 -I scripts/carousel-pdf.py
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "out" / "carousel"


def main() -> int:
    pages = sorted(OUT.glob("slide-*.png"))
    if not pages:
        raise SystemExit("no slides in out/carousel; run scripts/render-carousel.mjs first")
    images = [Image.open(p).convert("RGB") for p in pages]
    pdf = OUT / "fridge-hack-carousel.pdf"
    images[0].save(pdf, save_all=True, append_images=images[1:], resolution=144)
    print(f"{pdf.relative_to(ROOT)} · {len(images)} pages · {pdf.stat().st_size / 1e6:.1f} MB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
