import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Createacc() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/account");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="registration">
    <div className="bck">
    <form className="regform"  onSubmit={handleSubmit}>
      <h3 className="acctext">Create account</h3>
      <input className="name" name="firstName" placeholder="First Name" onChange={handleChange} />
      <input className="name" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input className="name" name="email" placeholder="Email" onChange={handleChange} />
      <input className="name" type="password" name="password" placeholder="Password" onChange={handleChange} />

      <button className="submit" type="submit">Create</button>

      <Link to="/login">Go to login</Link>
    </form>
    </div>
    </div>
  );
}

export default Createacc;