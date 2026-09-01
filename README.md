# Jessie Y. Domingo Portfolio

A dependency-free, static career portfolio. It highlights the Nodeya product ecosystem—especially NexOne—alongside NexAds, Nexora, enterprise modernization work, and IT leadership. It can be deployed directly to Cloudflare Pages or GitHub Pages.

## Before publishing

1. Confirm the email, LinkedIn, and phone details in `index.html` before publishing.
2. The current DOCX resume is included as `Jessie_Domingo_Updated_Senior_Software_Engineer_Resume.docx`; replace it with a PDF later if preferred.
3. Review every project statement and remove any employer-confidential or unverified claim.
4. Do not commit `.env` files, API keys, database dumps, or private screenshots.
5. Generate the ElevenLabs narration files from `VOICEOVER_SCRIPTS.md` and place them in `audio/` so the Voice guide can play them during section and product transitions.

## Deploy to Cloudflare Pages

1. Create a new GitHub repository and push this folder.
2. In Cloudflare: **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the repository.
4. Set **Framework preset** to `None`; leave build command blank; set **Build output directory** to `.`.
5. Deploy. Cloudflare will provide a free `pages.dev` URL.

## Local preview

Open `index.html` in a browser. No build step is required.

## Files to publish

- `index.html`
- `styles.css`, `compact.css`, `viewport.css`, and `transparent-header.css`
- `script.js`
- `audio/*.mp3`
- `Jessie_Domingo_Updated_Senior_Software_Engineer_Resume.docx`
- `VOICEOVER_SCRIPTS.md`
- `README.md`
- `.gitignore`
- Public product showcase folders: `NexOne/`, `NexAds/`, `Nexora/`, `Nodeya-Platform/`, `Eljin-Employee-Portal/`, and `NexGrid/`

Local review screenshots and superseded resume copies are excluded through `.gitignore`.
The product showcase folders contain documentation only; application source code and confidential operational material are intentionally excluded.
