#!/usr/bin/env python3
"""Convert **bold**, *italic*, ***bold italic*** markers into LinkedIn-ready Unicode.

    python3 -I scripts/li_format.py draft.txt [output.txt]   (or pipe text on stdin)

LinkedIn (and Instagram) have no real bold; Unicode "Mathematical Sans-Serif" look-alikes
survive copy-paste. Use sparingly: they are not searchable and screen readers struggle.
URLs, #hashtags and @mentions inside a bold span stay plain so they keep working.
"""
import re
import sys

STYLES = {  # (A, a, 0) start code points; None = leave digits unchanged
    "bold": (0x1D5D4, 0x1D5EE, 0x1D7EC),
    "italic": (0x1D608, 0x1D622, None),
    "bolditalic": (0x1D63C, 0x1D656, 0x1D7EC),
}
PROTECT = re.compile(r"(https?://\S+|www\.\S+|#\w+|@\w+)")


def style_chars(text: str, style: str) -> str:
    up, lo, dg = STYLES[style]
    out = []
    for ch in text:
        if "A" <= ch <= "Z":
            out.append(chr(up + ord(ch) - 65))
        elif "a" <= ch <= "z":
            out.append(chr(lo + ord(ch) - 97))
        elif "0" <= ch <= "9" and dg:
            out.append(chr(dg + ord(ch) - 48))
        else:
            out.append(ch)
    return "".join(out)


def convert(text: str, style: str) -> str:
    parts = PROTECT.split(text)
    return "".join(p if PROTECT.fullmatch(p) else style_chars(p, style) for p in parts)


def render(src: str) -> str:
    src = re.sub(r"\*\*\*(.+?)\*\*\*", lambda m: convert(m.group(1), "bolditalic"), src, flags=re.S)
    src = re.sub(r"\*\*(.+?)\*\*", lambda m: convert(m.group(1), "bold"), src, flags=re.S)
    src = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", lambda m: convert(m.group(1), "italic"), src)
    return src


if __name__ == "__main__":
    text = open(sys.argv[1], encoding="utf-8").read() if len(sys.argv) > 1 else sys.stdin.read()
    result = render(text)
    if len(sys.argv) > 2:
        open(sys.argv[2], "w", encoding="utf-8").write(result)
    print(result)
