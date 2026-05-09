export default function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="section-head">
          <div className="head-meta">
            <div className="eyebrow"><span className="dot"></span>Member voices</div>
            <h2 className="h-section">Trusted by trustees<br /><em>from Mosman to Malvern.</em></h2>
          </div>
          <p className="head-body">
            Verified members of Havana-administered funds. Quotes lightly edited
            for length. Full case studies available on request from your
            relationship manager.
          </p>
        </div>

        <div className="quotes">
          <div className="quote">
            <div className="quote-mark">&ldquo;</div>
            <div className="quote-body">
              We had three other accountants quote on the rollover. Havana was the
              only one who could explain in-specie transfer in a way my husband
              and I both understood, and the only flat-fee quote in the lot.
            </div>
            <div className="quote-attr">
              <div className="quote-avatar">M</div>
              <div>
                <div className="quote-name">Margaret K.</div>
                <div className="quote-meta">Member · NSW · Since 2021</div>
              </div>
            </div>
          </div>
          <div className="quote">
            <div className="quote-mark">&ldquo;</div>
            <div className="quote-body">
              The fund was set up in nineteen days. They handled the bare trust
              for our Brisbane investment property and the audit hasn&apos;t raised a
              single query in three years.
            </div>
            <div className="quote-attr">
              <div className="quote-avatar">D</div>
              <div>
                <div className="quote-name">David & Imogen R.</div>
                <div className="quote-meta">Members · QLD · Since 2022</div>
              </div>
            </div>
          </div>
          <div className="quote">
            <div className="quote-mark">&ldquo;</div>
            <div className="quote-body">
              I&apos;d self-administered for eleven years. Switching to Havana cut my
              annual paperwork from a fortnight to one signed PDF. I should have
              done it sooner.
            </div>
            <div className="quote-attr">
              <div className="quote-avatar">P</div>
              <div>
                <div className="quote-name">Peter L.</div>
                <div className="quote-meta">Trustee · VIC · Since 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
