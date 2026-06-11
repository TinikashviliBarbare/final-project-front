import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Myaccount() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/account");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  if (user) {
    return (
      <div>
        <h2>You are already logged in</h2>
        <button onClick={() => navigate("/account")}>
          Go to Account
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Sign In</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">SIGN IN</button>
      </form>

      <p>
        No account?{" "}
        <Link to="/createaccount">Create account</Link>
      </p>
    </div>
  );
}

export default Myaccount;