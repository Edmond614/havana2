export default function Pricing() {
  return (
    <section id="pricing" className="section deep">
      <div className="container">
        <div className="section-head">
          <div className="head-meta">
            <div className="eyebrow on-deep"><span className="dot"></span>Transparent pricing</div>
            <h2 className="h-section">Flat fees.<br /><em>No percentage drag.</em></h2>
          </div>
          <p className="head-body">
            Every fund pays the same establishment fee and the same annual
            administration fee, regardless of balance. Your fund&apos;s growth
            doesn&apos;t make us richer. That&apos;s the entire point.
          </p>
        </div>

        <div className="price-table">
          <div className="price-row">
            <div className="price-head">Service</div>
            <div className="price-head">Industry average</div>
            <div className="price-head">Havana</div>
            <div className="price-head">Includes</div>
          </div>
          <div className="price-row">
            <div className="price-name">Fund establishment</div>
            <div className="price-strike">$1,890</div>
            <div className="price-amt">$1,290 <small>once</small></div>
            <div className="price-note">Trust deed, corporate trustee, ATO registrations, ESA, bank introduction.</div>
          </div>
          <div className="price-row">
            <div className="price-name">Annual administration</div>
            <div className="price-strike">$3,400</div>
            <div className="price-amt">$2,890 <small>p.a.</small></div>
            <div className="price-note">Bookkeeping, audit, tax return, BAS, actuarial certificate, member statements.</div>
          </div>
          <div className="price-row">
            <div className="price-name">Pension commencement</div>
            <div className="price-strike">$890</div>
            <div className="price-amt">$0 <small>included</small></div>
            <div className="price-note">Account-based or transition-to-retirement pensions, set up by our actuary.</div>
          </div>
          <div className="price-row">
            <div className="price-name">Property purchase (LRBA)</div>
            <div className="price-strike">$2,200</div>
            <div className="price-amt">$1,490 <small>once</small></div>
            <div className="price-note">Bare trust, custodian, lender liaison. Optional service.</div>
          </div>
        </div>

        <p className="small" style={{ marginTop: 24, color: 'var(--on-deep-muted)', maxWidth: '64ch' }}>
          Industry averages sourced from the ATO 2023–24 SMSF statistical overview
          and a 2024 survey of the twelve largest specialist administrators by
          funds under administration. Fees exclude government charges (ASIC, ATO
          SMSF supervisory levy) and audit fees passed through at cost.
        </p>
      </div>
    </section>
  );
}
