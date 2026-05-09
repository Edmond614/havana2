export default function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col">
            <a href="#" className="logo" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span className="mark"></span>Havana <small>Super</small>
            </a>
            <p className="small" style={{ maxWidth: '38ch' }}>
              Specialist SMSF establishment and administration. Sydney ·
              Melbourne · Brisbane.
            </p>
            <p className="small" style={{ marginTop: 16 }}>
              Level 24, 1 O&apos;Connell Street<br />
              Sydney NSW 2000<br />
              <a href="tel:1300442826" style={{ borderBottom: '1px solid var(--line-strong)' }}>1300 442 826</a>
            </p>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#">Fund establishment</a></li>
              <li><a href="#">Annual administration</a></li>
              <li><a href="#">Property in super</a></li>
              <li><a href="#">Pension commencement</a></li>
              <li><a href="#">Wind-up & rollover out</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">SMSF guide (PDF)</a></li>
              <li><a href="#">Fee schedule</a></li>
              <li><a href="#">Trustee handbook</a></li>
              <li><a href="#">Insights & briefings</a></li>
              <li><a href="#">ATO portal</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Firm</h5>
            <ul>
              <li><a href="#">About Havana</a></li>
              <li><a href="#">Our people</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-disclaim">
          <div>
            <p>
              <strong>Important information.</strong> Havana Super Pty Ltd
              (ABN 64 198 037 412) is the holder of Australian Financial Services
              Licence 548 219 and a Registered Tax Agent (25 419 803). The
              information on this website is general in nature and does not take
              into account your personal financial situation, needs or
              objectives. You should consider obtaining advice from a licensed
              financial adviser and read the relevant Product Disclosure
              Statement before making any decision.
            </p>
            <p>
              Past performance is not a reliable indicator of future
              performance. Investments may rise or fall in value. SMSFs are not
              covered by the financial claims scheme administered by APRA.
            </p>
          </div>
          <div>
            <p>
              <strong>Privacy.</strong> We collect personal information to
              establish and administer your fund and meet our regulatory
              obligations. Read our <a href="#" style={{ borderBottom: '1px solid var(--line-strong)' }}>Privacy Policy</a> and
              <a href="#" style={{ borderBottom: '1px solid var(--line-strong)' }}> Financial Services Guide</a>.
            </p>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© 2026 Havana Super Pty Ltd · ABN 64 198 037 412</div>
          <div>AFSL 548 219 · RAT 25 419 803</div>
        </div>
      </div>
    </footer>
  );
}
