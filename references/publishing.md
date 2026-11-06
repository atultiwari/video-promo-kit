# Publishing and profiles (Claude in Chrome)

Load the Chrome tools in one ToolSearch call (`tabs_context_mcp, navigate, computer, find,
read_page, javascript_tool, file_upload, tabs_create_mcp, tabs_close_mcp`). Work in a new tab
and close it when done.

## YouTube Studio: upload and schedule

1. Open `https://studio.youtube.com/channel/<channel-id>`. The Chrome profile is already signed
   in (channel "Medical AI Simplified"). Click the upload icon.
2. **The video file:** `file_upload` only passes files **under 10 MB**. For the MP4, reveal it in
   Finder (`reveal_path`) and **ask the owner to drag it into the dialog**. Small files (the
   thumbnail) go through `file_upload` on the input `find` returns.
3. **Title:** click the field → `cmd+a` → type.
4. **Description:** the channel pre-fills a template ("In this video, [add …]"). Click → `cmd+a`
   → Delete → type the full text. **Read it back** with JS from
   `ytcp-uploads-dialog #textbox`:
   - length;
   - no `[add`;
   - chapter count;
   - each link present.
5. **Thumbnail:** `find` "thumbnail upload file input" → `file_upload`.
6. **Popups:** a hashtag suggestion box opens after typing `#…`. **Never press Escape** (it
   closes the whole dialog). Click an inert label (e.g. "Video link") instead.
7. **Audience:** "No, it's not made for kids". Then "Show more":
   - **AI use (altered content): Yes**, because the narration is a voice clone;
   - tags (check the `n/500` counter);
   - category Education, language English.
8. Next → Video elements (skip) → Initial check (wait for "Checks complete. No issues found.")
   → Visibility.
9. **Schedule:** expand Schedule.
   - Time zone: pick `(GMT+0530) Local Time`.
   - The date picker shifts between screenshot and click: once it scheduled **Nov** 14 instead
     of Oct 14. Open the picker, take a fresh screenshot, click the day, then **read the field
     back**.
   - The time field opens a list; `find` the exact option ("7:30 PM") and click it.
   - Then click **Schedule** (only with the owner's explicit go-ahead to publish or schedule).
10. **Verify the saved video**, not the dialog. Open `https://studio.youtube.com/video/<id>/edit`
    and read back the title, description (length, chapters, links), thumbnail, visibility
    "Scheduled", and the SD/HD quality badges.

Channel analytics ("When your viewers are on YouTube") may fail to load. Then use the timing
guidance in copy.md and say it's judgement.

## Instagram profile (creator)

- Read state first: `/accounts/edit/` (bio, website note), `/accounts/privacy_setting/` (the
  private toggle), `/accounts/convert_to_professional_account/` (if offered, the account is
  personal).
- **Ask before changing anything.** The owner chose every value; the name can change only
  **2× per 14 days**.
- **Bio:** `/accounts/edit/` → the textarea (150 characters) → Submit. The final:
  `🔬 Pathologist · 🎓 Educator · 🧭 Advisor · 📚 Researcher⏎AI in Healthcare & AI Security⏎Helping doctors use AI safely 👇 videos · 1:1`
- **Name:** the web edit page doesn't offer it. Go to
  `accountscenter.instagram.com/profiles/` → the Instagram profile → Name → `cmd+a` → type →
  Done. Final: `Dr. Atul Tiwari | AI in Healthcare`.
- **Creator account:** convert page → Creator → Next → Next → search the category ("Doctor") →
  tick "Show category on profile" → Done → confirm "Switch to a professional account?" →
  Continue.
- **Phone only** (tell the owner): profile photo, links (Edit profile → Links: video, booking,
  WhatsApp), highlights, the first post.
- The "Switch" link beside your own account on the web home page is the account switcher, not a
  sign of duplicates. Check `accountscenter.instagram.com/profiles/`: one Instagram profile.

## Brand accounts (e.g. @vedantresearchlabs)

**Account creation is the owner's job; the agent must not create accounts.** Give the steps:
in the app, Profile → username → Add Instagram account → Create new account → username → share
the login → Business account (category Education/Research) → the blue seal as the profile
photo. Optionally connect the brand's Facebook Page through Meta Business Suite. Post from the
personal account and invite the brand as a **Collab** co-author. After the owner creates it, the
agent can set the bio and category (with approval).
