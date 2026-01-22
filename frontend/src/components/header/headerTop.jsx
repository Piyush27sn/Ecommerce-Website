import React from "react";
import { Link } from 'react-router-dom';
import './headerTop.css'

export const HeaderTop = () => {
  return (
    <>
      <div className="top-row bg-light py-2 border-bottom headerTop">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="text-muted small">
            <Link to="/about" className="navTopBtn">
              About Us
            </Link>
            <Link to="/account" className="navTopBtn">
              My Account
            </Link>
            <Link to="/wishlist" className="navTopBtn">
              Wishlist
            </Link>
            <Link to="/cart" className="navTopBtn">
              Cart
            </Link>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div className="navTopBtn">Need help? Call us at 
            <span><a href="#" className="me-3 ps-2">
               +91 99999-00000
            </a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
