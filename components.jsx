/* Shared primitives + home sections.  Exposes components on window. */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- Scroll reveal ---- */
function Reveal({ children, delay = 0, as = "div", className = "", style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("in");
    // If already in (or near) the viewport at mount, reveal immediately.
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * 0.92) { show(); return; }
    let done = false;
    const reveal = () => { if (!done) { done = true; show(); io.disconnect(); clearTimeout(t); } };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) reveal(); });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    // Safety net: if the observer never fires, reveal anyway.
    const t = setTimeout(reveal, 1200);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

/* ---- Striped placeholder ---- */
function Placeholder({ label, ratio = "16 / 9", style = {} }) {
  return (
    <div className="ph" style={{ aspectRatio: ratio, ...style }}>
      <div className="ph-label"><span className="dot"></span>{label}</div>
    </div>
  );
}

/* ---- Tag row ---- */
function Tags({ items }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
      {items.map((t, i) => <span className="tag" key={i}>{t}</span>)}
    </div>
  );
}

const Arrow = ({ size = 16 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ============================================================
   NAV
   ============================================================ */
function Nav({ person, onHome }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "about"], ["Work", "work"], ["Voices", "voices"], ["Contact", "contact"],
  ];
  const go = (id) => (e) => {
    e.preventDefault();
    onHome(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  return (
    <nav className={`nav ${scrolled ? "nav-on" : ""}`}>
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={go("top")}>
          <span className="nav-mark">RA</span>
          <span className="nav-name">{person.name}</span>
        </a>
        <div className="nav-links">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={go(id)}>{label}</a>
          ))}
        </div>
        <a className="btn nav-cta" href={`mailto:${person.email}`}>Let's talk <Arrow /></a>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero({ person }) {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <Reveal className="hero-eyebrow"><span className="eyebrow">Available for Design Manager roles</span></Reveal>
        <Reveal delay={80}>
          <h1 className="hero-title">
            <span className="hero-hello">Hello, I'm</span>
            Rathijit
            <span className="hero-last">Adhikary<span className="hero-uni">✦</span></span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="hero-tag">{person.tagline}</p>
        </Reveal>
        <Reveal delay={240} className="hero-meta">
          <div className="hero-role mono">{person.role}</div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work" onClick={(e)=>{e.preventDefault();document.getElementById("work")?.scrollIntoView({behavior:"smooth"});}}>View selected work <Arrow /></a>
            <a className="btn" href={`mailto:${person.email}`}>{person.email}</a>
          </div>
        </Reveal>
        <Reveal delay={320} className="hero-stats">
          <div className="hero-stat"><b>{person.years}</b><span>Years leading design</span></div>
          <div className="hero-stat"><b>20+</b><span>Designers mentored</span></div>
          <div className="hero-stat"><b>4</b><span>Featured case studies</span></div>
          <div className="hero-stat"><b>WCAG</b><span>AA accessibility standard</span></div>
        </Reveal>
      </div>
      <div className="hero-scroll mono">scroll <span className="hero-scroll-line"></span></div>
    </header>
  );
}

/* ============================================================
   ABOUT / INTRODUCTION
   ============================================================ */
function About({ intro, brings }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">Chapter 01 — Introduction</span></Reveal>
          <Reveal delay={60}><h2>A design manager who still gets their hands dirty.</h2></Reveal>
        </div>
        <Reveal className="about-lead glass" delay={80}>
          <p className="about-p1">{intro.lead}</p>
          <p className="about-p2">{intro.body}</p>
        </Reveal>

        <Reveal className="brings-head" delay={120}>
          <span className="mono">// What I bring to a Design Manager role</span>
        </Reveal>
        <div className="brings">
          {brings.map((b, i) => (
            <Reveal key={i} delay={(i % 3) * 70} className="bring glass">
              <span className="bring-idx mono-accent">{String(i + 1).padStart(2, "0")}</span>
              <div className="bring-k">{b.k}</div>
              <div className="bring-v">{b.v}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EXPERIENCE
   ============================================================ */
function Experience({ items }) {
  return (
    <section className="section section-tight" id="experience">
      <div className="container">
        <Reveal><span className="eyebrow" style={{ marginBottom: 40, display: "inline-flex" }}>Work Experience</span></Reveal>
        <div className="exp-list">
          {items.map((x, i) => (
            <Reveal key={i} delay={i * 90} className="exp-row">
              <div className="exp-period mono">{x.period}</div>
              <div className="exp-main">
                <h3 className="exp-title">{x.title}</h3>
                <div className="exp-org">{x.org}</div>
                <p className="exp-body">{x.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS GRID
   ============================================================ */
function Projects({ projects, onOpen }) {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">Chapter 02 — Projects Showcase</span></Reveal>
          <Reveal delay={60}><h2>Selected work, on your way.</h2></Reveal>
          <Reveal delay={120}><p>Four engagements spanning analytics, enterprise tooling, design systems, and employee experience — each opened end to end.</p></Reveal>
        </div>
        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 90} className={`proj-card-wrap ${i % 2 === 1 ? "offset" : ""}`}>
              <button className="proj-card glass" onClick={() => onOpen(p.id)}>
                <div className="proj-cover">
                  <Placeholder label={p.cover} ratio="16 / 10" />
                  <span className="proj-num mono">{p.num}</span>
                </div>
                <div className="proj-body">
                  <div className="proj-meta mono">{p.client} · {p.meta.split("·")[0].trim()}</div>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-about">{p.about}</p>
                  <div className="proj-foot">
                    <span className="proj-open">Open case study <Arrow /></span>
                    <span className="proj-year mono">{p.year}</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function Testimonials({ data }) {
  const items = data.items;
  const initials = (n) => n.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <section className="section" id="voices">
      <div className="container">
        <div className="section-head">
          <Reveal><span className="eyebrow">Chapter 03 — Testimonials</span></Reveal>
          <Reveal delay={60}><h2>Shoutouts for my collaboration.</h2></Reveal>
          <Reveal delay={120}><p>{data.intro}</p></Reveal>
        </div>
        <div className="voice-grid">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 90} className="voice glass">
              <div className="voice-quote">“</div>
              <p className="voice-text">{t.quote}</p>
              <div className="voice-by">
                <div className="voice-avatar">{initials(t.name)}</div>
                <div>
                  <div className="voice-name">{t.name}</div>
                  <div className="voice-role mono">{t.role} · {t.company}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT / FOOTER
   ============================================================ */
function Contact({ person }) {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact-card glass">
          <div className="eyebrow">{person.epithet}</div>
          <h2 className="contact-title">Let's build something together — and give back to society what it deserves: good user experience.</h2>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${person.email}`}>{person.email} <Arrow /></a>
            <a className="btn" href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a>
          </div>
        </Reveal>
        <footer className="foot">
          <span className="mono">// {person.name}</span>
          <a className="mono foot-link" href={`mailto:${person.email}`}>// {person.email}</a>
          <a className="mono foot-link" href={`tel:${person.phone.replace(/\s/g, "")}`}>// {person.phone}</a>
        </footer>
      </div>
    </section>
  );
}

Object.assign(window, {
  Reveal, Placeholder, Tags, Arrow,
  Nav, Hero, About, Experience, Projects, Testimonials, Contact,
});
