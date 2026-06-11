import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import headphones from "../assets/headphones.webp";

function Createacc() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );

      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/account");

    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="register-page">

      <div className="register-left">
  
        <div className="overlay">
          <h2>Create account</h2>
          <p>Register for exclusive member-only discounts and faster checkout.</p>

          <Link to="/login">
            <button type="button">SIGN IN</button>
          </Link>
        </div>
      </div>

      <div className="register-right">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>

          <div className="double-input">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            create
          </button>

        </form>

        <p>
          Already have account?{" "}
          <Link to="/login">Sign in</Link>
        </p>

      </div>
    </section>
  );
}

export default Createacc;