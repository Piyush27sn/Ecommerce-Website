import React, { useState } from "react";
import "../header/header.css";
import logo from "../../assets/images/logo-nav.jpg";
import { Location } from "./location";

import { HeaderTop } from "./headerTop";
import { HeaderBottom } from "./headerBottom";

import { Cart } from "./navLinkBtn/cart";
import { Wishlist } from "./navLinkBtn/wishlist";
import { Account } from "./navLinkBtn/account";
import { Logout } from "../login-logout/logout";
import { Link, useNavigate } from "react-router-dom";
import { LoginBtn } from "../login-logout/loginBtn";
import { HeaderSearch } from "./headerSearch";
import { HeaderCategories } from "./headerCategories";

export const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");


  return (
    <>
      <header>

        < HeaderTop />

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img src={logo} className="navLogo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                <li className="nav-item dropdown">
                  <div className="container">
                    <div className="row">

                      <div className="col-4">
                        <HeaderCategories />
                      </div>

                      <div className="col-8">
                        <HeaderSearch />
                      </div>

                    </div>
                  </div>
                </li>

                <li>
                  <Location />
                </li>

                
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Wishlist />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Cart />
                  </a>
                </li>
                <li className="nav-item">
                  <Link to='/account' className="nav-link">
                    <Account />
                  </Link>
                </li>
                <li className="nav-item ps-4">
                  { token ? (
                      <a className="nav-link active" aria-current="page" href="/">
                        <Logout />
                      </a>
                    ) : (
                      <a  className="nav-link active" aria-current="page" href="/login">
                        <LoginBtn />
                      </a>
                    )
                  }
                </li>

              </ul>
            </div>
          </div>
        </nav>

          < HeaderBottom />

      </header>
    </>
  );
};
