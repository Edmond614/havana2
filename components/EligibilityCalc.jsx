'use client';

import { useState } from 'react';

export default function EligibilityCalc() {
  const [balance, setBalance] = useState(420000);
  const [age, setAge] = useState(48);

  const fmt = (n) => '$' + n.toLocaleString('en-AU', { maximumFractionDigits: 0 });
  const verdict = balance >= 250000 ? 'Eligible' : balance >= 150000 ? 'Borderline' : 'Not yet';
  const annualSaving = Math.max(0, Math.round((balance * 0.0085) - 2890));
  const yearsToRetirement = Math.max(0, 67 - age);
  const projection = Math.round(balance * Math.pow(1.062, yearsToRetirement));

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="head-meta">
            <div className="eyebrow"><span className="dot"></span>Eligibility check</div>
            <h2 className="h-section">Is an SMSF<br /><em>right for you?</em></h2>
          </div>
          <p className="head-body">
            A two-input estimate based on ATO benchmarks and our 2024
            administration data. Indicative only; we&apos;ll model your exact
            position before you commit.
          </p>
        </div>

        <div className="calc">
          <div className="calc-inputs">
            <div className="calc-field">
              <label>Combined super balance <span className="v">{fmt(balance)}</span></label>
              <input
                className="calc-slider"
                type="range"
                min="50000" max="2500000" step="10000"
                value={balance}
                onChange={(e) => setBalance(+e.target.value)}
              />
            </div>
            <div className="calc-field">
              <label>Your age <span className="v">{age}</span></label>
              <input
                className="calc-slider"
                type="range"
                min="25" max="74" step="1"
                value={age}
                onChange={(e) => setAge(+e.target.value)}
              />
            </div>
            <p className="small" style={{ color: 'var(--on-deep-muted)', marginTop: 8 }}>
              Combined balance includes you and your spouse if you intend to be
              co-trustees. Most cost-effective at $250k+.
            </p>
          </div>
          <div className="calc-result">
            <div className="eyebrow on-deep">Indicative outcome</div>
            <div className="calc-verdict">
              {verdict === 'Eligible' && <>Likely <em>well-suited</em> to an SMSF.</>}
              {verdict === 'Borderline' && <>An SMSF could work, with <em>care</em>.</>}
              {verdict === 'Not yet' && <>A <em>retail or industry</em> fund is probably cheaper for now.</>}
            </div>
            <div className="calc-meta">
              <div>
                <div className="k">Est. annual fee saving</div>
                <div className="v">{fmt(annualSaving)}</div>
              </div>
              <div>
                <div className="k">Years to age 67</div>
                <div className="v">{yearsToRetirement}</div>
              </div>
              <div>
                <div className="k">Projection at 6.2%</div>
                <div className="v">{fmt(projection)}</div>
              </div>
              <div>
                <div className="k">Recommended fee tier</div>
                <div className="v">{balance > 1500000 ? 'Private' : balance > 600000 ? 'Standard' : 'Essential'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
