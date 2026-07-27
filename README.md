# SupplyHouse — Component Visual QA

An interactive report of Figma → Storybook design-to-code parity for
`@supplyhouse/react-core-ui`. Storybook-style layout: components on the left,
the QA report on the right. Static site — no build step, GitHub Pages ready.

## Files

- `index.html` — the app shell + renderer (sidebar, routing, styling).
- `reports.js` — the report data. **This is the only file you edit to add a component.**
- `.nojekyll` — tells GitHub Pages to serve the files as-is.

## Run locally

Open `index.html` in a browser. That's it.

## Add a component

Append one object to `VQA_REPORTS` in `reports.js`:

```js
{
  id: 'selectable-card',            // url slug (#selectable-card)
  name: 'Selectable Card',
  group: 'Inputs',                  // sidebar group
  status: 'Pass',                   // short label shown in the sidebar
  statusType: 'pass',               // 'pass' | 'fail' | 'wip' (dot color)
  html: `…report markup…`,          // injected into the report pane
  swatches: [ … ]                   // optional Figma-vs-Storybook button rows
}
```

## Publish on GitHub Pages

Repo: https://github.com/Andres-Guerrero/component-visual-qa
Live site: https://andres-guerrero.github.io/component-visual-qa/

One-time, from the repo folder in your terminal:

```bash
git remote add origin https://github.com/Andres-Guerrero/component-visual-qa.git
git branch -M main
git push -u origin main
```

Then enable Pages: **Settings → Pages → Source: Deploy from a branch → main / root**.
After that, every push redeploys automatically.

## Deploy status

- [x] Purchase Button
- [ ] (next component)
