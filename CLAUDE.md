# Why War website

Read `AGENTS.md` before making changes. This is a buildless static website served from `dist/` by Vercel.

- Edit content in `dist/index.html`, styling in `dist/style.css`, and small browser interactions in `dist/script.js`.
- Preserve Shlok Belgamwar's creator credit and the rough-concept / early-prototype status.
- Keep `dist/concept.md`, copied citation text, and social/canonical metadata consistent with the live URL: https://whywar-website.vercel.app/.
- Run `node --check dist/script.js` and check affected links after changes.
- Commit and push approved changes to GitHub. The connected Vercel project deploys `main` automatically.
- The Unity project is a separate private repository; do not add its source or raw imported assets here.
