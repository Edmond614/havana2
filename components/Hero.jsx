export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow"><span className="dot"></span>Established 2014 · Sydney · Melbourne</div>
            <h1 className="h-display" style={{ marginTop: 24 }}>
              Self-managed super,<br />
              <em>professionally established.</em>
            </h1>
            <p className="lede" style={{ marginTop: 28 }}>
              Havana sets up and administers your SMSF end-to-end — trust deed,
              ABN, TFN, ESA, bank, broker, and annual compliance — so you keep
              full control of your retirement without the paperwork.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary">Open a fund <span className="arrow">→</span></a>
              <a href="#how" className="btn btn-ghost">See the process</a>
            </div>
            <div className="hero-meta">
              <div className="stat">
                <div className="num">$2.4B</div>
                <div className="label">Funds under administration</div>
              </div>
              <div className="stat">
                <div className="num">4,180</div>
                <div className="label">Funds established</div>
              </div>
              <div className="stat">
                <div className="num">98.6%</div>
                <div className="label">Annual retention</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="stripes"></div>
            <div className="seal">H</div>
            <div className="corner">FIG. 01 — H/SMSF</div>
            <div className="photo-stub">
              EDITORIAL PHOTO<br />
              COUPLE / 50s / KITCHEN BENCH<br />
              REVIEWING TABLET · WARM LIGHT
            </div>
            <div className="placeholder-label">Drop a hero image here</div>
          </div>
        </div>
      </div>
    </section>
  );
}
