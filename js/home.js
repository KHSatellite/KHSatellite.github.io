const PROJECTS = [
  {
    id: "wtp",
    title: "What to Play",
    sub: "Oyun öneri API'si",
    color: "var(--sticker-magenta)",
    glyph: "pad",
    status: "Geliştiriliyor",
    text: "“Ne oynasam?” sorusuna cevap veren bir FastAPI servisi. Kütüphanendeki oyunları tür ve süreye göre süzüyor, kararsız kalırsan rastgele birini seçiyor. Sırada Steam ve Epic hesap bağlama, RAWG.io ile kütüphane dışı öneriler var.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    links: [{ label: "GitHub'da aç", href: "https://github.com/KHSatellite/what-to-play" }]
  },
  {
    id: "planner",
    title: "Ders Planlayıcı",
    sub: "Öğrenci planlama uygulaması",
    color: "var(--sticker-phosphor)",
    glyph: "cal",
    status: "Planlanıyor",
    text: "Bir üniversite öğrencisinin derslerini, takvimini ve ders dokümanlarını tek yerde toplayacak bir mobil ve web uygulaması. Ders programı ekran görüntüsünden okunacak, takvim Google Calendar ile senkron olacak. Claude da MCP üzerinden ders dokümanlarına erişip çalışma notları ve örnek sorular hazırlayabilecek.",
    tags: ["Flutter", "FastAPI", "Google Calendar", "MCP"],
    links: [],
    note: "Şu an planlama aşamasında; kod paylaşılınca link eklenecek."
  },
  {
    id: "site",
    title: "KHSatellite",
    sub: "Bu site",
    color: "var(--sticker-amber)",
    glyph: "web",
    status: "Yayında",
    text: "Projelerimi ve ders notlarımı topladığım kişisel sayfa. Framework kullanmadan HTML, CSS ve GSAP ile yazıldı; ortadaki uydu ve kartuşlar tamamen kodla çiziliyor.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    links: [{ label: "Kaynak kodu", href: "https://github.com/KHSatellite/KHSatellite.github.io" }]
  },
  {
    id: "notes",
    title: "Ders Notları",
    sub: "INDR 202 ve 220",
    color: "var(--sticker-blue)",
    glyph: "book",
    status: "Güncelleniyor",
    text: "Derslerde işlenen konuları yeni başlayan birine anlatır gibi, örnekler ve çözümlü sorularla yazdığım Türkçe notlar. Engineering Economics ve optimizasyon modelleme dersleri şu an yayında.",
    tags: ["INDR 202", "INDR 220", "Türkçe"],
    links: [{ label: "Notlara git", href: "#notes", local: true }]
  }
];

const GLYPHS = {
  pad: [
    ".XXXXXXXXX.",
    "XX.XXXXX.XX",
    "X...XXX.X.X",
    "XX.XXXXX.XX",
    "XXXXXXXXXXX",
    "XXX.....XXX",
    ".X.......X."
  ],
  cal: [
    ".X.....X.",
    "XXXXXXXXX",
    "XXXXXXXXX",
    "X.......X",
    "X.X.X.X.X",
    "X.......X",
    "X.X.X.X.X",
    "X.......X",
    "XXXXXXXXX"
  ],
  chip: [
    ".X.X.X.X.",
    "XXXXXXXXX",
    ".X.....X.",
    "XX.X.X.XX",
    ".X..X..X.",
    "XX.X.X.XX",
    ".X.....X.",
    "XXXXXXXXX",
    ".X.X.X.X."
  ],
  web: [
    "XXXXXXXXXX",
    "XX.X.XXXXX",
    "XXXXXXXXXX",
    "X........X",
    "X.XXXX...X",
    "X........X",
    "X.XXXXXX.X",
    "XXXXXXXXXX"
  ],
  book: [
    "XXXX.XXXX",
    "X..X.X..X",
    "X.XX.XX.X",
    "X..X.X..X",
    "X.XX.XX.X",
    "X..X.X..X",
    "XXXXXXXXX",
    "....X...."
  ]
};

const PAL = {
  O: "#0b0b24", C: "#cfcaf0", c: "#8f89c2", S: "#11343f", E: "#74ead6",
  M: "#ff5c9a", m: "#c2306a", A: "#ffc95c", P: "#4f6ee8", p: "#2b3f9c", W: "#ffffff"
};

const BOT = {
  light: { at: [11, 0], map: ["AA", "AA"] },
  stem: { at: [11, 2], map: ["cc", "cc"] },
  head: {
    at: [6, 4],
    map: [
      ".OOOOOOOOOO.",
      "OCCCCCCCCCCO",
      "OCSSSSSSSSCO",
      "OCSSSSSSSScO",
      "OCSSSSSSSScO",
      "OCSSSSSSSScO",
      "OCSSSSSSSScO",
      "OCSSSSSSSScO",
      "OcccccccMMcO",
      ".OOOOOOOOOO."
    ]
  },
  eyes: { at: [9, 7], map: ["EE..EE", "EE..EE", "......", ".E..E.", "..EE.."] },
  body: { at: [8, 14], map: ["OOOOOOOO", "OMMMMMmO", "OMWAAMmO", "OMMMMMmO", ".OOOOOO."] },
  armL: { at: [5, 8], map: ["c", "c"] },
  armR: { at: [18, 8], map: ["c", "c"] },
  panL: { at: [0, 6], map: ["OOOOO", "OPpPO", "OpPpO", "OPpPO", "OpPpO", "OOOOO"] },
  panR: { at: [19, 6], map: ["OOOOO", "OPpPO", "OpPpO", "OPpPO", "OpPpO", "OOOOO"] },
  flame: { at: [10, 19], map: ["MAAM", ".AA.", ".MM."] }
};

const NS = "http://www.w3.org/2000/svg";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  sget(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
  sset(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
};

function draw(g, map, ox, oy, pal) {
  map.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === ".") { x++; continue; }
      let w = 1;
      while (row[x + w] === ch) w++;
      const r = document.createElementNS(NS, "rect");
      r.setAttribute("x", ox + x);
      r.setAttribute("y", oy + y);
      r.setAttribute("width", w);
      r.setAttribute("height", 1);
      r.setAttribute("fill", pal ? pal[ch] : "currentColor");
      g.appendChild(r);
      x += w;
    }
  });
  return g;
}

function glyphSvg(name, cls) {
  const m = GLYPHS[name];
  const s = document.createElementNS(NS, "svg");
  s.setAttribute("viewBox", `0 0 ${m[0].length} ${m.length}`);
  s.setAttribute("shape-rendering", "crispEdges");
  s.setAttribute("aria-hidden", "true");
  if (cls) s.setAttribute("class", cls);
  draw(s, m, 0, 0);
  return s;
}

function buildBot() {
  const svg = $("#botSvg");
  const parts = {};
  for (const [k, p] of Object.entries(BOT)) {
    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "bp-" + k);
    draw(g, p.map, p.at[0], p.at[1], PAL);
    parts[k] = g;
  }
  ["flame", "panL", "panR", "armL", "armR", "stem", "light", "body", "head", "eyes"].forEach(k => svg.appendChild(parts[k]));
  const fl = document.createElementNS(NS, "rect");
  Object.entries({ x: 8, y: 6, width: 8, height: 6, fill: "#74ead6", opacity: 0 }).forEach(([a, v]) => fl.setAttribute(a, v));
  svg.appendChild(fl);
  parts.flash = fl;
  return parts;
}

function buildCarts() {
  const ul = $("#orbit");
  return PROJECTS.map((p, i) => {
    const li = document.createElement("li");
    li.className = "cart-wrap";
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cart";
    b.style.setProperty("--c", p.color);
    b.setAttribute("aria-haspopup", "dialog");
    b.innerHTML = `<span class="cart-float"><span class="cart-shell"><span class="cart-label"><span class="cart-title">${p.title}</span><span class="cart-sub">${p.sub}</span></span></span></span>`;
    $(".cart-label", b).prepend(glyphSvg(p.glyph, "cart-glyph"));
    b.dataset.i = i;
    li.appendChild(b);
    ul.appendChild(li);
    return { li, b, fl: $(".cart-float", b) };
  });
}

function stars(canvas, reduce) {
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, dpr = 1, pts = [], rgb = "236,234,255", mx = 0, my = 0, tx = 0, ty = 0, on = true;
  const tint = ["255,201,92", "116,234,214", "255,106,163"];
  const size = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((w * h) / 5200);
    pts = Array.from({ length: n }, () => {
      const z = Math.random() * 0.8 + 0.2;
      return { x: Math.random() * w, y: Math.random() * h, z, s: z > 0.8 ? 3 : 2, ph: Math.random() * 6.28, sp: Math.random() * 1.5 + 0.4, c: Math.random() < 0.12 ? tint[(Math.random() * 3) | 0] : null };
    });
    paint(0);
  };
  const paint = t => {
    ctx.clearRect(0, 0, w, h);
    tx += (mx - tx) * 0.06; ty += (my - ty) * 0.06;
    for (const p of pts) {
      if (!reduce) { p.x -= p.z * 0.12; if (p.x < -4) p.x = w + 4; }
      const a = reduce ? 0.6 * p.z + 0.2 : (0.3 + 0.7 * Math.abs(Math.sin(t * p.sp + p.ph))) * p.z;
      const x = Math.round(p.x + tx * p.z * 24), y = Math.round(p.y + ty * p.z * 24);
      ctx.fillStyle = `rgba(${p.c || rgb},${a.toFixed(2)})`;
      ctx.fillRect(x, y, p.s, p.s);
    }
  };
  const tick = t => { if (on) paint(t); };
  const theme = () => { rgb = getComputedStyle(document.documentElement).getPropertyValue("--star").trim() || rgb; paint(0); };
  window.addEventListener("pointermove", e => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });
  window.addEventListener("resize", gsap.utils.debounce ? gsap.utils.debounce(size, 150) : size);
  theme(); size();
  if (!reduce) gsap.ticker.add(tick);
  return { theme, set on(v) { on = v; }, resize: size };
}

function comets(hero) {
  let alive = true;
  const fire = () => {
    if (!alive) return;
    if (!document.hidden && hero.dataset.visible === "1") {
      const c = document.createElement("div");
      c.className = "comet";
      hero.appendChild(c);
      const y = gsap.utils.random(0.08, 0.5) * hero.clientHeight;
      const x0 = hero.clientWidth * gsap.utils.random(0.55, 1.05);
      gsap.timeline({ onComplete: () => c.remove() })
        .fromTo(c, { x: x0, y, rotation: -18, autoAlpha: 0 }, { x: x0 - hero.clientWidth * 0.6, y: y + hero.clientWidth * 0.19, duration: 1.1, ease: "power1.in" })
        .to(c, { autoAlpha: 1, duration: 0.2 }, 0)
        .to(c, { autoAlpha: 0, duration: 0.3 }, 0.8);
    }
    gsap.delayedCall(gsap.utils.random(4, 9), fire);
  };
  gsap.delayedCall(3, fire);
  return () => { alive = false; };
}

function splitChars(el) {
  $$(".line", el).forEach(l => {
    const t = l.textContent;
    l.textContent = "";
    [...t].forEach(ch => {
      const s = document.createElement("span");
      s.className = "ch";
      s.textContent = ch === " " ? " " : ch;
      l.appendChild(s);
    });
  });
  return $$(".ch", el);
}

function initNav() {
  const nav = $("#nav"), btn = $("#menuToggle"), links = $("#navLinks");
  btn.addEventListener("click", () => {
    const o = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", o);
  });
  $$("a", links).forEach(a => a.addEventListener("click", () => { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }));
  const sc = () => nav.classList.toggle("is-scrolled", scrollY > 40);
  window.addEventListener("scroll", sc, { passive: true });
  sc();
  [["#projects", 0], ["#notes", 1], ["#contact", 2]].forEach(([id, i]) => {
    ScrollTrigger.create({
      trigger: id, start: "top 45%", end: "bottom 45%",
      onToggle: s => $$("a", links)[i].classList.toggle("is-active", s.isActive)
    });
  });
}

function initTheme(sky) {
  $("#themeToggle").addEventListener("click", () => {
    const n = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", n);
    store.set("theme", n);
    sky.theme();
    gsap.fromTo(".hero", { filter: "brightness(1.5)" }, { filter: "brightness(1)", duration: 0.35, ease: "steps(3)", clearProps: "filter" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const parts = buildBot();
  const carts = buildCarts();
  const stage = $("#stage"), hero = $(".hero"), bot = $("#bot"), dlg = $("#dlg");
  const sky = stars($("#stars"), reduce);
  initNav();
  initTheme(sky);

  ScrollTrigger.create({
    trigger: hero, start: "top bottom", end: "bottom top",
    onToggle: s => { hero.dataset.visible = s.isActive ? "1" : "0"; sky.on = s.isActive; }
  });
  hero.dataset.visible = "1";

  const BASE = 0.22;
  const st = { a: -Math.PI / 2 + 0.45, sp: reduce ? 0 : BASE, k: reduce ? 1 : 0, rx: 300, ry: 110, drag: false };
  const setters = carts.map(c => ({
    x: gsap.quickSetter(c.li, "x", "px"),
    y: gsap.quickSetter(c.li, "y", "px"),
    sx: gsap.quickSetter(c.li, "scaleX"),
    sy: gsap.quickSetter(c.li, "scaleY"),
    o: gsap.quickSetter(c.li, "opacity")
  }));

  const layout = () => {
    const w = stage.clientWidth, h = stage.clientHeight, cw = carts[0].li.offsetWidth;
    st.rx = Math.min(w * 0.5 - cw * 0.42, 480);
    st.ry = Math.min(st.rx * (w < 600 ? 0.62 : 0.4), h * 0.5 - cw * 0.62);
    stage.style.setProperty("--rx", st.rx + "px");
    stage.style.setProperty("--ry", st.ry + "px");
  };

  const render = () => {
    const n = carts.length;
    carts.forEach((c, i) => {
      const t = st.a + (i * Math.PI * 2) / n;
      const d = (Math.sin(t) + 1) / 2;
      const f = setters[i];
      f.x(Math.cos(t) * st.rx * st.k);
      f.y(Math.sin(t) * st.ry * st.k);
      const sc = (0.62 + 0.38 * d) * (0.4 + 0.6 * Math.min(st.k, 1));
      f.sx(sc); f.sy(sc);
      if (!c.li.dataset.away) f.o(0.5 + 0.5 * d);
      c.li.style.zIndex = d > 0.5 ? 60 + Math.round(d * 20) : 10 + Math.round(d * 20);
    });
  };

  layout();
  render();
  window.addEventListener("resize", gsap.utils.debounce ? gsap.utils.debounce(() => { layout(); render(); }, 120) : () => { layout(); render(); });
  gsap.ticker.add((t, dt) => {
    if (!st.drag) st.a += st.sp * (dt / 1000);
    render();
  });

  let slow;
  const ease = v => { slow && slow.kill(); slow = gsap.to(st, { sp: v, duration: 0.8, ease: "power2.out" }); };
  carts.forEach(c => {
    c.b.addEventListener("pointerenter", () => !reduce && !dlg.open && ease(0.025));
    c.b.addEventListener("pointerleave", () => !reduce && !dlg.open && ease(BASE));
    c.b.addEventListener("focus", () => !reduce && !dlg.open && ease(0));
    c.b.addEventListener("blur", () => !reduce && !dlg.open && ease(BASE));
    c.b.addEventListener("click", () => open(+c.b.dataset.i));
  });

  if (!reduce) {
    let px = 0, last = 0, v = 0, moved = 0;
    stage.addEventListener("pointerdown", e => {
      if (e.target.closest(".cart") || e.button !== 0) return;
      st.drag = true; px = e.clientX; last = performance.now(); v = 0; moved = 0;
      slow && slow.kill();
      stage.setPointerCapture(e.pointerId);
    });
    stage.addEventListener("pointermove", e => {
      if (!st.drag) return;
      const now = performance.now(), dx = e.clientX - px;
      st.a += dx * 0.006; moved += Math.abs(dx);
      v = (dx * 0.006) / Math.max((now - last) / 1000, 0.008);
      px = e.clientX; last = now;
    });
    const up = () => {
      if (!st.drag) return;
      st.drag = false;
      st.sp = gsap.utils.clamp(-4, 4, v);
      ease(BASE);
      slow.duration(2.4);
    };
    stage.addEventListener("pointerup", up);
    stage.addEventListener("pointercancel", up);
  }

  const mm = gsap.matchMedia();
  mm.add({ motion: "(prefers-reduced-motion: no-preference)", reduce: "(prefers-reduced-motion: reduce)" }, ctx => {
    if (ctx.conditions.reduce) {
      gsap.set(".crt", { display: "none" });
      return;
    }
    gsap.to(".bot-float", { y: -12, duration: 1.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.timeline({ repeat: -1 }).to(parts.light, { opacity: 0.25, duration: 0.5, ease: "steps(1)" }).to(parts.light, { opacity: 1, duration: 0.5, ease: "steps(1)" });
    gsap.to([parts.panL, parts.panR], { scaleY: 0.6, transformOrigin: "50% 50%", duration: 1.3, ease: "steps(3)", yoyo: true, repeat: -1 });
    gsap.to(parts.flame, { scaleY: "random(0.45, 1.35)", transformOrigin: "50% 0%", duration: 0.12, ease: "steps(1)", repeat: -1, repeatRefresh: true });
    gsap.to(".ring--outer ellipse", { strokeDashoffset: -320, duration: 14, ease: "none", repeat: -1 });
    gsap.to(".ring--inner ellipse", { strokeDashoffset: 280, duration: 10, ease: "none", repeat: -1 });
    carts.forEach(c => gsap.to(c.fl, {
      y: "random(-9, 9)", rotation: "random(-5, 5)", duration: "random(1.6, 2.6)",
      ease: "sine.inOut", yoyo: true, repeat: -1, repeatRefresh: true, delay: Math.random()
    }));

    const blink = () => {
      gsap.timeline({ onComplete: () => gsap.delayedCall(gsap.utils.random(2, 5), blink) })
        .to(parts.eyes, { scaleY: 0.15, transformOrigin: "50% 30%", duration: 0.08, ease: "steps(1)" })
        .to(parts.eyes, { scaleY: 1, duration: 0.08, ease: "steps(1)" }, "+=0.08");
    };
    gsap.delayedCall(2.5, blink);

    const ex = gsap.quickTo(parts.eyes, "x", { duration: 0.25, ease: "steps(2)" });
    const ey = gsap.quickTo(parts.eyes, "y", { duration: 0.25, ease: "steps(2)" });
    const br = gsap.quickTo(".bot-svg", "rotation", { duration: 0.8, ease: "power3.out" });
    const snap = gsap.utils.snap(1);
    const onMove = e => {
      const r = bot.getBoundingClientRect();
      const dx = gsap.utils.clamp(-1, 1, (e.clientX - (r.left + r.width / 2)) / 260);
      const dy = gsap.utils.clamp(-1, 1, (e.clientY - (r.top + r.height * 0.35)) / 260);
      ex(snap(dx)); ey(snap(dy * 0.6)); br(dx * 5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    bot.addEventListener("click", () => {
      if (gsap.isTweening(".bot-svg")) return;
      gsap.timeline()
        .to(".bot-svg", { y: -46, duration: 0.3, ease: "power2.out" })
        .to(".bot-svg", { rotation: "+=360", duration: 0.5, ease: "power2.inOut" }, "<")
        .to(".bot-svg", { y: 0, duration: 0.45, ease: "bounce.out" })
        .set(".bot-svg", { rotation: 0 });
      gsap.fromTo(parts.flash, { opacity: 0.9 }, { opacity: 0, duration: 0.4, ease: "steps(4)" });
    });

    const stopComets = comets(hero);

    gsap.to(".hero-copy", { y: -80, opacity: 0.2, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
    gsap.to(stage, { yPercent: 14, scale: 0.88, opacity: 0.35, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });

    gsap.fromTo("#loadbar", { scaleX: 0.04 }, {
      scaleX: 1, ease: "steps(26)",
      scrollTrigger: { trigger: ".notes", start: "top 75%", end: "bottom 70%", scrub: 0.5 }
    });

    $$(".section-title").forEach(t => {
      t.innerHTML = `<span class="line">${t.textContent}</span>`;
      t.querySelector(".line").style.display = "block";
      t.querySelector(".line").style.overflow = "hidden";
      const ch = splitChars(t);
      gsap.from(ch, { yPercent: 110, duration: 0.3, ease: "steps(3)", stagger: 0.03, scrollTrigger: { trigger: t, start: "top 85%", once: true } });
    });
    gsap.from(".section-text", { y: 20, autoAlpha: 0, duration: 0.6, ease: "power2.out", stagger: 0.1, scrollTrigger: { trigger: ".notes", start: "top 70%", once: true } });

    $$(".slot").forEach((s, i) => {
      gsap.timeline({ scrollTrigger: { trigger: s, start: "top 82%", once: true } })
        .from(s, { y: 70, autoAlpha: 0, duration: 0.5, ease: "steps(6)", delay: i * 0.12 })
        .from($$(".slot-list li, .slot-sub", s), { x: -18, autoAlpha: 0, duration: 0.24, ease: "steps(3)", stagger: 0.035 }, "-=0.15");
    });
    gsap.from(".links li", { x: 60, autoAlpha: 0, duration: 0.45, ease: "steps(5)", stagger: 0.1, scrollTrigger: { trigger: ".links", start: "top 85%", once: true } });

    return () => { window.removeEventListener("pointermove", onMove); stopComets(); };
  });

  const intro = () => {
    const chars = splitChars($("#heroName"));
    const quick = store.sget("booted") === "1";
    store.sset("booted", "1");
    gsap.set(bot, { autoAlpha: 0, y: -innerHeight * 0.7 });
    gsap.set(".ring", { autoAlpha: 0, scale: 0.3 });
    gsap.set(carts.map(c => c.li), { autoAlpha: 0 });
    gsap.set(chars, { yPercent: 110 });
    gsap.set([".hero-role", ".hero-text", ".hero-actions", ".stage-hint"], { autoAlpha: 0, y: 18 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (!quick) {
      tl.to(".crt-line", { scaleX: 1, duration: 0.28, ease: "power4.in" })
        .to(".crt-line", { scaleY: 260, duration: 0.32, ease: "power2.in" })
        .to(".crt", { autoAlpha: 0, duration: 0.25 }, "-=0.12")
        .set(".crt", { display: "none" });
    } else {
      tl.set(".crt", { display: "none" });
    }
    tl.addLabel("scene")
      .to(bot, { autoAlpha: 1, y: 0, duration: 1.1, ease: "bounce.out", clearProps: "visibility" }, "scene")
      .fromTo(parts.flash, { opacity: 1 }, { opacity: 0, duration: 0.5, ease: "steps(5)" }, "scene+=0.85")
      .to(".ring", { autoAlpha: 1, scale: 1, xPercent: -50, yPercent: -50, x: 0, y: 0, duration: 0.7, ease: "back.out(1.6)", stagger: 0.1 }, "scene+=0.6")
      .to(chars, { yPercent: 0, duration: 0.32, ease: "steps(3)", stagger: 0.04 }, "scene+=0.2")
      .to([".hero-role", ".hero-text", ".hero-actions"], { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1 }, "scene+=0.7")
      .to(st, { k: 1, duration: 1.5, ease: "elastic.out(1, 0.55)" }, "scene+=1")
      .to(carts.map(c => c.li), { autoAlpha: 1, duration: 0.3, stagger: 0.08, ease: "steps(3)" }, "scene+=1")
      .to(".stage-hint", { autoAlpha: 1, y: 0, duration: 0.5 }, "scene+=1.8");
  };

  if (reduce) {
    gsap.set(".ring", { xPercent: -50, yPercent: -50, x: 0, y: 0 });
  } else {
    gsap.set(".ring", { xPercent: -50, yPercent: -50, x: 0, y: 0 });
    intro();
  }

  const dScreen = $("#dlgScreen");
  let cur = -1;
  const fill = p => {
    $("#dlgTitle").textContent = p.title;
    $("#dlgStatus").textContent = p.status;
    $("#dlgText").textContent = p.text;
    $(".dlg-inner").style.setProperty("--c", p.color);
    $("#dlgTags").innerHTML = p.tags.map(t => `<li>${t}</li>`).join("");
    const act = $("#dlgActions");
    act.innerHTML = "";
    p.links.forEach((l, i) => {
      const a = document.createElement("a");
      a.className = "btn" + (i === 0 ? " btn--primary" : "");
      a.href = l.href;
      a.textContent = l.label;
      if (l.local) a.addEventListener("click", () => dlg.close());
      else { a.target = "_blank"; a.rel = "noopener"; }
      act.appendChild(a);
    });
    if (!p.links.length) {
      const s = document.createElement("p");
      s.className = "dlg-text";
      s.style.marginTop = "0";
      s.textContent = p.note || "Kaynak kodu henüz paylaşılmadı.";
      act.appendChild(s);
    }
    dScreen.innerHTML = "";
    const g = glyphSvg(p.glyph);
    g.style.color = p.color;
    dScreen.appendChild(g);
  };

  const show = () => {
    dlg.showModal();
    if (reduce) return;
    gsap.timeline()
      .fromTo(".dlg-inner", { scale: 0.86, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.35, ease: "back.out(1.8)" })
      .from("#dlgScreen svg", { scaleY: 0.02, duration: 0.35, ease: "steps(5)" }, "-=0.1")
      .from(".dlg-body > *", { x: 24, autoAlpha: 0, duration: 0.3, stagger: 0.05, ease: "steps(3)" }, "<");
  };

  function open(i) {
    if (dlg.open) return;
    cur = i;
    const p = PROJECTS[i], c = carts[i];
    fill(p);
    if (reduce) return show();
    slow && slow.kill();
    gsap.to(st, { sp: 0, duration: 0.3 });
    const r = $(".cart-shell", c.b).getBoundingClientRect();
    const br = $("#botSvg").getBoundingClientRect();
    const gh = document.createElement("div");
    gh.className = "ghost";
    gh.style.cssText = `left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px`;
    const sh = $(".cart-shell", c.b).cloneNode(true);
    sh.style.transform = "none";
    gh.appendChild(sh);
    document.body.appendChild(gh);
    c.li.dataset.away = "1";
    gsap.set(c.li, { opacity: 0 });
    const tx = br.left + br.width / 2 - (r.left + r.width / 2);
    const ty = br.top + br.height * 0.36 - (r.top + r.height / 2);
    gsap.timeline()
      .to(gh, { x: tx, y: ty - 40, rotation: 0, scale: 0.6, duration: 0.42, ease: "power2.out" })
      .to(gh, { y: ty, scale: 0.18, duration: 0.22, ease: "power3.in" })
      .add(() => gh.remove())
      .to(".bot-svg", { scaleY: 0.86, scaleX: 1.08, transformOrigin: "50% 100%", duration: 0.08, ease: "steps(2)" })
      .to(".bot-svg", { scaleY: 1, scaleX: 1, duration: 0.3, ease: "elastic.out(1, 0.4)" })
      .fromTo(parts.flash, { opacity: 1 }, { opacity: 0, duration: 0.45, ease: "steps(5)" }, "<")
      .add(show, "-=0.25");
  }

  const restore = () => {
    if (cur < 0) return;
    const c = carts[cur];
    cur = -1;
    delete c.li.dataset.away;
    if (!reduce) {
      gsap.fromTo($(".cart-shell", c.b), { scale: 0.2 }, { scale: 1, duration: 0.5, ease: "back.out(2)", clearProps: "scale" });
      ease(BASE);
    }
    render();
  };
  dlg.addEventListener("close", restore);
  $("#dlgClose").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
});
