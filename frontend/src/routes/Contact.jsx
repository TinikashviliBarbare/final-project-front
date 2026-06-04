import React, { useEffect, useState } from "react";
import "../css/style.scss";
import { Link, Navigate } from "react-router-dom";
import Headphones from "../assets/headphones.webp";
import Galaxy from "../assets/001-galaxy.webp";

const data = [
  {
    title: "Support",
    desc: "Already purchased and have a question about your product? Try our FAQs.",
    btn: "FAQS",
    icon: "",
  },
  {
    title: "Returns",
    desc: "We understand things don't always work out. Visit our returns pages for more.",
    btn: "RETURNS",
    icon: "",
  },
  {
    title: "Warranty",
    desc: "Just bought your product and want to register the warranty? Visit our page.",
    btn: "REGISTER",
    icon: "",
  },
];

const ContactHelp = () => {
  const [timeLeft, setTimeLeft] = useState(12 * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="contact">
      <div className="help-wrapper">
        <h2 className="help-title">How can we help?</h2>

        <div className="help-cards">
          {data.map((item, index) => (
            <div className="help-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button>{item.btn} →</button>
            </div>
          ))}
        </div>
      </div>


      <div className="send-help">
        <div className="img-text">
          <div className="img">
            <img className="headphone-img" src={Headphones} alt="" />
            <button className="Faqs">FAQS →</button>
            <h2 className="need-support">Need support?</h2>
            <p className="support-text">
              Check out our support guides first.
            </p>
          </div>

          <div className="text">
            <h1 className="stranger">Dont be a stranger</h1>
            <p className="about-help">
              We're available 24/7 to assist. Just let us know what we can help
              you with and we'll do our best.
            </p>

            <form action=""></form>
          </div>
        </div>
      </div>

      <div className="count-down">
        <div className="phone-sumsung">
          <img className="galaxy-phone" src={Galaxy} alt="" />
        </div>
        <div className="timer">
          <h3>Launching in...</h3>

          <div className="time-boxes">
            <div>{String(hours).padStart(2, "0")}h</div>
            <div>{String(minutes).padStart(2, "0")}m</div>
            <div>{String(seconds).padStart(2, "0")}s</div>
          </div>

         <p className="pre-order"><Link to="/Prime S24 Solar Ultra">Pre-Order →</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export default ContactHelp;