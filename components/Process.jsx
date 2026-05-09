export default function Process() {
  return (
    <section id="how" className="section" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="container">
        <div className="section-head">
          <div className="head-meta">
            <div className="eyebrow"><span className="dot"></span>The Havana process</div>
            <h2 className="h-section">Established and trading<br /><em>in twenty-one days.</em></h2>
          </div>
          <p className="head-body">
            Most providers quote four to six weeks. We&apos;ve built the workflow down
            to twenty-one calendar days from signed engagement to first trade —
            including ATO registration windows we don&apos;t control.
          </p>
        </div>

        <div className="process">
          <div className="step">
            <div className="step-num">i.</div>
            <h4>Discovery & strategy</h4>
            <p className="body" style={{ margin: 0 }}>
              A 45-minute call with a senior adviser. We map your existing super,
              assets, contribution caps, and goals into an investment strategy
              you&apos;ll actually read.
            </p>
            <div className="step-time">Day 0 — 1</div>
          </div>
          <div className="step">
            <div className="step-num">ii.</div>
            <h4>Establishment</h4>
            <p className="body" style={{ margin: 0 }}>
              Trust deed drafted, corporate trustee company incorporated, ABN /
              TFN / ESA registered with the ATO. You sign one document pack.
            </p>
            <div className="step-time">Day 2 — 9</div>
          </div>
          <div className="step">
            <div className="step-num">iii.</div>
            <h4>Bank, broker & rollover</h4>
            <p className="body" style={{ margin: 0 }}>
              Macquarie CMA opened, broker linked, existing super rolled over.
              We chase the funds; you don&apos;t sit on hold.
            </p>
            <div className="step-time">Day 10 — 18</div>
          </div>
          <div className="step">
            <div className="step-num">iv.</div>
            <h4>Trade & administer</h4>
            <p className="body" style={{ margin: 0 }}>
              Funds settle, you place your first trade. We handle the annual
              audit, tax return, BAS, and member statements — for life.
            </p>
            <div className="step-time">Day 19 — onwards</div>
          </div>
        </div>
      </div>
    </section>
  );
}
