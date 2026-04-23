import './PartnerSectionDesktop2.css';

export default function PartnerSectionDesktop2({ onNavigate }) {
  return (
    <div className="partner-section-desktop-2">
      {/* EQUIRRA background image */}
      <div className="equirra-image-desktop-2">
        <img src="/images/partner-slide-2.png" alt="" />
      </div>

      {/* Text content */}
      <div className="partner-text-desktop-2">
        <div className="partner-text-line1-desktop-2">We are a</div>
        <div className="partner-text-line2-desktop-2">Technology</div>
        <div className="partner-text-line3-desktop-2">Provider & Partner</div>
        <div className="partner-text-line4-desktop-2">to <span className="partner-text-equirra-desktop-2">EQUIRRA</span></div>
      </div>

      {/* Visit Equirra link */}
      <p className="visit-equirra-desktop-2">Visit Equirra.com</p>

      {/* Navigation bars */}
      <div className="nav-bars-desktop-2">
        <div className="nav-bar-inactive-desktop-2" onClick={() => onNavigate(0)} />
        <div className="nav-bar-active-desktop-2" />
      </div>
    </div>
  );
}
