/* Full-screen case study view. */
const { useEffect: useEffectCS } = React;

function CaseStudy({ project, onClose, onNav, index, total }) {
  const p = project;

  useEffectCS(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    const reset = () => {
      window.scrollTo(0, 0);
      html.scrollTop = 0;
      document.body.scrollTop = 0;
      const el = document.querySelector(".cs-scroll");
      if (el) el.scrollTop = 0;
    };
    reset();
    // Run again after the new content has laid out, then restore smooth scroll.
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => { reset(); html.style.scrollBehavior = prev; });
    });
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    // reveal observer scoped to case study, with immediate + timeout fallbacks
    const nodes = Array.from(document.querySelectorAll(".cs-scroll .reveal"));
    const vh = window.innerHeight || document.documentElement.clientHeight;
    nodes.forEach((n) => { if (n.getBoundingClientRect().top < vh * 0.95) n.classList.add("in"); });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach((n) => { if (!n.classList.contains("in")) io.observe(n); });
    const t = setTimeout(() => nodes.forEach((n) => n.classList.add("in")), 1200);
    return () => { window.removeEventListener("keydown", onKey); io.disconnect(); clearTimeout(t); cancelAnimationFrame(raf); html.style.scrollBehavior = prev; };
  }, [p.id]);

  const Block = ({ eyebrow, title, children, id }) => (
    <section className="cs-block" id={id}>
      <Reveal className="cs-block-head">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h3 className="cs-h3">{title}</h3>}
      </Reveal>
      {children}
    </section>
  );

  return (
    <div className="cs">
      {/* top bar */}
      <div className="cs-bar">
        <button className="cs-back" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          All work
        </button>
        <span className="cs-bar-title mono">{p.num} — {p.short}</span>
        <span className="cs-bar-count mono">{String(index + 1).padStart(2,"0")} / {String(total).padStart(2,"0")}</span>
      </div>

      <div className="cs-scroll">
        {/* hero */}
        <header className="cs-hero">
          <div className="cs-hero-inner">
            <Reveal className="cs-num mono-accent">{p.num}</Reveal>
            <Reveal delay={60}><div className="mono cs-client">{p.client} · {p.year}</div></Reveal>
            <Reveal delay={120}><h1 className="cs-title">{p.title}</h1></Reveal>
            <Reveal delay={180} className="cs-tags"><Tags items={p.tags} /></Reveal>
          </div>
          <Reveal delay={120} className="cs-cover">
            <Placeholder label={p.cover} ratio="21 / 9" />
          </Reveal>
        </header>

        <div className="cs-body container">
          {/* About + Goals + Solution */}
          <Block eyebrow="About" id="cs-about">
            <Reveal><p className="cs-lead">{p.about}</p></Reveal>
          </Block>

          <div className="cs-two">
            <Reveal className="cs-panel glass">
              <div className="mono cs-panel-k">Business goals</div>
              <p className="cs-panel-line">{p.goals.line}</p>
              <ul className="cs-list">
                {p.goals.points.map((x, i) => <li key={i}>{x}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={90} className="cs-panel glass">
              <div className="mono cs-panel-k">Solution</div>
              <p className="cs-panel-line">{p.solution}</p>
            </Reveal>
          </div>

          {/* Role */}
          <Block eyebrow="Role & Responsibilities" title={p.role.line} id="cs-role">
            <div className="cs-role-grid">
              {p.role.points.map((x, i) => (
                <Reveal key={i} delay={i * 60} className="cs-role-item">
                  <span className="mono-accent cs-role-idx">{String(i + 1).padStart(2, "0")}</span>
                  <span>{x}</span>
                </Reveal>
              ))}
            </div>
          </Block>

          {/* Research: Problem > Insight > Direction */}
          <Block eyebrow="Research" title="Problem → Insight → Direction" id="cs-research">
            <div className="cs-flow">
              {p.research.map((r, i) => (
                <React.Fragment key={i}>
                  <Reveal delay={i * 80} className="cs-flow-card glass">
                    <div className="mono-accent">{r.k}</div>
                    <p>{r.v}</p>
                  </Reveal>
                  {i < p.research.length - 1 && <div className="cs-flow-arrow" aria-hidden="true">→</div>}
                </React.Fragment>
              ))}
            </div>
          </Block>

          {/* Persona */}
          <Block eyebrow="Persona" id="cs-persona">
            <Reveal className="cs-persona glass">
              <div className="cs-persona-id">
                <div className="cs-persona-avatar ph"></div>
                <div>
                  <div className="mono cs-panel-k" style={{ marginBottom: 4 }}>Primary persona</div>
                  <h3 className="cs-persona-name">{p.persona.name}</h3>
                </div>
              </div>
              <p className="cs-persona-bio">{p.persona.bio}</p>
              <div className="cs-persona-cols">
                <div>
                  <div className="mono cs-mini-k">Goals</div>
                  <ul className="cs-list">{p.persona.goals.map((g, i) => <li key={i}>{g}</li>)}</ul>
                </div>
                <div>
                  <div className="mono cs-mini-k">Frustrations</div>
                  <ul className="cs-list cs-list-x">{p.persona.frustrations.map((g, i) => <li key={i}>{g}</li>)}</ul>
                </div>
              </div>
            </Reveal>
          </Block>

          {/* Strategy + funnel */}
          <Block eyebrow="Solution Strategy" title={p.strategy.line} id="cs-strategy">
            <Reveal className="cs-funnel">
              {p.strategy.funnel.map((s, i) => (
                <div className="cs-funnel-step" key={i} style={{ opacity: 1 - i * 0.07 }}>
                  <span className="mono cs-funnel-idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="cs-funnel-label">{s}</span>
                  {i < p.strategy.funnel.length - 1 && <span className="cs-funnel-sep">→</span>}
                </div>
              ))}
            </Reveal>
            <div className="cs-views">
              {p.strategy.views.map((v, i) => (
                <Reveal key={i} delay={i * 70} className="cs-view glass">
                  <div className="cs-view-k">{v.k}</div>
                  <p>{v.v}</p>
                </Reveal>
              ))}
            </div>
          </Block>

          {/* Gallery */}
          <Block id="cs-gallery">
            <div className="cs-gallery">
              {p.gallery.map((g, i) => (
                <Reveal key={i} delay={i * 60} className={`cs-shot ${i === 0 ? "wide" : ""}`}>
                  <Placeholder label={g} ratio={i === 0 ? "16 / 9" : "4 / 3"} />
                </Reveal>
              ))}
            </div>
          </Block>

          {/* Vibe / craft note */}
          <Block eyebrow="Craft & AI Practice" id="cs-craft">
            <Reveal className="cs-craft glass">
              <p>{p.vibeCoding}</p>
            </Reveal>
          </Block>

          {/* Metrics */}
          <Block eyebrow="Success Metrics & Impact" title="What changed." id="cs-metrics">
            <div className="cs-metrics">
              {p.metrics.map((m, i) => (
                <Reveal key={i} delay={i * 55} className="cs-metric glass">
                  <div className="cs-metric-k mono-accent">{m.k}</div>
                  <p className="cs-metric-v">{m.v}</p>
                </Reveal>
              ))}
            </div>
          </Block>
        </div>

        {/* next project */}
        <div className="cs-next container">
          <button className="cs-next-btn" onClick={() => onNav(1)}>
            <span className="mono">Next case study →</span>
            <span className="cs-next-title">{nextTitle(index, total)}</span>
          </button>
        </div>
      </div>
    </div>
  );

  function nextTitle() {
    const list = window.PORTFOLIO_DATA.projects;
    const nx = list[(index + 1) % list.length];
    return `${nx.num} · ${nx.short}`;
  }
}

window.CaseStudy = CaseStudy;
