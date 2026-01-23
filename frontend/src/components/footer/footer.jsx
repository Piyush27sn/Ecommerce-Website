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
import { Link } from 'react-router-dom';

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
            <Link className="footerLink" to='/about'><p>About Us</p></Link>
            <Link className="footerLink" to='/about'><p>Delivery Information</p></Link>
            <Link className="footerLink" to='/about'><p>Privacy Policy</p></Link>
            <Link className="footerLink" to='/about'><p>Terms & Conditions</p></Link>
            <Link className="footerLink" to='/about'><p>Contact Us</p></Link>
            <Link className="footerLink" to='/about'><p>Support Center</p></Link>
            <Link className="footerLink" to='/about'><p>Careers</p></Link>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 ps-4 pe-0">
            <h4>Account</h4>
            <Link className="footerLink" to='/account'><p>Manage Account</p></Link>
            <Link className="footerLink" to='/register'><p>Sign in</p></Link>
            <Link className="footerLink" to='/cart'><p>View Cart</p></Link>
            <Link className="footerLink" to='/wishlist'><p>My Wishlist</p></Link>
            <Link className="footerLink" to='/track-order'><p>Track my Order</p></Link>
            <Link className="footerLink" to='/help'><p>Help Ticket</p></Link>
            <Link className="footerLink" to='/about'><p>Shipping Details</p></Link>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 ps-4 pe-0">
            <h4>Corporate</h4>
            <Link className="footerLink" to='/blogs'><p>Read our Blogs</p></Link>
            <Link className="footerLink" to='/contact-us'><p>Contact Us</p></Link>
            <Link className="footerLink" to='/about'><p>Become a Vendor</p></Link>
            <Link className="footerLink" to='/about'><p>Farm Careers</p></Link>
            <Link className="footerLink" to='/about'><p>Our Suppliers</p></Link>
            <Link className="footerLink" to='/about'><p>Accessiblity</p></Link>
            <Link className="footerLink" to='/about'><p>Promotions</p></Link>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 ps-4 pe-0">
            <h4>Categories</h4>
            <Link className="footerLink" to='/category/Cake%20&%20Milk'><p>Cake & Milk</p></Link>
            <Link className="footerLink" to='/category/Coffee%20&%20Tea'><p>Coffee & Tea</p></Link>
            <Link className="footerLink" to='/category/Drinks'><p>Drinks</p></Link>
            <Link className="footerLink" to='/category/Electronics'><p>Electronics</p></Link>
            <Link className="footerLink" to='/category/Kitchen'><p>Kitchen</p></Link>
            <Link className="footerLink" to='/category/Pet%20Food'><p>Pet Food</p></Link>
            <Link className="footerLink" to='/category/Shoes'><p>Shoes</p></Link>
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
