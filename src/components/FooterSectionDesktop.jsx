import './FooterSectionDesktop.css';

export default function FooterSectionDesktop() {
  return (
    <div className="footer-section-desktop">
      {/* Disclaimer text */}
      <p className="footer-disclaimer-desktop">
        Vulue Limited is a software and intelligence technology company operating exclusively on a proprietary capital basis. Vulue does not solicit or accept external investments, client funds, or public capital. Any individual or entity claiming to represent or raise funds on Vulue's behalf is not authorized or affiliated with the company.
        <br /><br />
        Please report any unauthorized solicitations or representations to legal@vulue.ng
      </p>

      {/* For Enquiries section */}
      <h3 className="footer-enquiries-heading-desktop">For Enquiries</h3>
      <p className="footer-contact-desktop">contact@vulue.org</p>

      {/* Social icons */}
      <a href="https://x.com/Vulueng" target="_blank" rel="noopener noreferrer" className="footer-social-x-desktop">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/vulue-ltd/" target="_blank" rel="noopener noreferrer" className="footer-social-linkedin-desktop">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>

      {/* Logo and brand name */}
      <div className="footer-logo-desktop">
        <img src="/images/vulue-logo.png" alt="Vulue Logo" />
      </div>
      <p className="footer-brand-name-desktop">VULUE</p>

      {/* Copyright */}
      <p className="footer-copyright-desktop">©2026 Vulue Limited. All rights preserved.</p>
    </div>
  );
}
