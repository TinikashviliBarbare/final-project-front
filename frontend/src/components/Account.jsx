import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    return <Navigate to="/login" />;
  }

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="account">
      <div className="oneside">
      <h1 className="account-title">
        Account
      </h1>
      </div>

      <div className="info">
        <div className="button">
          <button className="adress">
          VIEW ADDRESS
          </button>
          <button className="logout" onClick={logout}>
            LOG OUT
          </button>
        </div>
      
        <p className="info-text">Account details</p>
        <div className="email-info">
        <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Account;