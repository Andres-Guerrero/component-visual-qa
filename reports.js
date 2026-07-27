/* SupplyHouse Component Visual QA — report data.
   To add a component: append an object to VQA_REPORTS with
   { id, name, group, status, statusType: 'pass'|'fail'|'wip', html, swatches? }.
   'html' is injected into the report pane. If you include a
   <div id="vqa-swatches" class="swatchgrid">…3 header cells…</div> and a
   'swatches' array, the renderer fills in the Figma-vs-Storybook button rows. */
window.VQA_REPORTS = [
  {
    id: 'purchase-button',
    name: 'Purchase Button',
    group: 'Actions',
    status: 'Pass · notes',
    statusType: 'pass',
    swatches: [
      {n:'Default',        bg:'#f15c02', fg:'#ffffff', bd:'#f15c02', icon:'cart',  label:'ADD TO CART'},
      {n:'Hover',          bg:'#e05400', fg:'#ffffff', bd:'#e05400', icon:'cart',  label:'ADD TO CART'},
      {n:'Press',          bg:'#d63d08', fg:'#ffffff', bd:'#d63d08', icon:'cart',  label:'ADD TO CART'},
      {n:'Disabled',       bg:'#dcdcdc', fg:'#ffffff', bd:'#dcdcdc', icon:'cart',  label:'ADD TO CART'},
      {n:'Loading-Add',    bg:'#ffffff', fg:'#f15c02', bd:'#f15c02', icon:'spin',  label:'ADDING TO CART'},
      {n:'Loading-Update', bg:'#ffffff', fg:'#f15c02', bd:'#f15c02', icon:'spin',  label:'UPDATING CART'},
      {n:'Added',          bg:'#ffffff', fg:'#f15c02', bd:'#f15c02', icon:'check', label:'ADDED'},
      {n:'Active-Added',   bg:'#ffffff', fg:'#f15c02', bd:'#f15c02', icon:'check', label:'ADDED'},
      {n:'Active Hover',   bg:'#f8e6da', fg:'#d63d08', bd:'#d63d08', icon:'none',  label:'EDIT QTY ABOVE'}
    ],
    html: `
      <h1 class="rt">Purchase Button</h1>
      <p class="rmeta">Figma component 427:3453 · Frame doc 15904:301476 · Storybook /docs/actions-purchase-button · Captured 2026-07-27</p>
      <p>The primary commerce call-to-action for adding items to the cart — highest-emphasis (orange fill), two sizes, the full range of interactive/loading/confirmation states, and an optional leading icon (<code>Show icon</code>, default on). Built on auto-layout with token-driven padding, height, and spacing; <strong>fills its container width</strong> with the label and icon centered.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Colors, sizing, type &amp; elevation all match — 9 states × 2 sizes</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS · PROPS</p><div class="val">Pass</div><p class="sub">9 states, both sizes, and Show icon on/off present</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Acknowledged</div><p class="sub">Passes bold/large AA (3:1); below 4.5:1 normal-text — team decision</p></div>
      </div>
      <p>The developer's token translation is <strong>faithful</strong> — every state renders the exact bound values, including the elevation effect. The label-contrast item is a <em>known, documented</em> design decision (kept here for the record), not a build defect.</p>

      <h2>1. Token fidelity</h2>
      <h3>Color per state</h3>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma variable</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Default</td><td>bg / text·icon</td><td><span class="chip" style="background:#f15c02"></span><span class="mono">#f15c02</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span></td><td class="mono">#f15c02 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>bg / text·icon</td><td><span class="chip" style="background:#e05400"></span><span class="mono">#e05400</span> / <span class="mono">#ffffff</span></td><td class="mono">#e05400 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Press (active)</td><td>bg / text·icon</td><td><span class="chip" style="background:#d63d08"></span><span class="mono">#d63d08</span> / <span class="mono">#ffffff</span></td><td class="mono">#d63d08 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / text·icon</td><td><span class="chip" style="background:#dcdcdc"></span><span class="mono">#dcdcdc</span> / <span class="mono">#ffffff</span></td><td class="mono">#dcdcdc / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Loading-Add</td><td>bg / text·icon·border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#f15c02"></span><span class="mono">#f15c02</span></td><td class="mono">#ffffff / #f15c02</td><td class="m y">✓</td></tr>
        <tr><td>Loading-Update</td><td>bg / text·icon·border</td><td class="mono">#ffffff / #f15c02</td><td class="mono">#ffffff / #f15c02</td><td class="m y">✓</td></tr>
        <tr><td>Added</td><td>bg / text·icon·border</td><td class="mono">#ffffff / #f15c02</td><td class="mono">#ffffff / #f15c02</td><td class="m y">✓</td></tr>
        <tr><td>Active-Added</td><td>bg / text·icon·border</td><td class="mono">#ffffff / #f15c02</td><td class="mono">#ffffff / #f15c02</td><td class="m y">✓</td></tr>
        <tr><td>Active Hover</td><td>bg / text·icon·border</td><td><span class="chip" style="background:#f8e6da"></span><span class="mono">#f8e6da</span> / <span class="chip" style="background:#d63d08"></span><span class="mono">#d63d08</span></td><td class="mono">#f8e6da / #d63d08</td><td class="m y">✓</td></tr>
      </table>

      <h3>Elevation &amp; effects</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Elevation (filled states)</td><td class="mono">Elevation/-2y — inner shadow, offset 0/−2, rgba(0,0,0,0.25)</td><td class="mono">box-shadow: inset 0 -2px 0 rgba(0,0,0,0.25)</td><td class="m y">✓</td></tr>
        <tr><td>Corner radius</td><td class="mono">0px</td><td class="mono">0px</td><td class="m y">✓</td></tr>
      </table>

      <h3>Sizing &amp; typography</h3>
      <table>
        <tr><th>Property</th><th>Large (md)</th><th>Small (sm)</th><th>Match</th></tr>
        <tr><td>Height</td><td>50px</td><td>36px</td><td class="m y">✓</td></tr>
        <tr><td>Padding (Y / X)</td><td>12px / 32px</td><td>8px / 28px</td><td class="m y">✓</td></tr>
        <tr><td>Icon gap</td><td>8px</td><td>8px</td><td class="m y">✓</td></tr>
        <tr><td>Font</td><td>Maison Neue Bold</td><td>Maison Neue Bold</td><td class="m y">✓</td></tr>
        <tr><td>Size / line-height</td><td>13px / 1.6 (20.8px)</td><td>11px / 1.0 (11px)</td><td class="m y">✓</td></tr>
        <tr><td>Letter-spacing</td><td>0</td><td>2% (0.22px)</td><td class="m y">✓</td></tr>
        <tr><td>Transform</td><td>UPPERCASE</td><td>UPPERCASE</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side — states (Large)</h2>
      <p>Rendered from the actual token values on each side. Because every value matches, the Figma spec and the Storybook build are visually identical per state. (Facsimile — elevation shadow not drawn.)</p>
      <div id="vqa-swatches" class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>All 9 states (Default, Hover, Press, Active Hover, Disabled, Added, Active-Added, Loading-Add, Loading-Update) render in both sizes and match Figma. The <code>Show icon</code> boolean (default on) is covered by the "Icon — on vs off" story; turning it off hides the leading icon and collapses the icon-gap, as documented. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <h3>Focus &amp; keyboard</h3>
      <p>Per the frame doc: Tab to focus, Enter or Space to activate; disabled is not focusable and its state is conveyed beyond color alone. Keyboard focus shows a 2px outer ring in <code>color.focus.ring</code>. The build confirms the foundation tokens — <span class="mono">--color-focus-ring: #005fcc</span> and <span class="mono">--stroke-focus-ring-width: 2px</span> — matching the spec. <span class="m y">✓ Match</span></p>

      <h3>Contrast (label vs. fill)</h3>
      <p>Labels are bold uppercase. The team documents these ratios and treats them against the bold/large-text threshold (3:1):</p>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Team result (frame doc)</th><th>Normal-text AA (4.5:1)</th></tr>
        <tr><td>Default</td><td>3.35:1</td><td>Pass (bold/large AA)</td><td class="m n">Below</td></tr>
        <tr><td>Hover</td><td>3.86:1</td><td>Pass (bold/large AA)</td><td class="m n">Below</td></tr>
        <tr><td>Press</td><td>4.64:1</td><td>Pass (normal + large AA)</td><td class="m y">Meets</td></tr>
        <tr><td>Active Hover</td><td>3.82:1</td><td>Pass (bold/large AA)</td><td class="m n">Below</td></tr>
        <tr><td>Added / Active-Added / Loading-Add / Loading-Update</td><td>3.35:1</td><td>Pass (bold/large AA)</td><td class="m n">Below</td></tr>
        <tr><td>Disabled</td><td>1.37:1</td><td>Exempt (disabled control)</td><td>Exempt</td></tr>
      </table>
      <div class="callout warn">
        <p><span class="tag fail">QA-PB-A11Y-01 · KNOWN / ACKNOWLEDGED</span></p>
        <strong>Label contrast is below WCAG AA for normal text on the light-label states.</strong> Storybook's axe panel flags these against 4.5:1 because at 13px (Large) / 11px (Small) the bold labels sit below WCAG's large-text <em>size</em> threshold (≈18.66px bold), so the 3:1 exemption the frame doc cites doesn't strictly apply. Under normal-text AA, only <strong>Press (4.64:1)</strong> clears 4.5:1.
        <br><br>The team has documented this and decided: <em>"Don't change token values to chase contrast without team discussion."</em> Kept here for the record per QA policy — no code change implied.
      </div>

      <h2>5. Observations (non-blocking)</h2>
      <div class="callout">
        <p><span class="tag obs">QA-PB-OBS-01</span> <strong>Elevation, not a border.</strong> The filled states use an inner-shadow elevation (<code>Elevation/-2y</code>), and the build reproduces it exactly (<span class="mono">inset 0 -2px 0 rgba(0,0,0,0.25)</span>). The 2px same-color line on filled states is an intentional height-parity device with the outlined states — not a visible border. Match.</p>
        <p style="margin:0"><span class="tag obs">QA-PB-OBS-02</span> <strong>No fixed width.</strong> The button fills its container and centers its content; there is no fixed-width spec. Behaves as designed.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-PB-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Colors, sizing, typography, and elevation match Figma across 9 states × 2 sizes.</td></tr>
        <tr><td class="id">QA-PB-STATE</td><td>States · variants · props</td><td><span class="tag pass">PASS</span></td><td>9 states, both sizes, and Show icon on/off present and correct.</td></tr>
        <tr><td class="id">QA-PB-FOCUS</td><td>Focus &amp; keyboard</td><td><span class="tag pass">PASS</span></td><td>Focus-ring tokens (#005FCC / 2px) match the doc; Tab/Enter/Space; disabled not focusable.</td></tr>
        <tr><td class="id">QA-PB-A11Y-01</td><td>Contrast</td><td><span class="tag fail">ACKNOWLEDGED</span></td><td>Light-label states below 4.5:1 normal-text; team treats as bold/large (3:1). Documented decision — no token change without discussion.</td></tr>
        <tr><td class="id">QA-PB-OBS-01</td><td>Elevation</td><td><span class="tag pass">MATCH</span></td><td>Inner-shadow elevation reproduced; same-color border is a height-parity device.</td></tr>
        <tr><td class="id">QA-PB-OBS-02</td><td>Width</td><td><span class="tag obs">INFO</span></td><td>Fills container; no fixed width, by design.</td></tr>
      </table>
    `
  },
  {
    id: 'secondary-button',
    name: 'Secondary Button',
    group: 'Actions',
    status: 'Pass',
    statusType: 'pass',
    swatches: [
      {n:'Default',  bg:'#07729c', fg:'#ffffff', bd:'#07729c', icon:'none', label:'CONTINUE'},
      {n:'Hover',    bg:'#066488', fg:'#ffffff', bd:'#066488', icon:'none', label:'CONTINUE'},
      {n:'Press',    bg:'#055271', fg:'#ffffff', bd:'#055271', icon:'none', label:'CONTINUE'},
      {n:'Disabled', bg:'#dcdcdc', fg:'#ffffff', bd:'#dcdcdc', icon:'none', label:'CONTINUE'}
    ],
    html: `
      <h1 class="rt">Secondary Button</h1>
      <p class="rmeta">Figma component 429:3121 · Frame doc 15905:306542 · Storybook /docs/actions-secondary-button · Captured 2026-07-27</p>
      <p>The medium-emphasis action button (solid blue fill) that pairs with the Primary (Purchase) button for less-dominant calls to action. Two sizes and four states (Default, Hover, Press, Disabled), with an optional leading icon (<code>Show icon</code>, default off). Auto-layout, token-driven; <strong>fills its container width</strong> with content centered.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Colors, sizing, type &amp; elevation all match — 4 states × 2 sizes</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS · PROPS</p><div class="val">Pass</div><p class="sub">4 states, both sizes, Show icon; +loading/anchor in build (see note)</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">All states meet WCAG AA (5.39–8.57:1); focus ring matches</p></div>
      </div>
      <p>Clean pass. The token translation is faithful across all four states and both sizes, and — unlike the orange Purchase button — the blue fill clears WCAG AA contrast on every state.</p>

      <h2>1. Token fidelity</h2>
      <h3>Color per state</h3>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma variable</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Default</td><td>bg / text</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span></td><td class="mono">#07729c / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>bg / text</td><td><span class="chip" style="background:#066488"></span><span class="mono">#066488</span> / <span class="mono">#ffffff</span></td><td class="mono">#066488 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Press (active)</td><td>bg / text</td><td><span class="chip" style="background:#055271"></span><span class="mono">#055271</span> / <span class="mono">#ffffff</span></td><td class="mono">#055271 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / text</td><td><span class="chip" style="background:#dcdcdc"></span><span class="mono">#dcdcdc</span> / <span class="mono">#ffffff</span></td><td class="mono">#dcdcdc / #ffffff</td><td class="m y">✓</td></tr>
      </table>

      <h3>Elevation &amp; effects</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Elevation</td><td class="mono">Elevation/-2y — inner shadow, offset 0/−2, rgba(0,0,0,0.25)</td><td class="mono">box-shadow: inset 0 -2px 0 rgba(0,0,0,0.25)</td><td class="m y">✓</td></tr>
        <tr><td>Border / radius</td><td class="mono">none / 0px</td><td class="mono">none / 0px</td><td class="m y">✓</td></tr>
      </table>

      <h3>Sizing &amp; typography</h3>
      <table>
        <tr><th>Property</th><th>Large (md)</th><th>Small (sm)</th><th>Match</th></tr>
        <tr><td>Height</td><td>50px</td><td>36px</td><td class="m y">✓</td></tr>
        <tr><td>Padding (Y / X)</td><td>12px / 32px</td><td>8px / 28px</td><td class="m y">✓</td></tr>
        <tr><td>Icon gap</td><td>8px</td><td>8px</td><td class="m y">✓</td></tr>
        <tr><td>Font</td><td>Maison Neue Bold</td><td>Maison Neue Bold</td><td class="m y">✓</td></tr>
        <tr><td>Size / line-height</td><td>13px / 1.6 (20.8px)</td><td>11px / 1.0 (11px)</td><td class="m y">✓</td></tr>
        <tr><td>Letter-spacing</td><td>0</td><td>2% (0.22px)</td><td class="m y">✓</td></tr>
        <tr><td>Transform</td><td>UPPERCASE</td><td>UPPERCASE</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side — states (Large)</h2>
      <p>Rendered from the actual token values on each side; identical per state. (Facsimile — elevation shadow not drawn.)</p>
      <div id="vqa-swatches" class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>All 4 states render in both sizes and match Figma. The <code>Show icon</code> boolean (default off) is covered by the "With icons" story. <span class="m y">✓ Pass</span></p>
      <div class="callout info">
        <p style="margin:0"><span class="tag obs">QA-SB-OBS-02</span> <strong>Build exposes more than the doc.</strong> Storybook ships <code>isLoading</code> and an "As anchor (href)" story, but the frame doc lists only 4 states (Default, Hover, Press, Disabled). Not a defect — but confirm whether loading / anchor rendering are intended for Secondary and, if so, add them to the component doc so design and code agree.</p>
      </div>

      <h2>4. Accessibility</h2>
      <h3>Focus &amp; keyboard</h3>
      <p>Tab to focus, Enter or Space to activate; disabled is not focusable and conveyed beyond color. The build confirms the foundation focus tokens — <span class="mono">--color-focus-ring: #005fcc</span> and <span class="mono">--stroke-focus-ring-width: 2px</span> — matching the doc. <span class="m y">✓ Match</span></p>

      <h3>Contrast (label vs. fill)</h3>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Default</td><td>5.39:1</td><td class="m y">Pass AA (normal + large)</td></tr>
        <tr><td>Hover</td><td>6.59:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Press</td><td>8.57:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Disabled</td><td>1.37:1</td><td>Exempt (disabled control)</td></tr>
      </table>
      <div class="callout info"><strong>No contrast issues.</strong> Every interactive state clears the 4.5:1 normal-text threshold; the build's computed colors match these ratios. Nothing to escalate.</div>

      <h2>5. Observations (non-blocking)</h2>
      <div class="callout">
        <p style="margin:0"><span class="tag obs">QA-SB-OBS-01</span> <strong>Elevation, not a border.</strong> The blue fill uses the inner-shadow elevation (<code>Elevation/-2y</code>), reproduced exactly in the build (<span class="mono">inset 0 -2px 0 rgba(0,0,0,0.25)</span>). No border, matching Figma.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-SB-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Colors, sizing, typography, and elevation match Figma across 4 states × 2 sizes.</td></tr>
        <tr><td class="id">QA-SB-STATE</td><td>States · variants · props</td><td><span class="tag pass">PASS</span></td><td>4 states, both sizes, Show icon (default off) present and correct.</td></tr>
        <tr><td class="id">QA-SB-FOCUS</td><td>Focus &amp; keyboard</td><td><span class="tag pass">PASS</span></td><td>Focus-ring tokens (#005FCC / 2px) match; Tab/Enter/Space; disabled not focusable.</td></tr>
        <tr><td class="id">QA-SB-A11Y</td><td>Contrast</td><td><span class="tag pass">PASS</span></td><td>All interactive states 5.39–8.57:1 (≥ 4.5:1 AA); disabled exempt.</td></tr>
        <tr><td class="id">QA-SB-OBS-01</td><td>Elevation</td><td><span class="tag pass">MATCH</span></td><td>Inner-shadow elevation reproduced; no border, per Figma.</td></tr>
        <tr><td class="id">QA-SB-OBS-02</td><td>Doc vs build</td><td><span class="tag obs">CONFIRM</span></td><td>Build has isLoading + as-anchor beyond the doc's 4 states; reconcile doc &amp; code.</td></tr>
      </table>
    `
  },
  {
    id: 'tertiary-button',
    name: 'Tertiary Button',
    group: 'Actions',
    status: 'Pass',
    statusType: 'pass',
    swatches: [
      {n:'Default',  bg:'#ffffff', fg:'#07729c', bd:'#07729c', icon:'none', label:'TERTIARY'},
      {n:'Hover',    bg:'#eff5fd', fg:'#07729c', bd:'#07729c', icon:'none', label:'TERTIARY'},
      {n:'Press',    bg:'#ffffff', fg:'#07729c', bd:'#055271', icon:'none', label:'TERTIARY'},
      {n:'Disabled', bg:'#f8f8f8', fg:'#c4c4c4', bd:'#e3e3e3', icon:'none', label:'TERTIARY'}
    ],
    html: `
      <h1 class="rt">Tertiary Button</h1>
      <p class="rmeta">Figma component 3597:3722 · Frame doc 15905:306580 · Storybook /docs/actions-tertiary-button · Captured 2026-07-27</p>
      <p>The lowest-emphasis action button, rendered as an outline (white fill, blue border and label) for least-dominant or supporting actions. Two sizes and four states (Default, Hover, Press, Disabled), optional leading icon (<code>Show icon</code>, default off). Auto-layout, token-driven padding/height/spacing with a token-bound 2px border; <strong>fills its container width</strong>.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Colors, border, sizing &amp; type all match — 4 states × 2 sizes</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS · PROPS</p><div class="val">Pass</div><p class="sub">4 states, both sizes, Show icon (default off)</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">Labels AA (4.92–5.39:1); border affordance ≥ 3:1 non-text</p></div>
      </div>
      <p>Clean pass. The outline treatment is fully token-driven and reproduced exactly, including the darker press border and the muted disabled palette. Correctly uses a border (not the elevation effect the filled buttons carry).</p>

      <h2>1. Token fidelity</h2>
      <h3>Color per state</h3>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma variable</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Default</td><td>bg / text / border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> / <span class="mono">#07729c</span></td><td class="mono">#ffffff / #07729c / #07729c</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>bg / text / border</td><td><span class="chip" style="background:#eff5fd"></span><span class="mono">#eff5fd</span> / <span class="mono">#07729c</span> / <span class="mono">#07729c</span></td><td class="mono">#eff5fd / #07729c / #07729c</td><td class="m y">✓</td></tr>
        <tr><td>Press (active)</td><td>bg / text / border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="mono">#07729c</span> / <span class="chip" style="background:#055271"></span><span class="mono">#055271</span></td><td class="mono">#ffffff / #07729c / #055271</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / text / border</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> / <span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span></td><td class="mono">#f8f8f8 / #c4c4c4 / #e3e3e3</td><td class="m y">✓</td></tr>
      </table>

      <h3>Border, radius &amp; effects</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Border width</td><td class="mono">2px (stroke token)</td><td class="mono">2px solid</td><td class="m y">✓</td></tr>
        <tr><td>Elevation</td><td class="mono">none (outline button)</td><td class="mono">box-shadow: none</td><td class="m y">✓</td></tr>
        <tr><td>Corner radius</td><td class="mono">0px</td><td class="mono">0px</td><td class="m y">✓</td></tr>
      </table>

      <h3>Sizing &amp; typography</h3>
      <table>
        <tr><th>Property</th><th>Large (md)</th><th>Small (sm)</th><th>Match</th></tr>
        <tr><td>Height</td><td>50px</td><td>36px</td><td class="m y">✓</td></tr>
        <tr><td>Padding (Y / X)</td><td>12px / 32px</td><td>8px / 28px</td><td class="m y">✓</td></tr>
        <tr><td>Icon gap</td><td>8px</td><td>8px</td><td class="m y">✓</td></tr>
        <tr><td>Font</td><td>Maison Neue Bold</td><td>Maison Neue Bold</td><td class="m y">✓</td></tr>
        <tr><td>Size / line-height</td><td>13px / 1.6 (20.8px)</td><td>11px / 1.0 (11px)</td><td class="m y">✓</td></tr>
        <tr><td>Letter-spacing</td><td>0</td><td>2% (0.22px)</td><td class="m y">✓</td></tr>
        <tr><td>Transform</td><td>UPPERCASE</td><td>UPPERCASE</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side — states (Large)</h2>
      <p>Rendered from the actual token values on each side; identical per state.</p>
      <div id="vqa-swatches" class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>All 4 states render in both sizes and match Figma. The <code>Show icon</code> boolean (default off) toggles an optional leading icon. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <h3>Focus &amp; keyboard</h3>
      <p>Tab to focus, Enter or Space to activate; disabled is not focusable and conveyed beyond color. Build confirms the foundation focus tokens — <span class="mono">--color-focus-ring: #005fcc</span> and <span class="mono">--stroke-focus-ring-width: 2px</span> — matching the doc. <span class="m y">✓ Match</span></p>

      <h3>Contrast</h3>
      <table>
        <tr><th>State</th><th>Label ratio</th><th>Result</th></tr>
        <tr><td>Default</td><td>5.39:1</td><td class="m y">Pass AA (normal + large)</td></tr>
        <tr><td>Hover</td><td>4.92:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Press</td><td>5.39:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Disabled</td><td>1.64:1</td><td>Exempt (disabled control)</td></tr>
      </table>
      <div class="callout info"><strong>Border affordance:</strong> the outline is the button's primary affordance. The Default/Press border (<span class="mono">#07729C</span> on white) is 5.39:1 — above the 3:1 non-text minimum; disabled border is exempt. No issues.</div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-TB-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Colors, border width, sizing, and typography match Figma across 4 states × 2 sizes.</td></tr>
        <tr><td class="id">QA-TB-STATE</td><td>States · variants · props</td><td><span class="tag pass">PASS</span></td><td>4 states, both sizes, Show icon (default off).</td></tr>
        <tr><td class="id">QA-TB-FOCUS</td><td>Focus &amp; keyboard</td><td><span class="tag pass">PASS</span></td><td>Focus-ring tokens (#005FCC / 2px) match; Tab/Enter/Space; disabled not focusable.</td></tr>
        <tr><td class="id">QA-TB-A11Y</td><td>Contrast</td><td><span class="tag pass">PASS</span></td><td>Labels 4.92–5.39:1 (≥ 4.5:1 AA); border affordance 5.39:1 (≥ 3:1); disabled exempt.</td></tr>
        <tr><td class="id">QA-TB-OBS-01</td><td>Effects</td><td><span class="tag pass">MATCH</span></td><td>Correctly uses a 2px border, no elevation — per the outline spec.</td></tr>
      </table>
    `
  }
];
