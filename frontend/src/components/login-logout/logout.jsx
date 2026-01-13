import React from "react";
import { useNavigate } from "react-router-dom";
import "./log.css"
import { LogoutOutlined } from "@mui/icons-material";

export const Logout = () => {
//   const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("User logged out");
    // navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="logBtn">
        <LogoutOutlined className="logIcon" />Logout
    </button>
  );
};
