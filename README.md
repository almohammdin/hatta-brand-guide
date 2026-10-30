# Hatta brand guide

Version 2.2 · 2026-10-30

Published at https://almohammdin.github.io/hatta-brand-guide/

- Edit the website in index.html and guide-v2.css / guide-v2.js.
- After editorial changes, run `node scripts/export-reference.mjs` to synchronize both Markdown references.
- Update downloads/tokens.json, downloads/brand.css and the version/date together when changing design rules.
- Preserve original logo and font bytes; assets/manifest.json records source provenance.
- templates/ contains editable HTML composition examples.
- skills/apply-hatta-brand/ contains the downloadable execution skill and references. Downloading SKILL.md does not install it automatically.
- Existing downloads/El-Messiri.zip and the link-preview image remain part of the repository.

## Bilingual guide

- Arabic: index.html. English: en.html. Both use the same original assets.
- Edit translations/en.json when Arabic source text changes. Missing translations stop the build.
- Run `python3 scripts/build-english.py` then `node scripts/export-reference.mjs`.
- English typography specimens intentionally preserve Arabic script to demonstrate the approved glyphs.
- Language switching uses real links and preserves the section anchor with JavaScript.
- Arabic example templates are explicitly labeled in the English guide.
