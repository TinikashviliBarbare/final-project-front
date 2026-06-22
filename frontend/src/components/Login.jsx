import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import headphones from '../assets/headphones.webp'
import "../css/style.scss";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      );

      navigate("/account");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div>
      <div className="box">
        <div className="img">
          <img className="headphones" src={headphones} alt="" />
          <Link to="/createaccount"><button className="create">CREATE ACCOUNT</button></Link>
        </div>
        <div className="input">
          <h1>Welcome back</h1>
          <button className="shop">Sign up with shop</button>
          <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
          <input
           type="password"
           placeholder="Password"
           className="email"
           value={password}
           onChange={(e) =>
             setPassword(e.target.value)
           }
          />
          <p>forgot a password?</p>
          <button type="submit" className="login"> Login</button>
          
          </form>
       <p>Don't have account?<Link to="/createaccount">Create Account</Link></p>
       </div>
      </div>
    </div>
  );
}

export default Login;