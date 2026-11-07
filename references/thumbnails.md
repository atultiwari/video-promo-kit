# Thumbnails

## Process

1. Draft **at least 5 different concepts**, not 5 colourways. The first round's concepts:
   - A: a big glowing gauge (50°C) + headline;
   - B: a newspaper front page + a rubber stamp;
   - C: a split screen (supermarket 80°C vs blood bank 4°C?);
   - D: an AI robot slipping through an open door;
   - E: a direct question to the viewer.
2. Each concept is an entry in `src/data/promo.json` → `thumbnails[]` with a `variant` and its
   text fields. `npm run thumbs` renders `out/thumbnails/<id>.png`.
3. `npm run phone-check -- out/thumbnails/<id>.png`: the headline must read in the
   320 px-wide copy.
4. Show a contact sheet; recommend one, with a reason. **The owner chooses.**
5. Iterate on the owner's words exactly. Round 2 (F–J) added vector illustrations and
   educational wording. Round 3 (K) blended H + I to the owner's spec.
6. Copy the approved PNG to `out/<name>-thumbnail-FINAL.png` and record it in STATUS.

## Variants in the template (`variant` → fields)

| Variant | Fields |
|---|---|
| `thermometer` | temp, headline, accent, tag |
| `newspaper` | masthead, headline, stamp, tag |
| `split` | leftLabel, leftTemp, rightLabel, rightTemp, headline |
| `agent` | headline, accent, tag |
| `question` | headline, temp, tag |
| `lessonsRow` | temp, tag, headline, accent (hospital, fridge and doctor row) |
| `hospitalLearn` | temp, tag, headline, accent (hospital + tilted gauge) |
| `doctorFridge` | temp, tag, headline, accent (doctor beside a hot blood bank fridge) |
| `problemToChecklist` | temp, tag, headline, accent (gauge → checklist → green hospital) |
| `decoded` | temp, tag, headline, accent |
| `fridgeToFix` (**the approved one**) | tag, headline, accent, accent2, temp: doctor top-right beside the text; fridge → checklist → green hospital centred below |

Illustrations (`src/thumbnails/illustrations.tsx`), all flat neon-on-navy SVGs sized by `size`:

- `HospitalBuilding({size, glow})`
- `BloodBankFridge({size, temp, hot})`
- `BloodBag({size})`
- `Doctor({size, glow, happy})`: `happy` is a laughing face, which the **owner rejected**; use
  the default calm smile.
- `ChecklistCard({size, rows})`

## Rules the owner set

- **Educational, not a threat.** "Hospitals next?" was rejected as a falsified threat. Use
  "lessons", "what doctors must learn", "decoded".
- **Hierarchy follows the subject.** The final has "FRIDGES HACKED:" and "7 LESSONS FOR" at
  70 px white, then **"HEALTHCARE AI" at 116 px green with a glow**. The owner's focus is
  healthcare AI, so it must be the largest line.
- **Readable on mobile:** at most 3 text lines plus a tag; tag ≥ 34 px; illustrations big and
  centred (the owner asked to centre the bottom row).
- **No unverifiable claims:** "From home" was removed because the attackers' location is unknown.
- **Complement the title, don't repeat it.** Thumbnail: "Fridges hacked: 7 lessons for
  Healthcare AI". Title: "Fridges Hacked: What Doctors Must Learn About AI Security".
- 1280×720 PNG, under YouTube's 2 MB limit (final: 1.0 MB). Watermark bottom-right.

## Teaching variants (`TeachingVariants.tsx`, from "What is AI, really?", Nov 2026)

For explainers rather than incidents. Illustrations in `teaching-illustrations.tsx`:
`OximeterFinger` (side-view finger with nail and creases, clip, display), `EcgPrintout`,
`ChestFilm`, `NestedCircles` (AI ⊃ ML ⊃ DL). Add new teaching objects there, drawn so they read at
phone size: a primitive shape for anatomy was called out by the owner.

| Variant | Fields | Layout |
|---|---|---|
| `headlineDiagram` (**owner's pick for E01**) | tag, headline, accent | two-line headline (accent largest, green) beside a big diagram (nested circles) |
| `twoVerdicts` | tag, headline, left, right | two objects (oximeter, ECG) with a verdict pill under each |
| `doctorHeadline` | tag, headline, accent, sub | huge one-word headline, the doctor on the right |
| `objectQuestion` | tag, headline, accent | headline + question beside a tilted ECG printout |
| `objectChips` | tag, headline, chips (`A|B|C`) | chest film + three coloured chips |
| `questionChoices` | tag, headline, accent, left, right | the series question with two answer pills, doctor |

Worked example: `examples/ai-medicine-e01/` (promo.json, the six options, the final, description).

**Owner preference learned on E01:** a big plain question as the headline next to one clear
diagram beat the clever split-verdict layout. Recommend that shape first for concept episodes,
and still let the owner choose. The thumbnail can be changed after upload
(`youtube-uploader/scripts/yt-update.mjs --thumbnail`).
