'use client';

import { useState } from 'react';

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="cta" className="cta-band">
      <div className="container cta-inner">
        <div>
          <div className="eyebrow on-deep"><span className="dot"></span>Begin</div>
          <h2 className="h-section" style={{ marginTop: 20 }}>
            Ready when<br />
            <em>you are.</em>
          </h2>
          <p className="lede" style={{ color: 'var(--on-deep-muted)', marginTop: 24, maxWidth: '48ch' }}>
            Leave your details and a senior adviser will call within one
            business day. No obligation, no sales script.
          </p>
          <div className="pill" style={{ marginTop: 28 }}>
            <span className="dot"></span>Currently accepting new funds
          </div>
        </div>
        <form
          className="cta-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          {!submitted ? (
            <>
              <div className="cta-form-row">
                <input className="cta-input" placeholder="First name" required />
                <input className="cta-input" placeholder="Last name" required />
              </div>
              <input className="cta-input" type="email" placeholder="Email address" required />
              <input className="cta-input" placeholder="Phone (optional)" />
              <input className="cta-input" placeholder="Approximate combined super balance" />
              <button type="submit" className="btn btn-primary" style={{ marginTop: 12, alignSelf: 'flex-start' }}>
                Request a call <span className="arrow">→</span>
              </button>
              <p className="tiny" style={{ color: 'var(--on-deep-muted)', marginTop: 4 }}>
                By submitting you agree to our privacy policy. We never share
                your details with third parties.
              </p>
            </>
          ) : (
            <div style={{ padding: '32px 0' }}>
              <div className="eyebrow on-deep"><span className="dot"></span>Received</div>
              <p className="h-card" style={{ color: 'var(--on-deep)', marginTop: 16 }}>
                Thank you. A senior adviser will be in touch within one
                business day.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
