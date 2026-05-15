import React, { useEffect, useState } from "react";
import "../css/style.scss";
import logo from '../assets/logo2.webp';
import serchIcon from '../assets/serch.png';
import notebook from '../assets/notebook.webp'
import phone4 from '../assets/phone4.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping,faHeadphones,faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Header() {

 const placeholders = [
    "serch laptops...",
    "serch phones...",
    "serch monitors...",
    "serch Accessory",
    " serch Smart Watch",
    "serch Smartphone"
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);


  useEffect(() => {

    const interval = setInterval(() => {

      setPlaceholderIndex((prev) =>
        (prev + 1) % placeholders.length
      );

    }, 3000);

    return () => clearInterval(interval);

}, []);

  const [color, setColor] = useState("#1B6CB9");

  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) =>
        prev === "#1B6CB9" ? "purple" : "#1B6CB9"
      );
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
          <img className="logo" src={logo} alt="logo" />
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

          <input type="text" placeholder={placeholders[placeholderIndex]} />

          <button className="serch-button">
            <img className="serch-icon" src={serchIcon} alt="" />
          </button>

        </div>



        <div className="icons">

          <FontAwesomeIcon
            className="headphone"
            icon={faHeadphones}
          />

          <div className="support">

            <div>
              <p>HOW CAN WE HELP?</p>
              <small>+1 (555) 123-4567</small>
            </div>

          </div>

          <FontAwesomeIcon
            className="message"
            icon={faComments}
          />

          <FontAwesomeIcon
            className="cart"
            icon={faCartShopping}
          />

        </div>

      </div>



      <nav className="nav">

        <ul>

          <Link to="/">
            <li>Home</li>
          </Link>


          <li
            className="shop-li"
            onClick={() => setShopOpen(!shopOpen)}
          >

            <div className="shop-btn">

              Shop

              <FontAwesomeIcon
                className={`arrow ${shopOpen ? "rotate" : ""}`}
                icon={faChevronDown}
              />

            </div>

            <div className={`mega-menu ${shopOpen ? "active" : ""}`}>

              <div className="menu-column">

                <h3>Phones</h3>

                <p>Edge Pixa 9</p>
                <p>Prime Solar S24 Plus</p>
                <p>Prime Flip 4</p>
                <p>Prime S24 Ultra</p>

                <br />

                <h3>Audio</h3>

                <p>Pixa EarBuds Pro</p>
                <p>Prime Buds</p>
                <p>Sound On Headphones</p>
                <p>Video Hub Max Pro</p>

              </div>

              <div className="menu-column">

                <h3>Smart Home</h3>

                <p>Videocast</p>
                <p>Smart Audio</p>
                <p>Video Hub Max Pro</p>
                <p>Smart Thermostat</p>
                <p>Smart Cam 4</p>

                <br />

                <h3>Laptops</h3>

                <p>Aware x16 R2</p>
                <p>Apex Aware M18</p>
                <p>Apex XPS 16 Touch Laptop</p>
                <p>Prime Notebook 9 Pro</p>

              </div>


              <div className="menu-column">

                <h3>Monitors</h3>

                <p>Apex UltraSharp 34</p>
                <p>Aware 27 360Hz</p>
                <p>Odyssey OLED G8</p>
                <p>Prime Neo QLED 8K</p>

                <br />

                <h3>Accessories</h3>

                <p>Aware Pro Wireless Mouse</p>
                <p>WiFi Booster Max</p>
                <p>TV Box and Remote</p>
                <p>Video Hub Max Pro</p>

              </div>

              <div className="menu-image1">
              <Link to="/Notebook 9pro"><img src={notebook} alt="" /></Link>
                <h2>Notebook 9 Pro</h2>

                <p>
                  Experience style and productivity with the latest notebook.
                </p>
              </div>


              <div className="menu-image2">
                <img src={phone4} alt="" />

                <h2>Prime S24 Ultra</h2>

                <p>
                  Powerful performance and immersive display for everyday use.
                </p>

              </div>

            </div>

          </li>

          <li>Blog</li>

          <Link to="/Phones">
            <li>Phones</li>
          </Link>

          <Link to="/Brands">
            <li>Brands</li>
          </Link>

          <li>Black Friday</li>

          <Link to="/aboutus">
            <li>About Us</li>
          </Link>

          <Link to="/ourservices">
            <li>Our Services</li>
          </Link>

          <Link to="/Faqs">
            <li>FAQs</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>

        </ul>

      </nav>

    </header>
  );
}

export default Header;