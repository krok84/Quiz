# Bar Prep Quiz

A static quiz and flashcard app for US bar exam subjects (Contracts, Torts, Constitutional Law, Civil Procedure, Criminal Law, Property), in Ukrainian and English. Plain HTML, CSS and JavaScript: no build step, no server, no API keys.

**Educational tool, not legal advice.**

## Files

- `index.html`: the page
- `style.css`: styles (mobile first, light and dark themes)
- `app.js`: app logic (quiz, flashcards, shuffling, progress in `localStorage`)
- `questions.json`: the question bank
- `.nojekyll`: tells GitHub Pages to serve files as they are

## Adding questions

Append objects to `questions.json`:

```json
{
  "id": "torts-6",
  "subject": "torts",
  "question": { "en": "…", "uk": "…" },
  "options": { "en": ["…", "…", "…", "…"], "uk": ["…", "…", "…", "…"] },
  "answer": 0,
  "explanation": { "en": "…", "uk": "…" }
}
```

- `subject` is one of `contracts`, `torts`, `conlaw`, `civpro`, `crim`, `property`.
- `answer` is the index (0–3) of the correct option. Options are shuffled on screen, so order does not matter.
- `id` must be unique; saved progress is keyed by it.

## Running locally

Browsers block `fetch()` for files opened straight from disk, so serve the folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publishing on GitHub Pages

Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)** → Save. The site appears at `https://<username>.github.io/<repo>/` within a minute or two.
