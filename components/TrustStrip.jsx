export default function TrustStrip() {
  return (
    <section className="trust">
      <div className="container trust-grid">
        <div className="trust-label">Regulated · Audited · Insured</div>
        <div className="trust-marks">
          <div className="trust-mark">ASIC <span className="reg">AFSL 548 219</span></div>
          <div className="trust-mark">ATO <span className="reg">RAT 25 419 803</span></div>
          <div className="trust-mark">CPA Australia <span className="reg">Member firm</span></div>
          <div className="trust-mark">SMSF Association <span className="reg">Specialist</span></div>
        </div>
      </div>
    </section>
  );
}
