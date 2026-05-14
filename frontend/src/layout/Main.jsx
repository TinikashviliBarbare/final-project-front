import React, { useEffect, useState } from "react";
import "../css/style.scss";
import img1 from "../assets/firstphone.png";
import img2 from "../assets/phone2x.png";
import img3 from "../assets/phone3.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Main() {
  const slides = [
    {
      text:"NOW IN OBSIDIAN",
      image: img1,
      price: "From $899",
      baseText: "Time for the",
      button: "BUY",
      style: "slide1",
      layout: "default",
    },
    {
      image: img2,
      price: "All new Prime Solar S24 Plus",
      baseText: "Sharp shots,",
      coloredText: "every",
      secondBaseText: "time",
      button: "PRE-ORDER",
      style: "slide2",
      layout: "default",
    },
    {
      image: img3,
      price: "From $1099",
      baseText: "Experience ",
      secondBaseText1: " ultimate",
      button: "HSOP NOW",
      style: "slide3",
      layout: "rightText",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [text, setText] = useState("next level?");

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === "next level?" ? "upgrade?" : "next level?"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = slides[slideIndex];

  return (
    <div className={`slide-show ${current.style}`}>
      <img className="first-img" src={current.image} alt="" />

      <div
        className={`img-info ${
          current.layout === "rightText" ? "right" : ""
        }`}>
        <p className="text">{current.text}</p>

        <h2>{current.baseText}</h2>
        <h2> <span className="colored-text">{current.coloredText}</span>{current.secondBaseText}</h2>
        <h2>{current.secondBaseText1}</h2>

        <h2 className="text-change">
          {slideIndex === 0 ? text : " "}
        </h2>

        <p className="price">{current.price}</p>

        <button className="buy">
          <p>{current.button}</p>
          <FontAwesomeIcon className="button-arrow" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Main;