import './HeroDesktop.css';

export default function HeroDesktop() {
  return (
    <div className="hero-desktop">
      {/* Logo */}
      <div className="logo-desktop">
        <img src="/images/vulue-logo.png" alt="Vulue Logo" />
      </div>

      {/* Brand Name */}
      <p className="brand-name-desktop">VULUE</p>

      {/* Hero Title */}
      <div className="hero-title-desktop">
        <p>Say hello to Vulue!</p>
      </div>

      {/* Login Button */}
      <a href="/login" className="login-button-link-desktop">
        <div className="login-button-desktop" />
        <div className="login-text-desktop">
          <p>Login</p>
        </div>
      </a>
    </div>
  );
}
