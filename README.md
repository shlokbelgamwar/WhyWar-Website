# Why War — public concept website

**Live page:** https://whywar-website.vercel.app/  
**Creator:** Shlok Belgamwar  
**Status:** Rough VR concept and early prototype; visuals and interactions are a work in progress.

This repository contains the public project page, rendered screenshots, downloadable concept record, and a 3:40 walkthrough with game audio. The complete Unity project and imported raw assets remain in a separate private archive.

## Edit with Claude, Codex, or any editor

This is a buildless HTML/CSS/JavaScript site with no framework and no package dependencies.

| File | What to edit |
| --- | --- |
| `dist/index.html` | Page content, sections, creator credit, metadata |
| `dist/style.css` | Layout, typography, responsive styling |
| `dist/script.js` | Copyable credit and small browser interactions |
| `dist/concept.md` | Downloadable concept record |
| `dist/assets/` | Presentation images and web-encoded walkthrough |
| `vercel.json` | Static hosting configuration; publishes `dist/` |

Clone this repository or give your coding assistant access to it. Edit the files above, review the changes, then commit and push to `main`. The connected Vercel project publishes the production branch automatically; other branches receive preview deployments when enabled.

## Local preview

```sh
python3 -m http.server 8765 --directory dist
```

Open `http://localhost:8765`. JavaScript can be checked with `node --check dist/script.js`. No build command is needed on Vercel; use the **Other** framework preset and **dist** output directory.

## Preserve the intent

- Keep the rough-concept / work-in-progress wording visible.
- Credit Shlok Belgamwar for concept, design, and creative direction.
- Preserve the theme of memory, attachment, and the three-object choice.
- Keep the public page separate from the private Unity archive.
- Keep the walkthrough's game audio. Do not suggest this editor simulation is a physical-headset test.
- Keep absolute metadata, concept-record links, and the copied citation consistent with the production URL.

## Rights and attribution

Original project work is copyright 2026 Shlok Belgamwar. Third-party materials retain their respective rights. This public presentation does not grant permission to redistribute the Unity project or imported source assets. The prototype used Unity samples, third-party art/audio, and AI-assisted implementation.
