import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import FoldableImage from "../assets/Gray.webp";
import ClamShellImage from "../assets/Bronze.webp";

function Leptopshop() {

  const [selectedType, setSelectedType] = useState("foldable");

  const [mainImage, setMainImage] = useState(FoldableImage);

  const changeLaptop = (type) => {

    setSelectedType(type);

    if (type === "foldable") {
      setMainImage(FoldableImage);
    } else {
      setMainImage(ClamShellImage);
    }
  };

  return (
    <div>

      <div className="route-bar">
        <FontAwesomeIcon
          className="home"
          icon={faHouse}
        />
        <Link to="/">Home</Link>
        <Link to="/Notebook9pro">
          Prime Notebook 9 Pro
        </Link>
      </div>
      <div className="rating">
        <h1 className="product-title">
          Prime S24 Solar Ultra
        </h1>
        <p className="price">
          From £454.00
        </p>
      </div>
      <div className="product-container">
        <div className="leptop-slide">
          <img
            className="cover"
            src={mainImage}
            alt=""
          />
        </div>

        <div className="product-options">
          <h3 className="option-title">
            Choose your Color:
          </h3>
          <div className="button-group">
            <button
              className={
                selectedType === "foldable"
                  ? "option-btn active"
                  : "option-btn"
              }
              onClick={() => changeLaptop("foldable")}>
              <div className="gray"></div>
            </button>

            <button
              className={selectedType === "clamshell"
                  ? "option-btn active"
                  : "option-btn"
              }
              onClick={() => changeLaptop("clamshell")}>
              <div className="Bronze"></div>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Leptopshop;