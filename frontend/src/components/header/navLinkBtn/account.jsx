import { AccountBoxOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./cart.css";
import "./account.css";

export const Account = () => {
  return (
    <div className="d-flex flex-row account">
      <AccountBoxOutlined className="cartIcon" />

      <div className="dropdown">
        <button className="cartBtn">Account</button>
      </div>
    </div>
  );
};
