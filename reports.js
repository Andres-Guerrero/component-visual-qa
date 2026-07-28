/* SupplyHouse Component Visual QA - report data.
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
    status: 'a11y note',
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
      <p>The primary commerce call-to-action for adding items to the cart - highest-emphasis (orange fill), two sizes, the full range of interactive/loading/confirmation states, and an optional leading icon (<code>Show icon</code>, default on). Built on auto-layout with token-driven padding, height, and spacing; <strong>fills its container width</strong> with the label and icon centered.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Colors, sizing, type &amp; elevation all match - 9 states × 2 sizes</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS · PROPS</p><div class="val">Pass</div><p class="sub">9 states, both sizes, and Show icon on/off present</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Acknowledged</div><p class="sub">Passes bold/large AA (3:1); below 4.5:1 normal-text - team decision</p></div>
      </div>
      <p>The developer's token translation is <strong>faithful</strong> - every state renders the exact bound values, including the elevation effect. The label-contrast item is a <em>known, documented</em> design decision (kept here for the record), not a build defect.</p>

      <h2>1. Token fidelity</h2>
      <h3>Color per state</h3>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
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
        <tr><td>Elevation (filled states)</td><td class="mono">Elevation/-2y - inner shadow, offset 0/−2, rgba(0,0,0,0.25)</td><td class="mono">box-shadow: inset 0 -2px 0 rgba(0,0,0,0.25)</td><td class="m y">✓</td></tr>
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

      <h2>2. Side-by-side - states (Large)</h2>
      <p>Rendered from the actual token values on each side. Because every value matches, the Figma spec and the Storybook build are visually identical per state. (Facsimile - elevation shadow not drawn.)</p>
      <div id="vqa-swatches" class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>All 9 states (Default, Hover, Press, Active Hover, Disabled, Added, Active-Added, Loading-Add, Loading-Update) render in both sizes and match Figma. The <code>Show icon</code> boolean (default on) is covered by the "Icon - on vs off" story; turning it off hides the leading icon and collapses the icon-gap, as documented. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <h3>Focus &amp; keyboard</h3>
      <p>Per the frame doc: Tab to focus, Enter or Space to activate; disabled is not focusable and its state is conveyed beyond color alone. Keyboard focus shows a 2px outer ring in <code>color.focus.ring</code>. The build confirms the foundation tokens - <span class="mono">--color-focus-ring: #005fcc</span> and <span class="mono">--stroke-focus-ring-width: 2px</span> - matching the spec. <span class="m y">✓ Match</span></p>

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
        <br><br>The team has documented this and decided: <em>"Don't change token values to chase contrast without team discussion."</em> Kept here for the record per QA policy - no code change implied.
      </div>

      <h2>5. Observations (non-blocking)</h2>
      <div class="callout">
        <p><span class="tag obs">QA-PB-OBS-01</span> <strong>Elevation, not a border.</strong> The filled states use an inner-shadow elevation (<code>Elevation/-2y</code>), and the build reproduces it exactly (<span class="mono">inset 0 -2px 0 rgba(0,0,0,0.25)</span>). The 2px same-color line on filled states is an intentional height-parity device with the outlined states - not a visible border. Match.</p>
        <p style="margin:0"><span class="tag obs">QA-PB-OBS-02</span> <strong>No fixed width.</strong> The button fills its container and centers its content; there is no fixed-width spec. Behaves as designed.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-PB-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Colors, sizing, typography, and elevation match Figma across 9 states × 2 sizes.</td></tr>
        <tr><td class="id">QA-PB-STATE</td><td>States · variants · props</td><td><span class="tag pass">PASS</span></td><td>9 states, both sizes, and Show icon on/off present and correct.</td></tr>
        <tr><td class="id">QA-PB-FOCUS</td><td>Focus &amp; keyboard</td><td><span class="tag pass">PASS</span></td><td>Focus-ring tokens (#005FCC / 2px) match the doc; Tab/Enter/Space; disabled not focusable.</td></tr>
        <tr><td class="id">QA-PB-A11Y-01</td><td>Contrast</td><td><span class="tag fail">ACKNOWLEDGED</span></td><td>Light-label states below 4.5:1 normal-text; team treats as bold/large (3:1). Documented decision - no token change without discussion.</td></tr>
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
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Colors, sizing, type &amp; elevation all match - 4 states × 2 sizes</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS · PROPS</p><div class="val">Pass</div><p class="sub">4 states, both sizes, Show icon; +loading/anchor in build (see note)</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">All states meet WCAG AA (5.39–8.57:1); focus ring matches</p></div>
      </div>
      <p>Clean pass. The token translation is faithful across all four states and both sizes, and - unlike the orange Purchase button - the blue fill clears WCAG AA contrast on every state.</p>

      <h2>1. Token fidelity</h2>
      <h3>Color per state</h3>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Default</td><td>bg / text</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span></td><td class="mono">#07729c / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>bg / text</td><td><span class="chip" style="background:#066488"></span><span class="mono">#066488</span> / <span class="mono">#ffffff</span></td><td class="mono">#066488 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Press (active)</td><td>bg / text</td><td><span class="chip" style="background:#055271"></span><span class="mono">#055271</span> / <span class="mono">#ffffff</span></td><td class="mono">#055271 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / text</td><td><span class="chip" style="background:#dcdcdc"></span><span class="mono">#dcdcdc</span> / <span class="mono">#ffffff</span></td><td class="mono">#dcdcdc / #ffffff</td><td class="m y">✓</td></tr>
      </table>

      <h3>Elevation &amp; effects</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Elevation</td><td class="mono">Elevation/-2y - inner shadow, offset 0/−2, rgba(0,0,0,0.25)</td><td class="mono">box-shadow: inset 0 -2px 0 rgba(0,0,0,0.25)</td><td class="m y">✓</td></tr>
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

      <h2>2. Side-by-side - states (Large)</h2>
      <p>Rendered from the actual token values on each side; identical per state. (Facsimile - elevation shadow not drawn.)</p>
      <div id="vqa-swatches" class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>All 4 states render in both sizes and match Figma. The <code>Show icon</code> boolean (default off) is covered by the "With icons" story. <span class="m y">✓ Pass</span></p>
      <div class="callout info">
        <p style="margin:0"><span class="tag obs">QA-SB-OBS-02</span> <strong>Build exposes more than the doc.</strong> Storybook ships <code>isLoading</code> and an "As anchor (href)" story, but the frame doc lists only 4 states (Default, Hover, Press, Disabled). Not a defect - but confirm whether loading / anchor rendering are intended for Secondary and, if so, add them to the component doc so design and code agree.</p>
      </div>

      <h2>4. Accessibility</h2>
      <h3>Focus &amp; keyboard</h3>
      <p>Tab to focus, Enter or Space to activate; disabled is not focusable and conveyed beyond color. The build confirms the foundation focus tokens - <span class="mono">--color-focus-ring: #005fcc</span> and <span class="mono">--stroke-focus-ring-width: 2px</span> - matching the doc. <span class="m y">✓ Match</span></p>

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
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Colors, border, sizing &amp; type all match - 4 states × 2 sizes</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS · PROPS</p><div class="val">Pass</div><p class="sub">4 states, both sizes, Show icon (default off)</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">Labels AA (4.92–5.39:1); border affordance ≥ 3:1 non-text</p></div>
      </div>
      <p>Clean pass. The outline treatment is fully token-driven and reproduced exactly, including the darker press border and the muted disabled palette. Correctly uses a border (not the elevation effect the filled buttons carry).</p>

      <h2>1. Token fidelity</h2>
      <h3>Color per state</h3>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
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

      <h2>2. Side-by-side - states (Large)</h2>
      <p>Rendered from the actual token values on each side; identical per state.</p>
      <div id="vqa-swatches" class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>All 4 states render in both sizes and match Figma. The <code>Show icon</code> boolean (default off) toggles an optional leading icon. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <h3>Focus &amp; keyboard</h3>
      <p>Tab to focus, Enter or Space to activate; disabled is not focusable and conveyed beyond color. Build confirms the foundation focus tokens - <span class="mono">--color-focus-ring: #005fcc</span> and <span class="mono">--stroke-focus-ring-width: 2px</span> - matching the doc. <span class="m y">✓ Match</span></p>

      <h3>Contrast</h3>
      <table>
        <tr><th>State</th><th>Label ratio</th><th>Result</th></tr>
        <tr><td>Default</td><td>5.39:1</td><td class="m y">Pass AA (normal + large)</td></tr>
        <tr><td>Hover</td><td>4.92:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Press</td><td>5.39:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Disabled</td><td>1.64:1</td><td>Exempt (disabled control)</td></tr>
      </table>
      <div class="callout info"><strong>Border affordance:</strong> the outline is the button's primary affordance. The Default/Press border (<span class="mono">#07729C</span> on white) is 5.39:1 - above the 3:1 non-text minimum; disabled border is exempt. No issues.</div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-TB-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Colors, border width, sizing, and typography match Figma across 4 states × 2 sizes.</td></tr>
        <tr><td class="id">QA-TB-STATE</td><td>States · variants · props</td><td><span class="tag pass">PASS</span></td><td>4 states, both sizes, Show icon (default off).</td></tr>
        <tr><td class="id">QA-TB-FOCUS</td><td>Focus &amp; keyboard</td><td><span class="tag pass">PASS</span></td><td>Focus-ring tokens (#005FCC / 2px) match; Tab/Enter/Space; disabled not focusable.</td></tr>
        <tr><td class="id">QA-TB-A11Y</td><td>Contrast</td><td><span class="tag pass">PASS</span></td><td>Labels 4.92–5.39:1 (≥ 4.5:1 AA); border affordance 5.39:1 (≥ 3:1); disabled exempt.</td></tr>
        <tr><td class="id">QA-TB-OBS-01</td><td>Effects</td><td><span class="tag pass">MATCH</span></td><td>Correctly uses a 2px border, no elevation - per the outline spec.</td></tr>
      </table>
    `
  },
  {
    id: 'time-slot-button',
    name: 'Time Slot Button',
    group: 'Actions',
    status: 'a11y note',
    statusType: 'pass',
    swatches: [
      {n:'TurboTrack · Default',  bg:'#ffffff', fg:'#757575', bd:'#0eb252', icon:'none',  label:'8AM – 12PM'},
      {n:'TurboTrack · Selected', bg:'#0eb252', fg:'#ffffff', bd:'#0eb252', icon:'check', label:'8AM – 12PM'},
      {n:'TurboTrack · Disabled', bg:'#f8f8f8', fg:'#c4c4c4', bd:'#e3e3e3', icon:'none',  label:'8AM – 12PM'},
      {n:'Pickup · Default',      bg:'#ffffff', fg:'#757575', bd:'#343434', icon:'none',  label:'8AM – 12PM'},
      {n:'Pickup · Selected',     bg:'#343434', fg:'#ffffff', bd:'#343434', icon:'check', label:'8AM – 12PM'},
      {n:'Pickup · Disabled',     bg:'#f8f8f8', fg:'#c4c4c4', bd:'#e3e3e3', icon:'none',  label:'8AM – 12PM'}
    ],
    html: `
      <h1 class="rt">Time Slot Button</h1>
      <p class="rmeta">Figma component 5510:2911 · Frame doc 15921:307059 · Storybook /docs/actions-time-slot-button · Captured 2026-07-27</p>
      <p>A selectable delivery/time-slot option. Two delivery types - <strong>TurboTrack</strong> (green; free delivery, shows a FREE badge) and <strong>Pickup</strong> (neutral/dark) - behaving like a selectable card across four states (Default, Hover, Selected = filled + check icon, Disabled = muted + strikethrough). Two sizes; the FREE badge (TurboTrack only) is toggled by the <code>Free</code> prop (default on).</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Both deliveries, all states, badge, sizes &amp; border match</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS · PROPS</p><div class="val">Pass</div><p class="sub">Delivery × Size × State + Free badge toggle present</p></div>
        <div class="v fail"><p class="k">ACCESSIBILITY</p><div class="val">1 open</div><p class="sub">TurboTrack Selected label 2.80:1 - flagged for team review</p></div>
      </div>
      <p>The build faithfully reproduces every token for both delivery types and all states. There is <strong>one open accessibility item</strong> - already flagged by the team in the frame doc - where the TurboTrack Selected label falls below the contrast minimum.</p>

      <h2>1. Token fidelity</h2>
      <h3>Color per delivery &amp; state</h3>
      <table>
        <tr><th>Delivery / State</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>TurboTrack · Default/Hover</td><td>bg / text / border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#757575"></span><span class="mono">#757575</span> / <span class="chip" style="background:#0eb252"></span><span class="mono">#0eb252</span></td><td class="mono">#ffffff / #757575 / #0eb252</td><td class="m y">✓</td></tr>
        <tr><td>TurboTrack · Selected</td><td>bg / text / border</td><td><span class="chip" style="background:#0eb252"></span><span class="mono">#0eb252</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="mono">#0eb252</span></td><td class="mono">#0eb252 / #ffffff / #0eb252</td><td class="m y">✓</td></tr>
        <tr><td>TurboTrack · Disabled</td><td>bg / text / border</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> / <span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span></td><td class="mono">#f8f8f8 / #c4c4c4 / #e3e3e3</td><td class="m y">✓</td></tr>
        <tr><td>TurboTrack · FREE badge</td><td>bg / text / border</td><td><span class="chip" style="background:#0eb252"></span><span class="mono">#0eb252</span> / <span class="mono">#ffffff</span> / <span class="mono">#ffffff</span></td><td class="mono">#0eb252 / #ffffff / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Pickup · Default/Hover</td><td>bg / text / border</td><td><span class="mono">#ffffff</span> / <span class="mono">#757575</span> / <span class="chip" style="background:#343434"></span><span class="mono">#343434</span></td><td class="mono">#ffffff / #757575 / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Pickup · Selected</td><td>bg / text / border</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> / <span class="mono">#ffffff</span> / <span class="mono">#343434</span></td><td class="mono">#343434 / #ffffff / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Pickup · Disabled</td><td>bg / text / border</td><td class="mono">#f8f8f8 / #c4c4c4 / #e3e3e3</td><td class="mono">#f8f8f8 / #c4c4c4 / #e3e3e3</td><td class="m y">✓</td></tr>
      </table>

      <h3>Sizing, border &amp; radius</h3>
      <table>
        <tr><th>Property</th><th>Large (md)</th><th>Small (sm)</th><th>Match</th></tr>
        <tr><td>Slot size (W × H)</td><td>200 × 50px</td><td>140 × 36px</td><td class="m y">✓</td></tr>
        <tr><td>Border width</td><td>2px</td><td>2px</td><td class="m y">✓</td></tr>
        <tr><td>Corner radius</td><td>0px</td><td>0px</td><td class="m y">✓</td></tr>
        <tr><td>Label type</td><td>Maison Neue Bold 13px, UPPER</td><td>Maison Neue Bold 11px, UPPER</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states (Large)</h2>
      <p>Rendered from the actual token values on each side; identical per state. (Facsimile - FREE badge and elevation not drawn.)</p>
      <div id="vqa-swatches" class="swatchgrid">
        <div class="hd">Delivery · State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>Delivery (TurboTrack, Pickup) × Size (Large, Small) × State (Default, Hover, Selected, Disabled) all render and match Figma, verified in the "Delivery × Size × State Matrix" story. The <code>Free</code> boolean (TurboTrack only, default on) is covered by the "FREE badge - on vs off" story; a "Controlled Group" story exercises single-select behavior. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <h3>Focus, keyboard &amp; non-color cues</h3>
      <p>Tab to focus, Enter or Space to select; focus tokens (<span class="mono">#005fcc</span> / 2px) match. Selection is conveyed by <strong>fill + a check icon</strong>, not color alone; disabled is not focusable and conveyed by <strong>strikethrough + muted</strong> treatment beyond color. <span class="m y">✓ Good practice</span></p>

      <h3>Contrast (time label vs. slot fill)</h3>
      <table>
        <tr><th>Delivery / State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>TurboTrack · Default / Hover</td><td>4.61:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>TurboTrack · Selected</td><td>2.80:1</td><td class="m n">Fail - flagged for review</td></tr>
        <tr><td>Pickup · Default / Hover</td><td>4.61:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Pickup · Selected</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Both · Disabled</td><td>1.64:1</td><td>Exempt (disabled control)</td></tr>
      </table>
      <div class="callout warn">
        <p><span class="tag fail">QA-TS-A11Y-01 · OPEN - FLAGGED FOR REVIEW</span></p>
        <strong>TurboTrack Selected label contrast is 2.80:1</strong> (white on green <span class="mono">#0EB252</span>) - below even the 3:1 minimum, and Storybook's axe panel flags it (1 violation). The frame doc has this as an <em>open</em> item pending a team decision on a darker selected green or dark-on-green text. Faithfully implemented from the token; the fix is a token/design decision. Mitigation: selection is also signalled by the check icon and fill, so the <em>state</em> is still perceivable - the concern is the label legibility.
      </div>

      <h2>5. Observations (non-blocking)</h2>
      <div class="callout">
        <p style="margin:0"><span class="tag obs">QA-TS-OBS-01</span> Pickup Selected (white on <span class="mono">#343434</span>) is 12.45:1 - the same "selected" pattern reads very differently between the two deliveries. If the team darkens the TurboTrack selected fill to fix QA-TS-A11Y-01, keep both deliveries visually balanced.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-TS-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Both deliveries, all states, FREE badge, sizes, and 2px border match Figma.</td></tr>
        <tr><td class="id">QA-TS-STATE</td><td>States · variants · props</td><td><span class="tag pass">PASS</span></td><td>Delivery × Size × State + Free toggle + controlled group all present.</td></tr>
        <tr><td class="id">QA-TS-FOCUS</td><td>Focus &amp; non-color cues</td><td><span class="tag pass">PASS</span></td><td>Focus tokens match; selection = fill + check; disabled = strikethrough + muted (beyond color).</td></tr>
        <tr><td class="id">QA-TS-A11Y-01</td><td>Contrast</td><td><span class="tag fail">OPEN</span></td><td>TurboTrack Selected 2.80:1 (&lt; 3:1) - team-flagged; pending darker green / dark-on-green decision.</td></tr>
        <tr><td class="id">QA-TS-OBS-01</td><td>Consistency</td><td><span class="tag obs">INFO</span></td><td>Pickup Selected 12.45:1 vs TurboTrack 2.80:1 - keep deliveries balanced when fixing.</td></tr>
      </table>
    `
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    group: 'Navigation',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Breadcrumb</h1>
      <p class="rmeta">Figma desktop 16100:62660 · mobile 16100:62665 · Frame doc 16100:62667 · Storybook /docs/navigation-breadcrumb · Captured 2026-07-27</p>
      <p>A secondary navigation aid showing the user's location as a trail of links separated by a trailing chevron. The last item is the current page and is non-interactive. States: Default, Hover, Current. On mobile the trail collapses to a single up-one-level "‹ Home" back affordance (separate Breadcrumb - Back component).</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">SEMANTICS &amp; TOKENS</p><div class="val">Pass</div><p class="sub">nav/ol/li, aria-current, link &amp; current colors match</p></div>
        <div class="v pass"><p class="k">SEPARATOR COLOR</p><div class="val">Pass</div><p class="sub">Build #07729c matches the component; frame doc being corrected</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">All ≥ WCAG min; hover underline; focus ring matches</p></div>
      </div>
      <p>Clean, accessible build with full token fidelity. The separator-color question (QA-BC-01) is <strong>resolved</strong>: the component and build are correct (link-blue <span class="mono">#07729c</span>); the frame doc's neutral value was an error and is being corrected manually.</p>

      <h2>1. Semantic structure</h2>
      <table>
        <tr><th>Aspect</th><th>Expected (frame doc)</th><th>Storybook build</th><th>Match</th></tr>
        <tr><td>Landmark</td><td class="mono">&lt;nav aria-label="Breadcrumb"&gt;</td><td class="mono">nav aria-label="Breadcrumb"</td><td class="m y">✓</td></tr>
        <tr><td>List</td><td class="mono">ordered list &lt;ol&gt; / &lt;li&gt;</td><td class="mono">&lt;ol&gt; with &lt;li&gt; per crumb</td><td class="m y">✓</td></tr>
        <tr><td>Current page</td><td class="mono">text, aria-current="page", not a link</td><td class="mono">&lt;span aria-current="page"&gt;, non-link</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Token fidelity - color</h2>
      <table>
        <tr><th>Element</th><th>Figma / doc</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Link (default)</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> (color.text.link)</td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
        <tr><td>Link (hover)</td><td class="mono">underline added (not color)</td><td class="mono">text-decoration: underline on :hover</td><td class="m y">✓</td></tr>
        <tr><td>Current page text</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> (color.text.default)</td><td class="mono">#343434</td><td class="m y">✓</td></tr>
        <tr><td>Separator chevron</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> (component icon var - source of truth)</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="m y">✓</td></tr>
        <tr><td>Focus ring</td><td class="mono">#005FCC / 2px</td><td class="mono">#005fcc / 2px</td><td class="m y">✓</td></tr>
      </table>

      <h2>3. Side-by-side</h2>
      <div class="swatchgrid" style="grid-template-columns:180px 1fr;">
        <div class="hd">Source</div><div class="hd">Rendering</div>
        <div class="stc">Frame doc - erroneous (being fixed)</div>
        <div class="cell" style="gap:6px;font-size:13px;">
          <span style="color:#07729c">Home</span><span style="color:#343434">›</span>
          <span style="color:#07729c">Circulator Pumps</span><span style="color:#343434">›</span>
          <span style="color:#07729c">Taco Pumps</span><span style="color:#343434">›</span>
          <span style="color:#343434;font-weight:700">Taco Cast Iron Pumps</span>
        </div>
        <div class="stc">Component &amp; build - correct</div>
        <div class="cell" style="gap:6px;font-size:13px;">
          <span style="color:#07729c">Home</span><span style="color:#07729c">›</span>
          <span style="color:#07729c">Circulator Pumps</span><span style="color:#07729c">›</span>
          <span style="color:#07729c">Taco Pumps</span><span style="color:#07729c">›</span>
          <span style="color:#343434;font-weight:700">Taco Cast Iron Pumps</span>
        </div>
      </div>

      <h2>4. States, variants &amp; props</h2>
      <p>Default / Hover / Current all present. Stories cover Full path, Hover, Truncated (long trails), Single item, and Mobile back (the "‹ Home" up-one-level pattern). The trailing separator is suppressed on the current crumb so the trail never ends with a dangling chevron. <span class="m y">✓ Pass</span></p>

      <h2>5. Accessibility</h2>
      <p>Semantic <code>nav</code>/<code>ol</code>/<code>li</code> with <code>aria-current="page"</code> on the current crumb; links tabbable in source order; hover adds an underline (not color alone, WCAG 1.4.1); focus ring <span class="mono">#005fcc</span> / 2px. Contrast per the frame doc: link 5.39:1, current 12.45:1, focus ring 5.98:1 - all pass. The built blue separator is 5.39:1 (≥ 3:1 non-text), so it passes regardless of the color question below.</p>

      <h2>6. Findings</h2>
      <div class="callout info">
        <p><span class="tag pass">QA-BC-01 · RESOLVED</span></p>
        <strong>Separator chevron color - resolved.</strong> The component and build are correct: the chevron is link-blue <span class="mono">#07729c</span>. The frame doc's <span class="mono">#343434</span> was a documentation error and is being corrected manually. No code change needed.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-BC-STRUCT</td><td>Semantics</td><td><span class="tag pass">PASS</span></td><td>nav/ol/li, aria-current on current page (text, not link).</td></tr>
        <tr><td class="id">QA-BC-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Link, hover-underline, current text, and focus ring match. (Separator: see QA-BC-01.)</td></tr>
        <tr><td class="id">QA-BC-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Contrast link 5.39 / current 12.45 / focus 5.98; hover not-by-color.</td></tr>
        <tr><td class="id">QA-BC-01</td><td>Separator color</td><td><span class="tag pass">RESOLVED</span></td><td>Component &amp; build correct (#07729c); frame doc error being corrected manually.</td></tr>
      </table>
    `
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    group: 'Forms',
    status: 'a11y note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Checkbox</h1>
      <p class="rmeta">Figma component 11804:15097 · Frame doc 15927:307326 · Storybook /docs/forms-checkbox · Captured 2026-07-27</p>
      <p>A selection control for one or more options (or a single binary on/off). The square shows a check when selected and a dash when indeterminate (partially-selected group). Shared form-control container (24 Large / 20 Small) with the glyph centered; tokens drive fill, border, and the 1px border-width. Borders align with text fields and selects.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">All 9 states × 2 sizes - fill, border, size &amp; glyph match</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS</p><div class="val">Pass</div><p class="sub">9 states, both sizes; check &amp; dash glyphs present</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass · note</div><p class="sub">Indicator 12.45:1; unselected border is a known system-wide item</p></div>
      </div>
      <p>Faithful token translation across every state. The only accessibility note is a <em>known, system-wide</em> one - the unselected resting border - documented in the frame doc and pending team discussion, not a build defect.</p>

      <h2>1. Token fidelity - color per state</h2>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Unselected</td><td>bg / border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#ffffff / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Unselected Hover</td><td>bg / border</td><td><span class="mono">#ffffff</span> / <span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#ffffff / #07729c</td><td class="m y">✓</td></tr>
        <tr><td>Selected / Sel. Hover / Indeterminate</td><td>bg / border / glyph</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> / <span class="mono">#343434</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span></td><td class="mono">#343434 / #343434 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Error</td><td>bg / border</td><td><span class="chip" style="background:#fde5e5"></span><span class="mono">#fde5e5</span> / <span class="chip" style="background:#b00000"></span><span class="mono">#b00000</span></td><td class="mono">#fde5e5 / #b00000</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / border</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / <span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span></td><td class="mono">#f8f8f8 / #e3e3e3</td><td class="m y">✓</td></tr>
        <tr><td>Disabled Selected / Indeterminate</td><td>bg / border / glyph</td><td><span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span> / <span class="mono">#e3e3e3</span> / <span class="mono">#ffffff</span></td><td class="mono">#e3e3e3 / #e3e3e3 / #ffffff</td><td class="m y">✓</td></tr>
      </table>

      <h3>Sizing &amp; border</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Box size (Large / Small)</td><td class="mono">24px / 20px</td><td class="mono">24px / 20px</td><td class="m y">✓</td></tr>
        <tr><td>Border width</td><td class="mono">1px</td><td class="mono">1px</td><td class="m y">✓</td></tr>
        <tr><td>Corner radius</td><td class="mono">0px</td><td class="mono">0px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states (Large &amp; Small)</h2>
      <p>Rendered from the actual token values on each side; identical per state. Each cell shows Large (24px) then Small (20px).</p>
      <div class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Unselected</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;background:#ffffff;border:1px solid #c4c4c4"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;background:#ffffff;border:1px solid #c4c4c4"></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;background:#ffffff;border:1px solid #c4c4c4"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;background:#ffffff;border:1px solid #c4c4c4"></span></div>
        <div class="stc">Unselected Hover</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;background:#ffffff;border:1px solid #07729c"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;background:#ffffff;border:1px solid #07729c"></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;background:#ffffff;border:1px solid #07729c"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;background:#ffffff;border:1px solid #07729c"></span></div>
        <div class="stc">Selected</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;background:#343434;border:1px solid #343434;color:#fff;font-weight:700;font-size:14px">✓</span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;align-items:center;justify-content:center;background:#343434;border:1px solid #343434;color:#fff;font-weight:700;font-size:11px">✓</span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;background:#343434;border:1px solid #343434;color:#fff;font-weight:700;font-size:14px">✓</span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;align-items:center;justify-content:center;background:#343434;border:1px solid #343434;color:#fff;font-weight:700;font-size:11px">✓</span></div>
        <div class="stc">Indeterminate</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;background:#343434;border:1px solid #343434;color:#fff;font-weight:700;font-size:14px">–</span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;align-items:center;justify-content:center;background:#343434;border:1px solid #343434;color:#fff;font-weight:700;font-size:11px">–</span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;background:#343434;border:1px solid #343434;color:#fff;font-weight:700;font-size:14px">–</span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;align-items:center;justify-content:center;background:#343434;border:1px solid #343434;color:#fff;font-weight:700;font-size:11px">–</span></div>
        <div class="stc">Error</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;background:#fde5e5;border:1px solid #b00000"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;background:#fde5e5;border:1px solid #b00000"></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;background:#fde5e5;border:1px solid #b00000"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;background:#fde5e5;border:1px solid #b00000"></span></div>
        <div class="stc">Disabled</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;background:#f8f8f8;border:1px solid #e3e3e3"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;background:#f8f8f8;border:1px solid #e3e3e3"></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;background:#f8f8f8;border:1px solid #e3e3e3"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;background:#f8f8f8;border:1px solid #e3e3e3"></span></div>
        <div class="stc">Disabled Selected</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;background:#e3e3e3;border:1px solid #e3e3e3;color:#fff;font-weight:700;font-size:14px">✓</span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;align-items:center;justify-content:center;background:#e3e3e3;border:1px solid #e3e3e3;color:#fff;font-weight:700;font-size:11px">✓</span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;background:#e3e3e3;border:1px solid #e3e3e3;color:#fff;font-weight:700;font-size:14px">✓</span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;align-items:center;justify-content:center;background:#e3e3e3;border:1px solid #e3e3e3;color:#fff;font-weight:700;font-size:11px">✓</span></div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>All 9 states (Unselected, Unselected Hover, Selected, Selected Hover, Indeterminate, Error, Disabled, Disabled Selected, Disabled Indeterminate) render in both sizes and match Figma, verified in the "States × Sizes" story. Check glyph for selected, dash for indeterminate. A separate CheckboxGroup component composes these. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <h3>Focus, keyboard &amp; non-color cues</h3>
      <p>Tab to focus, Space to toggle. Focus shows a 2px ring in <span class="mono">--color-focus-ring: #005fcc</span> (width 2px) - applied at runtime, not as a component variant. Indeterminate is conveyed by the dash (a mixed selection, not on/off); disabled is not focusable and conveyed by the muted fill beyond color. <span class="m y">✓</span></p>

      <h3>Contrast - indicator (check/dash) vs box fill</h3>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Selected / Selected Hover / Indeterminate</td><td>12.45:1</td><td class="m y">Pass</td></tr>
        <tr><td>Disabled Selected / Disabled Indeterminate</td><td>1.28:1</td><td>Exempt (disabled)</td></tr>
      </table>

      <h3>Contrast - box outline vs background (non-text, 3:1)</h3>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Unselected</td><td>1.74:1</td><td class="m n">Below 3:1 - flagged</td></tr>
        <tr><td>Unselected Hover</td><td>5.39:1</td><td class="m y">Pass</td></tr>
        <tr><td>Error</td><td>7.38:1</td><td class="m y">Pass</td></tr>
        <tr><td>Disabled</td><td>1.28:1</td><td>Exempt (disabled)</td></tr>
      </table>
      <div class="callout warn">
        <p><span class="tag fail">QA-CB-A11Y-01 · KNOWN / SYSTEM-WIDE</span></p>
        <strong>Unselected resting border is below the 3:1 non-text minimum.</strong> The gray <span class="mono">#c4c4c4</span> outline is 1.74:1 - but it intentionally matches the text-field and select resting border. Per the frame doc this is a <em>system-wide</em> choice pending team discussion, not to be changed unilaterally on the checkbox alone. Faithfully implemented from the token; any fix should be made across all form controls together.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-CB-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 9 states × 2 sizes: fill, border, border-width, size, glyph match Figma.</td></tr>
        <tr><td class="id">QA-CB-STATE</td><td>States &amp; variants</td><td><span class="tag pass">PASS</span></td><td>9 states, both sizes; check + dash glyphs correct.</td></tr>
        <tr><td class="id">QA-CB-FOCUS</td><td>Focus &amp; non-color cues</td><td><span class="tag pass">PASS</span></td><td>Focus ring #005FCC / 2px (runtime); indeterminate dash; disabled muted beyond color.</td></tr>
        <tr><td class="id">QA-CB-A11Y-01</td><td>Contrast (outline)</td><td><span class="tag obs">KNOWN</span></td><td>Unselected border 1.74:1 (&lt; 3:1); matches inputs/selects - system-wide, pending discussion.</td></tr>
      </table>
    `
  },
  {
    id: 'radio',
    name: 'Radio',
    group: 'Forms',
    status: 'a11y note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Radio</h1>
      <p class="rmeta">Figma component 11269:5496 · Frame doc 15928:1812 · Storybook /docs/forms-radio · Captured 2026-07-27</p>
      <p>A selection control for choosing exactly one option from a set. The circular control fills with a center dot when selected. Seven states (Unselected, Unselected Hover, Selected, Selected Hover, Error, Disabled, Disabled Selected), two sizes. Built on the same shared form-control container as Checkbox (24 Large / 20 Small, 1px border); borders align with text fields, selects, and checkboxes.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">All 7 states × 2 sizes - fill, border, size &amp; circle match</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS</p><div class="val">Pass</div><p class="sub">7 states, both sizes; circular with center dot</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass · note</div><p class="sub">Dot 12.45:1; unselected border is the shared system-wide item</p></div>
      </div>
      <p>Faithful token translation - the radio reuses the checkbox's form-control tokens and renders them correctly, just circular. The one accessibility note is the same <em>system-wide</em> unselected-border item shared with the checkbox and inputs.</p>

      <h2>1. Token fidelity - color per state</h2>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Unselected</td><td>bg / border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#ffffff / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Unselected Hover</td><td>bg / border</td><td><span class="mono">#ffffff</span> / <span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#ffffff / #07729c</td><td class="m y">✓</td></tr>
        <tr><td>Selected / Selected Hover</td><td>fill / border / dot</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> / <span class="mono">#343434</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span></td><td class="mono">#343434 / #343434 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Error</td><td>bg / border</td><td><span class="chip" style="background:#fde5e5"></span><span class="mono">#fde5e5</span> / <span class="chip" style="background:#b00000"></span><span class="mono">#b00000</span></td><td class="mono">#fde5e5 / #b00000</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / border</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / <span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span></td><td class="mono">#f8f8f8 / #e3e3e3</td><td class="m y">✓</td></tr>
        <tr><td>Disabled Selected</td><td>fill / border / dot</td><td><span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span> / <span class="mono">#e3e3e3</span> / <span class="mono">#ffffff</span></td><td class="mono">#e3e3e3 / #e3e3e3 / #ffffff</td><td class="m y">✓</td></tr>
      </table>

      <h3>Sizing, border &amp; shape</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Size (Large / Small)</td><td class="mono">24px / 20px</td><td class="mono">24px / 20px</td><td class="m y">✓</td></tr>
        <tr><td>Border width</td><td class="mono">1px</td><td class="mono">1px</td><td class="m y">✓</td></tr>
        <tr><td>Shape</td><td class="mono">circle</td><td class="mono">border-radius: 50%</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states (Large &amp; Small)</h2>
      <p>Rendered from the actual token values on each side; identical per state. Each cell shows Large (24px) then Small (20px).</p>
      <div class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Unselected</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#ffffff;border:1px solid #c4c4c4"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#ffffff;border:1px solid #c4c4c4"></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#ffffff;border:1px solid #c4c4c4"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#ffffff;border:1px solid #c4c4c4"></span></div>
        <div class="stc">Unselected Hover</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#ffffff;border:1px solid #07729c"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#ffffff;border:1px solid #07729c"></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#ffffff;border:1px solid #07729c"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#ffffff;border:1px solid #07729c"></span></div>
        <div class="stc">Selected</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#343434;border:1px solid #343434;align-items:center;justify-content:center"><span style="width:8px;height:8px;border-radius:50%;background:#ffffff;display:block"></span></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#343434;border:1px solid #343434;align-items:center;justify-content:center"><span style="width:6px;height:6px;border-radius:50%;background:#ffffff;display:block"></span></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#343434;border:1px solid #343434;align-items:center;justify-content:center"><span style="width:8px;height:8px;border-radius:50%;background:#ffffff;display:block"></span></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#343434;border:1px solid #343434;align-items:center;justify-content:center"><span style="width:6px;height:6px;border-radius:50%;background:#ffffff;display:block"></span></span></div>
        <div class="stc">Error</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#fde5e5;border:1px solid #b00000"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#fde5e5;border:1px solid #b00000"></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#fde5e5;border:1px solid #b00000"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#fde5e5;border:1px solid #b00000"></span></div>
        <div class="stc">Disabled</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#f8f8f8;border:1px solid #e3e3e3"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#f8f8f8;border:1px solid #e3e3e3"></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#f8f8f8;border:1px solid #e3e3e3"></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#f8f8f8;border:1px solid #e3e3e3"></span></div>
        <div class="stc">Disabled Selected</div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#e3e3e3;border:1px solid #e3e3e3;align-items:center;justify-content:center"><span style="width:8px;height:8px;border-radius:50%;background:#ffffff;display:block"></span></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#e3e3e3;border:1px solid #e3e3e3;align-items:center;justify-content:center"><span style="width:6px;height:6px;border-radius:50%;background:#ffffff;display:block"></span></span></div>
          <div class="cell"><span style="display:inline-flex;width:24px;height:24px;border-radius:50%;background:#e3e3e3;border:1px solid #e3e3e3;align-items:center;justify-content:center"><span style="width:8px;height:8px;border-radius:50%;background:#ffffff;display:block"></span></span><span style="display:inline-flex;width:20px;height:20px;margin-left:10px;border-radius:50%;background:#e3e3e3;border:1px solid #e3e3e3;align-items:center;justify-content:center"><span style="width:6px;height:6px;border-radius:50%;background:#ffffff;display:block"></span></span></div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>All 7 states render in both sizes and match Figma, verified in the "State × Size Matrix" story. Circular control with a centered dot for the selected states. A radio group allows exactly one selection. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <h3>Focus, keyboard &amp; non-color cues</h3>
      <p>Arrow keys move selection within a group; Tab moves between groups; Space/Arrow selects. Focus shows a 2px ring in <span class="mono">--color-focus-ring: #005fcc</span> (applied at runtime, not a component variant). Selection is conveyed by the filled circle + center dot (not color alone); disabled is not focusable and muted beyond color. <span class="m y">✓</span></p>

      <h3>Contrast - dot vs circle fill (selected)</h3>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Selected / Selected Hover</td><td>12.45:1</td><td class="m y">Pass</td></tr>
        <tr><td>Disabled Selected</td><td>1.28:1</td><td>Exempt (disabled)</td></tr>
      </table>

      <h3>Contrast - outline vs background (non-text, 3:1)</h3>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Unselected</td><td>1.74:1</td><td class="m n">Below 3:1 - flagged</td></tr>
        <tr><td>Unselected Hover</td><td>5.39:1</td><td class="m y">Pass</td></tr>
        <tr><td>Error</td><td>7.38:1</td><td class="m y">Pass</td></tr>
        <tr><td>Disabled</td><td>1.28:1</td><td>Exempt (disabled)</td></tr>
      </table>
      <div class="callout warn">
        <p><span class="tag fail">QA-RD-A11Y-01 · KNOWN / SYSTEM-WIDE</span></p>
        <strong>Unselected resting border below the 3:1 non-text minimum.</strong> The gray <span class="mono">#c4c4c4</span> outline is 1.74:1 - the <em>same shared token</em> flagged on the Checkbox (QA-CB-A11Y-01) and used by text fields and selects. A system-wide decision pending team discussion; fix all form controls together, not the radio alone.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-RD-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 7 states × 2 sizes: fill, border, size, and circular shape match Figma.</td></tr>
        <tr><td class="id">QA-RD-STATE</td><td>States &amp; variants</td><td><span class="tag pass">PASS</span></td><td>7 states, both sizes; center dot on selected states.</td></tr>
        <tr><td class="id">QA-RD-FOCUS</td><td>Focus &amp; non-color cues</td><td><span class="tag pass">PASS</span></td><td>Focus ring #005FCC / 2px (runtime); arrow-key group nav; disabled muted beyond color.</td></tr>
        <tr><td class="id">QA-RD-A11Y-01</td><td>Contrast (outline)</td><td><span class="tag obs">KNOWN</span></td><td>Unselected border 1.74:1 (&lt; 3:1) - shared system-wide token (see QA-CB-A11Y-01).</td></tr>
      </table>
    `
  },
  {
    id: 'link',
    name: 'Link',
    group: 'Navigation',
    status: 'a11y note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Link</h1>
      <p class="rmeta">Figma component 8931:5582 · Frame doc 15928:2067 · Storybook /docs/navigation-link · Captured 2026-07-27</p>
      <p>A text link for navigation or inline actions. States: Default, Hover (underlined), Active (darker + underlined), Visited, Disabled - color plus the underline convey state. Optional icon via the icon toggle (default on) and a custom label via the link-text property. No size variant - the link inherits its text style (14px Bold).</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">All 5 state colors, type &amp; icon-gap match</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS · PROPS</p><div class="val">Pass</div><p class="sub">5 states + inline persistent-underline + leading/trailing icon</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass · note</div><p class="sub">Contrast AA+; underline cues; visited=default is a known item</p></div>
      </div>
      <p>Faithful token translation with strong color-independence (hover/active underline, inline persistent underline). One documented note: visited currently resolves to the same blue as default.</p>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>State</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Default</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#07729c · no underline</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> + underline</td><td class="mono">#07729c · underline</td><td class="m y">✓</td></tr>
        <tr><td>Active</td><td><span class="chip" style="background:#055271"></span><span class="mono">#055271</span> + underline</td><td class="mono">#055271 · underline</td><td class="m y">✓</td></tr>
        <tr><td>Visited</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> (= default)</td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td><span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#c4c4c4</td><td class="m y">✓</td></tr>
      </table>

      <h3>Type &amp; spacing</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Font</td><td class="mono">Maison Neue Bold 14px / 1.6</td><td class="mono">Maison Neue 700, 14px</td><td class="m y">✓</td></tr>
        <tr><td>Icon gap</td><td class="mono">8px</td><td class="mono">8px</td><td class="m y">✓</td></tr>
        <tr><td>Icon</td><td class="mono">optional, default on</td><td class="mono">leading &amp; trailing icon stories</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states</h2>
      <p>Rendered from the actual token values on each side; identical per state.</p>
      <div class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Default</div>
          <div class="cell"><span style="color:#07729c;font-weight:700;font-size:14px">Link</span></div>
          <div class="cell"><span style="color:#07729c;font-weight:700;font-size:14px">Link</span></div>
        <div class="stc">Hover</div>
          <div class="cell"><span style="color:#07729c;font-weight:700;font-size:14px;text-decoration:underline">Link</span></div>
          <div class="cell"><span style="color:#07729c;font-weight:700;font-size:14px;text-decoration:underline">Link</span></div>
        <div class="stc">Active</div>
          <div class="cell"><span style="color:#055271;font-weight:700;font-size:14px;text-decoration:underline">Link</span></div>
          <div class="cell"><span style="color:#055271;font-weight:700;font-size:14px;text-decoration:underline">Link</span></div>
        <div class="stc">Visited</div>
          <div class="cell"><span style="color:#07729c;font-weight:700;font-size:14px">Link</span></div>
          <div class="cell"><span style="color:#07729c;font-weight:700;font-size:14px">Link</span></div>
        <div class="stc">Disabled</div>
          <div class="cell"><span style="color:#c4c4c4;font-weight:700;font-size:14px">Link</span></div>
          <div class="cell"><span style="color:#c4c4c4;font-weight:700;font-size:14px">Link</span></div>
        <div class="stc">Inline (persistent underline)</div>
          <div class="cell" style="font-size:13px;color:#343434">…lorem <span style="color:#07729c;font-weight:700;text-decoration:underline">inline link</span> ipsum…</div>
          <div class="cell" style="font-size:13px;color:#343434">…lorem <span style="color:#07729c;font-weight:700;text-decoration:underline">inline link</span> ipsum…</div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>All 5 states render and match Figma (States Matrix story). Standalone and inline variants; leading- and trailing-icon stories cover the icon toggle (default on); custom label via the link-text prop. No size variant - the link inherits surrounding text size. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <h3>Focus, keyboard &amp; color independence</h3>
      <p>Tab to focus, Enter to activate; focus ring <span class="mono">#005fcc</span> / 2px (runtime). Hover and active add an underline (a non-color cue); the inline variant carries a <strong>persistent underline</strong> so links aren't distinguished by color alone within body text (WCAG 1.4.1). <span class="m y">✓</span></p>

      <h3>Contrast (link text vs background)</h3>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Default / Hover / Visited (#07729c)</td><td>5.39:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Active (#055271)</td><td>8.57:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Disabled (#c4c4c4)</td><td>1.74:1</td><td>Exempt (disabled)</td></tr>
      </table>
      <div class="callout warn">
        <p><span class="tag fail">QA-LN-01 · KNOWN</span></p>
        <strong>Visited is not visually distinct from Default.</strong> Both resolve to <span class="mono">#07729c</span> (the <code>link/visited</code> token maps to <code>text.link</code>). Faithfully implemented - but a user can't tell visited from unvisited by color. Per the frame doc this is pending a future token decision; no build change implied.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-LN-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 5 state colors, 14px bold type, and icon-gap match Figma.</td></tr>
        <tr><td class="id">QA-LN-STATE</td><td>States · variants · props</td><td><span class="tag pass">PASS</span></td><td>5 states, inline persistent-underline, leading/trailing icon, custom label.</td></tr>
        <tr><td class="id">QA-LN-FOCUS</td><td>Focus &amp; color independence</td><td><span class="tag pass">PASS</span></td><td>Focus ring #005FCC / 2px; hover/active underline; inline persistent underline (1.4.1).</td></tr>
        <tr><td class="id">QA-LN-A11Y</td><td>Contrast</td><td><span class="tag pass">PASS</span></td><td>Default/hover/visited 5.39:1; active 8.57:1; disabled exempt.</td></tr>
        <tr><td class="id">QA-LN-01</td><td>Visited color</td><td><span class="tag obs">KNOWN</span></td><td>Visited = default (#07729c) - not visually distinct; pending future token decision.</td></tr>
      </table>
    `
  },
  {
    id: 'select',
    name: 'Select',
    group: 'Forms',
    status: 'a11y note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Select</h1>
      <p class="rmeta">Figma component 11689:1126 · Frame doc 16020:8160 · Storybook /docs/forms-select · Captured 2026-07-27</p>
      <p>A dropdown for choosing one option from a list, built on the shared form-field tokens (same field box and states as Text Field). Label Static or Floating with a Show-label toggle, two sizes, and states Default, Hover, Focus, Open, Selected, Error, Disabled.</p>

      <div class="callout info"><strong>Reporting note.</strong> The build documents Select by feature stories, not as Figma's pinned state matrix. Token values all match Figma, so states are graded <strong>token-verified = Pass</strong>; the mapping table (§4) shows which states are visually pinned vs. interactive-only. Facsimiles below render the token-intended appearance.</p></div>
      <div class="callout"><strong>Where the dropdown lives.</strong> The open list surface and its rows are shared components documented on their own - see <strong>Menus &amp; Lists → Dropdown</strong> (the surface) and <strong>List Items</strong> (the rows). This report covers the Select trigger plus a summary of its open panel (§3); the full surface/row token detail is not duplicated here.</p></div>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">All form-field state tokens match Figma exactly</p></div>
        <div class="v pass"><p class="k">STATE COVERAGE</p><div class="val">Pass · note</div><p class="sub">Trigger + open panel pinned; only trigger Hover/Focus interactive-only</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass · notes</div><p class="sub">2 known system-wide border items (default, focus); error not color-only</p></div>
      </div>

      <h2>1. Token fidelity - color per state</h2>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Default</td><td>bg / border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#ffffff / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>border</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
        <tr><td>Focus / Open</td><td>border / glow</td><td><span class="chip" style="background:#66afe9"></span><span class="mono">#66afe9</span> + Glow-Blue</td><td class="mono">#66afe9 (glow interactive-only)</td><td class="m y">✓</td></tr>
        <tr><td>Selected (filled)</td><td>text / border</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> / <span class="mono">#c4c4c4</span></td><td class="mono">#343434 / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Placeholder</td><td>text</td><td><span class="chip" style="background:#757575"></span><span class="mono">#757575</span></td><td class="mono">#757575</td><td class="m y">✓</td></tr>
        <tr><td>Error</td><td>bg / border</td><td><span class="chip" style="background:#fde5e5"></span><span class="mono">#fde5e5</span> / <span class="chip" style="background:#b00000"></span><span class="mono">#b00000</span></td><td class="mono">#fde5e5 / #b00000</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / border / text</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / <span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#f8f8f8 / #e3e3e3 / #c4c4c4</td><td class="m y">✓</td></tr>
      </table>
      <h3>Sizing &amp; spacing</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Height (Large)</td><td class="mono">50px</td><td class="mono">50px</td><td class="m y">✓</td></tr>
        <tr><td>Height (Small)</td><td class="mono">~40px</td><td class="mono">40px</td><td class="m y">✓*</td></tr>
        <tr><td>Padding-x (Large / Small)</td><td class="mono">16px / 12px</td><td class="mono">token-driven</td><td class="m y">✓</td></tr>
        <tr><td>Border width</td><td class="mono">1px</td><td class="mono">1px</td><td class="m y">✓</td></tr>
      </table>
      <p style="font-size:12px;color:var(--sh-mid-gray)">* Small height token wasn't surfaced in this pass; build renders 40px - spot-check against the Figma small height token.</p>

      <h2>2. Side-by-side - states (token-intended)</h2>
      <p>Facsimiles rendered from the matching token values. Hover/Focus/Open are marked interactive-only (see §3): the build applies them on real interaction, not as pinned static demos.</p>
      <div class="swatchgrid" style="grid-template-columns:160px 1fr 1fr;">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Default</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
        <div class="stc">Hover <span style="font-weight:400;color:#757575">(interactive)</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #07729c;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #07729c;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
        <div class="stc">Focus / Open <span style="font-weight:400;color:#757575">(interactive)</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #66afe9;box-shadow:0 0 0 3px rgba(102,175,233,0.35);color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #66afe9;box-shadow:0 0 0 3px rgba(102,175,233,0.35);color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
        <div class="stc">Selected</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#343434;font-size:13px">Option A<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#343434;font-size:13px">Option A<span style="color:#343434">▾</span></span></div>
        <div class="stc">Error</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#fde5e5;border:1px solid #b00000;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#fde5e5;border:1px solid #b00000;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
        <div class="stc">Disabled</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#f8f8f8;border:1px solid #e3e3e3;color:#c4c4c4;font-size:13px">Choose an option<span style="color:#c4c4c4">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#f8f8f8;border:1px solid #e3e3e3;color:#c4c4c4;font-size:13px">Choose an option<span style="color:#c4c4c4">▾</span></span></div>
      </div>

      <h2>3. Open panel (listbox)</h2>
      <p>The <code>item-type-radio</code> story pins Select's open listbox. Verified against the Menus &amp; Lists family:</p>
      <table>
        <tr><th>Element</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Surface</td><td class="mono">#ffffff · +4y · #dcdcdc</td><td class="mono">#ffffff · 0 4/8 rgba(.1)+0 0/1 rgba(.2) · 1px #dcdcdc</td><td class="m y">✓</td></tr>
        <tr><td>Row height (Large / Small)</td><td class="mono">42 / 38</td><td class="mono">42 / 38</td><td class="m y">✓</td></tr>
        <tr><td>Option default</td><td class="mono">bg #ffffff / text #343434</td><td class="mono">#ffffff / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Option selected</td><td class="mono">bg #eff5fd + checked radio</td><td class="mono">#eff5fd + radio checked (aria-selected)</td><td class="m y">✓</td></tr>
        <tr><td>Option disabled</td><td class="mono">bg #f8f8f8 / #c4c4c4</td><td class="mono">#f8f8f8 / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Single-select control</td><td class="mono">radio</td><td class="mono">role=radio per row</td><td class="m y">✓</td></tr>
      </table>
      <p style="font-size:12px;color:var(--sh-mid-gray)">Selection is conveyed by the radio, not the background (consistent with List Items QA-LI-01). Open-panel a11y: 0 violations, 14 passes. Surface/rows detailed under Menus &amp; Lists → Dropdown / List Items.</p>

      <h2>4. Figma ↔ build mapping</h2>
      <p>The build organizes Select by feature stories rather than Figma's pinned state matrix. This maps the two and marks what's visually pinned vs. interactive-only.</p>
      <table>
        <tr><th>Figma variant</th><th>How the build exposes it</th><th>Visually pinned?</th></tr>
        <tr><td>State = Default</td><td><code>states-matrix</code> "default" · <code>default</code> story</td><td class="m y">✓ pinned</td></tr>
        <tr><td>State = Hover</td><td><code>states-matrix</code> "hover" row (renders at rest)</td><td class="m n">interactive-only</td></tr>
        <tr><td>State = Focus</td><td><code>states-matrix</code> "focus" row (border + glow not shown statically)</td><td class="m n">interactive-only</td></tr>
        <tr><td>State = Open</td><td><code>item-type-radio</code> / <code>flag-rows</code> (open listbox pinned)</td><td class="m y">✓ pinned</td></tr>
        <tr><td>State = Selected</td><td><code>selected</code> story · matrix "selected"</td><td class="m y">✓ (filled text; border = default)</td></tr>
        <tr><td>State = Error</td><td><code>error</code> story · matrix "error"</td><td class="m y">✓ pinned</td></tr>
        <tr><td>State = Disabled</td><td><code>disabled</code> story · matrix "disabled"</td><td class="m y">✓ pinned</td></tr>
        <tr><td>Label Style = Static / Floating</td><td><code>default</code> / <code>floating</code> stories</td><td class="m y">✓</td></tr>
        <tr><td>Size = Large / Small</td><td><code>small</code> story · matrix md/sm</td><td class="m y">✓</td></tr>
        <tr><td>Show-label = off</td><td><code>no-label</code> story</td><td class="m y">✓</td></tr>
        <tr><td><em>(no Figma variant)</em></td><td>build-only stories: <code>required</code>, <code>flag-rows</code>, <code>item-type-radio</code></td><td>-</td></tr>
      </table>

      <h2>5. Accessibility</h2>
      <p>Tab to focus; Enter/Space/Arrows open and move/select; Esc closes. Focus uses the shared focus convention; error is conveyed by the red border <em>and</em> the error message (aria-invalid + aria-describedby), not color alone; disabled reads fully muted.</p>
      <h3>Text vs field</h3>
      <table>
        <tr><th>Element</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Filled / selection</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Placeholder</td><td>4.61:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Error message</td><td>7.38:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Chevron icon</td><td>12.45:1</td><td class="m y">Pass</td></tr>
      </table>
      <h3>Border vs background (non-text, 3:1)</h3>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Default</td><td>1.74:1</td><td class="m n">Below 3:1 - flagged</td></tr>
        <tr><td>Hover</td><td>5.39:1</td><td class="m y">Pass</td></tr>
        <tr><td>Focus / Open</td><td>2.37:1</td><td class="m n">Below 3:1 (glow reinforces)</td></tr>
        <tr><td>Error</td><td>7.38:1</td><td class="m y">Pass</td></tr>
      </table>
      <div class="callout warn">
        <p><span class="tag fail">QA-SL-A11Y-01 · KNOWN / SYSTEM-WIDE</span></p>
        <strong>Default and focus borders fall below the 3:1 non-text minimum.</strong> Default <span class="mono">#c4c4c4</span> is 1.74:1 (the shared form-control token, see QA-CB-A11Y-01) and focus <span class="mono">#66afe9</span> is 2.37:1 (the glow reinforces it). Per the frame doc these are system-level resting/focus-border choices pending team review - fix across all form fields together.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-SL-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All form-field state tokens (default/hover/focus/filled/error/disabled/placeholder) match Figma.</td></tr>
        <tr><td class="id">QA-SL-STATE</td><td>State coverage</td><td><span class="tag obs">PASS · NOTE</span></td><td>Trigger Default/Error/Disabled + full open panel pinned; only trigger Hover/Focus render at rest.</td></tr>
        <tr><td class="id">QA-SL-MAP</td><td>Figma↔build mapping</td><td><span class="tag obs">INFO</span></td><td>Build uses feature stories, not Figma's state matrix; mapping documented in §3. Build-only: required, flag-rows, item-type-radio.</td></tr>
        <tr><td class="id">QA-SL-A11Y-01</td><td>Contrast (borders)</td><td><span class="tag fail">KNOWN</span></td><td>Default 1.74:1 &amp; focus 2.37:1 below 3:1 - system-wide, pending review (shared with checkbox/radio/text field).</td></tr>
        <tr><td class="id">QA-SL-REC</td><td>Recommendation</td><td><span class="tag obs">SUGGEST</span></td><td>Add pinned trigger Hover/Focus (with glow) demos; the open panel is already pinned via item-type-radio.</td></tr>
      </table>
    `
  },
  {
    id: 'combobox',
    name: 'Combobox',
    group: 'Forms',
    status: 'a11y note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Combobox</h1>
      <p class="rmeta">Figma component 12215:22625 · Frame doc 16020:8230 · Storybook /docs/forms-combobox · Captured 2026-07-27</p>
      <p>An editable/filterable select supporting single and multi-selection - same form-field family as Select/Text Field. Static/Floating label + Show-label toggle, two sizes, and states Default, Hover, Focus, Open, Selected, Multi-selected, Multi-selected disabled, Error, Disabled. A count badge shows the number of selections in multi-select.</p>

      <div class="callout info"><strong>Reporting note.</strong> Same approach as Select: tokens all match, so states are graded <strong>token-verified = Pass</strong>; the mapping table (§4) shows pinned vs. interactive-only. Facsimiles render the token-intended appearance.</p></div>
      <div class="callout"><strong>Where the dropdown lives.</strong> The open list surface and its rows are shared components documented on their own - see <strong>Menus &amp; Lists → Dropdown</strong> (the surface) and <strong>List Items</strong> (the rows). This report covers the Combobox trigger plus a summary of its open panel (§3); the full surface/row token detail is not duplicated here.</p></div>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Shared form-field tokens match Figma; count badge per doc</p></div>
        <div class="v pass"><p class="k">STATE COVERAGE</p><div class="val">Pass · note</div><p class="sub">Trigger + open panel (search/controls/rows) pinned; only Hover/Focus interactive</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass · notes</div><p class="sub">Same system-wide default/focus border items as Select</p></div>
      </div>

      <h2>1. Token fidelity - color per state</h2>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Default</td><td>bg / border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#ffffff / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>border</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
        <tr><td>Focus / Open</td><td>border / glow</td><td><span class="chip" style="background:#66afe9"></span><span class="mono">#66afe9</span> + Glow-Blue</td><td class="mono">#66afe9 (glow interactive-only)</td><td class="m y">✓</td></tr>
        <tr><td>Selected (filled)</td><td>text / border</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> / <span class="mono">#c4c4c4</span></td><td class="mono">#343434 / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Multi-selected badge</td><td>bg / text</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span></td><td class="mono">#07729c / #ffffff · disabled <span class="chip" style="background:#e3e3e3"></span>#e3e3e3</td><td class="m y">✓</td></tr>
        <tr><td>Error</td><td>bg / border</td><td><span class="chip" style="background:#fde5e5"></span><span class="mono">#fde5e5</span> / <span class="chip" style="background:#b00000"></span><span class="mono">#b00000</span></td><td class="mono">#fde5e5 / #b00000</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / border / text</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / <span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#f8f8f8 / #e3e3e3 / #c4c4c4</td><td class="m y">✓</td></tr>
      </table>
      <p style="font-size:12px;color:var(--sh-mid-gray)">Count badge verified in the multi-select story: enabled <span class="mono">#07729c</span> / white (5.39:1), disabled <span class="mono">#e3e3e3</span> / white (exempt), 4px radius (allowed subtle-surface exception).</p>
      <h3>Sizing</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Height (Large / Small)</td><td class="mono">50px / ~40px</td><td class="mono">50px / 40px</td><td class="m y">✓</td></tr>
        <tr><td>Border width</td><td class="mono">1px</td><td class="mono">1px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states (token-intended)</h2>
      <p>Facsimiles from the matching token values. Hover/Focus are interactive-only (see §3).</p>
      <div class="swatchgrid" style="grid-template-columns:170px 1fr 1fr;">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Default</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
        <div class="stc">Hover <span style="font-weight:400;color:#757575">(interactive)</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #07729c;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #07729c;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
        <div class="stc">Focus / Open <span style="font-weight:400;color:#757575">(Open pinned)</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #66afe9;box-shadow:0 0 0 3px rgba(102,175,233,0.35);color:#757575;font-size:13px">Type to filter…<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #66afe9;box-shadow:0 0 0 3px rgba(102,175,233,0.35);color:#757575;font-size:13px">Type to filter…<span style="color:#343434">▾</span></span></div>
        <div class="stc">Selected</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#343434;font-size:13px">Apple<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#343434;font-size:13px">Apple<span style="color:#343434">▾</span></span></div>
        <div class="stc">Multi-selected</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#343434;font-size:13px"><span>Apple<span style="background:#07729c;color:#fff;font-size:11px;font-weight:700;padding:1px 7px;margin-left:6px">2</span></span><span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#ffffff;border:1px solid #c4c4c4;color:#343434;font-size:13px"><span>Apple<span style="background:#07729c;color:#fff;font-size:11px;font-weight:700;padding:1px 7px;margin-left:6px">2</span></span><span style="color:#343434">▾</span></span></div>
        <div class="stc">Error</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#fde5e5;border:1px solid #b00000;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#fde5e5;border:1px solid #b00000;color:#757575;font-size:13px">Choose an option<span style="color:#343434">▾</span></span></div>
        <div class="stc">Disabled</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#f8f8f8;border:1px solid #e3e3e3;color:#c4c4c4;font-size:13px">Choose an option<span style="color:#c4c4c4">▾</span></span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;justify-content:space-between;width:190px;height:40px;padding:0 12px;background:#f8f8f8;border:1px solid #e3e3e3;color:#c4c4c4;font-size:13px">Choose an option<span style="color:#c4c4c4">▾</span></span></div>
      </div>

      <h2>3. Open panel (listbox)</h2>
      <p>The <code>item-type-rows</code> story pins the open panel for both single and multi. Verified against Menus &amp; Lists:</p>
      <table>
        <tr><th>Element</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Surface</td><td class="mono">#ffffff · +4y · #dcdcdc</td><td class="mono">#ffffff · 0 4/8 rgba(.1)+0 0/1 rgba(.2) · 1px #dcdcdc</td><td class="m y">✓</td></tr>
        <tr><td>Search slot</td><td class="mono">form-field, border #c4c4c4</td><td class="mono">input · #c4c4c4 · "Search…"</td><td class="m y">✓</td></tr>
        <tr><td>Controls slot (APPLY)</td><td class="mono">secondary button #07729c / white</td><td class="mono">#07729c / #ffffff "APPLY"</td><td class="m y">✓</td></tr>
        <tr><td>Row default / selected / disabled</td><td class="mono">#ffffff · #eff5fd · #f8f8f8/#c4c4c4</td><td class="mono">#ffffff · #eff5fd · #f8f8f8/#c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Selection control</td><td class="mono">single = radio · multi = checkbox</td><td class="mono">radio (single) / checkbox (multi)</td><td class="m y">✓</td></tr>
      </table>
      <p style="font-size:12px;color:var(--sh-mid-gray)">Row height 42; selection by control not bg (List Items QA-LI-01). Open-panel a11y: 0 violations, 11 passes. Surface/rows detailed under Menus &amp; Lists → Dropdown / List Items.</p>

      <h2>4. Figma ↔ build mapping</h2>
      <table>
        <tr><th>Figma variant</th><th>How the build exposes it</th><th>Visually pinned?</th></tr>
        <tr><td>State = Default</td><td><code>trigger-matrix</code> default · <code>playground</code></td><td class="m y">✓ pinned</td></tr>
        <tr><td>State = Hover</td><td><code>trigger-matrix</code> hover row (at rest)</td><td class="m n">interactive-only</td></tr>
        <tr><td>State = Focus</td><td><code>trigger-matrix</code> focus row (border + glow not static)</td><td class="m n">interactive-only</td></tr>
        <tr><td>State = Open</td><td><code>open-normal</code> · <code>open-searchable</code> stories</td><td class="m y">✓ pinned</td></tr>
        <tr><td>State = Selected</td><td><code>trigger-matrix</code> (filled text)</td><td class="m y">✓ pinned</td></tr>
        <tr><td>State = Multi-selected</td><td><code>multi-select</code> story (with count badge)</td><td class="m y">✓ pinned</td></tr>
        <tr><td>State = Multi-selected disabled</td><td><code>multi-select</code> + disabled (interactive combo)</td><td class="m n">interactive-only</td></tr>
        <tr><td>State = Error / Disabled</td><td><code>trigger-matrix</code> error / disabled rows</td><td class="m y">✓ pinned</td></tr>
        <tr><td>Label Static / Floating · Size L/S</td><td><code>playground</code> · <code>trigger-matrix</code></td><td class="m y">✓</td></tr>
        <tr><td><em>(no Figma variant)</em></td><td>build-only: <code>flag-rows</code>, <code>item-type-rows</code></td><td>-</td></tr>
      </table>

      <h2>5. Accessibility</h2>
      <p>Tab to focus; type to filter; Arrows/Enter to select; multi-select toggles options. Focus uses the shared convention; error is conveyed by red border + message (not color alone); disabled fully muted.</p>
      <h3>Text vs field</h3>
      <table>
        <tr><th>Element</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Filled / selection</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Placeholder</td><td>4.61:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Error message</td><td>7.38:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Chevron icon</td><td>12.45:1</td><td class="m y">Pass</td></tr>
        <tr><td>Count badge (white on blue)</td><td>5.39:1</td><td class="m y">Pass</td></tr>
      </table>
      <h3>Border vs background (non-text, 3:1)</h3>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Default</td><td>1.74:1</td><td class="m n">Below 3:1 - flagged</td></tr>
        <tr><td>Hover</td><td>5.39:1</td><td class="m y">Pass</td></tr>
        <tr><td>Focus / Open</td><td>2.37:1</td><td class="m n">Below 3:1 (glow reinforces)</td></tr>
        <tr><td>Error</td><td>7.38:1</td><td class="m y">Pass</td></tr>
      </table>
      <div class="callout warn">
        <p><span class="tag fail">QA-CX-A11Y-01 · KNOWN / SYSTEM-WIDE</span></p>
        <strong>Same default/focus border flags as Select.</strong> Default <span class="mono">#c4c4c4</span> (1.74:1) and focus <span class="mono">#66afe9</span> (2.37:1) fall below the 3:1 non-text minimum - the shared form-control tokens flagged on Checkbox, Radio, and Select. System-level resting/focus-border choices pending team review; fix across all form fields together.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-CX-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Shared form-field state tokens match Figma; count badge white-on-blue per doc.</td></tr>
        <tr><td class="id">QA-CX-STATE</td><td>State coverage</td><td><span class="tag obs">PASS · NOTE</span></td><td>Trigger states + full open panel (search, APPLY control, radio/checkbox rows) pinned; only Hover/Focus &amp; Multi-selected-disabled interactive-only.</td></tr>
        <tr><td class="id">QA-CX-MAP</td><td>Figma↔build mapping</td><td><span class="tag obs">INFO</span></td><td>Feature stories, not Figma's state matrix (§3). Build-only: flag-rows, item-type-rows.</td></tr>
        <tr><td class="id">QA-CX-A11Y-01</td><td>Contrast (borders)</td><td><span class="tag fail">KNOWN</span></td><td>Default 1.74:1 &amp; focus 2.37:1 below 3:1 - shared system-wide (see QA-SL-A11Y-01 / QA-CB-A11Y-01).</td></tr>
        <tr><td class="id">QA-CX-REC</td><td>Recommendation</td><td><span class="tag obs">SUGGEST</span></td><td>Pin Hover/Focus (with glow) demos so every state is visually QA-able.</td></tr>
      </table>
    `
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    group: 'Menus & Lists',
    status: 'Pass · notes',
    statusType: 'pass',
    html: `
      <h1 class="rt">Dropdown</h1>
      <p class="rmeta">Figma component 16267:306664 · Frame doc 16295:10147 (Menus &amp; Lists page) · Storybook: split across Overlays/Menu + Combobox open · Captured 2026-07-27</p>
      <p>A trigger-agnostic list surface - built from List Items in a scrollable container - opened by a Select, a Combobox, or an overflow/three-dot button. Two semantics share the surface: <strong>Listbox</strong> (selecting options) and <strong>Menu</strong> (choosing an action). Layouts: Compact and Full-screen (mobile). Anatomy: optional Search slot · List Slot (List Items) · optional Controls slot.</p>

      <div class="callout info"><strong>Organization note.</strong> Figma keeps Dropdown + List Items together on the "Menus &amp; Lists" page; the build doesn't have a standalone Dropdown component - it's split into <code>Overlays/Menu</code> (menu semantic) and the Combobox/Select <em>open</em> panels (listbox semantic). This report keeps the Figma grouping; §3 maps it to the build.</p></div>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">SURFACE &amp; TOKENS</p><div class="val">Pass</div><p class="sub">Elevated bg, +4y shadow, divider all match Figma</p></div>
        <div class="v pass"><p class="k">ANATOMY · LAYOUT</p><div class="val">Pass · note</div><p class="sub">Compact pinned (Menu); Listbox via Combobox open; Full-screen = mobile</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">Menu 0 a11y violations; roles + focus-on-row correct</p></div>
      </div>

      <h2>1. Surface tokens</h2>
      <table>
        <tr><th>Property</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Surface bg</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> (bg/elevated)</td><td class="mono">#ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Elevation</td><td class="mono">+4y - 0/4/8 rgba(0,0,0,.1) + 0/0/1 rgba(0,0,0,.2)</td><td class="mono">0 4px 8px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.2)</td><td class="m y">✓</td></tr>
        <tr><td>Border / divider</td><td><span class="chip" style="background:#dcdcdc"></span><span class="mono">#dcdcdc</span></td><td class="mono">1px #dcdcdc</td><td class="m y">✓</td></tr>
        <tr><td>Corner radius</td><td class="mono">0px</td><td class="mono">0px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Rendered surface (menu semantic)</h2>
      <p>From the "With icons and shortcuts" menu - elevated white surface, +4y shadow, rows built from List Items.</p>
      <div style="display:inline-block;background:#ffffff;border:1px solid #dcdcdc;box-shadow:0 4px 8px rgba(0,0,0,0.1),0 0 1px rgba(0,0,0,0.2);width:200px;font-size:14px;color:#343434">
        <div style="display:flex;justify-content:space-between;align-items:center;height:42px;padding:0 12px">Edit<span style="color:#757575;font-size:12px">⌘E</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;height:42px;padding:0 12px;background:#eff5fd">Mark done<span style="color:#757575;font-size:12px">⌘D</span></div>
        <div style="height:1px;background:#dcdcdc"></div>
        <div style="display:flex;justify-content:space-between;align-items:center;height:42px;padding:0 12px;background:#f8f8f8;color:#c4c4c4">Delete<span style="font-size:12px">⌫</span></div>
      </div>

      <h2>3. Figma ↔ build mapping</h2>
      <table>
        <tr><th>Figma</th><th>How the build exposes it</th><th>Pinned?</th></tr>
        <tr><td>Dropdown (Menu semantic)</td><td><code>Overlays/Menu</code>: overflow-menu, custom-trigger, with-icons-and-shortcuts, small-size, scrolling-menu</td><td class="m y">✓ pinned</td></tr>
        <tr><td>Dropdown (Listbox semantic)</td><td>Combobox <code>open-normal</code> / <code>open-searchable</code>; Select open (on interaction)</td><td class="m y">✓ (combobox) / interactive (select)</td></tr>
        <tr><td>Layout = Compact</td><td>Menu + Combobox open panels</td><td class="m y">✓ pinned</td></tr>
        <tr><td>Layout = Full-screen</td><td>mobile viewport (not a desktop story)</td><td class="m n">not pinned</td></tr>
        <tr><td>Search slot / Controls slot</td><td>Combobox <code>open-searchable</code> (search); Controls via secondary buttons</td><td class="m y">✓</td></tr>
        <tr><td><em>Standalone "Dropdown" component</em></td><td>none - composed inside Menu / Combobox / Select</td><td>-</td></tr>
      </table>

      <h2>4. Accessibility &amp; behavior</h2>
      <p>Roles: trigger <code>aria-haspopup="listbox"</code>/<code>"menu"</code>; list <code>role="listbox"</code>/<code>"menu"</code>; items <code>option</code>/<code>menuitem</code>. Keyboard: Up/Down move the active row (scrolled into view), Enter/Space select/activate, Esc closes and returns focus to the trigger, Home/End jump, type-ahead; disabled rows skipped. Focus = 2px ring <span class="mono">#005fcc</span> on the active row. Behavior: the list hugs content up to ~5.5 rows, then caps and scrolls (half-row peek signals more); Full-screen fills the viewport on mobile. Menu story: <strong>0 a11y violations, 9 passes</strong>.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-DD-TOK</td><td>Surface tokens</td><td><span class="tag pass">PASS</span></td><td>Elevated bg #ffffff, +4y shadow, #dcdcdc divider, 0px radius all match Figma.</td></tr>
        <tr><td class="id">QA-DD-STATE</td><td>Anatomy / layout</td><td><span class="tag obs">PASS · NOTE</span></td><td>Compact pinned; Full-screen is mobile-only (not a desktop story).</td></tr>
        <tr><td class="id">QA-DD-MAP</td><td>Figma↔build mapping</td><td><span class="tag obs">INFO</span></td><td>No standalone component; split across Overlays/Menu + Combobox/Select open panels (§3).</td></tr>
        <tr><td class="id">QA-DD-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Roles/keyboard/focus correct; Menu story 0 axe violations.</td></tr>
      </table>
    `
  },
  {
    id: 'list-items',
    name: 'List Items',
    group: 'Menus & Lists',
    status: 'a11y note',
    statusType: 'pass',
    html: `
      <h1 class="rt">List Items</h1>
      <p class="rmeta">Figma component 9180:1464 · Frame doc 16295:10147 (Menus &amp; Lists page) · Storybook: rendered as menu/option rows · Captured 2026-07-27</p>
      <p>The row inside a Dropdown surface: Leading slot (control) · Label · Trailing slot (badge/accessory). States Default, Hover, Selected, Disabled; sizes Large and Small; editable label. Used for both listbox options and menu actions.</p>

      <div class="callout info"><strong>Organization note.</strong> No standalone List Item component in the build - rows render as <code>role="menuitem"</code> (Overlays/Menu) and <code>role="option"</code> (Combobox/Select). Report kept under Figma's Menus &amp; Lists grouping.</p></div>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Default/Hover/Selected/Disabled bg + text match Figma</p></div>
        <div class="v pass"><p class="k">STATES · SIZES</p><div class="val">Pass</div><p class="sub">4 states; Large 42 confirmed, Small 38 (per Figma)</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass · note</div><p class="sub">Hover = Selected bg - selection must use a control/check</p></div>
      </div>

      <h2>1. Token fidelity - color per state</h2>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Default</td><td>row bg / text</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#343434"></span><span class="mono">#343434</span></td><td class="mono">#ffffff / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>row bg</td><td><span class="chip" style="background:#eff5fd"></span><span class="mono">#eff5fd</span></td><td class="mono">#eff5fd</td><td class="m y">✓</td></tr>
        <tr><td>Selected</td><td>row bg</td><td><span class="chip" style="background:#eff5fd"></span><span class="mono">#eff5fd</span> (= hover)</td><td class="mono">#eff5fd</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>row bg / text</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#f8f8f8 / #c4c4c4</td><td class="m y">✓</td></tr>
      </table>
      <h3>Sizing &amp; type</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Row height (Large / Small)</td><td class="mono">42px / 38px</td><td class="mono">42px (menu) / 38 per Figma</td><td class="m y">✓*</td></tr>
        <tr><td>Label font</td><td class="mono">Maison Neue Book</td><td class="mono">Maison Neue</td><td class="m y">✓</td></tr>
      </table>
      <p style="font-size:12px;color:var(--sh-mid-gray)">* Large row height 42 confirmed in the menu; Small 38 taken from Figma (build small-size menu story exists) - spot-check.</p>

      <h2>2. Side-by-side - states (Large)</h2>
      <p>Row facsimiles from the matching token values. Selected shows a trailing check to convey selection (see the a11y note).</p>
      <div class="swatchgrid" style="grid-template-columns:130px 1fr 1fr;">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Default</div>
          <div class="cell"><span style="display:flex;align-items:center;width:190px;height:42px;padding:0 12px;background:#ffffff;border:1px solid #dcdcdc;color:#343434;font-size:14px">Option label</span></div>
          <div class="cell"><span style="display:flex;align-items:center;width:190px;height:42px;padding:0 12px;background:#ffffff;border:1px solid #dcdcdc;color:#343434;font-size:14px">Option label</span></div>
        <div class="stc">Hover</div>
          <div class="cell"><span style="display:flex;align-items:center;width:190px;height:42px;padding:0 12px;background:#eff5fd;border:1px solid #dcdcdc;color:#343434;font-size:14px">Option label</span></div>
          <div class="cell"><span style="display:flex;align-items:center;width:190px;height:42px;padding:0 12px;background:#eff5fd;border:1px solid #dcdcdc;color:#343434;font-size:14px">Option label</span></div>
        <div class="stc">Selected</div>
          <div class="cell"><span style="display:flex;align-items:center;justify-content:space-between;width:190px;height:42px;padding:0 12px;background:#eff5fd;border:1px solid #dcdcdc;color:#343434;font-size:14px">Option label<span style="color:#07729c;font-weight:700">✓</span></span></div>
          <div class="cell"><span style="display:flex;align-items:center;justify-content:space-between;width:190px;height:42px;padding:0 12px;background:#eff5fd;border:1px solid #dcdcdc;color:#343434;font-size:14px">Option label<span style="color:#07729c;font-weight:700">✓</span></span></div>
        <div class="stc">Disabled</div>
          <div class="cell"><span style="display:flex;align-items:center;width:190px;height:42px;padding:0 12px;background:#f8f8f8;border:1px solid #dcdcdc;color:#c4c4c4;font-size:14px">Option label</span></div>
          <div class="cell"><span style="display:flex;align-items:center;width:190px;height:42px;padding:0 12px;background:#f8f8f8;border:1px solid #dcdcdc;color:#c4c4c4;font-size:14px">Option label</span></div>
      </div>

      <h2>3. Accessibility</h2>
      <p>Contrast (frame doc): label <span class="mono">#343434</span> on white 12.45:1 (AAA); label on hover/selected <span class="mono">#eff5fd</span> 11.35:1 (AAA); focus ring <span class="mono">#005fcc</span> 5.98:1; disabled label 1.64:1 (exempt).</p>
      <div class="callout warn">
        <p><span class="tag fail">QA-LI-01 · DESIGN NOTE (correctly implemented)</span></p>
        <strong>Hover and Selected share the same background (<span class="mono">#eff5fd</span>).</strong> So selection must be conveyed by the option's control (checkbox/radio checked state) or a checkmark - <em>not</em> by background alone. A plain "selected" row with no control would be indistinguishable from hover. The build follows this (selection carries a control/check); flagged so it stays true as new list content is added.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-LI-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Default/Hover/Selected/Disabled bg + text match Figma (menu-item tokens).</td></tr>
        <tr><td class="id">QA-LI-STATE</td><td>States &amp; sizes</td><td><span class="tag pass">PASS</span></td><td>4 states; Large 42 confirmed; Small 38 per Figma (spot-check).</td></tr>
        <tr><td class="id">QA-LI-01</td><td>Selection cue</td><td><span class="tag obs">NOTE</span></td><td>Hover = Selected bg; selection conveyed by control/check, not bg alone. Keep true for new rows.</td></tr>
      </table>
    `
  },
  {
    id: 'modal-dialog',
    name: 'Modal Dialog',
    group: 'Overlays',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Modal Dialog</h1>
      <p class="rmeta">Figma component 6799:7554 · Frame doc 16236:306054 · Storybook /story/overlays-modal · Captured 2026-07-27</p>
      <p>A centered overlay dialog for focused tasks and confirmations, shown above a dimmed backdrop. Default has a titled header; Compact is headerless for short confirmations. The surface sits on <code>color.bg.elevated</code> with a <code>color.bg.overlay</code> scrim; the Default header uses <code>color.bg.section</code>. Body and actions are editable slots.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Overlay, surface, header, borders &amp; title all match</p></div>
        <div class="v pass"><p class="k">STRUCTURE · VARIANTS</p><div class="val">Pass</div><p class="sub">Default/Compact × L/S pinned; footer toggle; slots</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">role=dialog, focus trap; 0 axe violations</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td><strong>Overlay scrim</strong></td><td><span class="mono">color/bg/overlay = #00000066</span> (black 40%)</td><td class="mono">rgba(0,0,0,0.4)</td><td class="m y">✓</td></tr>
        <tr><td>Surface bg</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> (bg/elevated)</td><td class="mono">#ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Surface border</td><td><span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> 1px</td><td class="mono">1px #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Header bg</td><td><span class="chip" style="background:#f8f5f3;border:1px solid #ddd"></span><span class="mono">#f8f5f3</span> (bg/section)</td><td class="mono">#f8f5f3</td><td class="m y">✓</td></tr>
        <tr><td>Header / footer divider</td><td><span class="chip" style="background:#dcdcdc"></span><span class="mono">#dcdcdc</span> 1px</td><td class="mono">1px #dcdcdc</td><td class="m y">✓</td></tr>
        <tr><td>Title</td><td class="mono">Headline3 24px Bold · #343434</td><td class="mono">24px 700 · #343434</td><td class="m y">✓</td></tr>
        <tr><td>Corner radius</td><td class="mono">0px</td><td class="mono">0px</td><td class="m y">✓</td></tr>
      </table>
      <h3>Spacing</h3>
      <table>
        <tr><th>Region</th><th>Figma</th><th>Match</th></tr>
        <tr><td>Header padding</td><td class="mono">30 × 24 · close-icon-gap 16</td><td class="m y">✓</td></tr>
        <tr><td>Body padding</td><td class="mono">30 × 30</td><td class="m y">✓</td></tr>
        <tr><td>Footer padding / action-gap</td><td class="mono">30 × 20 · gap 20</td><td class="m y">✓</td></tr>
        <tr><td>Dialog width (Large / Small)</td><td class="mono">600px / 400px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Rendered (Default, L)</h2>
      <p>The dialog on its <code>color.bg.overlay</code> scrim - from the "Default Large" story ("Reset Password").</p>
      <div style="background:rgba(0,0,0,0.4);padding:28px;display:flex;justify-content:center">
        <div style="width:340px;background:#ffffff;border:1px solid #c4c4c4">
          <div style="display:flex;justify-content:space-between;align-items:center;background:#f8f5f3;border-bottom:1px solid #dcdcdc;padding:14px 18px"><span style="font-size:18px;font-weight:700;color:#343434">Reset Password</span><span style="color:#343434">✕</span></div>
          <div style="padding:18px;font-size:14px;color:#343434">Enter your email and we'll send a reset link.</div>
          <div style="display:flex;gap:12px;border-top:1px solid #dcdcdc;padding:12px 18px">
            <span style="flex:1;display:inline-flex;align-items:center;justify-content:center;height:36px;border:2px solid #07729c;color:#07729c;font-weight:700;font-size:11px;text-transform:uppercase">Cancel</span>
            <span style="flex:1;display:inline-flex;align-items:center;justify-content:center;height:36px;background:#07729c;color:#fff;font-weight:700;font-size:11px;text-transform:uppercase">Confirm</span>
          </div>
        </div>
      </div>

      <h2>3. Structure, variants &amp; props</h2>
      <p>Type Default (titled) / Compact (headerless); Size L / S; <code>buttons</code> toggles the footer; Content and Buttons slots are editable. Stories pin the matrix: Default Large, Default Small, Compact Large, Compact Small, No Footer, Mandatory Input, Destructive Focuses Safe Button. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p><code>role="dialog"</code> with <code>aria-modal="true"</code>; Default is labelled by its header (aria-labelledby), Compact needs an aria-label. On open, focus moves into the dialog and is trapped; on close it returns to the trigger. Close button and Esc both dismiss. Focus ring <span class="mono">#005fcc</span> / 2px. Story: <strong>0 a11y violations, 3 passes</strong>.</p>
      <table>
        <tr><th>Element</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Header title / close icon #343434 on #f8f5f3</td><td>11.47:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Body text #343434 on white</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Focus ring #005FCC</td><td>5.98:1</td><td class="m y">Pass</td></tr>
        <tr><td>Outer border #C4C4C4</td><td>1.74:1</td><td class="m y">Acceptable (see note)</td></tr>
      </table>
      <div class="callout info">
        <p style="margin:0"><span class="tag obs">QA-MD-01 · BY DESIGN</span> The <strong>dimmed overlay (<span class="mono">color.bg.overlay</span>) is the primary separation</strong> between dialog and page - not the 1px border. So the outer border's below-3:1 contrast (1.74:1) is acceptable here, because the scrim carries the separation. This is the opposite call from the form-field border item, and it's the right one for the dialog pattern.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-MD-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Overlay #00000066, surface #ffffff/#c4c4c4, header #f8f5f3/#dcdcdc, 24px title all match; spacing per tokens.</td></tr>
        <tr><td class="id">QA-MD-OVL</td><td>Overlay token</td><td><span class="tag pass">PASS</span></td><td>Backdrop applies color/bg/overlay (rgba(0,0,0,0.4)) - verified on the dialog's scrim element.</td></tr>
        <tr><td class="id">QA-MD-STATE</td><td>Structure · variants</td><td><span class="tag pass">PASS</span></td><td>Default/Compact × L/S pinned; footer toggle + No-Footer, Mandatory Input, Destructive stories.</td></tr>
        <tr><td class="id">QA-MD-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>role=dialog/aria-modal, focus trap + return, Esc/close; 0 axe violations; contrast AAA.</td></tr>
        <tr><td class="id">QA-MD-01</td><td>Outer border contrast</td><td><span class="tag obs">BY DESIGN</span></td><td>1.74:1 acceptable - the overlay scrim is the primary separation, per the dialog pattern.</td></tr>
      </table>
    `
  },
  {
    id: 'pagination',
    name: 'Pagination',
    group: 'Navigation',
    status: 'Fix',
    statusType: 'fix',
    handoffs: [{
      code: 'QA-PG-01',
      title: 'Ellipsis vertical alignment (fix)',
      text: `Component: Pagination
Storybook: http://34.74.189.135:30100/?path=/story/navigation-pagination--mid-range
Figma (source of truth): UI-Kit__Web node 10633:3912

Finding QA-PG-01 - vertical alignment
Observed: the ellipsis ("…") renders on the text baseline, so it sits lower than the page numbers and arrows, which are centered on the row.
Expected: the ellipsis is optically centered on the row, aligned with the numbers and arrows (as in Figma).

Acceptance criteria:
- Ellipsis vertical center matches the numbers/arrows in Start, Middle, and End layouts.
- No change to number, arrow, or current-underline positioning.
- Re-verify visually against Figma node 10633:3912.

Reference values (design truth): number #07729c · current #343434 + 2px underline bar · ellipsis #343434 · arrows enabled #07729c / disabled #c4c4c4 · Maison Neue Bold 14px.

Fix approach is the team's call - no code prescribed.`
    }],
    html: `
      <h1 class="rt">Pagination</h1>
      <p class="rmeta">Figma component 10633:3912 · Frame doc 16112:301624 · Storybook /story/navigation-pagination · Captured 2026-07-27</p>
      <p>Lets users move through content split across pages - shows the current page, nearby pages, and first/last, truncating the middle with an ellipsis. Previous/next arrows step one page and disable at the first/last page. Layouts: Start, Middle, End.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Number, current, ellipsis, arrow colors + type match</p></div>
        <div class="v pass"><p class="k">STATES · LAYOUTS</p><div class="val">Pass</div><p class="sub">Start/Middle/End; arrow disable at ends; current underline</p></div>
        <div class="v fix"><p class="k">ALIGNMENT</p><div class="val">1 fix</div><p class="sub">Ellipsis sits on the baseline - lower than numbers/arrows</p></div>
      </div>
      <p>Tokens and accessibility are clean. The one issue - the one you spotted - is the <strong>ellipsis vertical alignment</strong>: it renders on the text baseline and sits visibly lower than the numbers and arrows.</p>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Number (default / hover)</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> (link)</td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
        <tr><td>Current page</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> + 2px underline bar</td><td class="mono">#343434 · underline bar · aria-current</td><td class="m y">✓</td></tr>
        <tr><td>Ellipsis</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span></td><td class="mono">#343434</td><td class="m y">✓</td></tr>
        <tr><td>Arrow (enabled)</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
        <tr><td>Arrow (disabled)</td><td><span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> (icon/disabled)</td><td class="mono">#c4c4c4 · aria-disabled</td><td class="m y">✓</td></tr>
        <tr><td>Type</td><td class="mono">Maison Neue Bold 14px</td><td class="mono">700 · 14px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Alignment - Figma vs build (mid-range)</h2>
      <p>Same content, showing the difference in ellipsis vertical position.</p>
      <div class="swatchgrid" style="grid-template-columns:230px 1fr">
        <div class="hd">Source</div><div class="hd">Rendering</div>
        <div class="stc">Figma - ellipsis centered</div>
        <div class="cell"><span style="display:flex;align-items:center;gap:14px;font-weight:700;font-size:14px">
          <span style="color:#07729c">‹</span><span style="color:#07729c">1</span><span style="color:#343434">…</span><span style="color:#07729c">4</span><span style="color:#343434;border-bottom:2px solid #343434;padding-bottom:1px">5</span><span style="color:#07729c">6</span><span style="color:#343434">…</span><span style="color:#07729c">30</span><span style="color:#07729c">›</span>
        </span></div>
        <div class="stc">Storybook - ellipsis on baseline</div>
        <div class="cell"><span style="display:flex;align-items:center;gap:14px;font-weight:700;font-size:14px">
          <span style="color:#07729c">‹</span><span style="color:#07729c">1</span><span style="color:#343434;position:relative;top:5px">…</span><span style="color:#07729c">4</span><span style="color:#343434;border-bottom:2px solid #343434;padding-bottom:1px">5</span><span style="color:#07729c">6</span><span style="color:#343434;position:relative;top:5px">…</span><span style="color:#07729c">30</span><span style="color:#07729c">›</span>
        </span></div>
      </div>

      <h2>3. States, layouts &amp; props</h2>
      <p>Layout Start / Middle / End (where the current page sits in a truncated range); Left/Right Arrow booleans; page states Default, Hover, Current, Ellipsis; arrow states Default, Hover, Disabled. Verified across Start-of-list (Prev disabled), Mid-range, End-of-list, and Few-pages (no arrows). <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Wrapped in a <code>nav</code> landmark labelled "Pagination"; page numbers are links in a list; current is <code>aria-current="page"</code> rendered as text (not a link); arrows have names "Previous page" / "Next page" and disable at the ends. Keyboard tab order + Enter; focus ring <span class="mono">#005fcc</span> / 2px. Current and Hover add an underline bar - a non-color cue (WCAG 1.4.1). Story: <strong>0 violations, 16 passes</strong>.</p>
      <table>
        <tr><th>Element</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Number (default / hover)</td><td>5.39:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Current page</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Ellipsis</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Arrow (enabled)</td><td>5.39:1</td><td class="m y">Pass</td></tr>
        <tr><td>Focus ring</td><td>5.98:1</td><td class="m y">Pass</td></tr>
      </table>

      <h2>5. Findings</h2>
      <div class="callout warn">
        <p><span class="tag fail">QA-PG-01 · ALIGNMENT - FIX</span></p>
        <strong>The ellipsis is not vertically centered.</strong> It renders on the text baseline, so the three dots sit visibly lower than the numbers and arrows (which are centered on the row). In Figma the ellipsis is centered within the row. Not an a11y issue - a visual polish fix. Recommend centering it (e.g., a midline treatment / flex-center the dots, or shift up to the optical center), then re-verify against Figma.
      </div>
      <figure style="margin:16px 0;border:1px solid var(--sh-border)">
        <img src="assets/pagination-alignment.png" alt="Storybook vs Figma pagination with alignment gridlines; the Storybook ellipsis sits below the row centerline shared by the numbers and arrows" style="display:block;width:100%;height:auto">
        <figcaption style="font-size:12px;color:var(--sh-mid-gray);padding:8px 12px;background:var(--sh-light-tan-1)"><strong>Evidence (Storybook vs Figma).</strong> With alignment gridlines overlaid, the Storybook ellipsis falls on the baseline - below the centerline the numbers and arrows share; Figma keeps the ellipsis on that centerline.</figcaption>
      </figure>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-PG-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Number #07729c, current #343434+bar, ellipsis #343434, arrows enabled #07729c / disabled #c4c4c4, 14px bold - all match.</td></tr>
        <tr><td class="id">QA-PG-STATE</td><td>States &amp; layouts</td><td><span class="tag pass">PASS</span></td><td>Start/Middle/End, arrow disable at ends, current underline, few-pages (no arrows) all correct.</td></tr>
        <tr><td class="id">QA-PG-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>nav landmark, links list, aria-current text, arrow names, underline non-color cue; 0 axe violations.</td></tr>
        <tr><td class="id">QA-PG-01</td><td>Vertical alignment</td><td><span class="tag fail">FIX</span></td><td>Ellipsis renders on baseline - sits lower than numbers/arrows; Figma centers it. Visual polish.</td></tr>
      </table>
    `
  },
  {
    id: 'switch',
    name: 'Switch',
    group: 'Forms',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Switch</h1>
      <p class="rmeta">Figma component 10027:3635 · Frame doc 15928:297865 · Storybook /docs/forms-switch · Captured 2026-07-27</p>
      <p>A binary on/off toggle. The thumb slides left (off) / right (on) and the track color reinforces state - blue when on, gray when off. States: off and on (each with a hover) plus disabled off and on. No size variant.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Track/thumb colors + sizes match Figma</p></div>
        <div class="v pass"><p class="k">STATES</p><div class="val">Pass</div><p class="sub">On/Off (+hover), Disabled on/off; state by thumb position</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">Position conveys state (not color); one by-design contrast note</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>On</td><td>track / thumb</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span></td><td class="mono">#07729c / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Off</td><td>track / thumb</td><td><span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> / <span class="mono">#ffffff</span></td><td class="mono">#c4c4c4 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>track / thumb</td><td><span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span> / <span class="mono">#ffffff</span></td><td class="mono">#e3e3e3 / #ffffff</td><td class="m y">✓</td></tr>
      </table>
      <h3>Sizing &amp; shape</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Track (W × H)</td><td class="mono">38 × 21px · pill</td><td class="mono">38 × 21 · radius 20px</td><td class="m y">✓</td></tr>
        <tr><td>Thumb</td><td class="mono">15px circle</td><td class="mono">15px · radius 50%</td><td class="m y">✓</td></tr>
        <tr><td>Padding</td><td class="mono">3px</td><td class="mono">3px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states</h2>
      <p>Rendered from the matching token values; thumb position carries the state.</p>
      <div class="swatchgrid" style="grid-template-columns:150px 1fr 1fr">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">On</div>
          <div class="cell"><span style="display:inline-flex;width:38px;height:21px;border-radius:20px;background:#07729c;padding:3px;align-items:center;justify-content:flex-end"><span style="width:15px;height:15px;border-radius:50%;background:#fff;display:block"></span></span></div>
          <div class="cell"><span style="display:inline-flex;width:38px;height:21px;border-radius:20px;background:#07729c;padding:3px;align-items:center;justify-content:flex-end"><span style="width:15px;height:15px;border-radius:50%;background:#fff;display:block"></span></span></div>
        <div class="stc">Off</div>
          <div class="cell"><span style="display:inline-flex;width:38px;height:21px;border-radius:20px;background:#c4c4c4;padding:3px;align-items:center;justify-content:flex-start"><span style="width:15px;height:15px;border-radius:50%;background:#fff;display:block"></span></span></div>
          <div class="cell"><span style="display:inline-flex;width:38px;height:21px;border-radius:20px;background:#c4c4c4;padding:3px;align-items:center;justify-content:flex-start"><span style="width:15px;height:15px;border-radius:50%;background:#fff;display:block"></span></span></div>
        <div class="stc">Disabled Off</div>
          <div class="cell"><span style="display:inline-flex;width:38px;height:21px;border-radius:20px;background:#e3e3e3;padding:3px;align-items:center;justify-content:flex-start"><span style="width:15px;height:15px;border-radius:50%;background:#fff;display:block"></span></span></div>
          <div class="cell"><span style="display:inline-flex;width:38px;height:21px;border-radius:20px;background:#e3e3e3;padding:3px;align-items:center;justify-content:flex-start"><span style="width:15px;height:15px;border-radius:50%;background:#fff;display:block"></span></span></div>
        <div class="stc">Disabled On</div>
          <div class="cell"><span style="display:inline-flex;width:38px;height:21px;border-radius:20px;background:#e3e3e3;padding:3px;align-items:center;justify-content:flex-end"><span style="width:15px;height:15px;border-radius:50%;background:#fff;display:block"></span></span></div>
          <div class="cell"><span style="display:inline-flex;width:38px;height:21px;border-radius:20px;background:#e3e3e3;padding:3px;align-items:center;justify-content:flex-end"><span style="width:15px;height:15px;border-radius:50%;background:#fff;display:block"></span></span></div>
      </div>

      <h2>3. States &amp; props</h2>
      <p>On/Off with a hover each, plus Disabled on/off (6 states, no size variant). Hover states are present in Figma; the build applies them on interaction and no distinct hover track-color token surfaced this pass (state distinction is carried by the on/off track colors + thumb position). <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Tab to focus, Space or Enter to toggle; <code>role="switch"</code> with <code>aria-checked</code>. On/off is conveyed by the <strong>thumb position</strong> (left = off, right = on) in addition to track color, so it doesn't rely on color alone (WCAG 1.4.1). Focus ring <span class="mono">#005fcc</span> / 2px; disabled not focusable and muted.</p>
      <table>
        <tr><th>Pair</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>On track vs Off track (state difference)</td><td>3.09:1</td><td class="m y">Pass (non-text 3:1)</td></tr>
        <tr><td>Thumb vs On track</td><td>5.39:1</td><td class="m y">Pass</td></tr>
        <tr><td>Thumb vs Off track</td><td>1.74:1</td><td>By design (see note)</td></tr>
        <tr><td>Thumb vs Disabled track</td><td>1.28:1</td><td>Exempt (disabled)</td></tr>
      </table>
      <div class="callout info">
        <p style="margin:0"><span class="tag obs">QA-SW-01 · BY DESIGN</span> Thumb-vs-off-track contrast is 1.74:1 (below 3:1), but a switch's on/off meaning is carried by <strong>thumb position</strong>, not thumb-vs-track contrast - so it doesn't impair usability. The state-distinguishing pair (on track vs off track) is 3.09:1, above the 3:1 non-text threshold. Acceptable, same reasoning as the Modal border/overlay call.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-SW-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>On #07729c / off #c4c4c4 / disabled #e3e3e3 tracks, white thumb, track 38 / thumb 15 / pad 3 - all match.</td></tr>
        <tr><td class="id">QA-SW-STATE</td><td>States</td><td><span class="tag pass">PASS</span></td><td>On/Off (+hover) and Disabled on/off; state carried by thumb position.</td></tr>
        <tr><td class="id">QA-SW-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Position conveys state (1.4.1); focus ring #005FCC; on-vs-off track 3.09:1.</td></tr>
        <tr><td class="id">QA-SW-01</td><td>Thumb/off-track contrast</td><td><span class="tag obs">BY DESIGN</span></td><td>1.74:1 acceptable - state carried by thumb position, not contrast.</td></tr>
      </table>
    `
  },
  {
    id: 'toggle',
    name: 'Toggle',
    group: 'Forms',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Toggle</h1>
      <p class="rmeta">Figma component 9726:12904 · Frame doc 15930:297932 · Storybook /story/forms-toggle · Captured 2026-07-27</p>
      <p>A segmented control for switching between mutually exclusive views or modes (e.g. List / Grid). Exactly one segment is selected at a time. A bordered container holding segments; each segment has default, selected, hover, and disabled states.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Segment + container colors, size &amp; selected weight match</p></div>
        <div class="v pass"><p class="k">STATES</p><div class="val">Pass</div><p class="sub">Default / selected / disabled; list &amp; grid active</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">Selected = fill + bold, not color alone; focus ring matches</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Segment default</td><td>text / bg</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> · 14px regular</td><td class="mono">#343434 / #ffffff · 400</td><td class="m y">✓</td></tr>
        <tr><td>Segment selected</td><td>text / bg</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> · 14px bold</td><td class="mono">#ffffff / #07729c · 700</td><td class="m y">✓</td></tr>
        <tr><td>Container</td><td>bg / border</td><td><span class="mono">#ffffff</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> 1px</td><td class="mono">#ffffff / #c4c4c4 1px</td><td class="m y">✓</td></tr>
        <tr><td>Segment height / gap / padding</td><td>size</td><td class="mono">38px · gap 4 · pad 4</td><td class="mono">38px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states</h2>
      <p>Rendered from the matching token values; selected segment is filled and bold.</p>
      <div class="swatchgrid" style="grid-template-columns:150px 1fr 1fr">
        <div class="hd">Active</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">List</div>
          <div class="cell"><span style="display:inline-flex;border:1px solid #c4c4c4;background:#fff;padding:4px;gap:4px;font-size:14px"><span style="display:inline-flex;align-items:center;height:38px;padding:0 16px;background:#07729c;color:#fff;font-weight:700">List</span><span style="display:inline-flex;align-items:center;height:38px;padding:0 16px;color:#343434">Grid</span></span></div>
          <div class="cell"><span style="display:inline-flex;border:1px solid #c4c4c4;background:#fff;padding:4px;gap:4px;font-size:14px"><span style="display:inline-flex;align-items:center;height:38px;padding:0 16px;background:#07729c;color:#fff;font-weight:700">List</span><span style="display:inline-flex;align-items:center;height:38px;padding:0 16px;color:#343434">Grid</span></span></div>
        <div class="stc">Grid</div>
          <div class="cell"><span style="display:inline-flex;border:1px solid #c4c4c4;background:#fff;padding:4px;gap:4px;font-size:14px"><span style="display:inline-flex;align-items:center;height:38px;padding:0 16px;color:#343434">List</span><span style="display:inline-flex;align-items:center;height:38px;padding:0 16px;background:#07729c;color:#fff;font-weight:700">Grid</span></span></div>
          <div class="cell"><span style="display:inline-flex;border:1px solid #c4c4c4;background:#fff;padding:4px;gap:4px;font-size:14px"><span style="display:inline-flex;align-items:center;height:38px;padding:0 16px;color:#343434">List</span><span style="display:inline-flex;align-items:center;height:38px;padding:0 16px;background:#07729c;color:#fff;font-weight:700">Grid</span></span></div>
      </div>

      <h2>3. States &amp; props</h2>
      <p>Container State = list / grid (which segment is active); each segment has Default, Selected, Hover, Disabled. Selected renders filled + bold. <span class="m y">✓ Pass</span></p>
      <div class="callout info">
        <p style="margin:0"><span class="tag obs">QA-TG-01 · PENDING (design-side)</span> Per the frame doc, the segment <strong>Hover</strong> currently uses a placeholder token identical to Default - a real hover treatment is pending. The build matches the current (placeholder) token, so this is a design decision to finalize, not a build defect. Re-QA hover once the token lands.</p>
      </div>

      <h2>4. Accessibility</h2>
      <p>Tab to focus the group; Arrow keys move between segments; Space or Enter selects. Selection is conveyed by a filled background <em>and</em> a text color + weight change (not color alone). Focus ring <span class="mono">#005fcc</span> / 2px; disabled not focusable and muted.</p>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Default / Hover (#343434 on white)</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Selected (white on #07729c)</td><td>5.39:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Disabled (gray-400 on gray-50)</td><td>~1.6:1</td><td>Exempt (disabled)</td></tr>
      </table>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-TG-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Default #343434/white, selected white/#07729c (bold), container #c4c4c4 border, 38px segments - all match.</td></tr>
        <tr><td class="id">QA-TG-STATE</td><td>States</td><td><span class="tag pass">PASS</span></td><td>List/Grid active; default vs selected (filled + bold) correct.</td></tr>
        <tr><td class="id">QA-TG-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Selected = fill + bold (not color alone); arrow-key nav; focus ring #005FCC.</td></tr>
        <tr><td class="id">QA-TG-01</td><td>Hover token</td><td><span class="tag obs">PENDING</span></td><td>Hover is a placeholder (= default) pending a real hover treatment; design-side, re-QA when it lands.</td></tr>
      </table>
    `
  },
  {
    id: 'tabs',
    name: 'Tabs',
    group: 'Navigation',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Tabs</h1>
      <p class="rmeta">Figma component 9327:7373 · Frame doc 16197:302181 · Storybook /story/navigation-tabs · Captured 2026-07-27</p>
      <p>Let people switch between related views in the same context, showing one panel at a time. The selected tab is marked by a blue underline; labels can optionally carry a count. Tabs are background-transparent and adapt to whatever surface they sit on; only the indicator, label, and optional counter carry color.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Label, indicator, baseline &amp; counter badges match Figma</p></div>
        <div class="v pass"><p class="k">STATES · PROPS</p><div class="val">Pass</div><p class="sub">Default/Selected/Disabled; counter on/off</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">tablist/tab/tabpanel + roving tabindex; state by indicator + text</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Label (all states)</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> · 14px bold</td><td class="mono">#343434 · 700</td><td class="m y">✓</td></tr>
        <tr><td>Selected indicator</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> · 2px bottom</td><td class="mono">inset 0 -2px 0 #07729c</td><td class="m y">✓</td></tr>
        <tr><td>Default baseline track</td><td><span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> · 1px</td><td class="mono">inset 0 -1px 0 #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Counter - default</td><td><span class="mono">#343434</span> on <span class="chip" style="background:#eeeeee"></span><span class="mono">#eeeeee</span></td><td class="mono">#343434 on #eeeeee</td><td class="m y">✓</td></tr>
        <tr><td>Counter - selected</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> on <span class="chip" style="background:#eff5fd"></span><span class="mono">#eff5fd</span></td><td class="mono">#07729c on #eff5fd</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td><span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> label · #e3e3e3 border · count on #f8f8f8</td><td class="mono">#c4c4c4 · #e3e3e3 · #f8f8f8</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - tab set</h2>
      <p>Rendered from the matching token values (Overview selected). Selected = blue underline + selected counter; disabled muted.</p>
      <div class="swatchgrid" style="grid-template-columns:110px 1fr">
        <div class="hd">Source</div><div class="hd">Rendering</div>
        <div class="stc">Figma</div><div class="cell" id="tabfig"></div>
        <div class="stc">Storybook</div><div class="cell" id="tabsb"></div>
      </div>

      <h2>3. States &amp; props</h2>
      <p>State: Default, Hover, Selected, Disabled. Counter boolean (count badge after the label, default on; "without counter" story hides it). Hover adds the 2px indicator plus a subtle <span class="mono">#f8f8f8</span> background (interactive; applied on hover). <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Container <code>role="tablist"</code>; each tab <code>role="tab"</code> with <code>aria-selected</code>; panel <code>role="tabpanel"</code> with <code>aria-labelledby</code>; tabs reference panels via <code>aria-controls</code>. Keyboard: Tab enters the tablist (roving tabindex, only the selected tab is tabbable), Left/Right move, Home/End jump, Enter/Space activate, disabled tabs skipped. Focus ring <span class="mono">#005fcc</span> / 2px.</p>
      <table>
        <tr><th>Element</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Label #343434</td><td>12.45:1</td><td class="m y">AAA</td></tr>
        <tr><td>Selected / hover indicator #07729c</td><td>5.39:1</td><td class="m y">Pass (non-text ≥3:1)</td></tr>
        <tr><td>Counter default #343434 on #eeeeee</td><td>10.73:1</td><td class="m y">Pass</td></tr>
        <tr><td>Counter selected #07729c on #eff5fd</td><td>4.92:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Default baseline track #c4c4c4</td><td>1.74:1</td><td>Decorative (see note)</td></tr>
      </table>
      <div class="callout info">
        <p style="margin:0"><span class="tag obs">QA-TAB-01 · BY DESIGN</span> The resting baseline track (<span class="mono">#c4c4c4</span>, 1.74:1) is a decorative divider; the selected state is carried by the 2px indicator + text/counter, not by the baseline contrast. Acceptable, same reasoning as the switch/modal.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-TAB-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Label #343434 bold, indicator 2px #07729c, baseline 1px #c4c4c4, counter default/selected/disabled badges - all match.</td></tr>
        <tr><td class="id">QA-TAB-STATE</td><td>States &amp; props</td><td><span class="tag pass">PASS</span></td><td>Default/Selected/Disabled correct; counter on/off; hover indicator + #f8f8f8 bg (interactive).</td></tr>
        <tr><td class="id">QA-TAB-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>tablist/tab/tabpanel, roving tabindex, arrow nav, disabled skipped; state via indicator + text.</td></tr>
        <tr><td class="id">QA-TAB-01</td><td>Baseline track contrast</td><td><span class="tag obs">BY DESIGN</span></td><td>Decorative divider (1.74:1); state carried by indicator + text, not the track.</td></tr>
      </table>
    `,
    tabset: true
  },
  {
    id: 'text-field',
    name: 'Text Field',
    group: 'Forms',
    status: 'a11y note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Text Field</h1>
      <p class="rmeta">Figma component 9327:7519 · Frame doc 15989:311951 · Storybook /story/forms-textfield · Captured 2026-07-27</p>
      <p>A single-line input on the shared form-field tokens (same field box as Select and Combobox). Two label styles (static, floating) and two sizes, across states Default, Hover, Focus, Filled, Auto-filled, Disabled, Error. Supports a label, an optional required asterisk, helper text, an error message, and an optional trailing affordance (icon or "Show").</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">All 7 state tokens, placeholder, sizes match Figma</p></div>
        <div class="v pass"><p class="k">STATES · PROPS</p><div class="val">Pass</div><p class="sub">Default/Filled/Error/Disabled/Small/Floating pinned as stories</p></div>
        <div class="v fail"><p class="k">ACCESSIBILITY</p><div class="val">a11y note</div><p class="sub">Default &amp; focus border below 3:1 (shared system-wide item)</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Default</td><td>bg / border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#ffffff / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>border</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
        <tr><td>Focus</td><td>border + glow</td><td><span class="chip" style="background:#66afe9"></span><span class="mono">#66afe9</span> + Glow-Blue</td><td class="mono">#66afe9 + glow</td><td class="m y">✓</td></tr>
        <tr><td>Filled</td><td>bg / border / text</td><td><span class="mono">#ffffff</span> / <span class="mono">#c4c4c4</span> / <span class="chip" style="background:#343434"></span><span class="mono">#343434</span></td><td class="mono">#ffffff / #c4c4c4 / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Auto-filled</td><td>bg / border</td><td><span class="chip" style="background:#eff5fd"></span><span class="mono">#eff5fd</span> / <span class="mono">#c4c4c4</span></td><td class="mono">#eff5fd / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Error</td><td>bg / border / text</td><td><span class="chip" style="background:#fde5e5"></span><span class="mono">#fde5e5</span> / <span class="chip" style="background:#b00000"></span><span class="mono">#b00000</span></td><td class="mono">#fde5e5 / #b00000</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / border / text</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / <span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#f8f8f8 / #e3e3e3 / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Placeholder</td><td>text</td><td><span class="chip" style="background:#757575"></span><span class="mono">#757575</span></td><td class="mono">#757575</td><td class="m y">✓</td></tr>
      </table>
      <h3>Sizing</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Height (Large / Small)</td><td class="mono">50 / 40px</td><td class="mono">50 / 40px</td><td class="m y">✓</td></tr>
        <tr><td>Padding-x (Large / Small)</td><td class="mono">16 / 12px</td><td class="mono">token-driven</td><td class="m y">✓</td></tr>
        <tr><td>Border width / radius</td><td class="mono">1px / 0px</td><td class="mono">1px / 0px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states</h2>
      <p>Facsimiles rendered from the matching token values (Large). Hover / Focus / Auto-filled are interactive; the rest are pinned as stories.</p>
      <div class="swatchgrid" style="grid-template-columns:150px 1fr 1fr">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Default</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#ffffff;border:1px solid #c4c4c4;color:#757575;font-size:14px">you@example.com</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#ffffff;border:1px solid #c4c4c4;color:#757575;font-size:14px">you@example.com</span></div>
        <div class="stc">Filled</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#ffffff;border:1px solid #c4c4c4;color:#343434;font-size:14px">jane@supplyhouse.com</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#ffffff;border:1px solid #c4c4c4;color:#343434;font-size:14px">jane@supplyhouse.com</span></div>
        <div class="stc">Focus <span style="font-weight:400;color:#757575">(interactive)</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#ffffff;border:1px solid #66afe9;box-shadow:0 0 0 3px rgba(102,175,233,0.30);color:#343434;font-size:14px">jane@supplyhouse.com</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#ffffff;border:1px solid #66afe9;box-shadow:0 0 0 3px rgba(102,175,233,0.30);color:#343434;font-size:14px">jane@supplyhouse.com</span></div>
        <div class="stc">Auto-filled <span style="font-weight:400;color:#757575">(interactive)</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#eff5fd;border:1px solid #c4c4c4;color:#343434;font-size:14px">jane@supplyhouse.com</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#eff5fd;border:1px solid #c4c4c4;color:#343434;font-size:14px">jane@supplyhouse.com</span></div>
        <div class="stc">Error</div>
          <div class="cell"><div><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#fde5e5;border:1px solid #b00000;color:#343434;font-size:14px">not-an-email</span><div style="color:#b00000;font-size:12px;margin-top:4px">Enter a valid email address</div></div></div>
          <div class="cell"><div><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#fde5e5;border:1px solid #b00000;color:#343434;font-size:14px">not-an-email</span><div style="color:#b00000;font-size:12px;margin-top:4px">Enter a valid email address</div></div></div>
        <div class="stc">Disabled</div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#f8f8f8;border:1px solid #e3e3e3;color:#c4c4c4;font-size:14px">Unavailable</span></div>
          <div class="cell"><span style="display:inline-flex;align-items:center;width:220px;height:44px;padding:0 16px;background:#f8f8f8;border:1px solid #e3e3e3;color:#c4c4c4;font-size:14px">Unavailable</span></div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>Label Style static / floating; Size Large / Small; Label boolean (default on, off collapses the label + spacing for inline/filter use); CTA boolean + trailing instance-swap (icon or "Show"); required asterisk; helper text; error message. Stories pin Default, Filled, Error, Disabled, Required, Small, and Floating; Hover, Focus, and Auto-filled are interactive. <span class="m y">✓ Pass</span></p>
      <div class="callout info"><strong>On the states matrix.</strong> Like Select, the <code>states-matrix</code> story <em>names</em> every state but renders Hover, Focus, and Auto-filled at rest (they show the Default look). Those three are graded token-verified: their token values (<span class="mono">#07729c</span> / <span class="mono">#66afe9</span> / <span class="mono">#eff5fd</span>) match Figma, they're just not visually pinned.</p></div>

      <h2>4. Accessibility</h2>
      <p>Tab to focus, type to enter text. Focus shows a blue border + glow (<code>color/pattern/form-field/focus/*</code>). Error is conveyed by the red border AND a red error message (not color alone), paired with <code>aria-invalid</code> + <code>aria-describedby</code>; helper and error are separate lines. Labels associate with the input via for/id.</p>
      <h3>Text vs field</h3>
      <table>
        <tr><th>Element</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Filled text</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Placeholder</td><td>4.61:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Error message</td><td>7.38:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Disabled text</td><td>1.64:1</td><td>Exempt (disabled)</td></tr>
      </table>
      <h3>Border vs background (non-text, 3:1)</h3>
      <table>
        <tr><th>State</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Default</td><td>1.74:1</td><td class="m n">Below 3:1 - flagged</td></tr>
        <tr><td>Hover</td><td>5.39:1</td><td class="m y">Pass</td></tr>
        <tr><td>Focus</td><td>2.37:1</td><td class="m n">Below 3:1 (glow reinforces)</td></tr>
        <tr><td>Error</td><td>7.38:1</td><td class="m y">Pass</td></tr>
      </table>
      <div class="callout warn">
        <p><span class="tag fail">QA-TF-A11Y-01 · KNOWN / SYSTEM-WIDE</span></p>
        <strong>Default and focus borders fall below the 3:1 non-text minimum.</strong> Default <span class="mono">#c4c4c4</span> is 1.74:1 and focus <span class="mono">#66afe9</span> is 2.37:1 (the glow reinforces it). This is the shared form-control token, and the default border matches the checkbox/radio resting border, flagged on Checkbox, Radio, Select, and Combobox too. A system-level resting/focus-border choice pending team review; fix across all form fields together.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-TF-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 7 state tokens, placeholder, sizes, 0px radius match Figma.</td></tr>
        <tr><td class="id">QA-TF-STATE</td><td>States · props</td><td><span class="tag pass">PASS</span></td><td>Default/Filled/Error/Disabled/Required/Small/Floating pinned; Hover/Focus/Auto-filled interactive.</td></tr>
        <tr><td class="id">QA-TF-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Error = border + message (aria-invalid/describedby); labels for/id; text contrast AA+.</td></tr>
        <tr><td class="id">QA-TF-A11Y-01</td><td>Contrast (borders)</td><td><span class="tag fail">KNOWN</span></td><td>Default 1.74:1 &amp; focus 2.37:1 below 3:1, shared system-wide (see QA-CB/RD/SL/CX-A11Y-01).</td></tr>
        <tr><td class="id">QA-TF-REC</td><td>Recommendation</td><td><span class="tag obs">SUGGEST</span></td><td>Add pinned Hover / Focus (with glow) / Auto-filled demos so every state is visually QA-able, matching the individual state stories.</td></tr>
      </table>
    `
  },
  {
    id: 'search-field',
    name: 'Search Field',
    group: 'Forms',
    status: 'a11y note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Search Field</h1>
      <p class="rmeta">Figma component 15974:305732 · Frame doc 15992:312052 · Storybook /story/forms-searchfield · Captured 2026-07-27</p>
      <p>A single-line input for search queries on the shared form-field tokens. No visible label (search icon + placeholder convey purpose), two sizes, and states Default, Hover, Focus, Filled, Disabled. The trailing button shows a Search icon (white on blue) or a Clear (X) icon.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Field states, trailing button &amp; sizes match Figma</p></div>
        <div class="v pass"><p class="k">STATES · PROPS</p><div class="val">Pass</div><p class="sub">Default/Filled/Disabled/Small pinned; Hover/Focus interactive</p></div>
        <div class="v fail"><p class="k">ACCESSIBILITY</p><div class="val">a11y note</div><p class="sub">Accessible name present; default/focus border below 3:1 (shared)</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Default</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / border <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span></td><td class="mono">#ffffff / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>border <span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
        <tr><td>Focus</td><td>border <span class="chip" style="background:#66afe9"></span><span class="mono">#66afe9</span> + glow</td><td class="mono">#66afe9 + glow</td><td class="m y">✓</td></tr>
        <tr><td>Filled</td><td>text <span class="chip" style="background:#343434"></span><span class="mono">#343434</span> / border #c4c4c4</td><td class="mono">#343434 / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / border <span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span> / text #c4c4c4</td><td class="mono">#f8f8f8 / #e3e3e3 / #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Placeholder</td><td><span class="chip" style="background:#757575"></span><span class="mono">#757575</span></td><td class="mono">#757575</td><td class="m y">✓</td></tr>
        <tr><td>Trailing Search button</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> bg, white icon</td><td class="mono">#07729c / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Trailing Clear icon</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> on white</td><td class="mono">#343434</td><td class="m y">✓</td></tr>
      </table>
      <h3>Sizing</h3>
      <table>
        <tr><th>Property</th><th>Figma</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Height (Large / Small)</td><td class="mono">50 / 40px</td><td class="mono">50 / 40px</td><td class="m y">✓</td></tr>
        <tr><td>Border width / radius</td><td class="mono">1px / 0px</td><td class="mono">1px / 0px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states</h2>
      <p>Facsimiles from the matching token values (Large). Hover / Focus are interactive.</p>
      <div class="swatchgrid" style="grid-template-columns:150px 1fr 1fr">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Default</div>
          <div class="cell" id="sf-default-fig"></div><div class="cell" id="sf-default-sb"></div>
        <div class="stc">Filled</div>
          <div class="cell" id="sf-filled-fig"></div><div class="cell" id="sf-filled-sb"></div>
        <div class="stc">Focus <span style="font-weight:400;color:#757575">(interactive)</span></div>
          <div class="cell" id="sf-focus-fig"></div><div class="cell" id="sf-focus-sb"></div>
        <div class="stc">Disabled</div>
          <div class="cell" id="sf-disabled-fig"></div><div class="cell" id="sf-disabled-sb"></div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>Size Large / Small; states Default, Hover, Focus, Filled, Disabled; trailing Search Buttons component swaps between Search (white on blue) and Clear (X). Stories pin Default, Filled, Disabled, Small, and Controlled; Hover and Focus are interactive. <span class="m y">✓ Pass</span></p>
      <div class="callout info"><strong>On the states matrix.</strong> Like the other form fields, the <code>states-matrix</code> names Hover and Focus but renders them at rest. Both are token-verified (<span class="mono">#07729c</span> / <span class="mono">#66afe9</span> match Figma), just not visually pinned.</p></div>

      <h2>4. Accessibility</h2>
      <p>No visible label, so the input carries an accessible name: the build sets <code>&lt;input type="search" aria-label="Search"&gt;</code> and the trailing button is labeled "Search". Tab to focus, type to search; the Clear button is focusable and labeled. Focus shows the blue border + glow.</p>
      <table>
        <tr><th>Element</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Placeholder text</td><td>4.61:1</td><td class="m y">Pass AA</td></tr>
        <tr><td>Filled text</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Search icon (white on blue)</td><td>5.39:1</td><td class="m y">Pass</td></tr>
        <tr><td>Clear icon (gray on white)</td><td>12.45:1</td><td class="m y">Pass</td></tr>
        <tr><td>Default border</td><td>1.74:1</td><td class="m n">Below 3:1 - flagged</td></tr>
        <tr><td>Focus border</td><td>2.37:1</td><td class="m n">Below 3:1 (glow reinforces)</td></tr>
      </table>
      <div class="callout warn">
        <p><span class="tag fail">QA-SF-A11Y-01 · KNOWN / SYSTEM-WIDE</span></p>
        <strong>Default and focus borders fall below the 3:1 non-text minimum.</strong> Default <span class="mono">#c4c4c4</span> is 1.74:1 and focus <span class="mono">#66afe9</span> is 2.37:1 (glow reinforces). The same shared form-control token flagged on Checkbox, Radio, Select, Combobox, and Text Field. System-level decision pending team review; fix across all form fields together.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-SF-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Field states, placeholder, trailing Search/Clear, sizes, 0px radius match Figma.</td></tr>
        <tr><td class="id">QA-SF-STATE</td><td>States · props</td><td><span class="tag pass">PASS</span></td><td>Default/Filled/Disabled/Small/Controlled pinned; Hover/Focus interactive.</td></tr>
        <tr><td class="id">QA-SF-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Accessible name (aria-label "Search") present; Clear button labeled; text contrast AA+.</td></tr>
        <tr><td class="id">QA-SF-A11Y-01</td><td>Contrast (borders)</td><td><span class="tag fail">KNOWN</span></td><td>Default 1.74:1 &amp; focus 2.37:1 below 3:1, shared system-wide (see QA-CB/RD/SL/CX/TF-A11Y-01).</td></tr>
        <tr><td class="id">QA-SF-REC</td><td>Recommendation</td><td><span class="tag obs">SUGGEST</span></td><td>Add pinned Hover / Focus (with glow) demos so every state is visually QA-able.</td></tr>
      </table>
    `,
    searchset: true
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    group: 'Overlays',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Tooltip</h1>
      <p class="rmeta">Figma component 8941:585 · Frame doc 16216:302586 · Storybook /story/overlays-tooltip · Captured 2026-07-27</p>
      <p>Surfaces brief, supplementary information tied to a trigger. Compact is a hover-only label for short hints; Large and Small panels add a title, body copy, an optional close button, and a directional pointer for richer, dismissible content. Tooltip surfaces sit on an elevated background, separated by a shadow and a 1px border.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Compact + panels: bg, border, radius, padding, elevation match</p></div>
        <div class="v pass"><p class="k">STRUCTURE · VARIANTS</p><div class="val">Pass</div><p class="sub">Compact / Small / Large; 4 pointer directions; close on/off</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">tooltip / dialog roles; 0 axe violations</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Compact bg / border / text</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> / <span class="chip" style="background:#343434"></span><span class="mono">#343434</span></td><td class="mono">#ffffff / #c4c4c4 / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Compact radius / padding</td><td class="mono">4px · 12 x 8</td><td class="mono">4px · 8px 12px</td><td class="m y">✓</td></tr>
        <tr><td>Panel bg / border / radius</td><td class="mono">#ffffff / #c4c4c4 1px / 0px</td><td class="mono">#ffffff / 1px #c4c4c4 / 0px</td><td class="m y">✓</td></tr>
        <tr><td>Panel padding (Small / Large)</td><td class="mono">24 / 32</td><td class="mono">24 / 32 (right + close clearance)</td><td class="m y">✓</td></tr>
        <tr><td>Elevation</td><td class="mono">+4y: 0/4/8 rgba(0,0,0,.1) + 0/0/1 rgba(0,0,0,.2)</td><td class="mono">filter: drop-shadow(0 4px 8px .1) drop-shadow(0 0 1px .2)</td><td class="m y">✓</td></tr>
        <tr><td>Title / body / close icon</td><td class="mono">#343434 (title bold)</td><td class="mono">title 16 bold, body 14, compact 12; #343434</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Rendered</h2>
      <p>Facsimiles from the token values (elevation shown via the same drop-shadow).</p>
      <div class="swatchgrid" style="grid-template-columns:150px 1fr 1fr">
        <div class="hd">Variant</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Compact</div>
          <div class="cell"><span style="display:inline-block;background:#fff;border:1px solid #c4c4c4;border-radius:4px;padding:8px 12px;color:#343434;font-weight:700;font-size:12px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.1))">Edit</span></div>
          <div class="cell"><span style="display:inline-block;background:#fff;border:1px solid #c4c4c4;border-radius:4px;padding:8px 12px;color:#343434;font-weight:700;font-size:12px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.1))">Edit</span></div>
        <div class="stc">Panel (Small)</div>
          <div class="cell"><span style="display:inline-block;width:230px;background:#fff;border:1px solid #c4c4c4;padding:24px 40px 24px 24px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.1));position:relative"><span style="position:absolute;top:12px;right:12px;color:#343434">✕</span><span style="display:block;font-weight:700;font-size:16px;color:#343434;margin-bottom:6px">Backorder notice</span><span style="font-size:14px;color:#343434">Ships in 2 to 3 weeks.</span></span></div>
          <div class="cell"><span style="display:inline-block;width:230px;background:#fff;border:1px solid #c4c4c4;padding:24px 40px 24px 24px;filter:drop-shadow(0 4px 8px rgba(0,0,0,0.1));position:relative"><span style="position:absolute;top:12px;right:12px;color:#343434">✕</span><span style="display:block;font-weight:700;font-size:16px;color:#343434;margin-bottom:6px">Backorder notice</span><span style="font-size:14px;color:#343434">Ships in 2 to 3 weeks.</span></span></div>
      </div>

      <h2>3. Structure, variants &amp; props</h2>
      <p>Size Compact / Small / Large; Pointer Top / Bottom / Left / Right (one at a time on panels); Close button boolean (default on, panels); Title and Body slots. Stories pin every pointer direction plus panel-with-close, panel-without-close, and hover / click triggers. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Compact is <code>role="tooltip"</code> linked via <code>aria-describedby</code>, non-interactive, shown on hover/focus and dismissed on blur or Esc. Large/Small panels are popovers: <code>role="dialog"</code>, trigger <code>aria-expanded</code> + <code>aria-controls</code>, focus moves into the panel on open, Esc closes and returns focus to the trigger, Tab cycles, the close button activates with Enter/Space. Focus ring <span class="mono">#005fcc</span> / 2px. Story: <strong>0 a11y violations, 12 passes</strong>.</p>
      <table>
        <tr><th>Element</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Title / body text #343434</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Close icon #343434</td><td>12.45:1</td><td class="m y">Pass</td></tr>
        <tr><td>Focus ring #005FCC</td><td>5.98:1</td><td class="m y">Pass</td></tr>
        <tr><td>Border #C4C4C4</td><td>1.74:1</td><td>By design (see note)</td></tr>
      </table>
      <div class="callout info">
        <p style="margin:0"><span class="tag obs">QA-TT-01 · BY DESIGN</span> The 1px border is 1.74:1, below the 3:1 non-text minimum on its own, but the surface separation is carried by the <code>+4y</code> elevation shadow plus the border (overlay pattern): the shadow separates on light backgrounds, the border defines the edge where the shadow washes out. The build applies the elevation correctly (as a CSS drop-shadow filter). Same reasoning as Modal.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-TT-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Compact (bg/border/text/radius 4/pad 12,8) and panels (bg/border/radius 0/pad 24,32) match; +4y elevation reproduced via drop-shadow.</td></tr>
        <tr><td class="id">QA-TT-STATE</td><td>Structure · variants</td><td><span class="tag pass">PASS</span></td><td>Compact/Small/Large, all 4 pointer directions, close on/off, hover/click triggers pinned.</td></tr>
        <tr><td class="id">QA-TT-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>role tooltip (compact) / dialog (panels), aria wiring, focus trap + return, Esc; 0 axe violations.</td></tr>
        <tr><td class="id">QA-TT-01</td><td>Border contrast</td><td><span class="tag obs">BY DESIGN</span></td><td>1.74:1 acceptable; +4y shadow carries separation (overlay pattern).</td></tr>
        <tr><td class="id">QA-TT-02</td><td>Panel padding</td><td><span class="tag obs">INFO</span></td><td>Right padding is larger than left to clear the close button; expected for the with-close default.</td></tr>
      </table>
    `
  },
  {
    id: 'selectable-card',
    name: 'Selectable Card',
    group: 'Forms',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Selectable Card</h1>
      <p class="rmeta">Figma component 16307:73935 · Frame doc 16313:15880 · Storybook /story/forms-selectable-card · Captured 2026-07-27</p>
      <p>A card that acts as a selection control, for choosing an option, plan, or method presented as a full card. The card's state styles the container; a control (Radio for single-select, Checkbox for multi-select) and the card body sit in slots. Single or multiple selection.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Container states, control, radius &amp; padding match Figma</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS</p><div class="val">Pass</div><p class="sub">Default/Hover/Selected/Disabled, L/S, radio &amp; checkbox</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">Selection = control + strong border, not color alone</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>State</th><th>Property</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Default</td><td>bg / border</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span> / <span class="chip" style="background:#c4c4c4"></span><span class="mono">#c4c4c4</span> 1px</td><td class="mono">#ffffff / #c4c4c4 1px</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td>bg / border</td><td><span class="chip" style="background:#eff5fd"></span><span class="mono">#eff5fd</span> / <span class="chip" style="background:#c5e0f0"></span><span class="mono">#c5e0f0</span> 1px</td><td class="mono">#eff5fd / #c5e0f0 1px</td><td class="m y">✓</td></tr>
        <tr><td>Selected</td><td>bg / border</td><td><span class="mono">#ffffff</span> / <span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> 2px</td><td class="mono">#07729c, 2px (1px border + 1px inset)</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td>bg / border</td><td><span class="chip" style="background:#f8f8f8"></span><span class="mono">#f8f8f8</span> / <span class="chip" style="background:#e3e3e3"></span><span class="mono">#e3e3e3</span> 1px</td><td class="mono">#f8f8f8 / #e3e3e3 1px</td><td class="m y">✓</td></tr>
        <tr><td>Control (checked)</td><td>bg / icon</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> / <span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span></td><td class="mono">#343434 / #ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Radius / padding (L / S)</td><td class="mono">6px · 20 / 16</td><td class="mono">6px · 20 / 16</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side - states (Large, single-select)</h2>
      <p>Facsimiles from the matching token values. Selected shows the checked radio + the strong 2px blue border.</p>
      <div class="swatchgrid" style="grid-template-columns:130px 1fr 1fr">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
        <div class="stc">Default</div>
          <div class="cell" id="sc-default-fig"></div><div class="cell" id="sc-default-sb"></div>
        <div class="stc">Hover</div>
          <div class="cell" id="sc-hover-fig"></div><div class="cell" id="sc-hover-sb"></div>
        <div class="stc">Selected</div>
          <div class="cell" id="sc-selected-fig"></div><div class="cell" id="sc-selected-sb"></div>
        <div class="stc">Disabled</div>
          <div class="cell" id="sc-disabled-fig"></div><div class="cell" id="sc-disabled-sb"></div>
      </div>

      <h2>3. States, variants &amp; props</h2>
      <p>State (Default, Hover, Selected, Disabled) x Size (Large, Small); Control slot swaps Radio (single-select) for Checkbox (multi-select); Content slot for the card body. Stories pin the states matrix, single-select, multi-select, rich content, and a trailing-action variant. The state variant styles the container; the control is set to checked to match Selected (it does not auto-check). <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>The card is the label/target for its control: single-select uses radio (role=radio in a radiogroup), multi-select uses checkbox (role=checkbox), and the whole card is the click target, not just the control. Tab to the control, Space to select, Arrow keys move within a radio group; disabled cards are skipped. Focus ring <span class="mono">#005fcc</span> / 2px on the card/control. Selection is conveyed by the control's checked state plus the strong blue border, not by color alone.</p>
      <table>
        <tr><th>Pair</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Label #343434 on white</td><td>12.45:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Label on hover fill #eff5fd</td><td>11.35:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Selected border #07729C on white</td><td>5.39:1</td><td class="m y">Pass (non-text ≥3:1)</td></tr>
        <tr><td>Hover border #C5E0F0 on white</td><td>~1.2:1</td><td>Decorative (see note)</td></tr>
        <tr><td>Focus ring #005FCC</td><td>5.98:1</td><td class="m y">Pass</td></tr>
      </table>
      <div class="callout info">
        <p style="margin:0"><span class="tag obs">QA-SC-01 · BY DESIGN</span> The hover border (<span class="mono">#c5e0f0</span>, ~1.2:1) is decorative; the hover <em>fill</em> (<span class="mono">#eff5fd</span>) plus the control carry the state, so the low border contrast does not affect usability. Selected uses a 2px blue border (built as a 1px border + 1px inset shadow) plus the checked control, so selection never relies on color alone.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-SC-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Default/Hover/Selected/Disabled container tokens, checked control, radius 6, padding 20/16 match Figma.</td></tr>
        <tr><td class="id">QA-SC-STATE</td><td>States · variants</td><td><span class="tag pass">PASS</span></td><td>State x Size; radio (single) and checkbox (multi); content + trailing-action slots pinned.</td></tr>
        <tr><td class="id">QA-SC-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>radio/checkbox roles, whole-card target, arrow-key group nav, disabled skipped; selection = control + border, not color alone.</td></tr>
        <tr><td class="id">QA-SC-01</td><td>Hover border contrast</td><td><span class="tag obs">BY DESIGN</span></td><td>~1.2:1 decorative; hover fill + control convey state. Selected 2px border = 1px border + 1px inset shadow.</td></tr>
      </table>
    `,
    cardset: true
  }
];
