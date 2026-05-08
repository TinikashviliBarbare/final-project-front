import React, { useEffect, useState } from "react";
import "../css/style.scss";
import logo from '../assets/logo2.webp'
import serchIcon from '../assets/serch.png'
import headphonesIcon from '../assets/headphones.png'
import cartIcon from '../assets/cart.png'
import messageIcon from '../assets/message.png'

function Header() {

  const [color, setColor] = useState("#1B6CB9");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => (prev === "#1B6CB9" ? "purple" : "#1B6CB9"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">

      <div
        className="top-bar"
        style={{
          backgroundColor: color,
          transition: "0.5s",
        }}
      >
        <p>
          Our mid-season sale is now on.
          <span>Shop Phones</span>
          <span>Shop Watches</span>
        </p>

        <div className="top-links">
          <a href="#">Help</a>
          <a href="#">My Account</a>
          <span>United Kingdom (GBP £, EN)</span>
        </div>
      </div>

      <div className="main-header">
        <img src={logo} alt="" />

        <div className="search">
          <select>
            <option>All</option>
            <option>Accessory</option>
            <option>Audio</option>
            <option>Leptop</option>
            <option>Monitor</option>
            <option>Smart Watch</option>
            <option>Smartphone</option>
          </select>

          <input
            type="text"
            placeholder="Search laptops..."
          />
          <button className="serch-button">
            <img className="serch-icon" src={serchIcon} alt="" />
          </button>
        </div>

        <div className="icons">
          <img className="headphones-icon"  src={headphonesIcon} alt="" />
          <div className="support">
            <div>
              <p>HOW CAN WE HELP?</p>
              <small>+1 (555) 123-4567</small>
            </div>
          </div>

          <img src={messageIcon} alt="" className="message-icon"/>
          <img src={cartIcon} alt="" className="cart-icon" />
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Phones</li>
          <li>Brands</li>
          <li>Black Friday</li>
          <li>About Us</li>
          <li>Our Services</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;