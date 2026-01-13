import { LoginOutlined } from "@mui/icons-material";
import React from "react";
import "./log.css"

export const LoginBtn = () => {
  return (
    <button className="logBtn">
      <LoginOutlined className="logIcon" />
      Login
    </button>
  );
};
