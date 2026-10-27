# Editing Why War's public website

The site is plain HTML/CSS/JavaScript under `dist/`. Vercel serves that folder directly; no build step or dependencies are required.

Preserve creator credit (Shlok Belgamwar) and the prominent status: **rough concept / early prototype / work in progress**. Keep changes within the user's requested scope. Use the existing screenshots and video where relevant. Do not copy private Unity source, raw imported assets, credentials, or deployment metadata into this public repository.

After changes, run `node --check dist/script.js`, verify local asset paths and internal anchors, and inspect relevant page sections. Check copied credit text, `dist/concept.md`, and SEO/social metadata if changing the title, URL, or authorship wording.

Production deploys from `main` through the connected Vercel Git integration. Preserve `vercel.json`'s `dist` output directory and keep `.vercel/` ignored. Do not add a framework, build toolchain, or service dependency for simple content edits.
