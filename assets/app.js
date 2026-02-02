/* assets/app.js
   Floating panelis (apakšā): pārslēgšanās starp layout + 5 tēmas katram layout.
   Standarts: izmanto CSS mainīgos --bg --ink --muted --line --card --accent --accent2 --accent3
*/

(function () {
  console.log("app loaded");

  const designs = window.KR_DESIGNS || [];
  const themesMap = window.KR_THEMES || {};
  const DESIGN_ID = Number(window.KR_DESIGN_ID || 0);
  const isCatalog = document.documentElement.getAttribute("data-page") === "catalog";

  function el(tag, attrs = {}, children = []) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach((c) => {
      if (c == null) return;
      if (typeof c === "string") e.appendChild(document.createTextNode(c));
      else e.appendChild(c);
    });
    return e;
  }

  function getThemes(designId) {
    return themesMap[String(designId)] || themesMap[designId] || [];
  }

  function applyTheme(designId, themeIndex) {
    const list = getThemes(designId);
    const t = list[themeIndex] || list[0];
    if (!t || !t.vars) return;

    const root = document.documentElement;

    for (const [k, v] of Object.entries(t.vars)) {
      root.style.setProperty(k, v);
    }

    try {
      localStorage.setItem("kr_theme_" + designId, String(themeIndex));
    } catch (_) {}
  }

  function getSavedThemeIndex(designId) {
    try {
      const v = localStorage.getItem("kr_theme_" + designId);
      const n = parseInt(v, 10);
      if (Number.isFinite(n) && n >= 0 && n < 5) return n;
      return 0;
    } catch (_) {
      return 0;
    }
  }

  function injectBaseCss() {
    const css = `
:root{
  --bg:#fbfcff;
  --ink:#15202b;
  --muted:#52606d;
  --line:#e8eef6;
  --card:#ffffff;

  --accent:#4fb6c6;
  --accent2:#a6d86a;
  --accent3:#ffd8a8;
}

.kr-float{
  position:fixed;
  left:12px; right:12px; bottom:12px;
  display:flex; align-items:center; justify-content:space-between; gap:10px;
  padding:10px 12px;

  background: color-mix(in srgb, var(--card) 86%, transparent);
  border:1px solid color-mix(in srgb, var(--line) 92%, transparent);
  border-radius:18px;
  box-shadow: 0 18px 40px rgba(20,60,90,.12);
  backdrop-filter: blur(12px);
  z-index:9999;

  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
}

.kr-left,.kr-right{display:flex; align-items:center; gap:8px; flex-wrap:wrap}

.kr-btn{
  display:inline-flex; align-items:center; justify-content:center;
  width:36px; height:32px;
  border-radius:12px;
  border:1px solid var(--line);
  background: var(--card);
  color: var(--ink);
  text-decoration:none;
  font-size:13px;
  cursor:pointer;
  user-select:none;
}
.kr-btn:hover{transform: translateY(-1px)}
.kr-btn.active{
  border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--accent) 18%, var(--card)),
    color-mix(in srgb, var(--accent2) 14%, var(--card))
  );
}
.kr-home{font-weight:800}

.kr-label{font-size:12px; color:var(--muted); margin-right:4px}
.kr-name{
  font-size:12px; color:var(--muted);
  padding:8px 10px; border-radius:999px;
  border:1px solid var(--line);
  background: var(--card);
  max-width: 44vw;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}

.kr-themes{display:flex; gap:8px; align-items:center}
.kr-dot{
  width:14px; height:14px; border-radius:50%;
  border:1px solid var(--line);
  background: var(--card);
  cursor:pointer;
}
.kr-dot.active{
  background: var(--accent);
  border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
}

@media (max-width:520px){
  .kr-name{display:none}
  .kr-btn{width:34px}
}

/* Katalogs (index.html) */
#kr-catalog{font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;}
.kr-shell{max-width:1100px; margin:0 auto; padding:22px 18px 80px}
.kr-hero{
  border:1px solid var(--line);
  border-radius:28px;
  background:
    radial-gradient(900px 520px at 15% 10%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 62%),
    radial-gradient(900px 520px at 85% 15%, color-mix(in srgb, var(--accent2) 18%, transparent), transparent 62%),
    radial-gradient(900px 520px at 50% 95%, color-mix(in srgb, var(--accent3) 22%, transparent), transparent 62%),
    var(--card);
  box-shadow: 0 18px 44px rgba(20,60,90,.08);
  padding:20px;
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap:14px;
}
.kr-h1{margin:0 0 8px; font-size:34px; letter-spacing:-.6px; line-height:1.05}
.kr-sub{margin:0; color:var(--muted); line-height:1.6}
.kr-badges{display:flex; flex-wrap:wrap; gap:8px; margin-top:12px}
.kr-badge{
  font-size:12px; color:var(--muted);
  border:1px solid var(--line); background:var(--card);
  padding:8px 10px; border-radius:999px;
}
.kr-badge-strong{
  border-color: color-mix(in srgb, var(--accent) 45%, var(--line));
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--accent) 12%, var(--card)),
    color-mix(in srgb, var(--accent2) 10%, var(--card))
  );
}
.kr-tip{
  border:1px solid var(--line); background:var(--card);
  border-radius:22px; padding:14px;
}
.kr-tip b{display:block; margin-bottom:6px}
.kr-tiptext{color:var(--muted); font-size:13px; line-height:1.5}

.kr-grid{
  margin-top:14px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
}
.kr-card{
  display:block;
  border:1px solid var(--line);
  background:var(--card);
  border-radius:22px;
  padding:14px;
  box-shadow: 0 14px 28px rgba(20,60,90,.06);
  transition: transform .08s ease;
  color:inherit;
}
.kr-card:hover{transform: translateY(-2px)}
.kr-card-top{display:flex; align-items:center; justify-content:space-between; gap:10px}
.kr-card-id{
  width:34px; height:34px; border-radius:14px;
  display:flex; align-items:center; justify-content:center;
  border:1px solid var(--line);
  background: linear-gradient(135deg,
    color-mix(in srgb, var(--accent) 14%, var(--card)),
    color-mix(in srgb, var(--accent2) 12%, var(--card))
  );
  font-weight:800;
}
.kr-card-name{font-weight:700}
.kr-card-note{margin-top:8px; color:var(--muted); font-size:13px; line-height:1.55}
.kr-card-cta{margin-top:12px; font-size:13px; color:color-mix(in srgb, var(--ink) 70%, var(--muted))}

@media (max-width:980px){
  .kr-hero{grid-template-columns:1fr}
  .kr-grid{grid-template-columns: 1fr 1fr}
}
@media (max-width:620px){
  .kr-grid{grid-template-columns: 1fr}
  .kr-h1{font-size:28px}
}
`;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildCatalog() {
    if (!isCatalog) return;

    const root = document.getElementById("kr-catalog");
    if (!root) return;

    // iedodam katalogam bāzes tēmu
    applyTheme(1, 0);

    const header = root.querySelector('[data-slot="header"]');
    const grid = root.querySelector('[data-slot="grid"]');
    const latest = designs[designs.length - 1];

    if (header) {
      header.innerHTML = "";
      header.appendChild(
        el("div", { class: "kr-head-left" }, [
          el("h1", { class: "kr-h1" }, "Dizainu katalogs"),
          el(
            "p",
            { class: "kr-sub" },
            "Atver jebkuru layout. Katrā layout apakšā būs panelis ar pārslēgšanos starp layout + 5 tēmām."
          ),
          el("div", { class: "kr-badges" }, [
            el("span", { class: "kr-badge" }, "Statisks GitHub Pages"),
            el("span", { class: "kr-badge" }, "Mobilais draudzīgs"),
            el("span", { class: "kr-badge" }, "Layout: " + designs.length),
            latest ? el("span", { class: "kr-badge kr-badge-strong" }, "Jaunākais: " + latest.name) : null,
          ]),
        ])
      );

      header.appendChild(
        el("div", { class: "kr-head-right" }, [
          el("div", { class: "kr-tip" }, [
            el("b", {}, "Jauns dizains?"),
            el("div", { class: "kr-tiptext" }, "Izveido index6.html, pievieno to assets/designs.js un iedod 5 tēmas assets/themes.js."),
          ]),
        ])
      );
    }

    if (grid) {
      grid.innerHTML = "";
      designs.forEach((d) => {
        const card = el("a", { class: "kr-card", href: d.file }, [
          el("div", { class: "kr-card-top" }, [
            el("div", { class: "kr-card-id" }, String(d.id)),
            el("div", { class: "kr-card-name" }, d.name),
          ]),
          el("div", { class: "kr-card-note" }, d.note || ""),
          el("div", { class: "kr-card-cta" }, "Atvērt →"),
        ]);
        grid.appendChild(card);
      });
    }
  }

  function injectFloatingBar() {
    if (isCatalog) return;
    if (!DESIGN_ID) return;

    const bar = el("div", { class: "kr-float" });
    const left = el("div", { class: "kr-left" });
    const right = el("div", { class: "kr-right" });

    // Katalogs
    left.appendChild(el("a", { class: "kr-btn kr-home", href: "index.html", title: "Katalogs" }, "⌂"));

    // Layout pogas
    designs.forEach((d) => {
      left.appendChild(
        el(
          "a",
          {
            class: "kr-btn kr-layout" + (d.id === DESIGN_ID ? " active" : ""),
            href: d.file,
            title: d.name,
          },
          String(d.id)
        )
      );
    });

    // Dizaina nosaukums vidū
    const dNow = designs.find((x) => x.id === DESIGN_ID);
    const nameBox = el("div", { class: "kr-name" }, dNow ? dNow.name : "Dizains " + DESIGN_ID);

    // Tēmas
    right.appendChild(el("div", { class: "kr-label" }, "Tēmas:"));
    const themeDots = el("div", { class: "kr-themes" });

    const savedIdx = getSavedThemeIndex(DESIGN_ID);
    const tlist = getThemes(DESIGN_ID);

    for (let i = 0; i < 5; i++) {
      const title = tlist[i]?.name ? tlist[i].name : "Tēma " + (i + 1);
      const b = el("button", {
        type: "button",
        class: "kr-dot" + (i === savedIdx ? " active" : ""),
        title,
      });

      b.addEventListener("click", () => {
        applyTheme(DESIGN_ID, i);
        bar.querySelectorAll(".kr-dot").forEach((x, idx) => x.classList.toggle("active", idx === i));
      });

      themeDots.appendChild(b);
    }

    right.appendChild(themeDots);

    bar.appendChild(left);
    bar.appendChild(nameBox);
    bar.appendChild(right);

    document.body.appendChild(bar);

    // uzliekam saglabāto tēmu
    applyTheme(DESIGN_ID, savedIdx);
  }

  injectBaseCss();
  buildCatalog();
  injectFloatingBar();
})();