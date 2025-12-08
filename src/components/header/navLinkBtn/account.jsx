import { AccountBoxOutlined } from "@mui/icons-material";
import { TrackChangesOutlined } from "@mui/icons-material";
import { BadgeOutlined } from "@mui/icons-material";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Settings } from "@mui/icons-material";
import { LogoutOutlined } from "@mui/icons-material";
import "./cart.css";
import "./account.css";



export const Account = () => {

  return (
    <div className="d-flex flex-row account">
      
      <AccountBoxOutlined className="cartIcon" />

      <div className="dropdown">
        <button
          className="cartBtn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          
        >
          Account
        </button>
        
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <a className="dropdown-item" href="#">
              <AccountBoxOutlined className="accountIcon" />My Account
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <TrackChangesOutlined className="accountIcon" />Order Tracking
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <BadgeOutlined className="accountIcon" />My Voucher
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <FavoriteBorderOutlined className="accountIcon" />My Wishlist
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <Settings className="accountIcon" />Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <LogoutOutlined className="accountIcon" />Sign Out
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};
