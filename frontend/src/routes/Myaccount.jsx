import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../css/style.scss";
import headphones from "../assets/headphones.webp";

function Myaccount() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (user) {

    return <Navigate to="/account" />;

  }

  return (

    <div className="register-form">

      <div className="photo">

        <div className="left-part">

          <img
            className="headphone"
            src={headphones}
            alt=""
          />

          <div className="create-accountbtn">

            <h3>No account?</h3>

            <p>
              No sweat. Sign up for exclusive discounts.
            </p>

            <Link to="/Create Account">

              <button className="add-acc">

                CREATE ACCOUNT

              </button>

            </Link>

          </div>

        </div>

      </div>

      <div className="sign-in">

        <h2>Welcome Back</h2>

        <p className="Reference">

          Enter your email and password below
          for fast check out and exclusive discounts

        </p>

        <button className="signin-shop">

          sign in with shop

        </button>

        <form>

          <div className="input-group">

            <input
              required
              type="email"
              autoComplete="off"
              className="input"
            />

            <label className="user-label">

              Email

            </label>

          </div>

          <div className="input-group">

            <input
              required
              type="password"
              autoComplete="off"
              className="input"
            />

            <label className="user-label">

              Password

            </label>

          </div>

        </form>

        <p className="passforgot">

          forgot password

        </p>

        <button className="submit">

          SIGN IN

        </button>

        <Link to="/Create Account">

          <p className="create">

            Create account

          </p>

        </Link>

      </div>

    </div>

  );

}

export default Myaccount;