export default function Compare() {
  return (
    <section id="compare" className="section">
      <div className="container">
        <div className="section-head">
          <div className="head-meta">
            <div className="eyebrow"><span className="dot"></span>Side by side</div>
            <h2 className="h-section">Havana versus<br /><em>the alternatives.</em></h2>
          </div>
          <p className="head-body">
            A like-for-like comparison against the two structures most of our
            clients leave behind: a typical industry super fund and a generic
            SMSF accountant operating on hourly rates.
          </p>
        </div>

        <div className="compare">
          <div className="compare-head">Capability</div>
          <div className="compare-head">Industry fund</div>
          <div className="compare-head">Generic accountant</div>
          <div className="compare-head us">Havana <small>· specialist</small></div>

          <div className="compare-row-label">Direct ASX equities</div>
          <div className="compare-cell"><span className="no">Pre-selected list</span></div>
          <div className="compare-cell"><span className="yes">✓</span></div>
          <div className="compare-cell us-cell"><span className="yes">✓</span></div>

          <div className="compare-row-label">Direct property purchase</div>
          <div className="compare-cell"><span className="no">No</span></div>
          <div className="compare-cell"><span className="partial">By referral</span></div>
          <div className="compare-cell us-cell"><span className="yes">✓</span></div>

          <div className="compare-row-label">Flat-fee structure</div>
          <div className="compare-cell"><span className="no">% of balance</span></div>
          <div className="compare-cell"><span className="partial">Hourly billing</span></div>
          <div className="compare-cell us-cell"><span className="yes">✓</span></div>

          <div className="compare-row-label">21-day establishment</div>
          <div className="compare-cell"><span className="no">N/A</span></div>
          <div className="compare-cell"><span className="no">4–6 weeks</span></div>
          <div className="compare-cell us-cell"><span className="yes">✓</span></div>

          <div className="compare-row-label">Quarterly portfolio review</div>
          <div className="compare-cell"><span className="no">No</span></div>
          <div className="compare-cell"><span className="no">Annual only</span></div>
          <div className="compare-cell us-cell"><span className="yes">✓</span></div>

          <div className="compare-row-label">Dedicated CPA & actuary</div>
          <div className="compare-cell"><span className="no">No</span></div>
          <div className="compare-cell"><span className="partial">Outsourced</span></div>
          <div className="compare-cell us-cell"><span className="yes">In-house</span></div>
        </div>
      </div>
    </section>
  );
}
