import React from "react";
import logo from "../../assets/images/logo-footer.jpg";
import { LocationOnOutlined, YouTube } from "@mui/icons-material";
import { CallOutlined } from "@mui/icons-material";
import { EmailOutlined } from "@mui/icons-material";
import { HourglassBottomOutlined } from "@mui/icons-material";
import downloadlogo from "../../assets/images/footer/download.png";
import paymentlogo from "../../assets/images/footer/payment.png";

import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Pinterest } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="border-top pt-4">
      <div className="container me-5 ms-5 pe-0 ps-0 footerMain">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-sm-12 firstCol ps-0 pe-0">
            <img src={logo} className="footerLogo" />
            <h6>Ecommerce website for everything.</h6>
            <p>
              <LocationOnOutlined />
              Address: 5171 W Campbell Ave, 53127
            </p>
            <p>
              <CallOutlined />
              Call Us: (+91)-99999-00000
            </p>
            <p>
              <EmailOutlined />
              Email: sale@nest.com
            </p>
            <p>
              <HourglassBottomOutlined />
              Hours: 10:00 - 18:00 Mon-Sat
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 ps-4 pe-0">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
            <p>Support Center</p>
            <p>Careers</p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 ps-4 pe-0">
            <h4>Account</h4>
            <p>Sign in</p>
            <p>View Cart</p>
            <p>My Wishlist</p>
            <p>Trach my Order</p>
            <p>Help Ticket</p>
            <p>Shipping Details</p>
            <p>Compare Products</p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 ps-4 pe-0">
            <h4>Corporate</h4>
            <p>Become a Vendor</p>
            <p>Affiliate Program</p>
            <p>Farm Business</p>
            <p>Farm Careers</p>
            <p>Our Suppliers</p>
            <p>Accessiblity</p>
            <p>Promotions</p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 ps-4 pe-0">
            <h4>Popular</h4>
            <p>Milk & Flavoured Milk</p>
            <p>Butter and Margarine</p>
            <p>Eggs Substitutes</p>
            <p>Marmalades</p>
            <p>Sour Cream and Dips</p>
            <p>Tea & Kombucha</p>
            <p>Cheese</p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 ps-0 pe-0">
            <h4>Install App</h4>
            <p className="mb-0">From App Store or Google Play</p>
            <img src={downloadlogo} className="mb-4 mt-2 footerLogo" />
            <p className="mb-0">Secured Payment Gateways</p>
            <img src={paymentlogo} className="mt-2 mb-4 footerLogo" />
          </div>
        </div>
      </div>

      <div className="container footerBottom">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <p className="m-0">©2025, Ecommerce Website</p>
            <p>All rights reserved</p>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="container">
              <div className="row">
                <div className="col-6 d-flex">
                  <CallOutlined />
                  <div className="ps-1">
                    <p className="m-0">1900-6666</p>
                    <p>Working 8:00 - 22:00</p>
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <CallOutlined />
                  <div className="ps-1">
                    <p className="m-0">1900-6666</p>
                    <p>Working 8:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex flex-column align-items-end">
            <p className="m-0">Follow Us: <Instagram /> <Twitter /> < Pinterest /> <Facebook /> </p>
            <p>Upto 15% discount on your first order.</p>
          </div>
        </div>
      </div>

    </footer>
  );
};
