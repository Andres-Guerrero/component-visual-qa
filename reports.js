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
    status: '1 finding',
    statusType: 'fail',
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
      <p class="rmeta">Figma: UI-Kit__Web node 427:3453 · Storybook: /docs/actions-purchase-button · Captured 2026-07-27</p>
      <p>Design-to-code parity check across token fidelity, states &amp; variants, and accessibility.</p>

      <h2>Verdict</h2>
      <div class="verdict">
        <div class="v pass"><p class="k">TOKEN FIDELITY</p><div class="val">Pass</div><p class="sub">9 states × 2 sizes — colors, sizing, type all match</p></div>
        <div class="v pass"><p class="k">STATES &amp; VARIANTS</p><div class="val">Pass</div><p class="sub">All 9 states and both sizes present &amp; correct</p></div>
        <div class="v fail"><p class="k">ACCESSIBILITY</p><div class="val">1 finding</div><p class="sub">Label contrast on orange = 3.34:1 (needs 4.5:1)</p></div>
      </div>
      <p>The developer's token translation is <strong>faithful</strong> — every state renders the exact bound values. The one accessibility issue is inherited from the <em>design tokens</em> (white text on orange), so it's a design decision to review, not a coding defect.</p>

      <h2>1. Token fidelity — color per state</h2>
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

      <h3>Sizing &amp; typography</h3>
      <table>
        <tr><th>Property</th><th>Large (md)</th><th>Small (sm)</th><th>Match</th></tr>
        <tr><td>Height</td><td>50px</td><td>36px</td><td class="m y">✓</td></tr>
        <tr><td>Padding (Y / X)</td><td>12px / 32px</td><td>8px / 28px</td><td class="m y">✓</td></tr>
        <tr><td>Icon gap</td><td>8px</td><td>8px</td><td class="m y">✓</td></tr>
        <tr><td>Font</td><td>Maison Neue Bold</td><td>Maison Neue Bold</td><td class="m y">✓</td></tr>
        <tr><td>Size / line-height</td><td>13px / 1.6 (20.8px)</td><td>11px / 1.0 (11px)</td><td class="m y">✓</td></tr>
        <tr><td>Letter-spacing</td><td>0</td><td>2% (0.22px)</td><td class="m y">✓</td></tr>
        <tr><td>Transform / radius</td><td>UPPERCASE / 0px</td><td>UPPERCASE / 0px</td><td class="m y">✓</td></tr>
      </table>

      <h2>2. Side-by-side — states (Large)</h2>
      <p>Rendered from the actual token values on each side. Because every value matches, the Figma spec and the Storybook build are visually identical per state.</p>
      <div id="vqa-swatches" class="swatchgrid">
        <div class="hd">State</div><div class="hd">Figma (design truth)</div><div class="hd">Storybook (built)</div>
      </div>

      <h2>3. Accessibility</h2>
      <p>Storybook's built-in a11y (axe) panel reports <strong>1 violation type, 11 passes, 0 incomplete</strong>.</p>
      <div class="callout warn">
        <p><span class="tag fail">QA-PB-A11Y-01 · SERIOUS</span></p>
        <strong>Label contrast on orange states fails WCAG 2 AA.</strong> White label text (<span class="mono">#ffffff</span>) on the default orange background (<span class="mono">#f15c02</span>) measures <strong>3.34:1</strong>; WCAG AA requires <strong>4.5:1</strong> (13px / 11px bold is below the large-text exemption). Applies to Default, Hover (<span class="mono">#e05400</span>) and Press (<span class="mono">#d63d08</span>), both sizes.
        <br><br><strong>Note:</strong> inherited from the design tokens and implemented faithfully — a design-token decision to escalate, not a parity defect.
      </div>
      <div class="callout info"><strong>Not flagged (correctly):</strong> Disabled is white on gray <span class="mono">#dcdcdc</span>, but disabled controls are exempt from WCAG contrast, so axe skips it.</div>

      <h2>4. Observations (non-blocking)</h2>
      <div class="callout">
        <p><span class="tag obs">QA-PB-OBS-01</span> Default/Hover/Press render a 2px border in the same color as the background. Figma's default has no border token — visually a no-op; confirm intentional.</p>
        <p style="margin:0"><span class="tag obs">QA-PB-OBS-02</span> The built button hugs its content width; the Figma symbols are fixed at 343px. Layout/context-driven, not a token. Responsive width was out of scope this pass.</p>
      </div>

      <h2>Findings log</h2>
      <table>
        <tr><th>ID</th><th>Area</th><th>Result</th><th>Note</th></tr>
        <tr><td class="id">QA-PB-TOK</td><td>Token fidelity</td><td><span class="tag pass">PASS</span></td><td>All 9 states × 2 sizes match Figma exactly.</td></tr>
        <tr><td class="id">QA-PB-STATE</td><td>States &amp; variants</td><td><span class="tag pass">PASS</span></td><td>9 states and both sizes present and correct.</td></tr>
        <tr><td class="id">QA-PB-A11Y-01</td><td>Accessibility</td><td><span class="tag fail">FAIL</span></td><td>White-on-orange label = 3.34:1 (&lt; 4.5:1 AA). Design-token decision.</td></tr>
        <tr><td class="id">QA-PB-OBS-01</td><td>Observation</td><td><span class="tag obs">CONFIRM</span></td><td>Default border same color as bg; confirm intentional.</td></tr>
        <tr><td class="id">QA-PB-OBS-02</td><td>Observation</td><td><span class="tag obs">INFO</span></td><td>Width hugs content vs fixed Figma symbol; layout-driven.</td></tr>
      </table>
    `
  }
];
