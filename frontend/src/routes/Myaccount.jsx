import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.scss";
import headphones from '../assets/headphones.webp'

function Myaccount() {
  return (
    <div className="register-form">
      <div className="photo">
        <div className="left-part">
          <img className="headphone" src={headphones} alt="" />
          <div className="create-account">
            <h3>No accaount?</h3>
            <p>No sweat. Sign up for exclusive discounts.</p>
            <button className="add-acc">CREATE ACCOUNT</button>
          </div>
        </div>
      </div>
      <div className="sign-in">
          <h2>Welcome Back</h2>
          <p>Enter your email and password below for fast check out and exclusive discounts</p>
          <button className="signin-shop">sign in with shop</button>
            <form action="">
              <input type="text"
              placeholder="Email"
              id="email" />
              <input 
              type="password"
              placeholder="Password"
              id="pass" />
            </form>
          <p className="passforgot">forgot password</p>
          <button className="submit">SIGN IN</button>
          <p className="create">Create account</p>
        </div>
    </div>
  )
}

export default Myaccount