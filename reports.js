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
    id: 'checkbox-group',
    name: 'Checkbox Group',
    group: 'Forms',
    status: 'Fix: error weight',
    statusType: 'fix',
    handoffs: [{
      code: 'QA-CG-ERROR',
      title: 'Group error message should be Bold (shared with Radio Group)',
      text: `Component: Checkbox Group (shared with Radio Group)
Storybook: http://34.74.189.135:30100/?path=/docs/forms-checkboxgroup--with-label-and-error
Figma (source of truth): single checkbox + label 12012:7129

Finding QA-CG-ERROR - error message weight
Observed: the group error message renders at font-weight 400 (regular), 13px, #b00000.
Expected: Bold - WEB/Body3/13px-B (weight 700), 13px, #b00000, matching the error message shown in the single checkbox + label frame.

Acceptance criteria:
- The group error message renders at weight 700 (Bold), 13px, #b00000.
- Same treatment applied to Radio Group (likely one shared field/error component).
- Re-verify against Figma 12012:7129.

Fix approach is the team's call - no code prescribed.`
    }],
    html: `
      <h1 class="rt">Checkbox Group</h1>
      <p class="rmeta">Figma usage 12012:7129 (checkbox + label) / 16786:1218 (layout) · Boxes: Checkbox component 11804:15097 · Storybook /docs/forms-checkboxgroup · Captured 2026-07-30</p>
      <p>Groups related checkboxes with a group label, optional description and error message, vertical or horizontal layout, and an optional "Select all" parent that goes indeterminate on a partial selection. The individual boxes are the Checkbox component (all states and sizes already verified in the <a href="#checkbox" style="color:var(--sh-blue)">Checkbox</a> report); this report covers the group-level surface: label, item layout, gaps, error, and grouping semantics.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">ITEM &amp; LAYOUT</p><div class="val">Pass</div><p class="sub">Label 14px, 8px gap, vertical/horizontal, select-all</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">role=group + aria-labelledby; indeterminate parent</p></div>
        <div class="v fix"><p class="k">ERROR STYLE</p><div class="val">1 fix</div><p class="sub">Message should be Bold; group error model is an open question</p></div>
      </div>

      <h2>1. Group-level fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Item label</td><td><span class="mono">#343434</span> · Body2 14px Book (400)</td><td class="mono">#343434 · 14px · 400</td><td class="m y">✓</td></tr>
        <tr><td>Box to label gap</td><td class="mono">8 (Web/8)</td><td class="mono">flex gap 8px</td><td class="m y">✓</td></tr>
        <tr><td>Vertical item gap</td><td class="mono">12 (spacing/12)</td><td class="mono">column · gap 12px</td><td class="m y">✓</td></tr>
        <tr><td>Horizontal layout</td><td class="mono">row</td><td class="mono">row · gap 12px</td><td class="m y">✓*</td></tr>
        <tr><td>Error message</td><td class="mono">#b00000 · Body3 13px <strong>Bold</strong></td><td class="mono">#b00000 · 13px · 400</td><td class="m n">weight</td></tr>
        <tr><td>Group label</td><td class="mono">~#343434 · Headline5 18px Bold (per usage frame)</td><td class="mono">#000000 · 16px · 600</td><td class="m n">confirm</td></tr>
        <tr><td>Boxes (fill / border / glyph)</td><td class="mono">form-control tokens</td><td class="mono">verified in Checkbox report</td><td class="m y">✓</td></tr>
      </table>
      <p style="font-size:12px;color:var(--sh-mid-gray)">* Horizontal gap is 12px in the build; the layout frame exposes both spacing/12 and spacing/16, so confirm whether the horizontal gap should be 16.</p>

      <h2>2. Side-by-side (rendered from tokens)</h2>
      <p>Vertical group with an error, the horizontal variant, and the select-all pattern.</p>
      <div class="swatchgrid" style="grid-template-columns:130px 1fr">
        <div class="hd">Layout</div><div class="hd">Rendering</div>
        <div class="stc">Vertical + error</div><div class="cell">
          <div style="font-size:14px">
            <div style="font-weight:700;color:#343434;margin-bottom:8px">Preferred contact methods</div>
            <div style="display:flex;flex-direction:column;gap:12px">
              <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;flex:0 0 18px;display:inline-block"></span>Email</span>
              <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;flex:0 0 18px;display:inline-block"></span>Phone</span>
              <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;flex:0 0 18px;display:inline-block"></span>SMS</span>
            </div>
            <div style="color:#b00000;font-size:13px;margin-top:8px">Pick at least one contact method.</div>
          </div>
        </div>
        <div class="stc">Horizontal</div><div class="cell">
          <div style="display:flex;gap:12px;font-size:14px">
            <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;flex:0 0 18px;display:inline-block"></span>Email</span>
            <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;flex:0 0 18px;display:inline-block"></span>Phone</span>
            <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;flex:0 0 18px;display:inline-block"></span>SMS</span>
          </div>
        </div>
        <div class="stc">Select all</div><div class="cell">
          <div style="font-size:14px">
            <span style="display:flex;align-items:center;gap:8px;color:#343434;font-weight:700"><span style="width:18px;height:18px;background:#343434;flex:0 0 18px;display:inline-flex;align-items:center;justify-content:center"><span style="width:9px;height:2px;background:#fff;display:block"></span></span>Select all (1/3)</span>
            <div style="display:flex;flex-direction:column;gap:12px;margin-top:12px;padding-left:26px">
              <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;background:#343434;flex:0 0 18px;display:inline-flex;align-items:center;justify-content:center"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>Apples</span>
              <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;flex:0 0 18px;display:inline-block"></span>Bananas</span>
              <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;flex:0 0 18px;display:inline-block"></span>Carrots</span>
            </div>
          </div>
        </div>
      </div>

      <h2>3. Behavior &amp; accessibility</h2>
      <p>The group is a <code>div role="group"</code> labelled by its heading via <code>aria-labelledby</code> (a valid alternative to fieldset/legend). Orientation is Vertical (flex column) or Horizontal (flex row). The Select-all parent goes <strong>indeterminate</strong> when only some children are checked and updates its "(n/total)" count; verified in the build by checking one child (parent flipped to <code>indeterminate</code>, count went to 1/3). Focus and box a11y follow the Checkbox: 2px <span class="mono">#005fcc</span> focus ring, Space toggles. The unselected box border (gray.400, 1.74:1) carries the same known system-wide resting-border note documented on Checkbox, not a build defect.</p>

      <h2>4. Error handling</h2>
      <p><strong>Fix (QA-CG-ERROR):</strong> the group error message renders regular weight (400); per the single checkbox + label frame it should be <strong>Bold</strong> (Body3 13px-B, weight 700), 13px, #b00000. Same size and color, weight only. Likely a shared field/error component with Radio Group, so one change covers both.</p>
      <div class="callout info" style="border-left-width:6px">
        <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--info)">Open question · team alignment</p>
        <strong>How should an error be shown on a group?</strong> The build uses a single <em>group-level</em> error message with the items left in their default state (no per-item red). The alternative is turning each item's control red plus the message. The group-level approach is the more standard and accessible pattern for grouped choices: GOV.UK, USWDS, and the ARIA Authoring Practices associate the error with the group and announce it once rather than flagging every option, and it is the preferred direction here. Since checkboxes and radios almost always appear in groups, this needs team alignment. Tracked as QA-CG-ERRMODEL.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-CG-ITEM</td><td>Item label &amp; gap</td><td><span class="tag pass">PASS</span></td><td>Label #343434 14px Book, 8px box-to-label gap; boxes reuse the verified Checkbox form-control tokens.</td></tr>
        <tr><td class="id">QA-CG-LAYOUT</td><td>Orientation &amp; spacing</td><td><span class="tag pass">PASS</span></td><td>Vertical column gap 12px (spacing/12); Horizontal row gap 12px (confirm 12 vs 16).</td></tr>
        <tr><td class="id">QA-CG-SELECTALL</td><td>Select-all pattern</td><td><span class="tag pass">PASS</span></td><td>Parent goes indeterminate on partial selection and updates the (n/total) count; uses the checkbox dash glyph.</td></tr>
        <tr><td class="id">QA-CG-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>role=group + aria-labelledby, keyboard + 2px focus ring. Inherits the Checkbox known resting-border note (unselected border 1.74:1), pending team review.</td></tr>
        <tr><td class="id">QA-CG-ERROR</td><td>Error message weight</td><td><span class="tag fail">FIX</span></td><td>Group error message renders weight 400; the single checkbox + label frame shows it Bold (Body3 13px-B). Make it 700 / 13px / #b00000. Likely shared with Radio Group. See the handoff.</td></tr>
        <tr><td class="id">QA-CG-ERRMODEL</td><td>Group error model</td><td><span class="tag obs">OPEN Q</span></td><td>Team alignment: group-level error with items in default state (build's current approach, and the standard/accessible pattern) vs per-item red + message. Preferred direction is group-level. Applies to both Checkbox and Radio groups.</td></tr>
        <tr><td class="id">QA-CG-LABEL</td><td>Group-label type</td><td><span class="tag obs">NOTE</span></td><td>Group label renders 16px/600/#000000 vs the usage frame's ~18px Bold #343434; confirm whether the frame labels are the group-label spec.</td></tr>
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
    id: 'radio-group',
    name: 'Radio Group',
    group: 'Forms',
    status: 'Fix: error weight',
    statusType: 'fix',
    handoffs: [{
      code: 'QA-RG-ERROR',
      title: 'Group error message should be Bold (shared with Checkbox Group)',
      text: `Component: Radio Group (shared with Checkbox Group)
Storybook: http://34.74.189.135:30100/?path=/docs/forms-radiogroup--with-label-and-error
Figma (source of truth): single radio + label 9874:10774

Finding QA-RG-ERROR - error message weight
Observed: the group error message renders at font-weight 400 (regular), 13px, #b00000.
Expected: Bold - WEB/Body3/13px-B (weight 700), 13px, #b00000, matching the error message shown in the single radio + label frame.

Acceptance criteria:
- The group error message renders at weight 700 (Bold), 13px, #b00000.
- Same treatment applied to Checkbox Group (likely one shared field/error component).
- Re-verify against Figma 9874:10774.

Fix approach is the team's call - no code prescribed.`
    }],
    html: `
      <h1 class="rt">Radio Group</h1>
      <p class="rmeta">Figma usage 9874:10774 (radio + label) / 16789:1290 (layout) · Radios: Radio component 11269:5496 · Storybook /docs/forms-radiogroup · Captured 2026-07-30</p>
      <p>Groups related radios for choosing exactly one option, with a group label, optional description and error message, and vertical or horizontal layout. The individual radios are the Radio component (all states and sizes verified in the <a href="#radio" style="color:var(--sh-blue)">Radio</a> report); this report covers the group-level surface: label, item layout, gaps, error, single-select enforcement, and grouping semantics.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">ITEM &amp; LAYOUT</p><div class="val">Pass</div><p class="sub">Label 14px, 8px gap, vertical/horizontal</p></div>
        <div class="v pass"><p class="k">SELECTION · A11Y</p><div class="val">Pass</div><p class="sub">role=radiogroup, single-select enforced, aria-labelledby</p></div>
        <div class="v fix"><p class="k">ERROR STYLE</p><div class="val">1 fix</div><p class="sub">Message should be Bold; group error model is an open question</p></div>
      </div>

      <h2>1. Group-level fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Item label</td><td><span class="mono">#343434</span> · Body2 14px Book (400)</td><td class="mono">#343434 · 14px · 400</td><td class="m y">✓</td></tr>
        <tr><td>Radio to label gap</td><td class="mono">8 (Web/8)</td><td class="mono">flex gap 8px</td><td class="m y">✓</td></tr>
        <tr><td>Vertical item gap</td><td class="mono">12 (spacing/12)</td><td class="mono">column · gap 12px</td><td class="m y">✓</td></tr>
        <tr><td>Horizontal layout</td><td class="mono">row</td><td class="mono">row · gap 12px</td><td class="m y">✓*</td></tr>
        <tr><td>Error message</td><td class="mono">#b00000 · Body3 13px <strong>Bold</strong></td><td class="mono">#b00000 · 13px · 400</td><td class="m n">weight</td></tr>
        <tr><td>Group label</td><td class="mono">~#343434 · Headline5 18px Bold (per usage frame)</td><td class="mono">#000000 · 16px · 600</td><td class="m n">confirm</td></tr>
        <tr><td>Radios (fill / border / dot)</td><td class="mono">form-control tokens</td><td class="mono">verified in Radio report</td><td class="m y">✓</td></tr>
      </table>
      <p style="font-size:12px;color:var(--sh-mid-gray)">* Horizontal gap is 12px in the build; the layout frame exposes both spacing/12 and spacing/16, so confirm whether the horizontal gap should be 16.</p>

      <h2>2. Side-by-side (rendered from tokens)</h2>
      <p>Vertical group with description and error, then the horizontal variant.</p>
      <div class="swatchgrid" style="grid-template-columns:130px 1fr">
        <div class="hd">Layout</div><div class="hd">Rendering</div>
        <div class="stc">Vertical + error</div><div class="cell">
          <div style="font-size:14px">
            <div style="font-weight:700;color:#343434;margin-bottom:8px">Shipping method *</div>
            <div style="display:flex;flex-direction:column;gap:12px">
              <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border-radius:50%;background:#343434;flex:0 0 18px;display:inline-flex;align-items:center;justify-content:center"><span style="width:6px;height:6px;border-radius:50%;background:#fff;display:block"></span></span>Ground</span>
              <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;border-radius:50%;flex:0 0 18px;display:inline-block"></span>Express</span>
            </div>
            <div style="font-size:13px;color:#757575;margin-top:8px">Choose how fast you want it.</div>
            <div style="color:#b00000;font-size:13px;margin-top:2px">Please select a shipping method.</div>
          </div>
        </div>
        <div class="stc">Horizontal</div><div class="cell">
          <div style="display:flex;gap:12px;font-size:14px">
            <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;border-radius:50%;flex:0 0 18px;display:inline-block"></span>Small</span>
            <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;border-radius:50%;flex:0 0 18px;display:inline-block"></span>Medium</span>
            <span style="display:flex;align-items:center;gap:8px;color:#343434"><span style="width:18px;height:18px;border:1px solid #c4c4c4;border-radius:50%;flex:0 0 18px;display:inline-block"></span>Large</span>
          </div>
        </div>
      </div>

      <h2>3. Behavior &amp; accessibility</h2>
      <p>The group is a <code>div role="radiogroup"</code> labelled by its heading via <code>aria-labelledby</code> (the correct grouping semantic for a single-choice set). Orientation is Vertical (flex column) or Horizontal (flex row). Single-select is enforced: verified in the build that clicking two radios leaves only one selected. Arrow keys move between options and Enter / Space selects; focus ring is the shared 2px <span class="mono">#005fcc</span>. The unselected radio border (gray.400, 1.74:1) carries the same known system-wide resting-border note documented on Radio, not a build defect.</p>

      <h2>4. Error handling</h2>
      <p><strong>Fix (QA-RG-ERROR):</strong> the group error message renders regular weight (400); per the single radio + label frame it should be <strong>Bold</strong> (Body3 13px-B, weight 700), 13px, #b00000. Same size and color, weight only. Likely a shared field/error component with Checkbox Group, so one change covers both.</p>
      <div class="callout info" style="border-left-width:6px">
        <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--info)">Open question · team alignment</p>
        <strong>How should an error be shown on a group?</strong> The build uses a single <em>group-level</em> error message with the items left in their default state (no per-item red). The alternative is turning each item's control red plus the message. The group-level approach is the more standard and accessible pattern for grouped choices: GOV.UK, USWDS, and the ARIA Authoring Practices associate the error with the group and announce it once rather than flagging every option, and it is the preferred direction here. Since radios and checkboxes almost always appear in groups, this needs team alignment. Tracked as QA-RG-ERRMODEL.
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-RG-ITEM</td><td>Item label &amp; gap</td><td><span class="tag pass">PASS</span></td><td>Label #343434 14px Book, 8px radio-to-label gap; radios reuse the verified Radio form-control tokens.</td></tr>
        <tr><td class="id">QA-RG-LAYOUT</td><td>Orientation &amp; spacing</td><td><span class="tag pass">PASS</span></td><td>Vertical column gap 12px (spacing/12); Horizontal row gap 12px (confirm 12 vs 16).</td></tr>
        <tr><td class="id">QA-RG-SELECT</td><td>Single-select</td><td><span class="tag pass">PASS</span></td><td>role=radiogroup enforces one active; verified clicking two radios leaves only one selected.</td></tr>
        <tr><td class="id">QA-RG-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>role=radiogroup + aria-labelledby, arrow-key nav, 2px focus ring. Inherits the Radio known resting-border note (unselected border 1.74:1), pending team review.</td></tr>
        <tr><td class="id">QA-RG-ERROR</td><td>Error message weight</td><td><span class="tag fail">FIX</span></td><td>Group error message renders weight 400; the single radio + label frame shows it Bold (Body3 13px-B). Make it 700 / 13px / #b00000. Likely shared with Checkbox Group. See the handoff.</td></tr>
        <tr><td class="id">QA-RG-ERRMODEL</td><td>Group error model</td><td><span class="tag obs">OPEN Q</span></td><td>Team alignment: group-level error with items in default state (build's current approach, and the standard/accessible pattern) vs per-item red + message. Preferred direction is group-level. Applies to both Checkbox and Radio groups.</td></tr>
        <tr><td class="id">QA-RG-LABEL</td><td>Group-label type</td><td><span class="tag obs">NOTE</span></td><td>Group label renders 16px/600/#000000 vs the usage frame's ~18px Bold #343434; confirm whether the frame labels are the group-label spec.</td></tr>
      </table>
    `
  },
  {
    id: 'link',
    name: 'Link',
    group: 'Navigation',
    status: 'Fix: inverse variant',
    statusType: 'fix',
    handoffs: [{
      code: 'QA-LN-02',
      title: 'Inverse Link variant not in build (new addition)',
      text: `Component: Link (inverse variant)
Storybook: http://34.74.189.135:30100/?path=/docs/navigation-link
Figma (source of truth): UI-Kit__Web component 8931:5582

Finding QA-LN-02 - inverse Link variant not implemented
Observed: Storybook exposes only the default Link (stories: standalone, inline, leading/trailing icon, disabled, states-matrix). There is no inverse variant and no inverse prop. The Footer accordion content that should use it renders black (this is the root of QA-FTR-CONTENT).
Expected: an inverse Link variant for dark surfaces where every state resolves to white, bound to color/pattern/link/inverse/{default, hover, active, visited, disabled} (#ffffff), Maison Neue Bold 14px (WEB/Body2/14px-B), pattern link icon-gap 8.

Acceptance criteria:
- Link supports an inverse variant whose state colors resolve to color/pattern/link/inverse/* (#ffffff).
- The Footer accordion content uses this variant (resolves QA-FTR-CONTENT: links render white, not black).
- Underline / hover behavior is confirmed against the default variant.
- Re-verify against Figma 8931:5582.

Fix approach is the team's call - no code prescribed.`
    }],
    html: `
      <h1 class="rt">Link</h1>
      <p class="rmeta">Figma component 8931:5582 · Frame doc 15928:2067 · Storybook /docs/navigation-link · Captured 2026-07-27 · Inverse variant added 2026-07-29</p>
      <p>A text link for navigation or inline actions. States: Default, Hover (underlined), Active (darker + underlined), Visited, Disabled - color plus the underline convey state. Optional icon via the icon toggle (default on) and a custom label via the link-text property. No size variant - the link inherits its text style (14px Bold). Design has also added an <strong>inverse variant</strong> (white, for dark surfaces), covered in section 5.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">All 5 state colors, type &amp; icon-gap match</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS · PROPS</p><div class="val">Pass</div><p class="sub">5 states + inline persistent-underline + leading/trailing icon</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass · note</div><p class="sub">Contrast AA+; underline cues; visited=default is a known item</p></div>
        <div class="v fix"><p class="k">INVERSE VARIANT</p><div class="val">1 fix</div><p class="sub">New in Figma; not in the build yet</p></div>
      </div>
      <p>The default variant is a faithful token translation with strong color-independence (hover/active underline, inline persistent underline). One documented note: visited currently resolves to the same blue as default. New this pass: the inverse variant (section 5) is defined in Figma but not yet in the build.</p>

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

      <h2>5. Inverse variant (new addition, 2026-07-29)</h2>
      <p>Design added an inverse Link variant for dark surfaces (used by the Footer accordion content). Every state resolves to white; the type (Maison Neue Bold 14px) and icon-gap (8) are unchanged from the default variant. The variant is defined in Figma but is <strong>not yet in the Storybook build</strong> (no inverse story or prop across the Link stories), which is why the footer content links currently render black. This is the root of the Footer's QA-FTR-CONTENT.</p>
      <table>
        <tr><th>State</th><th>Figma (inverse)</th><th>Storybook</th><th>Status</th></tr>
        <tr><td>Default</td><td><span class="chip" style="background:#ffffff"></span><span class="mono">#ffffff</span> (color/pattern/link/inverse/default)</td><td class="mono">not implemented</td><td class="m n">✗</td></tr>
        <tr><td>Hover</td><td><span class="chip" style="background:#ffffff"></span><span class="mono">#ffffff</span> (inverse/hover)</td><td class="mono">not implemented</td><td class="m n">✗</td></tr>
        <tr><td>Active</td><td><span class="chip" style="background:#ffffff"></span><span class="mono">#ffffff</span> (inverse/active)</td><td class="mono">not implemented</td><td class="m n">✗</td></tr>
        <tr><td>Visited</td><td><span class="chip" style="background:#ffffff"></span><span class="mono">#ffffff</span> (inverse/visited)</td><td class="mono">not implemented</td><td class="m n">✗</td></tr>
        <tr><td>Disabled</td><td><span class="chip" style="background:#ffffff"></span><span class="mono">#ffffff</span> (inverse/disabled)</td><td class="mono">not implemented</td><td class="m n">✗</td></tr>
        <tr><td>Type · icon-gap</td><td class="mono">Maison Neue Bold 14px · 8</td><td class="mono">unchanged</td><td class="m y">=</td></tr>
      </table>
      <p>The two variants side by side (default on white, inverse on the footer <span class="mono">#89847f</span> band):</p>
      <div class="swatchgrid">
        <div class="hd">State</div><div class="hd">Default variant</div><div class="hd">Inverse variant (on dark band)</div>
        <div class="stc">Default</div>
          <div class="cell"><span style="color:#07729c;font-weight:700;font-size:14px">Link</span></div>
          <div class="cell" style="background:#89847f"><span style="color:#ffffff;font-weight:700;font-size:14px">Link</span></div>
        <div class="stc">Hover</div>
          <div class="cell"><span style="color:#07729c;font-weight:700;font-size:14px;text-decoration:underline">Link</span></div>
          <div class="cell" style="background:#89847f"><span style="color:#ffffff;font-weight:700;font-size:14px;text-decoration:underline">Link</span></div>
        <div class="stc">Disabled</div>
          <div class="cell"><span style="color:#c4c4c4;font-weight:700;font-size:14px">Link</span></div>
          <div class="cell" style="background:#89847f"><span style="color:#ffffff;font-weight:700;font-size:14px">Link</span></div>
      </div>
      <p style="font-size:12px;color:var(--sh-mid-gray)">All inverse states resolve to <span class="mono">#ffffff</span>, including disabled (it relies on context rather than a dimmed color). White on the <span class="mono">#89847f</span> band computes about 3.7:1, the same known-contrast tradeoff carried on the Footer header.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-LN-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 5 state colors, 14px bold type, and icon-gap match Figma.</td></tr>
        <tr><td class="id">QA-LN-STATE</td><td>States · variants · props</td><td><span class="tag pass">PASS</span></td><td>5 states, inline persistent-underline, leading/trailing icon, custom label.</td></tr>
        <tr><td class="id">QA-LN-FOCUS</td><td>Focus &amp; color independence</td><td><span class="tag pass">PASS</span></td><td>Focus ring #005FCC / 2px; hover/active underline; inline persistent underline (1.4.1).</td></tr>
        <tr><td class="id">QA-LN-A11Y</td><td>Contrast</td><td><span class="tag pass">PASS</span></td><td>Default/hover/visited 5.39:1; active 8.57:1; disabled exempt.</td></tr>
        <tr><td class="id">QA-LN-01</td><td>Visited color</td><td><span class="tag obs">KNOWN</span></td><td>Visited = default (#07729c) - not visually distinct; pending future token decision.</td></tr>
        <tr><td class="id">QA-LN-02</td><td>Inverse variant</td><td><span class="tag fail">FIX</span></td><td>New in Figma (2026-07-29): inverse variant, all states #ffffff via color/pattern/link/inverse/*, Body2 14px Bold, icon-gap 8. Not in the build (no inverse story or prop). Root of the Footer's QA-FTR-CONTENT (footer links render black). See the handoff.</td></tr>
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
    status: 'Fix: alignment',
    statusType: 'fix',
    handoffs: [{
      code: 'QA-PG-01',
      title: 'Ellipsis vertical alignment (reopened)',
      text: `Component: Pagination
Storybook: http://34.74.189.135:30100/?path=/story/navigation-pagination--mid-range
Figma (source of truth): UI-Kit__Web node 10633:3912

Finding QA-PG-01 - ellipsis vertical alignment (reopened after the 2026-07-28 retest)
Observed: the ellipsis ("...") still sits visibly lower than the page numbers. The list container computes align-items: center, and the number and ellipsis boxes line up, but the ellipsis glyphs render at the bottom of their line box, so the dots read low against the numbers and the current-page underline.
Expected: the ellipsis is optically centered on the row, level with the numbers and arrows, as in Figma node 10633:3912.

Acceptance criteria:
- Ellipsis dots are optically centered with the numbers and arrows in Start, Middle, and End layouts.
- No change to number, arrow, or current-underline positioning.
- Verify visually (not only by bounding-box centers; the boxes already align while the glyphs do not).

Reference (not a prescribed solution): in Chrome DevTools, setting the list container's align-items to flex-start visually aligned the ellipsis with the numbers. Shared as a starting point only; the fix approach is the team's call.`
    }],
    html: `
      <h1 class="rt">Pagination</h1>
      <p class="rmeta">Figma component 10633:3912 · Frame doc 16112:301624 · Storybook /story/navigation-pagination · Captured 2026-07-27</p>
      <p>Lets users move through content split across pages - shows the current page, nearby pages, and first/last, truncating the middle with an ellipsis. Previous/next arrows step one page and disable at the first/last page. Layouts: Start, Middle, End.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Number, current, ellipsis, arrow colors + type match</p></div>
        <div class="v pass"><p class="k">STATES · LAYOUTS</p><div class="val">Pass</div><p class="sub">Start/Middle/End; arrow disable at ends; current underline</p></div>
        <div class="v fix"><p class="k">ALIGNMENT</p><div class="val">Reopened</div><p class="sub">Ellipsis glyphs still sit low against the numbers</p></div>
      </div>
      <p><strong>Retest 2026-07-28 (reopened).</strong> A first pass this day looked resolved when measured by bounding-box centers, but that was a false read on my part: the number and ellipsis boxes align (the list uses <code>align-items: center</code>), yet the ellipsis glyphs render at the bottom of their line box, so the dots still sit visibly low against the numbers and the current-page underline. The visual evidence below confirms the gap remains. Tokens and accessibility stay clean; this is the one open visual-polish fix, tracked as QA-PG-01.</p>

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

      <h2>2. Alignment - Figma vs build (mid-range, reopened)</h2>
      <p>Same content, showing the ellipsis vertical position that is still off in the build.</p>
      <div class="swatchgrid" style="grid-template-columns:230px 1fr">
        <div class="hd">Source</div><div class="hd">Rendering</div>
        <div class="stc">Figma - ellipsis centered</div>
        <div class="cell"><span style="display:flex;align-items:center;gap:14px;font-weight:700;font-size:14px">
          <span style="color:#07729c">‹</span><span style="color:#07729c">1</span><span style="color:#343434">…</span><span style="color:#07729c">4</span><span style="color:#343434;border-bottom:2px solid #343434;padding-bottom:1px">5</span><span style="color:#07729c">6</span><span style="color:#343434">…</span><span style="color:#07729c">30</span><span style="color:#07729c">›</span>
        </span></div>
        <div class="stc">Storybook - ellipsis still low</div>
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
        <p><span class="tag fail">QA-PG-01 · ALIGNMENT - REOPENED</span></p>
        <strong>The ellipsis is still not vertically centered.</strong> Reopened after the 2026-07-28 retest. The list container computes <code>align-items: center</code>, so the number and ellipsis boxes line up, but the ellipsis glyphs render at the bottom of their line box and the dots still sit visibly low against the numbers and the current-page underline. Not an a11y issue, a visual-polish fix. Re-verify visually, not only by bounding-box centers.
      </div>
      <figure style="margin:16px 0;border:1px solid var(--sh-border)">
        <img src="assets/pagination-alignment-retest.png" alt="Retest comparison: the current build (left) shows the ellipsis and current-page underline sitting below the row centerline shared by the numbers and arrows; the Correct version (right) has the ellipsis level with the numbers" style="display:block;width:100%;height:auto">
        <figcaption style="font-size:12px;color:var(--sh-mid-gray);padding:8px 12px;background:var(--sh-light-tan-1)"><strong>Evidence (2026-07-28 retest), provided by Andres.</strong> Left is the current build with alignment gridlines; the ellipsis dots fall below the centerline the numbers and arrows share. Right ("Correct") shows the target, ellipsis level with the numbers.</figcaption>
      </figure>
      <figure style="margin:16px 0;border:1px solid var(--sh-border)">
        <img src="assets/pagination-align-items-devtools.png" alt="Chrome DevTools showing the pagination list container rule with align-items set to flex-start highlighted" style="display:block;width:100%;height:auto;max-width:420px">
        <figcaption style="font-size:12px;color:var(--sh-mid-gray);padding:8px 12px;background:var(--sh-light-tan-1)"><strong>Reference (not a prescribed solution).</strong> In Chrome DevTools, setting the list container's <code>align-items</code> to <code>flex-start</code> visually aligned the ellipsis with the numbers. Shared as a starting point for the dev team; the fix approach is theirs to decide.</figcaption>
      </figure>
      <figure style="margin:16px 0;border:1px solid var(--sh-border)">
        <img src="assets/pagination-alignment.png" alt="Originally reported evidence: Storybook vs Figma pagination with alignment gridlines; the Storybook ellipsis sits below the row centerline" style="display:block;width:100%;height:auto">
        <figcaption style="font-size:12px;color:var(--sh-mid-gray);padding:8px 12px;background:var(--sh-light-tan-1)"><strong>Originally reported evidence, kept for history.</strong> The same misalignment as first flagged; still present at the 2026-07-28 retest.</figcaption>
      </figure>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-PG-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Number #07729c, current #343434+bar, ellipsis #343434, arrows enabled #07729c / disabled #c4c4c4, 14px bold - all match.</td></tr>
        <tr><td class="id">QA-PG-STATE</td><td>States &amp; layouts</td><td><span class="tag pass">PASS</span></td><td>Start/Middle/End, arrow disable at ends, current underline, few-pages (no arrows) all correct.</td></tr>
        <tr><td class="id">QA-PG-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>nav landmark, links list, aria-current text, arrow names, underline non-color cue; 0 axe violations.</td></tr>
        <tr><td class="id">QA-PG-01</td><td>Vertical alignment</td><td><span class="tag fail">FIX</span></td><td>Reopened at the 2026-07-28 retest: ellipsis glyphs still sit low against the numbers (list uses align-items: center; boxes align but glyphs do not). Visual-polish fix. DevTools reference: align-items flex-start aligned it (not a prescribed solution). See the handoff.</td></tr>
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
        <tr><td class="id">QA-SC-02</td><td>Control vertical position</td><td><span class="tag pass">PASS</span></td><td>On multi-line cards the control is top-aligned to the title line (control center y33 vs title y34), not centered in the card, matching the usage doc.</td></tr>
      </table>
    `,
    cardset: true
  },
  {
    id: 'faq-accordion',
    name: 'FAQ Accordion',
    group: 'Accordions',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">FAQ Accordion</h1>
      <p class="rmeta">Figma component 7627:949 · Usage 16365:71835 · Shared frame doc 16369:309440 · Storybook /story/disclosure-faqaccordion · Captured 2026-07-27</p>
      <p>One of four purpose-built accordions (Product Specification, FAQs, Filters, Footer) that share one behavior model and differ in size options, icon placement, and surface. The FAQ variant is tuned for FAQ lists: a <strong>leading</strong> +/- toggle before the question, a bottom-border divider only, and expanded content indented to align under the question.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Label, toggle, divider, padding &amp; sizes match Figma</p></div>
        <div class="v pass"><p class="k">STATES · LAYOUT</p><div class="val">Pass</div><p class="sub">Collapsed/Expanded, S/L, leading toggle, indented content</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">button + aria-expanded, region, +/- beyond color</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Header bg</td><td><span class="chip" style="background:#fff"></span><span class="mono">#ffffff</span></td><td class="mono">#ffffff (transparent header)</td><td class="m y">✓</td></tr>
        <tr><td>Question label</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span></td><td class="mono">#343434</td><td class="m y">✓</td></tr>
        <tr><td>Toggle icon (leading)</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#07729c · leading (left of label)</td><td class="m y">✓</td></tr>
        <tr><td>Divider (bottom only)</td><td><span class="chip" style="background:#dcdcdc"></span><span class="mono">#dcdcdc</span> 1px</td><td class="mono">1px #dcdcdc bottom</td><td class="m y">✓</td></tr>
        <tr><td>Header padding-y (Small / Large)</td><td class="mono">12 / 16</td><td class="mono">16 (large); 12 (small)</td><td class="m y">✓</td></tr>
        <tr><td>Expanded content-padding (left / bottom)</td><td class="mono">28 / 28</td><td class="mono">28 / 28</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side</h2>
      <p>Rendered from the token values (leading +/- toggle, bottom-border divider, one row expanded with indented content).</p>
      <div class="swatchgrid" style="grid-template-columns:110px 1fr">
        <div class="hd">Source</div><div class="hd">Rendering</div>
        <div class="stc">Figma</div><div class="cell" id="faq-fig"></div>
        <div class="stc">Storybook</div><div class="cell" id="faq-sb"></div>
      </div>

      <h2>3. States &amp; sizes</h2>
      <p>State Collapsed / Expanded (default Collapsed); Size Small / Large (no Medium, kept intentionally for the FAQ layout). The toggle is a leading + (collapsed) that becomes a - (expanded); expanded content indents to align under the question and adds bottom padding. Stories pin Small and Large. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Each header is a <code>button</code> with <code>aria-expanded</code>; the content is a <code>role="region"</code> labelled by its header. Tab to the header, Enter or Space toggles. Focus ring <span class="mono">#005fcc</span> / 2px. The +/- icon conveys collapsed vs expanded independently of color. Per the shared frame doc, lint reports 0 contrast failures.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-FAQ-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Label #343434, toggle #07729c (leading), bottom divider #dcdcdc, header-y 12/16, content indent 28/28 match Figma.</td></tr>
        <tr><td class="id">QA-FAQ-STATE</td><td>States &amp; sizes</td><td><span class="tag pass">PASS</span></td><td>Collapsed/Expanded, Small/Large; +/- glyph swap; expanded content indented under the question.</td></tr>
        <tr><td class="id">QA-FAQ-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Header button + aria-expanded, content region, +/- conveys state beyond color, focus ring; 0 contrast failures.</td></tr>
      </table>
    `,
    faqset: true
  },
  {
    id: 'filter-accordion',
    name: 'Filter Accordion',
    group: 'Accordions',
    status: 'Fix: See more',
    statusType: 'fix',
    handoffs: [{
      code: 'QA-FIL-SEEMORE',
      title: 'Long-list "See more" truncation (fix)',
      text: `Component: Filter Accordion
Storybook: http://34.74.189.135:30100/?path=/story/disclosure-filteraccordion--base
Figma (source of truth): UI-Kit__Web component 8246:1551 · usage 8653:7455 · frame doc 16369:309440

Finding QA-FIL-SEEMORE - missing "See more" long-list affordance
Observed: the coded FilterAccordion exposes only type, value, defaultValue, onValueChange, collapsible, headingLevel, className, style, and a generic children slot. There is no "See more" element or prop, and no truncation of long filter lists. Every item passed in renders.
Expected (per frame doc 16369:309440 and sample 8653:7455): when a single filter group has more than 10 items, the group shows the first 10 and a "See more" link below the list that reveals the remaining items. A group with 10 or fewer items shows no link. In the sample, the 5-item Brand group has no "See more"; the 11+ item Size group (pipe sizes) shows 10 items plus "See more".

Acceptance criteria:
- A filter group with 10 or fewer items renders no "See more" link.
- A filter group with more than 10 items renders the first 10 plus a "See more" link below the list.
- Activating "See more" reveals the remaining items of that group; behavior is keyboard operable and announced to assistive tech.
- The "See more" link is bound to the pattern link token color/pattern/link/default (#07729c), Maison Neue, and sits inside the panel below the content (content-padding-x 16).
- Re-verify against Figma component 8246:1551 and usage 8653:7455.

Confirm with design: exact threshold semantics (more-than-10 vs 10-or-more) and whether "See more" reveals all remaining at once or in pages.

Fix approach is the team's call - no code prescribed.`
    }],
    html: `
      <h1 class="rt">Filter Accordion</h1>
      <p class="rmeta">Figma component 8246:1551 · Usage 8653:7455 · Shared frame doc 16369:309440 · Storybook /story/disclosure-filteraccordion · Captured 2026-07-27</p>
      <p>The accordion tuned for PLP filter groups. Base size only, a full-width header with a <strong>trailing</strong> +/- toggle, a bottom-border divider, and a full-width content region (not indented) that holds the filter controls (checkbox, link, and rating filters). Shares the accordion behavior model with FAQ, Product Specification, and Footer.</p>

      <div class="callout warn"><strong>The "See more" long-list rule (fix).</strong> The frame doc specifies, and the updated sample (8653:7455) confirms, a truncation behavior: when a filter group has <strong>more than 10 items</strong>, it shows the first 10 and a "See more" link that reveals the rest; a group of 10 or fewer shows no link. In the sample, the 5-item Brand group has no "See more" (its <code>see more</code> layer is hidden), while the 11+ item Size group of pipe sizes shows 10 items plus "See more". The coded component does not implement this: its API is only <code>type</code> / <code>value</code> / <code>defaultValue</code> / <code>onValueChange</code> / <code>collapsible</code> / <code>headingLevel</code> / <code>className</code> / <code>style</code> / <code>children</code>, with no "See more" element, prop, or list truncation. In Figma the link is bound to the pattern link token <code>color/pattern/link/default</code> (<span class="mono">#07729c</span>), so a build should use that token rather than a hardcoded value. Logged as QA-FIL-SEEMORE with a handoff below.</div>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Bold label, trailing toggle, divider, padding all match</p></div>
        <div class="v pass"><p class="k">STATES · LAYOUT</p><div class="val">Pass</div><p class="sub">Collapsed/Expanded, base size, full-width, trailing toggle</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">button + aria-expanded, region, +/- beyond color</p></div>
        <div class="v fix"><p class="k">PARITY · SCOPE</p><div class="val">1 fix</div><p class="sub">"See more" (&gt;10-item rule) not implemented</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Group label</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> · 14px Bold</td><td class="mono">#343434 · 700 · 14px</td><td class="m y">✓</td></tr>
        <tr><td>Toggle icon (trailing)</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span></td><td class="mono">#07729c · trailing (right of label)</td><td class="m y">✓</td></tr>
        <tr><td>Header bg / divider</td><td><span class="mono">#ffffff</span> / <span class="chip" style="background:#dcdcdc"></span><span class="mono">#dcdcdc</span> 1px bottom</td><td class="mono">#ffffff / 1px #dcdcdc bottom</td><td class="m y">✓</td></tr>
        <tr><td>Header padding-x / y · icon-gap</td><td class="mono">16 / 20 · 16</td><td class="mono">16 / 20</td><td class="m y">✓</td></tr>
        <tr><td>Content padding-x / bottom</td><td class="mono">16 / 20 (full-width, not indented)</td><td class="mono">16 / 20</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side</h2>
      <p>Header chrome matches (full-width header, trailing +/- toggle, bottom divider, non-indented content). The gap is in long-list handling. Both columns show the same 11+ item Size group from the sample; the Figma component truncates to 10 and appends "See more", the build renders every item with no link.</p>
      <div class="swatchgrid" style="grid-template-columns:170px 1fr">
        <div class="hd">Source</div><div class="hd">Size group (&gt; 10 items)</div>
        <div class="stc">Figma component<br><span style="font-weight:400;color:#757575">(truncates to 10 + See more)</span></div><div class="cell">
          <div style="width:280px;font-size:14px;border-top:1px solid #dcdcdc">
            <div style="border-bottom:1px solid #dcdcdc"><div style="display:flex;justify-content:space-between;align-items:center;padding:20px 16px"><span style="color:#343434;font-weight:700">Size</span><span style="color:#07729c;font-weight:700">&minus;</span></div><div style="padding:0 16px 16px 16px;color:#343434">
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1/8" (7)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1/4" (46)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 3/8" (43)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1/2" (176)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 3/4" (228)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1" (185)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1-1/4" (143)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1-1/2" (124)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 2" (109)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 2-1/2" (37)</div>
              <div style="color:#07729c;font-weight:700;padding-top:8px">See more</div>
            </div></div>
          </div>
        </div>
        <div class="stc">Storybook build<br><span style="font-weight:400;color:#757575">(no truncation, no link)</span></div><div class="cell">
          <div style="width:280px;font-size:14px;border-top:1px solid #dcdcdc">
            <div style="border-bottom:1px solid #dcdcdc"><div style="display:flex;justify-content:space-between;align-items:center;padding:20px 16px"><span style="color:#343434;font-weight:700">Size</span><span style="color:#07729c;font-weight:700">&minus;</span></div><div style="padding:0 16px 16px 16px;color:#343434">
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1/8" (7)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1/4" (46)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 3/8" (43)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1/2" (176)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 3/4" (228)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1" (185)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1-1/4" (143)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 1-1/2" (124)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 2" (109)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 2-1/2" (37)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 3" (18)</div>
              <div style="display:flex;align-items:center;gap:8px;padding:3px 0"><span style="width:16px;height:16px;border:1px solid #c4c4c4;display:inline-block;flex:0 0 16px"></span> 4" (11)</div>
            </div></div>
          </div>
        </div>
      </div>
      <p style="font-size:12px;color:#757575">Figma stops at 10 items and shows a blue "See more"; the build keeps listing every item and never shows the link. A group of 10 or fewer (like the 5-item Brand group) shows no "See more" on either side.</p>

      <h2>3. States &amp; layout</h2>
      <p>State Collapsed / Expanded (default Collapsed); base size only (no Small/Medium/Large). Full-width header with a trailing +/- toggle; the content region is full-width (padding-x 16, not indented like FAQ) and holds the filter group's controls. These layout and state basics all match. <span class="m y">✓ Pass</span></p>
      <p>The one behavior the build is missing is long-list truncation: per the frame doc, a group of more than 10 items should show 10 plus a "See more" link. The build renders every item instead. Tracked as QA-FIL-SEEMORE below. <span class="m n">Fix</span></p>

      <h2>4. Accessibility</h2>
      <p>Each group header is a <code>button</code> with <code>aria-expanded</code>; the content is a <code>role="region"</code> labelled by its header. Tab to the header, Enter or Space toggles. Focus ring <span class="mono">#005fcc</span> / 2px. The +/- icon conveys collapsed vs expanded independently of color. Shared frame doc: 0 contrast failures.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-FIL-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Bold #343434 14px label, trailing #07729c toggle, bottom divider #dcdcdc, header 16/20, content 16/20 match Figma.</td></tr>
        <tr><td class="id">QA-FIL-STATE</td><td>States &amp; layout</td><td><span class="tag pass">PASS</span></td><td>Collapsed/Expanded, base size only, full-width header + trailing toggle, full-width (non-indented) content.</td></tr>
        <tr><td class="id">QA-FIL-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Header button + aria-expanded, content region, +/- beyond color, focus ring; 0 contrast failures.</td></tr>
        <tr><td class="id">QA-FIL-SEEMORE</td><td>Long-list truncation</td><td><span class="tag fail">FIX</span></td><td>Frame doc + sample 8653:7455: a group of more than 10 items shows 10 plus a "See more" link (layer <code>see more</code>, in the panel below the content); a group of 10 or fewer shows none. The link is bound to the pattern link token <code>color/pattern/link/default</code> (#07729c). Build has no such element, prop, or truncation and renders every item. See the handoff for context + acceptance criteria.</td></tr>
      </table>
    `
  },
  {
    id: 'footer-accordion',
    name: 'Footer Accordion',
    group: 'Accordions',
    status: 'Fix: link color',
    statusType: 'fix',
    handoffs: [{
      code: 'QA-FTR-CONTENT',
      title: 'Content link color (fix)',
      text: `Component: Footer Accordion
Storybook: http://34.74.189.135:30100/?path=/story/disclosure-footeraccordion--small
Figma (source of truth): UI-Kit__Web component 8646:6886 · usage 16365:71761 · frame doc 16369:309440

Finding QA-FTR-CONTENT - content link color (retested 2026-07-29, still open)
Observed: the expanded footer links still render black (rgb(0,0,0)) and underlined at 16px on the #89847f band.
Expected: the footer content uses the Link component's inverse variant, bound to color/pattern/link/inverse/default (#ffffff), Maison Neue Book 16px (WEB/Body1/16px-N), with pattern link icon-gap 8, on the accordion/footer/color/content/bg (#89847f) band. Design updated the Link component with this inverse variant for the footer content.

Acceptance criteria:
- Expanded footer links use the Link inverse variant and render white (#ffffff), bound to color/pattern/link/inverse/default.
- Link type is Maison Neue 16px / 400 (Body1).
- Confirm the underline treatment matches the inverse variant (the Figma sample shows the links without an underline; the build currently underlines them).
- Re-verify against usage 16365:71761.

Fix approach is the team's call - no code prescribed.`
    }],
    html: `
      <h1 class="rt">Footer Accordion</h1>
      <p class="rmeta">Figma component 8646:6886 · Usage 16365:71761 · Shared frame doc 16369:309440 · Storybook /docs/disclosure-footeraccordion · Captured 2026-07-28</p>
      <p>The accordion tuned for dark footer surfaces. Small / Medium / Large sizes, a <strong>filled</strong> header band (<span class="mono">#89847f</span>) with an inverse white label and +/- icon, a hairline bottom divider between sections, and a filled band that wraps the expanded content. Shares the accordion behavior model with FAQ, Filters, and Product Specification.</p>

      <div class="callout warn"><strong>Content link color (fix, retested 2026-07-29).</strong> Design updated the Link component with an <strong>inverse variant</strong> for the footer content, bound to <code>color/pattern/link/inverse/default</code> (<span class="mono">#ffffff</span>), Body1 16px Book, on the <code>accordion/footer/color/content/bg</code> (<span class="mono">#89847f</span>) band. The build still renders these links <strong>black</strong> (<span class="mono">rgb(0,0,0)</span>) and underlined, so the fix has not landed yet. Logged as QA-FTR-CONTENT with a handoff below. The header chrome (band, white label, white icon, divider, per-size padding) all matches.</div>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Filled band, white label/icon, divider, per-size padding match</p></div>
        <div class="v pass"><p class="k">STATES · SIZES</p><div class="val">Pass</div><p class="sub">Small / Medium / Large, Collapsed / Expanded, +/- icon</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass<span style="font-size:11px;font-weight:400;color:#757575"> · 1 note</span></div><p class="sub">button + aria-expanded, region; white-on-band contrast note</p></div>
        <div class="v fix"><p class="k">CONTENT COLOR</p><div class="val">1 fix</div><p class="sub">Links render black; token is white (#fff)</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Header label</td><td><span class="chip" style="background:#ffffff"></span><span class="mono">#ffffff</span> · Maison Neue 18px / 400</td><td class="mono">#ffffff · 18px · 400</td><td class="m y">✓</td></tr>
        <tr><td>Icon (+/-)</td><td><span class="chip" style="background:#ffffff"></span><span class="mono">#ffffff</span> · svg</td><td class="mono">#ffffff · svg</td><td class="m y">✓</td></tr>
        <tr><td>Header band bg</td><td><span class="chip" style="background:#89847f"></span><span class="mono">#89847f</span> (accordion/footer/color/default/bg)</td><td class="mono">#89847f (on header wrapper)</td><td class="m y">✓</td></tr>
        <tr><td>Divider (bottom)</td><td><span class="chip" style="background:#b6afa8"></span><span class="mono">#b6afa8</span> · 1px</td><td class="mono">1px #b6afa8 bottom</td><td class="m y">✓</td></tr>
        <tr><td>Content bg</td><td><span class="chip" style="background:#89847f"></span><span class="mono">#89847f</span> (accordion/footer/color/content/bg)</td><td class="mono">#89847f (content wrapper)</td><td class="m y">✓</td></tr>
        <tr><td>Content link color</td><td><span class="chip" style="background:#ffffff"></span><span class="mono">#ffffff</span> (Link inverse variant, color/pattern/link/inverse/default)</td><td class="mono">#000000 · underlined</td><td class="m n">✗</td></tr>
        <tr><td>Content link type</td><td class="mono">Maison Neue 16px / 400 (Body1)</td><td class="mono">16px / 400</td><td class="m y">✓</td></tr>
        <tr><td>Header padding-x / y (Small)</td><td class="mono">16 / 20</td><td class="mono">16 / 20</td><td class="m y">✓</td></tr>
        <tr><td>Header padding-x / y (Medium)</td><td class="mono">20 / 24</td><td class="mono">20 / 24</td><td class="m y">✓</td></tr>
        <tr><td>Header padding-x / y (Large)</td><td class="mono">36 / 24</td><td class="mono">36 / 24</td><td class="m y">✓</td></tr>
        <tr><td>content-padding-bottom · icon-gap</td><td class="mono">28 · 16 (all sizes)</td><td class="mono">token-verified</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side</h2>
      <p>Header chrome matches across sizes (filled band, white label, white +/- toggle, hairline divider between sections). The content links differ: Figma renders them white via the Link inverse variant (<code>color/pattern/link/inverse/default</code>); the build renders them black and underlined. That is the fix below.</p>
      <div class="swatchgrid" style="grid-template-columns:170px 1fr">
        <div class="hd">Source</div><div class="hd">Rendering</div>
        <div class="stc">Figma sample<br><span style="font-weight:400;color:#757575">(white links)</span></div><div class="cell">
          <div style="width:320px;font-size:14px">
            <div style="background:#89847f;border-bottom:1px solid #b6afa8"><div style="display:flex;justify-content:space-between;align-items:center;padding:20px 16px"><span style="color:#fff;font-size:18px">Customer Service</span><span style="color:#fff;font-size:18px">&minus;</span></div><div style="padding:0 16px 28px 16px"><div style="color:#fff;padding:6px 0">Order Status</div><div style="color:#fff;padding:6px 0">Contact Us</div><div style="color:#fff;padding:6px 0">Shipping Policy</div><div style="color:#fff;padding:6px 0">FAQs</div></div></div>
            <div style="background:#89847f;border-bottom:1px solid #b6afa8"><div style="display:flex;justify-content:space-between;align-items:center;padding:20px 16px"><span style="color:#fff;font-size:18px">About Us</span><span style="color:#fff;font-size:18px">+</span></div></div>
          </div>
        </div>
        <div class="stc">Storybook build<br><span style="font-weight:400;color:#757575">(black links)</span></div><div class="cell">
          <div style="width:320px;font-size:14px">
            <div style="background:#89847f;border-bottom:1px solid #b6afa8"><div style="display:flex;justify-content:space-between;align-items:center;padding:20px 16px"><span style="color:#fff;font-size:18px">Company</span><span style="color:#fff;font-size:18px">&minus;</span></div><div style="padding:0 16px 28px 16px"><div style="color:#000;text-decoration:underline;padding:4px 0">Shipping &amp; Returns</div><div style="color:#000;text-decoration:underline;padding:4px 0">Order Status</div><div style="color:#000;text-decoration:underline;padding:4px 0">FAQs</div></div></div>
            <div style="background:#89847f;border-bottom:1px solid #b6afa8"><div style="display:flex;justify-content:space-between;align-items:center;padding:20px 16px"><span style="color:#fff;font-size:18px">Help</span><span style="color:#fff;font-size:18px">+</span></div></div>
          </div>
        </div>
      </div>
      <p style="font-size:12px;color:#757575">Component chrome (band, label, icon, divider, padding) is identical. The link color is the one gap: white token vs black build.</p>

      <h2>3. States &amp; sizes</h2>
      <p>Three sizes present as separate stories: Small (padding 16 / 20), Medium (20 / 24), Large (36 / 24), all with the white 18px label and #89847f band. State Collapsed / Expanded toggles via the header; the +/- icon is an svg. All match the frame doc. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Each section header is a <code>button</code> with <code>aria-expanded</code>; the expanded content is a <code>role="region"</code>. The +/- icon conveys collapsed vs expanded beyond color. One known contrast note: white on the <span class="mono">#89847f</span> band computes about <strong>3.7:1</strong>, which clears 3:1 for non-text and large text but is under 4.5:1 for normal-weight text (this applies to both the 18px label and the 16px inverse-variant white links). The frame doc acknowledges this for the header and treats it as acceptable; the same tradeoff now extends to the white links. Carried as a note, not a blocker (consistent with the other known-contrast items). Note this is separate from QA-FTR-CONTENT, which is that the build renders the links black rather than the inverse white.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-FTR-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>White #fff 18px label + icon, #89847f band, #b6afa8 1px divider, per-size padding (16/20, 20/24, 36/24) all match Figma; band wraps expanded content.</td></tr>
        <tr><td class="id">QA-FTR-STATE</td><td>States &amp; sizes</td><td><span class="tag pass">PASS</span></td><td>Small / Medium / Large stories; Collapsed / Expanded via header button; +/- svg icon.</td></tr>
        <tr><td class="id">QA-FTR-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Header button + aria-expanded, content region, +/- beyond color. Note: white-on-#89847f label ~3.7:1 (passes 3:1 non-text/large, under 4.5:1 for 18px normal); documented and accepted in the frame doc.</td></tr>
        <tr><td class="id">QA-FTR-CONTENT</td><td>Content link color</td><td><span class="tag fail">FIX</span></td><td>Retested 2026-07-29, still open. Design updated the Link component with an inverse variant for the footer content, bound to color/pattern/link/inverse/default (#ffffff), Body1 16px Book, on the accordion/footer/color/content/bg (#89847f) band. The build still renders the links black (#000000) and underlined. See the handoff for context + acceptance criteria.</td></tr>
      </table>
    `
  },
  {
    id: 'product-spec-accordion',
    name: 'Product Specification Accordion',
    group: 'Accordions',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Product Specification Accordion</h1>
      <p class="rmeta">Figma component 7731:7700 · Usage 8653:7456 · Shared frame doc 16369:309440 · Storybook /docs/disclosure-productspecificationaccordion · Captured 2026-07-28</p>
      <p>The accordion for PDP specification tables. Small / Medium / Large sizes, a dark label with a trailing +/- toggle on a white surface, and a full-width content region for spec rows. It is the only accordion that carries <strong>both a top and bottom</strong> hairline border, and its label type scales by size. Shares the accordion behavior model with FAQ, Filters, and Footer.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Label, icon, top + bottom borders, per-size type + padding match</p></div>
        <div class="v pass"><p class="k">STATES · SIZES</p><div class="val">Pass</div><p class="sub">Small / Medium / Large, Collapsed / Expanded, +/- icon</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">button + aria-expanded, region, +/- beyond color</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Label color</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span></td><td class="mono">#343434</td><td class="m y">✓</td></tr>
        <tr><td>Icon (+/-)</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> · svg</td><td class="mono">#07729c · svg</td><td class="m y">✓</td></tr>
        <tr><td>Surface bg</td><td><span class="chip" style="background:#ffffff"></span><span class="mono">#ffffff</span></td><td class="mono">#ffffff</td><td class="m y">✓</td></tr>
        <tr><td>Borders (top + bottom)</td><td><span class="chip" style="background:#dcdcdc"></span><span class="mono">#dcdcdc</span> · 1px top &amp; 1px bottom</td><td class="mono">1px #dcdcdc top + 1px #dcdcdc bottom</td><td class="m y">✓</td></tr>
        <tr><td>Label type (Small / Medium / Large)</td><td class="mono">16 / 18 / 20px Bold</td><td class="mono">16 / 18 / 20px · 700</td><td class="m y">✓</td></tr>
        <tr><td>Header padding-y (Small / Medium / Large)</td><td class="mono">16 / 16 / 20</td><td class="mono">16 / 16 / 20</td><td class="m y">✓</td></tr>
        <tr><td>Header padding-x · icon-gap</td><td class="mono">0 (no x token) · 16</td><td class="mono">0 · token-verified</td><td class="m y">✓</td></tr>
        <tr><td>content-padding-bottom (Small / Medium / Large)</td><td class="mono">24 / 24 / 28</td><td class="mono">token-verified</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side</h2>
      <p>Rendered from the token values (Large, one section expanded). Identical on Figma and Storybook. Note the hairline border above the first row as well as below each row, which is the top + bottom treatment unique to this accordion, and the full-bleed header (no horizontal padding).</p>
      <div class="swatchgrid" style="grid-template-columns:150px 1fr">
        <div class="hd">Source</div><div class="hd">Rendering (Large, expanded)</div>
        <div class="stc">Figma</div><div class="cell">
          <div style="width:420px;font-size:14px;border-top:1px solid #dcdcdc">
            <div style="border-bottom:1px solid #dcdcdc"><div style="display:flex;justify-content:space-between;align-items:center;padding:20px 0"><span style="color:#343434;font-weight:700;font-size:20px">Product Highlights</span><span style="color:#07729c;font-weight:700;font-size:20px">&minus;</span></div><div style="padding:0 0 28px 0;color:#343434"><div style="padding:3px 0">4-11/16" x 2-7/8" x 1-1/8"</div><div style="padding:3px 0">Standard High Capacity Output Compact Design</div><div style="padding:3px 0">Quiet, Efficient Operation</div></div></div>
            <div style="border-bottom:1px solid #dcdcdc;display:flex;justify-content:space-between;align-items:center;padding:20px 0"><span style="color:#343434;font-weight:700;font-size:20px">Description</span><span style="color:#07729c;font-weight:700;font-size:20px">+</span></div>
            <div style="border-bottom:1px solid #dcdcdc;display:flex;justify-content:space-between;align-items:center;padding:20px 0"><span style="color:#343434;font-weight:700;font-size:20px">Specs</span><span style="color:#07729c;font-weight:700;font-size:20px">+</span></div>
          </div>
        </div>
        <div class="stc">Storybook</div><div class="cell">
          <div style="width:420px;font-size:14px;border-top:1px solid #dcdcdc">
            <div style="border-bottom:1px solid #dcdcdc"><div style="display:flex;justify-content:space-between;align-items:center;padding:20px 0"><span style="color:#343434;font-weight:700;font-size:20px">Product Highlights</span><span style="color:#07729c;font-weight:700;font-size:20px">&minus;</span></div><div style="padding:0 0 28px 0;color:#343434"><div style="padding:3px 0">4-11/16" x 2-7/8" x 1-1/8"</div><div style="padding:3px 0">Standard High Capacity Output Compact Design</div><div style="padding:3px 0">Quiet, Efficient Operation</div></div></div>
            <div style="border-bottom:1px solid #dcdcdc;display:flex;justify-content:space-between;align-items:center;padding:20px 0"><span style="color:#343434;font-weight:700;font-size:20px">Description</span><span style="color:#07729c;font-weight:700;font-size:20px">+</span></div>
            <div style="border-bottom:1px solid #dcdcdc;display:flex;justify-content:space-between;align-items:center;padding:20px 0"><span style="color:#343434;font-weight:700;font-size:20px">Specs</span><span style="color:#07729c;font-weight:700;font-size:20px">+</span></div>
          </div>
        </div>
      </div>

      <h2>3. States &amp; sizes</h2>
      <p>Three sizes present as separate stories: Small (label 16px, padding-y 16), Medium (18px, 16), Large (20px, 20), all with the dark #343434 label, blue #07729c toggle, and top + bottom #dcdcdc borders on white. State Collapsed / Expanded toggles via the header button; the +/- icon is an svg. All match the frame doc. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Each section header is a <code>button</code> with <code>aria-expanded</code>; the expanded content is a <code>role="region"</code>. The +/- icon conveys collapsed vs expanded beyond color. Contrast is clean: the dark #343434 label on white is high-contrast, and the #07729c icon on white clears 3:1 for non-text. No contrast notes on this one.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-PS-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>#343434 label, #07729c icon, #ffffff bg, 1px #dcdcdc top + bottom borders, per-size label type (16/18/20 Bold) and padding-y (16/16/20), x padding 0 all match Figma.</td></tr>
        <tr><td class="id">QA-PS-STATE</td><td>States &amp; sizes</td><td><span class="tag pass">PASS</span></td><td>Small / Medium / Large stories; Collapsed / Expanded via header button; +/- svg icon.</td></tr>
        <tr><td class="id">QA-PS-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Header button + aria-expanded, content region, +/- beyond color; label + icon contrast clean.</td></tr>
      </table>
    `
  },
  {
    id: 'stepper-standard',
    name: 'Quantity Stepper: Standard',
    group: 'Steppers',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Quantity Stepper: Standard</h1>
      <p class="rmeta">Figma component 3599:3741 · Shared frame doc 16575:1040 · Storybook /docs/forms-quantity-stepper · Captured 2026-07-28</p>
      <p>The default quantity stepper: a decrement (minus) control, a direct-entry value field, and an increment (plus) control. Solid orange controls with a white value field, sized Large / Small. It starts Empty (outlined, decrement disabled) and fills as quantity is added; the minus becomes a Remove (trash) action at quantity 1 and is disabled at 0; the plus disables at Max. First of the three stepper members (Standard, Add-first, Autofilled) that share one behavior model.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">11 states + 2 sizes match token-for-token; radius 8</p></div>
        <div class="v pass"><p class="k">STATES · SIZES</p><div class="val">Pass</div><p class="sub">Empty / Focus / Qty 0 / Qty 1 / Filled / Max / Edit / Loading / Disabled; Large + Small</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">spinbutton with valuemin/now/max; trash beyond color</p></div>
      </div>

      <h2>1. Token fidelity (by state)</h2>
      <p>Values are the computed build styles read from the states-matrix story, checked against the <code>quantity-stepper/standard/*</code> tokens.</p>
      <table>
        <tr><th>State</th><th>Minus bg / icon</th><th>Plus bg / icon</th><th>Notes</th><th>Match</th></tr>
        <tr><td>Empty</td><td class="mono">#ffffff / #c4c4c4</td><td class="mono">#ffffff / #07729c</td><td>Outlined; decrement disabled, plus blue</td><td class="m y">✓</td></tr>
        <tr><td>Empty Hover</td><td class="mono">#ffffff / #c4c4c4</td><td class="mono">#eff5fd / #07729c</td><td>Plus hover bg light blue</td><td class="m y">✓</td></tr>
        <tr><td>Focus</td><td class="mono">#ffffff / #c4c4c4</td><td class="mono">#ffffff / #07729c</td><td>Field border #66afe9</td><td class="m y">✓</td></tr>
        <tr><td>Qty 0</td><td class="mono">#f6b48d / #ffffff</td><td class="mono">#f15c02 / #ffffff</td><td>Minus muted (cannot go below 0)</td><td class="m y">✓</td></tr>
        <tr><td>Qty 1 (remove)</td><td class="mono">#f15c02 / #ffffff</td><td class="mono">#f15c02 / #ffffff</td><td>Minus shows trash icon</td><td class="m y">✓</td></tr>
        <tr><td>Filled (2+)</td><td class="mono">#f15c02 / #ffffff</td><td class="mono">#f15c02 / #ffffff</td><td>Solid orange, white field</td><td class="m y">✓</td></tr>
        <tr><td>Filled Hover</td><td class="mono">#f15c02 / #ffffff</td><td class="mono">#e05400 / #ffffff</td><td>Plus hover darker orange</td><td class="m y">✓</td></tr>
        <tr><td>Max</td><td class="mono">#f15c02 / #ffffff</td><td class="mono">#f6b48d / #ffffff</td><td>Plus disabled; "Max" label #f15c02</td><td class="m y">✓</td></tr>
        <tr><td>Edit</td><td class="mono">field-driven</td><td class="mono">#f15c02 / #ffffff</td><td>Direct entry; plus shows pencil</td><td class="m y">✓</td></tr>
        <tr><td>Loading</td><td class="mono">controls disabled</td><td class="mono">controls disabled</td><td>Spinner shown while pending (orange accent)</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td class="mono">#dcdcdc / #ffffff</td><td class="mono">#dcdcdc / #ffffff</td><td>Field text #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Field bg / text · radius</td><td class="mono" colspan="2">#ffffff / #343434 · radius 8</td><td>bg.page white field, Body text</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side (rendered from tokens)</h2>
      <p>Representative Large states, drawn from the token values. Identical to the build.</p>
      <div style="display:flex;flex-wrap:wrap;gap:20px;margin:14px 0">
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Empty</div><div style="display:inline-flex;height:40px;border:1px solid #c4c4c4;border-radius:8px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#fff;color:#c4c4c4;border-right:1px solid #c4c4c4">&minus;</span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#fff;color:#343434"></span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#fff;color:#07729c;border-left:1px solid #c4c4c4">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Qty 0</div><div style="display:inline-flex;height:40px;border:1px solid #c4c4c4;border-radius:8px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f6b48d;color:#fff">&minus;</span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#fff;color:#343434">0</span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Qty 1 (remove)</div><div style="display:inline-flex;height:40px;border:1px solid #c4c4c4;border-radius:8px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg></span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#fff;color:#343434">1</span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Filled (2+)</div><div style="display:inline-flex;height:40px;border:1px solid #c4c4c4;border-radius:8px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff">&minus;</span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#fff;color:#343434">2</span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Max</div><div style="display:inline-flex;height:40px;border:1px solid #c4c4c4;border-radius:8px;overflow:hidden;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff;font-size:15px">&minus;</span><span style="min-width:52px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#fff"><span style="font-size:9px;color:#f15c02;line-height:1">Max</span><span style="font-size:14px;color:#343434;line-height:1.1">10</span></span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f6b48d;color:#fff;font-size:15px">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Disabled</div><div style="display:inline-flex;height:40px;border:1px solid #c4c4c4;border-radius:8px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#dcdcdc;color:#fff">&minus;</span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#fff;color:#c4c4c4">1</span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#dcdcdc;color:#fff">+</span></div></div>
      </div>

      <h2>3. States &amp; sizes</h2>
      <p>Eleven states pinned across the stories (Empty, Empty Hover, Focus, Qty 0, Qty 1 remove, Filled, Filled Hover, Max, Edit, Loading, Disabled) plus a states-matrix. Two sizes: Large and Small (dedicated empty-large / empty-small / filled-large / filled-small stories). The minus glyph swaps to a trash at quantity 1 and the plus disables at Max, both matching Figma. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>The value field is exposed as a <code>role="spinbutton"</code> with <code>aria-valuemin</code> / <code>aria-valuemax</code> (0 / 10 in the stories) and <code>aria-valuenow</code>; minus and plus are increment/decrement controls that carry the native <code>disabled</code> state at the appropriate boundaries. The trash icon at quantity 1 conveys the Remove action beyond color. Focus ring is the shared <span class="mono">#005fcc</span> / 2px foundation. Contrast: white glyphs on the accent orange <span class="mono">#f15c02</span> compute about <strong>3.3:1</strong>, which clears 3:1 for non-text icons; the muted Qty 0 / Max / Disabled treatments are inactive controls and fall under the WCAG disabled exemption. Consistent with the frame doc's "verify before publish" note.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-QS-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 11 states match quantity-stepper/standard/* token-for-token (minus/plus bg + icon, field bg #fff / text #343434, focus border #66afe9, hover bg #eff5fd / #e05400, radius 8).</td></tr>
        <tr><td class="id">QA-QS-STATE</td><td>States &amp; sizes</td><td><span class="tag pass">PASS</span></td><td>Empty / Empty Hover / Focus / Qty 0 / Qty 1 remove / Filled / Filled Hover / Max / Edit / Loading / Disabled; Large + Small; trash at qty 1, plus disabled at Max.</td></tr>
        <tr><td class="id">QA-QS-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Value field is a spinbutton (valuemin/now/max); disabled boundaries native; trash beyond color; focus ring. White-on-orange icons ~3.3:1 (passes 3:1 non-text); muted states are disabled-exempt.</td></tr>
      </table>
    `
  },
  {
    id: 'stepper-add-first',
    name: 'Quantity Stepper Button (Add-first)',
    group: 'Steppers',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Quantity Stepper Button (Add-first)</h1>
      <p class="rmeta">Figma component 16515:10708 · Shared frame doc 16575:1040 · Storybook /docs/forms-quantity-stepper-button · Captured 2026-07-28</p>
      <p>The Add-first member of the quantity stepper family. It starts as an outlined "Add +" trigger that expands into the orange stepper on first add, shows a checkmark badge on add, and floats an "Added!" callout as an overlay on the first add (the callout does not affect the component footprint). Single size. From qty 1 onward it behaves like the Standard stepper (trash at quantity 1, plus disabled at Max).</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Trigger, badge, callout, shared states match; radius 6</p></div>
        <div class="v pass"><p class="k">STATES</p><div class="val">Pass</div><p class="sub">Add / Add Hover / Focus / Qty 0 / Qty 1 / Filled / Max / Edit / Loading / Disabled / Added first + repeat</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">trigger is a button; expanded field is a spinbutton; trash beyond color</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <p>Read from the states-matrix and the added-first / added-repeat stories, checked against <code>quantity-stepper/add-first/*</code>.</p>
      <table>
        <tr><th>Element / state</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Add trigger</td><td class="mono">text #343434 · icon #f15c02 · border #c4c4c4 1px</td><td class="mono">#343434 · #f15c02 · #c4c4c4 1px</td><td class="m y">✓</td></tr>
        <tr><td>Container radius</td><td class="mono">6 (radius/6)</td><td class="mono">6px</td><td class="m y">✓</td></tr>
        <tr><td>Added badge</td><td class="mono">bg #f15c02 · icon #ffffff (check)</td><td class="mono">#f15c02 · #ffffff check</td><td class="m y">✓</td></tr>
        <tr><td>Added! callout (first add)</td><td class="mono">text/border #f15c02 · bg #ffffff</td><td class="mono">overlay fires on first add</td><td class="m y">✓</td></tr>
        <tr><td>Qty 0</td><td class="mono">minus #f6b48d / plus #f15c02, icons #fff</td><td class="mono">#f6b48d / #f15c02</td><td class="m y">✓</td></tr>
        <tr><td>Qty 1 (remove) · Filled</td><td class="mono">minus &amp; plus #f15c02, icons #fff</td><td class="mono">#f15c02 both</td><td class="m y">✓</td></tr>
        <tr><td>Filled Hover</td><td class="mono">plus #e05400</td><td class="mono">#e05400</td><td class="m y">✓</td></tr>
        <tr><td>Max</td><td class="mono">plus #f6b48d (disabled) · label #f15c02</td><td class="mono">#f6b48d · disabled</td><td class="m y">✓</td></tr>
        <tr><td>Edit · Loading · Disabled</td><td class="mono">pencil plus / spinner / #dcdcdc</td><td class="mono">match Standard values</td><td class="m y">✓</td></tr>
        <tr><td>Field bg / text · focus border</td><td class="mono">#ffffff / #343434 · #66afe9</td><td class="mono">#ffffff / #343434 · #66afe9</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side (rendered from tokens)</h2>
      <p>Trigger, the first-add moment (badge + "Added!" callout), Filled, and Max. Radius 6.</p>
      <div style="display:flex;flex-wrap:wrap;gap:28px;align-items:flex-start;margin:14px 0">
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Add trigger</div><div style="display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 16px;border:1px solid #c4c4c4;border-radius:6px;font-size:15px;font-weight:700;color:#343434">Add <span style="color:#f15c02">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Added (first)</div><div style="position:relative;display:inline-block;padding-top:14px">
          <div style="position:absolute;top:-14px;left:24px;background:#fff;border:1px solid #f15c02;color:#f15c02;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px">Added!</div>
          <div style="display:inline-flex;height:40px;border-radius:6px;overflow:hidden;font-size:15px;font-weight:700;position:relative">
            <span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg></span>
            <span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#fff;color:#343434;border-top:1px solid #c4c4c4;border-bottom:1px solid #c4c4c4">1</span>
            <span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff;position:relative">+<span style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;border-radius:50%;background:#f15c02;border:2px solid #fff;display:flex;align-items:center;justify-content:center"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></span></span>
          </div>
        </div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Filled (2+)</div><div style="display:inline-flex;height:40px;border-radius:6px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff">&minus;</span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#fff;color:#343434;border-top:1px solid #c4c4c4;border-bottom:1px solid #c4c4c4">2</span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Max</div><div style="display:inline-flex;height:40px;border-radius:6px;overflow:hidden;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f15c02;color:#fff;font-size:15px">&minus;</span><span style="min-width:52px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#fff;border-top:1px solid #c4c4c4;border-bottom:1px solid #c4c4c4"><span style="font-size:9px;color:#f15c02;line-height:1">Max</span><span style="font-size:14px;color:#343434;line-height:1.1">10</span></span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f6b48d;color:#fff;font-size:15px">+</span></div></div>
      </div>

      <h2>3. States</h2>
      <p>Stories pin Add, Filled, Qty 1 (remove), Max, Added (first), Added (repeat), Edit, Loading, Disabled, plus a states-matrix (which also covers Add Hover, Focus, and Qty 0). Single size (no Large / Small). The trigger expands into the stepper on first add; the checkmark badge and the "Added!" callout are transient overlays that fire on add and fade, matching the frame doc, so their exact colors were confirmed visually and against the tokens rather than as a static resting state. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>The initial "Add +" is a <code>button</code>; once expanded, the value field is a <code>role="spinbutton"</code> with <code>aria-valuemin</code> / <code>valuemax</code> / <code>valuenow</code>, and minus/plus are increment/decrement controls that carry native <code>disabled</code> at the boundaries. The trash icon at quantity 1 conveys Remove beyond color. Focus ring is the shared <span class="mono">#005fcc</span> / 2px foundation. Contrast: white glyphs on <span class="mono">#f15c02</span> compute about <strong>3.3:1</strong> (passes 3:1 non-text); the Qty 0 / Max / Disabled muted treatments are inactive controls under the WCAG disabled exemption.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-QSB-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Add trigger (#343434 / #f15c02 / #c4c4c4), radius 6, badge (#f15c02 + white check), Added! callout (#f15c02 on white), and all shared states match quantity-stepper/add-first/* token-for-token.</td></tr>
        <tr><td class="id">QA-QSB-STATE</td><td>States</td><td><span class="tag pass">PASS</span></td><td>Add / Add Hover / Focus / Qty 0 / Qty 1 remove / Filled / Filled Hover / Max / Edit / Loading / Disabled / Added first + repeat; single size. Trigger expands on add; badge + callout fire as overlays.</td></tr>
        <tr><td class="id">QA-QSB-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Trigger is a button; expanded field is a spinbutton (valuemin/now/max); disabled boundaries native; trash beyond color; focus ring. White-on-orange ~3.3:1 (passes 3:1 non-text); muted states disabled-exempt.</td></tr>
      </table>
    `
  },
  {
    id: 'stepper-autofilled',
    name: 'Quantity Stepper Autofilled',
    group: 'Steppers',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Quantity Stepper Autofilled</h1>
      <p class="rmeta">Figma component 16515:11267 · Shared frame doc 16575:1040 · Storybook /docs/forms-quantity-stepper-autofilled · Captured 2026-07-28</p>
      <p>The Autofilled member: a pre-populated quantity with gray-outlined controls and teal (<span class="mono">#07729c</span>) icons on a light-blue value field (<span class="mono">#eff5fd</span>, bg.autofilled). Single size. It has no empty or entry states, and no Qty 0 or Max, so it starts already filled and supports decrement to the Remove (trash) action, direct edit, loading, and disabled. Third of the three stepper members.</p>

      <div class="callout info"><strong>Design note (from the frame doc): weak hover feedback.</strong> On Autofilled Hover, the plus button background is <code>quantity-stepper/autofilled/color/hover/plus-bg</code> = <span class="mono">#eff5fd</span>, which is the same as the field background. The build faithfully implements this token (verified: the plus hover var resolves to #eff5fd, equal to the field bg), so on hover the plus visually blends into the field and the feedback reads as weak. This is a pending design decision the doc flags, not a build defect. Tracked as QA-QSA-HOVER.</div>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Teal controls, blue field, disabled treatment match; radius 6</p></div>
        <div class="v pass"><p class="k">STATES</p><div class="val">Pass</div><p class="sub">Filled / Hover / Focus / Qty 1 / Edit / Loading / Disabled; single size</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass<span style="font-size:11px;font-weight:400;color:#757575"> · 1 note</span></div><p class="sub">spinbutton; trash beyond color; hover-blend design note</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <p>Read from the states-matrix and per-state stories, checked against <code>quantity-stepper/autofilled/*</code>. The plus hover value was confirmed by resolving the bound CSS variable.</p>
      <table>
        <tr><th>State</th><th>Minus (bg / icon / border)</th><th>Plus (bg / icon)</th><th>Field bg</th><th>Match</th></tr>
        <tr><td>Filled</td><td class="mono">#ffffff / #07729c / #c4c4c4</td><td class="mono">#ffffff / #07729c</td><td class="mono">#eff5fd</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td class="mono">#ffffff / #07729c / #c4c4c4</td><td class="mono">#eff5fd / #07729c</td><td class="mono">#eff5fd</td><td class="m y">✓</td></tr>
        <tr><td>Focus</td><td class="mono">#ffffff / #07729c / #c4c4c4</td><td class="mono">#ffffff / #07729c</td><td class="mono">#eff5fd · border #66afe9</td><td class="m y">✓</td></tr>
        <tr><td>Qty 1 (remove)</td><td class="mono">#ffffff / #07729c (trash) / #c4c4c4</td><td class="mono">#ffffff / #07729c</td><td class="mono">#eff5fd</td><td class="m y">✓</td></tr>
        <tr><td>Edit</td><td class="mono">field-driven</td><td class="mono">#ffffff / #07729c (pencil)</td><td class="mono">#eff5fd</td><td class="m y">✓</td></tr>
        <tr><td>Loading</td><td class="mono">controls disabled</td><td class="mono">spinner #07729c</td><td class="mono">field border #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td class="mono">#f8f8f8 / #c4c4c4 / #e3e3e3</td><td class="mono">#f8f8f8 / #c4c4c4</td><td class="mono">#f8f8f8 · text #c4c4c4</td><td class="m y">✓</td></tr>
        <tr><td>Field text · radius</td><td class="mono" colspan="2">#343434 · radius 6</td><td class="mono">bg.autofilled</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side (rendered from tokens)</h2>
      <p>Teal outlined controls on the light-blue field. The Hover cell shows the plus taking the field blue, which is the blend the design note flags.</p>
      <div style="display:flex;flex-wrap:wrap;gap:24px;margin:14px 0">
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Filled</div><div style="display:inline-flex;height:40px;border:1px solid #c4c4c4;border-radius:6px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#fff;color:#07729c;border-right:1px solid #c4c4c4">&minus;</span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#eff5fd;color:#343434">2</span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#fff;color:#07729c;border-left:1px solid #c4c4c4">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Hover (plus blends)</div><div style="display:inline-flex;height:40px;border:1px solid #c4c4c4;border-radius:6px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#fff;color:#07729c;border-right:1px solid #c4c4c4">&minus;</span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#eff5fd;color:#343434">2</span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#eff5fd;color:#07729c;border-left:1px solid #c4c4c4">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Qty 1 (remove)</div><div style="display:inline-flex;height:40px;border:1px solid #c4c4c4;border-radius:6px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#fff;border-right:1px solid #c4c4c4"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#07729c" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg></span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#eff5fd;color:#343434">1</span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#fff;color:#07729c;border-left:1px solid #c4c4c4">+</span></div></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Disabled</div><div style="display:inline-flex;height:40px;border:1px solid #e3e3e3;border-radius:6px;overflow:hidden;font-size:15px;font-weight:700"><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f8f8f8;color:#c4c4c4;border-right:1px solid #e3e3e3">&minus;</span><span style="min-width:52px;display:flex;align-items:center;justify-content:center;background:#f8f8f8;color:#c4c4c4">1</span><span style="width:44px;display:flex;align-items:center;justify-content:center;background:#f8f8f8;color:#c4c4c4;border-left:1px solid #e3e3e3">+</span></div></div>
      </div>

      <h2>3. States</h2>
      <p>Stories pin Filled, Qty 1 (remove), Hover, Edit, Loading, Disabled, plus a states-matrix (which also covers Focus). Single size. No Add / Empty / Qty 0 / Max, matching the frame doc: Autofilled starts pre-populated and has no entry states. The minus becomes a teal trash at quantity 1 (not orange, since Autofilled uses teal controls throughout). <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>The value field is a <code>role="spinbutton"</code> with <code>aria-valuemin</code> / <code>valuemax</code> / <code>valuenow</code>; minus and plus are increment/decrement controls with native <code>disabled</code>. The trash icon at quantity 1 conveys Remove beyond color. Focus ring is the shared <span class="mono">#005fcc</span> / 2px foundation, plus the field border shifts to <span class="mono">#66afe9</span>. Contrast: teal <span class="mono">#07729c</span> icons and <span class="mono">#343434</span> text on the light <span class="mono">#eff5fd</span> field are high-contrast; the disabled treatment (icons #c4c4c4 on #f8f8f8) is an inactive control under the WCAG disabled exemption.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-QSA-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All states match quantity-stepper/autofilled/* token-for-token: teal #07729c icons, white control bg, #c4c4c4 borders, #eff5fd field, #343434 text, focus border #66afe9, disabled #f8f8f8 / #e3e3e3 / #c4c4c4, radius 6.</td></tr>
        <tr><td class="id">QA-QSA-STATE</td><td>States</td><td><span class="tag pass">PASS</span></td><td>Filled / Hover / Focus / Qty 1 remove / Edit / Loading / Disabled; single size; no Add / Empty / Qty 0 / Max; teal trash at qty 1.</td></tr>
        <tr><td class="id">QA-QSA-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Spinbutton (valuemin/now/max); disabled native; trash beyond color; focus ring + #66afe9 field border. Teal/dark on light-blue high contrast; disabled exempt.</td></tr>
        <tr><td class="id">QA-QSA-HOVER</td><td>Hover feedback</td><td><span class="tag obs">NOTE</span></td><td>Design decision (per frame doc note), not a build defect: the plus hover bg token (#eff5fd) equals the field bg, so the plus blends into the field on hover. Build correctly implements the current token. Pending the owner's call on a distinct hover value.</td></tr>
      </table>
    `
  },
  {
    id: 'chip',
    name: 'Chip',
    group: 'Display',
    status: 'Pass · 1 note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Chip</h1>
      <p class="rmeta">Figma component 14470:1784 · Frame doc 16175:363 · Usage 14472:622 / 14484:471 · Storybook /docs/display-chip · Captured 2026-07-30</p>
      <p>A removable filter chip: a pill showing an active selection (for example "Category: Value") that the user can dismiss with a trailing × . The whole chip is the dismiss target. Chips are composed into a Chip Group for applied-filter bars, which wraps across rows, condenses with a "+n More" control, and offers "Clear All". Bound to the <code>pattern/removable/*</code> tokens.</p>

      <div class="callout info"><strong>Hover has no visible change in the build.</strong> The build wires hover to the <code>removable/hover/*</code> tokens, but those resolve to the same values as default (bg <span class="mono">#eff5fd</span>, border <span class="mono">#07729c</span>) and the hover rule does not change border width, so a hovered chip looks identical to its resting state. This matches the frame doc's own open items: hover border-width is design 2px vs token 1px, and the label-to-× gap is design 6px vs token 8px, both flagged as "reconcile token vs design before publish." The build faithfully follows the current tokens; this is a design/token decision, not a build defect. See QA-CHIP-HOVER.</div>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Default bg, border, text, icon, padding, type all match</p></div>
        <div class="v pass"><p class="k">STATES · GROUP</p><div class="val">Pass</div><p class="sub">Default + Hover; Chip Group 8px gap, flexible width, Clear All</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">button + focus ring; dismiss target; contrast AA+</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <p>Computed build styles from the states story, checked against <code>pattern/removable/*</code>.</p>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Chip bg</td><td><span class="chip" style="background:#eff5fd"></span><span class="mono">#eff5fd</span> (removable/default/bg)</td><td class="mono">#eff5fd</td><td class="m y">✓</td></tr>
        <tr><td>Border</td><td><span class="chip" style="background:#07729c"></span><span class="mono">#07729c</span> · 1px (border-width 1)</td><td class="mono">1px solid #07729c</td><td class="m y">✓</td></tr>
        <tr><td>Label text</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span> · Caption1 12px (value Bold)</td><td class="mono">#343434 · 12px</td><td class="m y">✓</td></tr>
        <tr><td>Dismiss (×) icon</td><td><span class="chip" style="background:#343434"></span><span class="mono">#343434</span></td><td class="mono">#343434</td><td class="m y">✓</td></tr>
        <tr><td>Padding-x · icon-gap</td><td class="mono">12 · 4</td><td class="mono">12 · token-verified</td><td class="m y">✓</td></tr>
        <tr><td>Radius</td><td class="mono">pill (fully rounded)</td><td class="mono">9999px</td><td class="m y">✓</td></tr>
        <tr><td>Hover (bg / border / text)</td><td class="mono">#eff5fd / #07729c / #343434</td><td class="mono">same as default (see note)</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side</h2>
      <p>Chip and Chip Group rendered from the token values. The build matches the resting design; the group uses an 8px gap and hugs its content.</p>
      <div class="swatchgrid" style="grid-template-columns:150px 1fr">
        <div class="hd">Source</div><div class="hd">Rendering</div>
        <div class="stc">Single chip</div><div class="cell">
          <span style="display:inline-flex;align-items:center;gap:4px;height:32px;padding:0 12px;background:#eff5fd;border:1px solid #07729c;border-radius:9999px;font-size:12px;color:#343434">Category: <strong>Value</strong> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#343434" stroke-width="2" style="margin-left:2px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
        </div>
        <div class="stc">Chip Group</div><div class="cell">
          <span style="display:inline-flex;flex-wrap:wrap;align-items:center;gap:8px">
            <span style="display:inline-flex;align-items:center;gap:4px;height:32px;padding:0 12px;background:#eff5fd;border:1px solid #07729c;border-radius:9999px;font-size:12px;color:#343434">Size: <strong>1/4"</strong> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#343434" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
            <span style="display:inline-flex;align-items:center;gap:4px;height:32px;padding:0 12px;background:#eff5fd;border:1px solid #07729c;border-radius:9999px;font-size:12px;color:#343434">Lead Free: <strong>Yes</strong> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#343434" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
            <span style="display:inline-flex;align-items:center;gap:4px;height:32px;padding:0 12px;background:#eff5fd;border:1px solid #07729c;border-radius:9999px;font-size:12px;color:#343434"><strong>Bluefin</strong> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#343434" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>
            <span style="color:#07729c;font-weight:700;font-size:12px;padding:0 4px">Clear All</span>
          </span>
        </div>
      </div>

      <h2>3. States &amp; group</h2>
      <p>State Default and Hover (no disabled variant, matching the frame doc note that a <code>removable.disabled</code> token exists but no disabled variant is built yet). Label is "Category: Value" or value-only; the value is Bold. The Chip Group (stories: Applied Filters, With Categories) lays chips out with an 8px horizontal gap, flexible (hug) width, wraps to multiple rows, and shows a "Clear All" control; the responsive "+n More" / "View Less" condense-and-expand and mobile horizontal scroll are described in the usage frames. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Each chip is a <code>button</code> (the whole chip is the dismiss target); Tab reaches it and Enter / Delete / Backspace dismisses. Focus ring is the shared <span class="mono">#005fcc</span> / 2px. Removal should be announced and focus moved to the next chip or the container. Contrast is clean:</p>
      <table>
        <tr><th>Pair</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Label / × (#343434) on chip bg #eff5fd</td><td>11.36:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Border #07729c on chip bg #eff5fd</td><td>4.91:1</td><td class="m y">Pass</td></tr>
        <tr><td>Border #07729c on page (white)</td><td>5.39:1</td><td class="m y">Pass</td></tr>
      </table>
      <p>Unlike Select / ComboBox / Filter pills, the chip's border is blue.700, so it clears the 3:1 non-text minimum: no resting-border contrast note here.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-CHIP-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Default bg #eff5fd, 1px #07729c border, #343434 label + × icon, padding-x 12, pill radius, Caption1 12px (value Bold) all match pattern/removable/*.</td></tr>
        <tr><td class="id">QA-CHIP-STATE</td><td>States</td><td><span class="tag pass">PASS</span></td><td>Default + Hover; no disabled variant (matches frame doc). Label "Category: Value" or value-only.</td></tr>
        <tr><td class="id">QA-CHIP-GROUP</td><td>Chip Group</td><td><span class="tag pass">PASS</span></td><td>8px horizontal gap, flexible (hug) width, Clear All present; wrap + "+n More" / "View Less" + mobile scroll per the usage frames.</td></tr>
        <tr><td class="id">QA-CHIP-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>button + focus ring, whole chip dismiss target, keyboard dismiss; label/icon 11.36:1, border 4.91:1 / 5.39:1 all pass.</td></tr>
        <tr><td class="id">QA-CHIP-HOVER</td><td>Hover feedback</td><td><span class="tag obs">NOTE</span></td><td>Hover tokens equal default and border width stays 1px, so hover shows no visible change. Frame doc open items: hover border design 2px vs token 1px; label-to-× gap design 6px vs token 8px. Build follows current tokens; pending design/token reconciliation.</td></tr>
      </table>
    `
  },
  {
    id: 'pill',
    name: 'Pill',
    group: 'Display',
    status: 'Pass · 1 note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Pill</h1>
      <p class="rmeta">Figma component 14131:5026 · Frame doc 16175:305 · Storybook /docs/display-pill · Captured 2026-07-30</p>
      <p>An interactive selection control (a toggle pill) for filtering and in-page view switching. Pills toggle on/off with no dismiss action (distinct from the removable Chip). Sizes Large (40px) and Small (34px). Bound to the <code>pattern/selectable/*</code> tokens. Composed into the <a href="#pill-group" style="color:var(--sh-blue)">Pill Group</a> for single/multi-select filter sets.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">6 states × 2 sizes match; selected 2px via border + inset</p></div>
        <div class="v pass"><p class="k">STATES · SIZES</p><div class="val">Pass</div><p class="sub">Default/Hover/Selected/Muted/Disabled(+Selected); Large + Small</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass<span style="font-size:11px;font-weight:400;color:#757575"> · 1 note</span></div><p class="sub">radiogroup, selection beyond color; resting-border note</p></div>
      </div>

      <h2>1. Token fidelity (by state)</h2>
      <p>Computed build styles from the states-matrix story, checked against <code>pattern/selectable/*</code>.</p>
      <table>
        <tr><th>State</th><th>Figma (bg / border / text)</th><th>Storybook</th><th>Match</th></tr>
        <tr><td>Default</td><td class="mono">#ffffff / #c4c4c4 1px / #343434</td><td class="mono">#ffffff / #c4c4c4 1px / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Hover</td><td class="mono">#f8f8f8 / #343434 2px / #343434</td><td class="mono">tokens #f8f8f8 / #343434 / 2px</td><td class="m y">✓</td></tr>
        <tr><td>Selected</td><td class="mono">#eff5fd / #07729c 2px / #343434 · check #07729c</td><td class="mono">#eff5fd / #07729c (1px + 1px inset = 2px) · check #07729c</td><td class="m y">✓</td></tr>
        <tr><td>Muted</td><td class="mono">#ffffff / #acacac 1px dashed / #acacac</td><td class="mono">#ffffff / 1px dashed #acacac / #acacac</td><td class="m y">✓</td></tr>
        <tr><td>Disabled</td><td class="mono">#ffffff / #acacac 1px / #acacac</td><td class="mono">#ffffff / #acacac 1px / #acacac</td><td class="m y">✓</td></tr>
        <tr><td>Disabled-Selected</td><td class="mono">as Disabled + check #acacac</td><td class="mono">#acacac + check #acacac</td><td class="m y">✓</td></tr>
        <tr><td>Size (Large / Small)</td><td class="mono">40 / 34px</td><td class="mono">40 / 34px</td><td class="m y">✓</td></tr>
        <tr><td>Padding-x · icon-gap · type</td><td class="mono">16 · 4 · Body2 14px Bold</td><td class="mono">16 · token-verified · 14px 700</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side</h2>
      <p>States rendered from the token values (Large).</p>
      <div style="display:flex;flex-wrap:wrap;gap:20px;margin:14px 0 18px">
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Default</div><span style="display:inline-flex;align-items:center;height:40px;padding:0 16px;background:#fff;border:1px solid #c4c4c4;border-radius:9999px;font-size:14px;font-weight:700;color:#343434">3/8"</span></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Hover</div><span style="display:inline-flex;align-items:center;height:40px;padding:0 16px;background:#f8f8f8;border:2px solid #343434;border-radius:9999px;font-size:14px;font-weight:700;color:#343434">3/8"</span></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Selected</div><span style="display:inline-flex;align-items:center;gap:4px;height:40px;padding:0 16px;background:#eff5fd;border:2px solid #07729c;border-radius:9999px;font-size:14px;font-weight:700;color:#343434">3/8" <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#07729c" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Muted</div><span style="display:inline-flex;align-items:center;height:40px;padding:0 16px;background:#fff;border:1px dashed #acacac;border-radius:9999px;font-size:14px;font-weight:700;color:#acacac">3/8"</span></div>
        <div><div style="font-size:11px;color:#757575;margin-bottom:4px">Disabled</div><span style="display:inline-flex;align-items:center;height:40px;padding:0 16px;background:#fff;border:1px solid #acacac;border-radius:9999px;font-size:14px;font-weight:700;color:#acacac">3/8"</span></div>
      </div>

      <h2>3. States &amp; sizes</h2>
      <p>Six states (Default, Hover, Selected, Muted, Disabled, Disabled-Selected) across Large and Small, pinned in the states-matrix. Selection shows a checkmark; muted uses a dashed border; disabled dims via the gray tokens. <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Enter / Space toggles selection; focus ring is the shared <span class="mono">#005fcc</span> / 2px. Selection is conveyed by fill + border + checkmark, not color alone; muted uses a dashed border as a non-color cue; disabled is not focusable. (Arrow-key navigation across a set is covered in the Pill Group report.)</p>
      <h3>Contrast - text vs surface</h3>
      <table>
        <tr><th>Pair</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Label default / hover (#343434 on white)</td><td>12.46:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Label selected (#343434 on #eff5fd)</td><td>11.36:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Selected checkmark (#07729c on #eff5fd)</td><td>4.91:1</td><td class="m y">Pass</td></tr>
        <tr><td>Muted / Disabled label (#acacac)</td><td>2.27:1</td><td>Below AA (disabled exempt; muted by-design)</td></tr>
      </table>
      <h3>Contrast - border vs background (non-text, 3:1)</h3>
      <table>
        <tr><th>Border</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Default border (#c4c4c4) on white</td><td>1.74:1</td><td class="m n">Below 3:1</td></tr>
        <tr><td>Selected border (#07729c) on white</td><td>5.39:1</td><td class="m y">Pass</td></tr>
        <tr><td>Muted / Disabled border (#acacac) on white</td><td>2.27:1</td><td class="m n">Below 3:1</td></tr>
      </table>
      <p>The default / muted / disabled resting borders fall below the 3:1 non-text minimum. This is the same system-level resting-border item already flagged on Select, ComboBox, and the Filter pills, pending team review. Selected (blue.700) clears it.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-PILL-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 6 states across Large/Small match pattern/selectable/* (bg, border, text, checkmark); selected 2px via 1px border + 1px inset shadow; padding-x 16, 14px Bold, pill radius.</td></tr>
        <tr><td class="id">QA-PILL-STATE</td><td>States &amp; sizes</td><td><span class="tag pass">PASS</span></td><td>Default/Hover/Selected/Muted/Disabled/Disabled-Selected; Large + Small; checkmark on selected.</td></tr>
        <tr><td class="id">QA-PILL-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Arrow-key nav, focus ring, selection beyond color (fill + border + check), dashed muted. Labels 12.46/11.36 AAA, selected check 4.91 pass; muted/disabled label 2.27 (disabled exempt / muted by-design).</td></tr>
        <tr><td class="id">QA-PILL-BORDER</td><td>Resting-border contrast</td><td><span class="tag obs">NOTE</span></td><td>Default/muted/disabled borders below 3:1 (#c4c4c4 1.74, #acacac 2.27); selected #07729c 5.39 passes. Known system-level resting-border item (same as Select/ComboBox/Filter); pending team review.</td></tr>
      </table>
    `
  },
  {
    id: 'pill-group',
    name: 'Pill Group',
    group: 'Display',
    status: 'Pass',
    statusType: 'pass',
    html: `
      <h1 class="rt">Pill Group</h1>
      <p class="rmeta">Figma usage 14443:662 / 14443:660 · Storybook /docs/display-pill-group · Captured 2026-07-30</p>
      <p>Composes the <a href="#pill" style="color:var(--sh-blue)">Pill</a> into a selectable set. Single-select keeps one pill active and deselects the others (a radiogroup); multi-select toggles each pill independently and shows a checkmark. The pills themselves are token-verified in the Pill report; this covers the group layout and selection behavior.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">LAYOUT</p><div class="val">Pass</div><p class="sub">8px gap, flexible width, optional fixed for 4+</p></div>
        <div class="v pass"><p class="k">SELECTION</p><div class="val">Pass</div><p class="sub">Single-select (radiogroup) + multi-select</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass</div><p class="sub">Arrow-key nav; selection beyond color</p></div>
      </div>

      <h2>1. Layout</h2>
      <p>Pills sit in a row with an 8px horizontal gap, flexible (hug) width by default; an optional fixed width applies when showing 4+ pills (padding stays 16px, content truncates with ellipsis). The 8px gap is verified in the build.</p>
      <div style="font-size:11px;color:#757575;margin-bottom:4px">Single-select group (one active, 8px gap)</div>
      <span style="display:inline-flex;flex-wrap:wrap;gap:8px">
        <span style="display:inline-flex;align-items:center;height:40px;padding:0 16px;background:#eff5fd;border:2px solid #07729c;border-radius:9999px;font-size:14px;font-weight:700;color:#343434">Plumbing</span>
        <span style="display:inline-flex;align-items:center;height:40px;padding:0 16px;background:#fff;border:1px solid #c4c4c4;border-radius:9999px;font-size:14px;font-weight:700;color:#343434">HVAC</span>
        <span style="display:inline-flex;align-items:center;height:40px;padding:0 16px;background:#fff;border:1px solid #c4c4c4;border-radius:9999px;font-size:14px;font-weight:700;color:#343434">Fittings</span>
        <span style="display:inline-flex;align-items:center;height:40px;padding:0 16px;background:#fff;border:1px solid #c4c4c4;border-radius:9999px;font-size:14px;font-weight:700;color:#343434">Electrical</span>
      </span>

      <h2>2. Selection behavior</h2>
      <p><strong>Single-select</strong> uses <code>role="radio"</code> in a radiogroup: verified in the build that selecting HVAC deselects Plumbing, so exactly one stays active. <strong>Multi-select</strong> toggles each pill independently and shows a checkmark on the selected ones. Stories: Single Select, Multi Select, Fixed Width, Small, Disabled. <span class="m y">✓ Pass</span></p>

      <h2>3. Accessibility</h2>
      <p>Tab moves to the group and Arrow keys move between pills; Enter / Space toggles the focused pill. Focus ring is the shared <span class="mono">#005fcc</span> / 2px. Selection is conveyed by fill + border + checkmark, not color alone. The individual pill resting-border note is documented in the Pill report.</p>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-PILLGRP-LAYOUT</td><td>Layout</td><td><span class="tag pass">PASS</span></td><td>8px horizontal gap; flexible (hug) width; optional fixed width for 4+ pills (16px padding, ellipsis truncation).</td></tr>
        <tr><td class="id">QA-PILLGRP-SELECT</td><td>Selection</td><td><span class="tag pass">PASS</span></td><td>Single-select radiogroup (verified one-active deselect) and independent multi-select with checkmark.</td></tr>
        <tr><td class="id">QA-PILLGRP-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Arrow-key nav, Enter/Space toggle, 2px focus ring, selection beyond color.</td></tr>
      </table>
    `
  },
  {
    id: 'alert',
    name: 'Alert',
    group: 'Feedback',
    status: 'Pass · 1 note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Alert</h1>
      <p class="rmeta">Figma component 13381:520 · Frame doc 16330:64513 · Usage 13462:942 · Storybook /docs/feedback-alert · Captured 2026-07-30</p>
      <p>A persistent, inline message tied to page content, used to communicate status or important information that stays until resolved. Status-driven (Info, Caution, Error subtle, Error strong) and sized by content length (1 to 3 lines, no token differences). Icons are neutral for info/caution/error-subtle; only error-strong uses the error color.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">4 status tints, borders, icon colors, padding match</p></div>
        <div class="v pass"><p class="k">STATES · VARIANTS</p><div class="val">Pass</div><p class="sub">Info/Caution/Error 1/Error 2; 1-3 lines; details link + expandable</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass<span style="font-size:11px;font-weight:400;color:#757575"> · 1 note</span></div><p class="sub">role status/alert; icon + text; borderline-AA link note</p></div>
      </div>

      <h2>1. Token fidelity (by status)</h2>
      <table>
        <tr><th>Status</th><th>Figma (bg / border / icon)</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Info</td><td class="mono"><span class="chip" style="background:#eff5fd"></span>#eff5fd / <span class="chip" style="background:#c5e0f0"></span>#c5e0f0 / #343434</td><td class="mono">#eff5fd / #c5e0f0 / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Caution</td><td class="mono"><span class="chip" style="background:#fffce2"></span>#fffce2 / <span class="chip" style="background:#f7e18c"></span>#f7e18c / #343434</td><td class="mono">#fffce2 / #f7e18c / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Error subtle</td><td class="mono"><span class="chip" style="background:#fde5e5"></span>#fde5e5 / <span class="chip" style="background:#ffa3a3"></span>#ffa3a3 / #343434</td><td class="mono">#fde5e5 / #ffa3a3 / #343434</td><td class="m y">✓</td></tr>
        <tr><td>Error strong</td><td class="mono"><span class="chip" style="background:#ffffff"></span>#ffffff / <span class="chip" style="background:#ffa3a3"></span>#ffa3a3 / <span class="chip" style="background:#b00000"></span>#b00000</td><td class="mono">#ffffff / #ffa3a3 / #b00000</td><td class="m y">✓</td></tr>
        <tr><td>Text · type</td><td class="mono">#343434 · Body3 13px (title Bold / body Book)</td><td class="mono">#343434 · 13px</td><td class="m y">✓</td></tr>
        <tr><td>Header padding-x / y · icon-gap</td><td class="mono">20 / 16 · 12</td><td class="mono">20 / 16 · token-verified</td><td class="m y">✓</td></tr>
        <tr><td>Inline link</td><td class="mono"><span class="chip" style="background:#07729c"></span>#07729c</td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side (rendered from tokens)</h2>
      <p>The four status variants. Icons are neutral #343434 except error-strong (#b00000).</p>
      <div style="display:flex;flex-direction:column;gap:12px;margin:14px 0;max-width:520px">
        <div style="display:flex;gap:12px;padding:16px 20px;background:#eff5fd;border:1px solid #c5e0f0;font-size:13px;color:#343434"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#343434;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">i</span><span><strong>Requires: Your Signature</strong><br>Lorem ipsum is simply dummy text</span></div>
        <div style="display:flex;gap:12px;padding:16px 20px;background:#fffce2;border:1px solid #f7e18c;font-size:13px;color:#343434"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#343434;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">!</span><span><strong>Requires: Your Signature</strong><br>Lorem ipsum is simply dummy text</span></div>
        <div style="display:flex;gap:12px;padding:16px 20px;background:#fde5e5;border:1px solid #ffa3a3;font-size:13px;color:#343434"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#343434;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">!</span><span><strong>Requires: Your Signature</strong><br>Lorem ipsum is simply dummy text</span></div>
        <div style="display:flex;gap:12px;padding:16px 20px;background:#ffffff;border:1px solid #ffa3a3;font-size:13px;color:#343434"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#b00000;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">!</span><span><strong>Requires: Your Signature</strong><br>Lorem ipsum is simply dummy text</span></div>
      </div>

      <h2>3. States &amp; variants</h2>
      <p>Status Info / Caution / Error subtle / Error strong; content length 1 to 3 lines (no token differences); a body-only variant (no title); an inline "Details" link (#07729c, uses the Link style) and an expandable "Details" disclosure. All pinned as stories (Info, Caution, Error 1, Error 2, Body Only, Three Lines, With Details Link, With Details Expandable, All Statuses). <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Verified in the build: Info and Caution expose <code>role="status"</code> (polite), while Error subtle and Error strong expose <code>role="alert"</code> (assertive), matching the frame doc. Status is conveyed by icon + text, not color alone, and the alert is persistent (not auto-dismissed).</p>
      <table>
        <tr><th>Pair</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Text #343434 on status tints</td><td>10.3 to 12.5:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Error-strong icon #b00000 on white</td><td>7.38:1</td><td class="m y">Pass (non-text)</td></tr>
        <tr><td>Inline link #07729c on tints</td><td>~4.5:1</td><td>AA (borderline)</td></tr>
      </table>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-AL-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 4 status tints/borders/icons, #343434 text, 20/16 padding, icon-gap 12, and #07729c link match alert/color/* tokens.</td></tr>
        <tr><td class="id">QA-AL-ICON</td><td>Icon color rule</td><td><span class="tag pass">PASS</span></td><td>Icons neutral #343434 for info/caution/error-subtle; only error-strong uses #b00000. Matches the frame doc note.</td></tr>
        <tr><td class="id">QA-AL-STATE</td><td>States &amp; variants</td><td><span class="tag pass">PASS</span></td><td>4 statuses, 1 to 3 lines, body-only, inline details link, expandable details, all pinned as stories.</td></tr>
        <tr><td class="id">QA-AL-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>role=status (info/caution) and role=alert (errors) verified; icon + text beyond color; persistent. Note: inline link #07729c on the tints computes ~4.5:1, borderline AA (per frame doc).</td></tr>
      </table>
    `
  },
  {
    id: 'toast',
    name: 'Toast',
    group: 'Feedback',
    status: 'Pass · 1 note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Toast</h1>
      <p class="rmeta">Figma component 13558:484 · Frame doc 16330:64458 · Storybook /docs/feedback-toast · Captured 2026-07-30</p>
      <p>A transient notification that appears over the UI to confirm an action or surface a status, then dismisses. Status-driven (Success, Warning, Caution, Error subtle, Error strong, Info), five sizes (XL to XS), Body or Title+Body content (XS is body-only), with a close control. Unlike Alert, Toast uses <strong>status-colored icons</strong>.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">6 status tints, borders, status-colored icons, padding match</p></div>
        <div class="v pass"><p class="k">STATES · SIZES</p><div class="val">Pass</div><p class="sub">6 statuses; XL-XS; Body / Title+Body; dismissible; inline link</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass<span style="font-size:11px;font-weight:400;color:#757575"> · 1 note</span></div><p class="sub">role status/alert; icon+text; icon-contrast note</p></div>
      </div>

      <h2>1. Token fidelity (by status)</h2>
      <table>
        <tr><th>Status</th><th>Figma (bg / border / icon)</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Success</td><td class="mono"><span class="chip" style="background:#edf7ee"></span>#edf7ee / <span class="chip" style="background:#c2e2c9"></span>#c2e2c9 / <span class="chip" style="background:#5e9a41"></span>#5e9a41</td><td class="mono">#edf7ee / #c2e2c9 / #5e9a41</td><td class="m y">✓</td></tr>
        <tr><td>Info</td><td class="mono"><span class="chip" style="background:#eff5fd"></span>#eff5fd / <span class="chip" style="background:#c5e0f0"></span>#c5e0f0 / <span class="chip" style="background:#07729c"></span>#07729c</td><td class="mono">#eff5fd / #c5e0f0 / #07729c</td><td class="m y">✓</td></tr>
        <tr><td>Warning</td><td class="mono"><span class="chip" style="background:#f8e6da"></span>#f8e6da / <span class="chip" style="background:#f6b48d"></span>#f6b48d / <span class="chip" style="background:#f15c02"></span>#f15c02</td><td class="mono">#f8e6da / #f6b48d / #f15c02</td><td class="m y">✓</td></tr>
        <tr><td>Caution</td><td class="mono"><span class="chip" style="background:#fffce2"></span>#fffce2 / <span class="chip" style="background:#f7e18c"></span>#f7e18c / <span class="chip" style="background:#deac00"></span>#deac00</td><td class="mono">#fffce2 / #f7e18c / #deac00</td><td class="m y">✓</td></tr>
        <tr><td>Error subtle</td><td class="mono"><span class="chip" style="background:#fde5e5"></span>#fde5e5 / <span class="chip" style="background:#ffa3a3"></span>#ffa3a3 / <span class="chip" style="background:#b00000"></span>#b00000</td><td class="mono">#fde5e5 / #ffa3a3 / #b00000</td><td class="m y">✓</td></tr>
        <tr><td>Error strong</td><td class="mono"><span class="chip" style="background:#ffffff"></span>#ffffff / <span class="chip" style="background:#ffa3a3"></span>#ffa3a3 / <span class="chip" style="background:#b00000"></span>#b00000</td><td class="mono">#ffffff / #ffa3a3 / #b00000</td><td class="m y">✓</td></tr>
        <tr><td>Text</td><td class="mono">#343434 (all statuses)</td><td class="mono">#343434</td><td class="m y">✓</td></tr>
        <tr><td>Padding (M) · icon-gap · close clearance</td><td class="mono">12 / 12 / 12 · 16 · right 40</td><td class="mono">12px 40px 12px 12px · 16</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side (rendered from tokens)</h2>
      <p>The six statuses with their status-colored icons and close control.</p>
      <div style="display:flex;flex-direction:column;gap:10px;margin:14px 0;max-width:520px">
        <div style="display:flex;gap:16px;padding:12px 40px 12px 12px;background:#edf7ee;border:1px solid #c2e2c9;font-size:14px;color:#343434;position:relative"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#5e9a41;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">✓</span><span><strong>Success</strong><br>Please check below for when to expect your items.</span><span style="position:absolute;top:12px;right:14px;color:#343434">×</span></div>
        <div style="display:flex;gap:16px;padding:12px 40px 12px 12px;background:#eff5fd;border:1px solid #c5e0f0;font-size:14px;color:#343434;position:relative"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#07729c;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">i</span><span><strong>Info</strong><br>Please check below for when to expect your items.</span><span style="position:absolute;top:12px;right:14px;color:#343434">×</span></div>
        <div style="display:flex;gap:16px;padding:12px 40px 12px 12px;background:#f8e6da;border:1px solid #f6b48d;font-size:14px;color:#343434;position:relative"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#f15c02;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">!</span><span><strong>Warning</strong><br>Please check below for when to expect your items.</span><span style="position:absolute;top:12px;right:14px;color:#343434">×</span></div>
        <div style="display:flex;gap:16px;padding:12px 40px 12px 12px;background:#fffce2;border:1px solid #f7e18c;font-size:14px;color:#343434;position:relative"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#deac00;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">!</span><span><strong>Caution</strong><br>Please check below for when to expect your items.</span><span style="position:absolute;top:12px;right:14px;color:#343434">×</span></div>
        <div style="display:flex;gap:16px;padding:12px 40px 12px 12px;background:#fde5e5;border:1px solid #ffa3a3;font-size:14px;color:#343434;position:relative"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#b00000;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">!</span><span><strong>Error 1 (subtle)</strong><br>Please check below for when to expect your items.</span><span style="position:absolute;top:12px;right:14px;color:#343434">×</span></div>
        <div style="display:flex;gap:16px;padding:12px 40px 12px 12px;background:#ffffff;border:1px solid #ffa3a3;font-size:14px;color:#343434;position:relative"><span style="width:18px;height:18px;flex:0 0 18px;border-radius:50%;background:#b00000;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">!</span><span><strong>Error 2 (strong)</strong><br>Please check below for when to expect your items.</span><span style="position:absolute;top:12px;right:14px;color:#343434">×</span></div>
      </div>

      <h2>3. States &amp; sizes</h2>
      <p>Six statuses; five sizes XL / L / M / S / XS with per-size padding (XS-M 12 / L 16 / XL 40x20) and a right padding of 40 reserving space for the close control; Body and Title+Body content (XS is body-only); a dismissible close (X) and an inline link. All pinned as stories (All Statuses, Sizes, Title And Body, Body Only, Dismissible, With Inline Link, plus a Legacy Danger alias). <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>Verified in the build: Success / Info / Warning / Caution expose <code>role="status"</code> (polite); Error subtle and Error strong expose <code>role="alert"</code> (assertive). Status is conveyed by icon + text (not color alone), and the close control is focusable (Esc dismisses; auto-dismiss timing is a consumer decision).</p>
      <table>
        <tr><th>Pair</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Body / title text #343434 on tints</td><td>10.3 to 12.5:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Icon - Info / Error / Success</td><td>4.92 / 6.15-7.38 / 3.1:1</td><td class="m y">Pass (non-text)</td></tr>
        <tr><td>Icon - Warning</td><td>2.76:1</td><td class="m n">Below 3:1 (shape + label carry state)</td></tr>
        <tr><td>Icon - Caution</td><td>2.03:1</td><td class="m n">Below 3:1 (shape + label carry state)</td></tr>
        <tr><td>Inline link #07729c</td><td>~4.5:1</td><td>AA (borderline)</td></tr>
      </table>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-TS-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 6 status tints/borders/icons, #343434 text, per-size padding + 40 close clearance, icon-gap 16 match toast/color/* tokens.</td></tr>
        <tr><td class="id">QA-TS-ICON</td><td>Icon color rule</td><td><span class="tag pass">PASS</span></td><td>Status-colored icons (success #5e9a41, info #07729c, warning #f15c02, caution #deac00, errors #b00000), differing from Alert's neutral icons, exactly as the frame doc specifies.</td></tr>
        <tr><td class="id">QA-TS-STATE</td><td>States &amp; sizes</td><td><span class="tag pass">PASS</span></td><td>6 statuses, XL-XS, Body / Title+Body, XS body-only, dismissible, inline link, legacy danger alias.</td></tr>
        <tr><td class="id">QA-TS-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>role=status (success/info/warning/caution) and role=alert (errors) verified; focusable close. Note: warning (2.76:1) and caution (2.03:1) icons fall below the 3:1 non-text minimum; the frame doc accepts this because the icon shape + text label carry the status. Inline link ~4.5:1 borderline AA.</td></tr>
      </table>
    `
  },
  {
    id: 'toast-expandable',
    name: 'Toast Expandable',
    group: 'Feedback',
    status: 'Pass · 1 note',
    statusType: 'pass',
    html: `
      <h1 class="rt">Toast Expandable</h1>
      <p class="rmeta">Figma component 13353:37435 · Frame doc 16330:64458 · Storybook /docs/feedback-toast-expandable · Captured 2026-07-30</p>
      <p>A warning-semantic Toast variant that surfaces cart-change details in a dismissible list. It toggles Closed / Open and comes in sizes L / M / S. The title and each item's status line use warning <strong>text-strong</strong> (<span class="mono">#d63d08</span>); rows are individually dismissible and can carry inline links.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">Warning tint/border/icon, text-strong title, link match</p></div>
        <div class="v pass"><p class="k">STATES · SIZES</p><div class="val">Pass</div><p class="sub">Closed / Open; L / M / S; dismissible rows</p></div>
        <div class="v pass"><p class="k">ACCESSIBILITY</p><div class="val">Pass<span style="font-size:11px;font-weight:400;color:#757575"> · 1 note</span></div><p class="sub">disclosure aria-expanded; text-strong contrast note</p></div>
      </div>

      <h2>1. Token fidelity</h2>
      <table>
        <tr><th>Element</th><th>Figma value</th><th>Storybook computed</th><th>Match</th></tr>
        <tr><td>Surface (bg / border)</td><td class="mono"><span class="chip" style="background:#f8e6da"></span>#f8e6da / <span class="chip" style="background:#f6b48d"></span>#f6b48d</td><td class="mono">#f8e6da / #f6b48d</td><td class="m y">✓</td></tr>
        <tr><td>Icon (warning)</td><td class="mono"><span class="chip" style="background:#f15c02"></span>#f15c02</td><td class="mono">#f15c02</td><td class="m y">✓</td></tr>
        <tr><td>Title (Headline5 18px Bold)</td><td class="mono"><span class="chip" style="background:#d63d08"></span>#d63d08 · 18px 700</td><td class="mono">#d63d08 · 18px · 700</td><td class="m y">✓</td></tr>
        <tr><td>Item status line (text-strong)</td><td class="mono"><span class="chip" style="background:#d63d08"></span>#d63d08</td><td class="mono">#d63d08</td><td class="m y">✓</td></tr>
        <tr><td>Inline link</td><td class="mono"><span class="chip" style="background:#07729c"></span>#07729c</td><td class="mono">#07729c</td><td class="m y">✓</td></tr>
        <tr><td>Row dismiss (×)</td><td class="mono">per-row close</td><td class="mono">4 dismissible rows (X each)</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side (rendered from tokens, Open)</h2>
      <div style="max-width:560px;margin:14px 0;background:#f8e6da;border:1px solid #f6b48d;font-size:14px">
        <div style="display:flex;gap:16px;align-items:center;padding:14px 16px"><span style="width:20px;height:20px;flex:0 0 20px;border-radius:50%;background:#f15c02;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:13px">!</span><span style="flex:1;font-weight:700;font-size:18px;color:#d63d08">Your cart's been updated.</span><span style="color:#343434">⌃</span></div>
        <div style="border-top:1px solid #f6b48d;padding:12px 16px;color:#343434"><div><strong>Due to limited inventory, <span style="color:#07729c">Duplex Receptacle</span> has a limit of 10 units.</strong></div><div style="color:#d63d08;font-size:12px">The quantity in your cart has been adjusted.</div></div>
        <div style="border-top:1px solid #f6b48d;padding:12px 16px;color:#343434"><div><strong>1/2 in. x 10 ft. Black Steel Pipe is not available in your area.</strong></div><div style="color:#d63d08;font-size:12px">It's been removed from your cart.</div></div>
        <div style="border-top:1px solid #f6b48d;padding:12px 16px;color:#343434"><div><strong><span style="color:#07729c">3-Speed Circulator Pump</span> is currently unavailable. <span style="color:#07729c">View Alternative</span></strong></div><div style="color:#d63d08;font-size:12px">It's been removed from your cart.</div></div>
      </div>
      <p style="font-size:12px;color:#757575">Each row has a trailing × to dismiss it individually; the header chevron collapses/expands the list.</p>

      <h2>3. States &amp; sizes</h2>
      <p>State Closed (header only, chevron down) and Open (header + expanded list, chevron up), verified via <code>aria-expanded</code>. Sizes L / M / S (Closed Sizes and Sizes stories). Each list row is individually dismissible (Dismissible Rows story, 4 rows verified). <span class="m y">✓ Pass</span></p>

      <h2>4. Accessibility</h2>
      <p>The header is a disclosure control with <code>aria-expanded</code> that toggles the list; each row has a focusable dismiss. Warning status is conveyed by the icon + text.</p>
      <table>
        <tr><th>Pair</th><th>Ratio</th><th>Result</th></tr>
        <tr><td>Warning emphasis #d63d08 on #f8e6da</td><td>3.82:1</td><td class="m n">Below AA (small); deferred to orange.650</td></tr>
        <tr><td>Body text #343434 on #f8e6da</td><td>~11:1</td><td class="m y">Pass AAA</td></tr>
        <tr><td>Inline link #07729c</td><td>~4.5:1</td><td>AA (borderline)</td></tr>
      </table>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-TE-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>Warning bg #f8e6da / border #f6b48d / icon #f15c02; title + item status lines in text-strong #d63d08 (Headline5 18px Bold title); link #07729c; per-row dismiss all match.</td></tr>
        <tr><td class="id">QA-TE-STATE</td><td>States &amp; sizes</td><td><span class="tag pass">PASS</span></td><td>Closed / Open (aria-expanded) verified; sizes L / M / S; individually dismissible rows.</td></tr>
        <tr><td class="id">QA-TE-A11Y</td><td>Accessibility</td><td><span class="tag pass">PASS</span></td><td>Disclosure with aria-expanded, focusable per-row dismiss, icon + text. Note: warning text-strong #d63d08 on #f8e6da is 3.82:1, below AA for small text; the frame doc defers this to a future orange.650 token.</td></tr>
      </table>
    `
  }
];
