import React from "react";
import './headerTop.css'

export const HeaderTop = () => {
  return (
    <>
      <div className="top-row bg-light py-2 border-bottom headerTop">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="text-muted small">
            <button className='navTopBtn'>About Us</button>
            <button className='navTopBtn'>My Account</button>
            <button className='navTopBtn'>Wishlist</button>
            <button className='navTopBtn'>Order Tracking</button>
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
