import React, { useState } from "react";
import axios from "axios";
import "../css/style.scss";

function Createacc() {

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

      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      );

      alert("Account Created");

      window.location.href =
      "/myaccount";

    }

    catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message
      );

    }

  };

  return (

    <div className="acc-div">

      <div className="create-account">

        <h2>Create account</h2>

        <p className="register-info">
          Register for exclusive member-only discounts and faster checkout.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <input
              required
              type="text"
              name="firstName"
              autoComplete="off"
              className="input"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label className="user-label">
              First Name
            </label>

          </div>

          <div className="input-group">

            <input
              required
              type="text"
              name="lastName"
              autoComplete="off"
              className="input"
              value={formData.lastName}
              onChange={handleChange}
            />

            <label className="user-label">
              Last Name
            </label>

          </div>

          <div className="input-group">

            <input
              required
              type="email"
              name="email"
              autoComplete="off"
              className="input"
              value={formData.email}
              onChange={handleChange}
            />

            <label className="user-label">
              Email
            </label>

          </div>

          <div className="input-group">

            <input
              required
              type="password"
              name="password"
              autoComplete="off"
              className="input"
              value={formData.password}
              onChange={handleChange}
            />

            <label className="user-label">
              Password
            </label>

          </div>

          <button
            className="submit"
            type="submit"
          >

            CREATE

          </button>

        </form>

      </div>

    </div>

  );

}

export default Createacc;