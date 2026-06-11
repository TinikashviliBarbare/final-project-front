import React from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div>
        <h2>You are not logged in</h2>
        <button onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user.firstName}</h1>

      <p>Email: {user.email}</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Account;