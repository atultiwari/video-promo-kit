#!/usr/bin/env python3
"""Phone-size preview: each image beside a copy scaled to how a phone feed shows it.

    python3 -I scripts/phone-check.py out/thumbnails/thumb-k-final.png [--width 320]

Writes <name>.phone.png next to the input. YouTube shows thumbnails about 320 px wide on a
phone; Instagram carousel slides about 390 px. If the headline is not readable in the small
copy, it is too small.
"""
import argparse
from pathlib import Path

from PIL import Image


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("images", nargs="+")
    ap.add_argument("--width", type=int, default=320)
    args = ap.parse_args()
    for path in map(Path, args.images):
        im = Image.open(path).convert("RGB")
        small = im.resize((args.width, round(im.height * args.width / im.width)), Image.LANCZOS)
        sheet = Image.new("RGB", (im.width + 40 + small.width, im.height), (30, 30, 30))
        sheet.paste(im, (0, 0))
        sheet.paste(small, (im.width + 40, 0))
        out = path.with_suffix(".phone.png")
        sheet.save(out)
        print(out)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
