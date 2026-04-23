import './HeroMobile.css';

export default function HeroMobile() {
  return (
    <div className="hero-mobile">
      {/* Logo */}
      <div className="logo">
        <img src="/images/vulue-logo.png" alt="Vulue Logo" />
      </div>

      {/* Brand Name */}
      <p className="brand-name">VULUE</p>

      {/* Hero Title */}
      <div className="hero-title">
        <p>Say hello to Vulue!</p>
      </div>

      {/* Login Button */}
      <a href="/login" className="login-button-link">
        <div className="login-button" />
        <div className="login-text">
          <p>Login</p>
        </div>
      </a>
    </div>
  );
}
