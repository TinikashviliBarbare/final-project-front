import React from "react";
import "../css/style.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="feature">
          <div className="feature-icon"></div>

          <div className="feature-content">
            <h4 className="feature-title">WELL TRUSTED</h4>
            <p className="feature-text">Over 100k customers</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon"></div>

          <div className="feature-content">
            <h4 className="feature-title">SUPER FAST</h4>
            <p className="feature-text">With Express delivery</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon"></div>

          <div className="feature-content">
            <h4 className="feature-title">EXPERT HELP</h4>
            <p className="feature-text">Seven days a week</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon"></div>

          <div className="feature-content">
            <h4 className="feature-title">BEST PRICES</h4>
            <p className="feature-text">Unbeatable value</p>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-about">
          <div className="footer-logo">IGNITE</div>

          <p className="footer-about-text">
            Our mission at Ignite is to consistently provide our customers
            with the latest technology and gadgets at unbeatable low prices,
            ensuring a simple and straightforward shopping experience.
          </p>
        </div>

        <div className="footer-links">
          <h3 className="footer-links-title">Shop</h3>

          <ul className="footer-links-list">
            <li className="footer-links-item">Phones</li>
            <li className="footer-links-item">Smart home</li>
            <li className="footer-links-item">Smart watches</li>
            <li className="footer-links-item">Audio</li>
            <li className="footer-links-item">Laptops</li>
            <li className="footer-links-item">Accessories</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3 className="footer-links-title">Company</h3>

          <ul className="footer-links-list">
            <li className="footer-links-item">About Us</li>
            <li className="footer-links-item">Contact</li>
            <li className="footer-links-item">FAQs</li>
            <li className="footer-links-item">Blog</li>
            <li className="footer-links-item">Our services</li>
            <li className="footer-links-item">Register warranty</li>
          </ul>
        </div>

        <div className="footer-help">
          <h3 className="footer-help-title">Expert help</h3>

          <p className="footer-help-text">
            Need any advice before you buy? We're here to help.
          </p>

          <a className="footer-help-link" href="/">
            Contact us
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-left">
          <span className="bottom-text">© 2026, Ignite Tech & Gadgets Co.</span>
          <span className="bottom-divider">|</span>
          <span className="bottom-link">Terms of service</span>
          <span className="bottom-divider">·</span>
          <span className="bottom-link">Privacy policy</span>
          <span className="bottom-divider">·</span>
          <span className="bottom-link">Returns policy</span>
        </div>

        <div className="bottom-right">
          <span className="social-icon">📘</span>
          <span className="social-icon">✖</span>

          <div className="country-selector">
            🇬🇧 United Kingdom (GBP £, EN)
          </div>
        </div>
      </div>

      <div className="footer-last">
        <p className="footer-last-text">
          All imagery on this website is protected by copyright and
          remains the property of its respective owners.
        </p>
      </div>
    </footer>
  );
}

export default Footer;