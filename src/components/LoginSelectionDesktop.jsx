import { useNavigate } from 'react-router-dom';
import './LoginSelectionDesktop.css';

export default function LoginSelectionDesktop() {
  const navigate = useNavigate();

  const handleProductClick = (productTitle) => {
    if (productTitle === 'Silia') {
      window.open('https://silia-frontend-demo.netlify.app/', '_blank');
    }
  };

  return (
    <div className="login-selection-desktop">
      {/* Back arrow */}
      <svg 
        className="back-arrow-desktop" 
        onClick={() => navigate('/')}
        width="22" 
        height="20" 
        viewBox="0 0 22 20" 
        fill="none"
      >
        <line x1="0" y1="10" x2="22" y2="10" stroke="white" strokeWidth="2"/>
        <line x1="0" y1="10" x2="8" y2="2" stroke="white" strokeWidth="2"/>
        <line x1="0" y1="10" x2="8" y2="18" stroke="white" strokeWidth="2"/>
      </svg>

      {/* Logo and brand name */}
      <div className="logo-desktop-login">
        <img src="/images/vulue-logo.png" alt="Vulue Logo" />
      </div>
      <p className="brand-name-desktop-login">VULUE</p>

      {/* Heading */}
      <h1 className="login-heading-desktop">Select from our flagship Software Suite.</h1>

      {/* Product 1 - Silia */}
      <div 
        className="product-card-desktop product-card-1-desktop"
        onClick={() => handleProductClick('Silia')}
        style={{ cursor: 'pointer' }}
      >
        <div className="product-border-1-desktop" />
        <div className="product-image-desktop product-image-1-desktop">
          <img src="/images/product-1-selection.png" alt="Silia" />
        </div>
        <h2 className="product-title-1-desktop">Silia</h2>
        <p className="product-description-1-desktop">
          Silia is a collaborative finance infrastructure that enables individuals and professionals to form, manage and operate private limited partnerships, strategy groups and deal rooms. It provides the governance, coordination, communication and capital-pooling layer that underpins a private syndicate network.
        </p>
      </div>

      {/* Product 2 - TrailX */}
      <div className="product-card-desktop product-card-2-desktop">
        <div className="product-border-2-desktop" />
        <div className="product-image-desktop product-image-2-desktop">
          <img src="/images/product-2-selection.png" alt="TrailX" />
        </div>
        <h2 className="product-title-2-desktop">trailX</h2>
        <p className="product-description-2-desktop">
          TrailX is a multi-asset analytics and execution terminal that gives users institution-grade research, charting, macro analysis and strategy tools across global markets. It serves as the analytical and operational engine that powers both sole-risk investing and LP-driven strategies within the Vulue ecosystem
        </p>
      </div>

      {/* Product 3 - Kaldera */}
      <div className="product-card-desktop product-card-3-desktop">
        <div className="product-border-3-desktop" />
        <div className="product-image-desktop product-image-3-desktop">
          <img src="/images/product-3-selection.png" alt="Kaldera" />
        </div>
        <h2 className="product-title-3-desktop">Kaldera</h2>
        <p className="product-description-3-desktop">
          Kaldera is a robust AI-integrated industrial intelligence platform that synchronizes real-time hardware telemetry and digital-twin diagnostics to provide end-to-end transparency for physical asset management, logistics, and engineering insurance.
        </p>
      </div>
    </div>
  );
}
