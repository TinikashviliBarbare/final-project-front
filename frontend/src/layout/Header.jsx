import React, { useEffect, useState } from "react";
import "../css/style.scss";
import logo from '../assets/logo2.webp';
import serchIcon from '../assets/serch.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Header() {

  const [color, setColor] = useState("#1B6CB9");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => (prev === "#1B6CB9" ? "purple" : "#1B6CB9"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const messages = [
    "Trade in your old device for up to $100 off. Trade ins",
    "Get the latest smartphones with exclusive discounts.",
    "Upgrade your tech today with special offers.",
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

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
          {messages[textIndex]}
        </p>

        <div className="top-links">
          <Link to="/Help">Help</Link>
          <Link to="/myaccount">My Account</Link>
          <span>United Kingdom (GBP £, EN)</span>
        </div>
      </div>

      <div className="main-header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="search">
          <select>
            <option>All</option>
            <option>Accessory</option>
            <option>Audio</option>
            <option>Laptop</option>
            <option>Monitor</option>
            <option>Smart Watch</option>
            <option>Smartphone</option>
          </select>

          <input type="text" placeholder="Search laptops..." />

          <button className="serch-button">
            <img className="serch-icon" src={serchIcon} alt="" />
          </button>
        </div>

        <div className="icons">
          <FontAwesomeIcon className="headphone" icon={faHeadphones} />

          <div className="support">
            <div>
              <p>HOW CAN WE HELP?</p>
              <small>+1 (555) 123-4567</small>
            </div>
          </div>

          <FontAwesomeIcon className="message" icon={faComments} />
          <FontAwesomeIcon className="cart" icon={faCartShopping} />
        </div>
      </div>

      <nav className="nav">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li>Shop</li>
          <li>Blog</li>
          <Link to="/Phones"><li>Phones</li></Link>
          <Link to="/Brands"><li>Brands</li></Link>
          <li>Black Friday</li>
          <Link to="/aboutus"><li>About Us</li></Link>
          <Link to="/ourservices"><li>Our Services</li></Link>
          <Link to="/Faqs"><li>FAQs</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>

    </header>
  );
}

export default Header;