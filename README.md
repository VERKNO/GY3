# G4M — Gym Basics

A one-page, plain-language guide to starting resistance training: what "resistance" means, how to structure a
training week, when to add weight, general do's and don'ts, and common myths vs facts (like the 2000-calorie
"danger" myth).

**This is general information for healthy adults, not a personalised program or medical advice.**

## Use it

Open `index.html` in a browser, or visit the published site. Use the **ID / EN** button top-right to switch
between English and Indonesian. The **Apps** menu links to Andrew's other apps (e.g. [L4NG](https://verkno.github.io/l4ng/)).

No installation, no build step, no data collection.

## For contributors

Static site, no build tools:
- `index.html` — all content, each translatable string marked with `data-en` / `data-id` on the element
- `style.css` — single stylesheet
- `js/app.js` — language toggle (persists to `localStorage`) and the apps-hub dropdown menu

To edit content: change the English text in `data-en`, the Indonesian in `data-id`, and the element's own text
(shown before JS runs / for no-JS fallback) to match `data-en`.

To add a new section: follow the existing `<section class="block">` / `<section class="block alt">` pattern
(alternating background), add a jump-link in `.jump-row`, and keep each translatable node's visible text equal
to its `data-en` value.
