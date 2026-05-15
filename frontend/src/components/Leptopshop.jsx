import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Leptop1 from "../assets/Notebook-9-Pro1.webp"



function Leptopshop() {
  return (
    <div>
        <div className="route-bar">
            <FontAwesomeIcon className="home" icon={faHouse} />
            <Link to="/">Home</Link>
            <Link to="/Notebook 9pro">Prime Notebook 9 Pro</Link>
        </div>
        <div className="rating">
            <h1>Prime Notebook 9 Pro</h1>
            <p className="price">From £2,280.00</p>
        </div>
        <div className="leptop-slide">
            <img className="cover" src={Leptop1} alt="" />
        </div>
    </div>
  )
}

export default Leptopshop