export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="logo">
          <span className="mark"></span>
          Havana <small>Super</small>
        </a>
        <div className="nav-links">
          <a href="#why">Why SMSF</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#compare">Compare</a>
          <a href="#faq">Insights</a>
        </div>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost">Book a call</a>
          <a href="#cta" className="btn btn-primary">Open a fund <span className="arrow">→</span></a>
        </div>
      </div>
    </nav>
  );
}
