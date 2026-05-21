import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.scss";

function Createacc() {
  return (
    <div className="acc-div">
        <div className="create-account">
            <h2>Create account</h2>
            <p className="register-info">Register for exclusive member-only discounts and faster checkout.</p>
            <form action="">
            <div className="input-group">
              <input required type="text" name="text" autoComplete="off" className="input" />
              <label className="user-label">Email</label>
            </div>
            <div className="input-group">
              <input required type="text" name="text" autoComplete="off" className="input" />
              <label className="user-label">Email</label>
            </div>
            <div className="input-group">
              <input required type="text" name="text" autoComplete="off" className="input" />
              <label className="user-label">Email</label>
            </div>
            <div className="input-group">
              <input required type="text" name="text" autoComplete="off" className="input" />
              <label className="user-label">Email</label>
            </div>
            </form>
            <button className="submit">CREATE</button>
        </div>
    </div>
  )
}

export default Createacc