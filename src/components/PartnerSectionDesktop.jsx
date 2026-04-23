import './PartnerSectionDesktop.css';

export default function PartnerSectionDesktop({ onNavigate }) {
  return (
    <div className="partner-section-desktop">
      {/* Flower pattern background */}
      <div className="flower-pattern-desktop">
        <img src="/images/flower-pattern.png" alt="" />
      </div>

      {/* Text content */}
      <p className="partner-text-desktop">
        <span className="partner-text-light-desktop">We are a Technology Provider & Partner to </span>
        <span className="partner-text-bold-desktop">Proprietary Partners LLP</span>
      </p>

      {/* Navigation bars */}
      <div className="nav-bars-desktop">
        <div className="nav-bar-active-desktop" />
        <div className="nav-bar-inactive-desktop" onClick={() => onNavigate(1)} />
      </div>
    </div>
  );
}
