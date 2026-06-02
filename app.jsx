/* App root: home + case-study routing with transition. */
const { useState: useStateApp, useEffect: useEffectApp, useCallback: useCallbackApp } = React;

function App() {
  const D = window.PORTFOLIO_DATA;
  const [openId, setOpenId] = useStateApp(null);
  const [transitioning, setTransitioning] = useStateApp(false);

  const projIndex = openId ? D.projects.findIndex((p) => p.id === openId) : -1;
  const project = projIndex >= 0 ? D.projects[projIndex] : null;

  const open = useCallbackApp((id) => {
    setTransitioning(true);
    setTimeout(() => { setOpenId(id); window.scrollTo(0, 0); setTimeout(() => setTransitioning(false), 30); }, 260);
  }, []);

  const close = useCallbackApp(() => {
    setTransitioning(true);
    setTimeout(() => { setOpenId(null); setTransitioning(false); }, 260);
  }, []);

  const nav = useCallbackApp((dir) => {
    const next = D.projects[(projIndex + dir + D.projects.length) % D.projects.length];
    setTransitioning(true);
    setTimeout(() => { setOpenId(next.id); setTimeout(() => setTransitioning(false), 30); }, 260);
  }, [projIndex]);

  // home wants to scroll after closing
  const goHome = useCallbackApp((after) => {
    if (openId) { close(); setTimeout(after, 360); }
    else after();
  }, [openId]);

  useEffectApp(() => {
    document.body.style.overflow = "";
  }, [openId]);

  // Watchdog: if the transition timeline is frozen (preview/background tab),
  // revealed content stays at computed opacity 0. Detect that and force the
  // final state with transitions disabled — without touching working browsers.
  useEffectApp(() => {
    const check = () => {
      const el = document.querySelector(".reveal.in");
      if (el && parseFloat(getComputedStyle(el).opacity) < 0.99) {
        document.documentElement.classList.add("reveals-forced");
      }
    };
    const t1 = setTimeout(check, 1500);
    const t2 = setTimeout(check, 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [openId]);

  return (
    <React.Fragment>
      {!openId && (
        <div className={`view ${transitioning ? "view-out" : "view-in"}`}>
          <Nav person={D.person} onHome={goHome} />
          <Hero person={D.person} />
          <About intro={D.intro} brings={D.brings} />
          <Experience items={D.experience} />
          <Projects projects={D.projects} onOpen={open} />
          <Testimonials data={D.testimonials} />
          <Contact person={D.person} />
        </div>
      )}
      {openId && project && (
        <div className={`view ${transitioning ? "view-out" : "view-in"}`}>
          <CaseStudy project={project} onClose={close} onNav={nav} index={projIndex} total={D.projects.length} />
        </div>
      )}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
