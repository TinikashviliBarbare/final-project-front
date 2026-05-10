import React, { useEffect, useState } from "react";
import "../css/style.scss";
import img from "../assets/firstphone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function Main() {
  const [text, setText] = useState("next level?");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) =>
        prev === "next level?" ? "upgrade?" : "next level?"
      );

      setKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slide-show">
      <img className="first-img" src={img} alt="" />
      <div className="img-info">
        <p className="text">NOW IN OBSIDIAN</p>
        <h2>Time for the</h2>

        <h2 key={key} className="text-change">
          {text}
        </h2>

        <p className="price">From $899</p>
        <button className="buy"><b>BUY </b> <FontAwesomeIcon className="button-arrow" icon={faArrowRight} /></button>
        
      </div>
    </div>
  );
}

export default Main;