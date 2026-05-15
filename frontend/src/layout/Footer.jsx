import React, { useEffect, useState } from "react";
import "../css/style.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="feature">
          <div className="icon"></div>

          <div>
            <h4>WELL TRUSTED</h4>
            <p>Over 100k customers</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon"></div>

          <div>
            <h4>SUPER FAST</h4>
            <p>With Express delivery</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon"></div>

          <div>
            <h4>EXPERT HELP</h4>
            <p>Seven days a week</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon"></div>

          <div>
            <h4>BEST PRICES</h4>
            <p>Unbeatable value</p>
          </div>
        </div>
      </div>

      <div className="footer-main">

        <div className="footer-about">
          <div className="logo">IGNITE</div>

          <p>
            Our mission at Ignite is to consistently provide our customers
            with the latest technology and gadgets at unbeatable low prices,
            ensuring a simple and straightforward shopping experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Shop</h3>

          <ul>
            <li>Phones</li>
            <li>Smart home</li>
            <li>Smart watches</li>
            <li>Audio</li>
            <li>Laptops</li>
            <li>Accessories</li>
          </ul>
        </div>


        <div className="footer-links">
          <h3>Company</h3>

          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Our services</li>
            <li>Register warranty</li>
          </ul>
        </div>

        {/* HELP */}
        <div className="footer-help">
          <h3>Expert help</h3>

          <p>
            Need any advice before you buy? We're here to help.
          </p>

          <a href="/">Contact us</a>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-left">
          <span>© 2026, Ignite Tech & Gadgets Co.</span>
          <span>|</span>
          <span>Terms of service</span>
          <span>·</span>
          <span>Privacy policy</span>
          <span>·</span>
          <span>Returns policy</span>
        </div>

        <div className="bottom-right">
          <span>📘</span>
          <span>✖</span>

          <div className="country">
            🇬🇧 United Kingdom (GBP £, EN)
          </div>
        </div>
      </div>


      <div className="footer-last">
        All imagery on this website is protected by copyright and
        remains the property of its respective owners.
      </div>
    </footer>
  );
}

export default Footer;