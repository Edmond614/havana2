export default function ValueProps() {
  return (
    <section id="why" className="section">
      <div className="container">
        <div className="section-head">
          <div className="head-meta">
            <div className="eyebrow"><span className="dot"></span>Why an SMSF</div>
            <h2 className="h-section">Control, transparency,<br /><em>and a real long-term plan.</em></h2>
          </div>
          <p className="head-body">
            More than 600,000 Australians manage their own super through an SMSF.
            For balances above $250,000, the cost-to-control ratio almost always
            beats retail and industry funds — provided someone competent runs the
            compliance.
          </p>
        </div>

        <div className="props">
          <div className="prop">
            <div className="prop-num">01 — Control</div>
            <h3 className="h-card">Direct ownership of every asset</h3>
            <p className="body" style={{ marginTop: 12 }}>
              Hold ASX direct equities, ETFs, term deposits, residential or
              commercial property, gold, or international shares. Your trustee
              decides — not a fund manager you&apos;ll never meet.
            </p>
          </div>
          <div className="prop" style={{ paddingLeft: 32 }}>
            <div className="prop-num">02 — Transparency</div>
            <h3 className="h-card">Every fee, every transaction, in plain English</h3>
            <p className="body" style={{ marginTop: 12 }}>
              Flat-fee administration. No percentage drag, no hidden ICR, no
              performance fee. You see exactly what your fund earned and exactly
              what we charged for the year.
            </p>
          </div>
          <div className="prop" style={{ paddingLeft: 32 }}>
            <div className="prop-num">03 — Continuity</div>
            <h3 className="h-card">Estate and intergenerational planning</h3>
            <p className="body" style={{ marginTop: 12 }}>
              Binding death benefit nominations, reversionary pensions, and
              structured succession let you pass wealth to a spouse or child
              without it leaving the fund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
