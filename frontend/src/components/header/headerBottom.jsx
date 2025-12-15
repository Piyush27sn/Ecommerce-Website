import React from "react";
import { Link } from "react-router-dom";
import "./headerBottom.css";

import { CategoryOutlined } from "@mui/icons-material";
import { HeadphonesOutlined } from "@mui/icons-material";
import megaMenu from "../../assets/images/megaMenu.webp";

export const HeaderBottom = () => {
  return (
    <>
      <div className="top-row bg-light py-2 border-bottom border top">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-2 col-12">
              <div className="dropdown">
                <button
                  className="dropdown-toggle navBottomBtn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Browse All Categories
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">one</li>
                  <li className="dropdown-item">two</li>
                </ul>
              </div>
            </div>

            <nav className="col-lg-8 navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarNavDropdown"
                >
                  <ul className="navBottomMid navbar-nav">
                    <li>
                      <button>
                        <Link to="/" className="navBottomLink">
                          Home
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button>
                        <Link to="/about" className="navBottomLink">
                          About
                        </Link>
                      </button>
                    </li>
                    <li>
                      <Link to='/listing' className="navBottomLink">
                        <button>
                          Shop
                        </button>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Vendors
                        </button>
                        <ul className="dropdown-menu">
                          <li className="dropdown-item">one</li>
                          <li className="dropdown-item">two</li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown megaMenu position-static">
  <button
    className="nav-link dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Mega Menu
  </button>

  <div className="dropdown-menu w-100 mt-0 border-0 rounded-0">
    <div className="container-fluid bg-light py-4">
      <div className="row">
        {/* Fruit & Vegetables */}
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <h5>Fruit & Vegetables</h5>
          <Link className="dropdown-item" to="#">Fresh Vegetables</Link>
          <Link className="dropdown-item" to="#">Fresh Fruits</Link>
          <Link className="dropdown-item" to="#">Herbs & Seasonings</Link>
          <Link className="dropdown-item" to="#">Cuts & Sprouts</Link>
          <Link className="dropdown-item" to="#">Exotic Fruits & Veggies</Link>
          <Link className="dropdown-item" to="#">Packaged Produce</Link>
        </div>

        {/* Breakfast & Dairy */}
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <h5>Breakfast & Dairy</h5>
          <Link className="dropdown-item" to="#">Milk & Flavoured Milk</Link>
          <Link className="dropdown-item" to="#">Butter and Margarine</Link>
          <Link className="dropdown-item" to="#">Eggs Substitutes</Link>
          <Link className="dropdown-item" to="#">Marmalades</Link>
          <Link className="dropdown-item" to="#">Sour Cream</Link>
          <Link className="dropdown-item" to="#">Cheese</Link>
        </div>

        {/* Meat & Seafood */}
        <div className="col-12 col-md-6 col-lg-3 mb-3">
          <h5>Meat & Seafood</h5>
          <Link className="dropdown-item" to="#">Breakfast Sausage</Link>
          <Link className="dropdown-item" to="#">Dinner Sausage</Link>
          <Link className="dropdown-item" to="#">Chicken</Link>
          <Link className="dropdown-item" to="#">Sliced Deli Meat</Link>
          <Link className="dropdown-item" to="#">Wild Caught Fillets</Link>
          <Link className="dropdown-item" to="#">Crab and Shellfish</Link>
        </div>

        {/* Image */}
        <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
          <img src={megaMenu} alt="logo" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</li>
                    <li>
                      <div className="dropdown">
                        <button
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Blog
                        </button>
                        <ul className="dropdown-menu">
                          <li className="dropdown-item">one</li>
                          <li className="dropdown-item">two</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown pages">
                        <button
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Pages
                        </button>
                        <ul className="dropdown-menu px-2">
                          <li className="dropdown-item">About Us</li>
                          <li className="dropdown-item">Contact</li>
                          <li className="dropdown-item">My Account</li>
                          <li className="dropdown-item">Login</li>
                          <li className="dropdown-item">Register</li>
                          <li className="dropdown-item">Forgot Password</li>
                          <li className="dropdown-item">Reset Password</li>
                          <li className="dropdown-item">Purchase Guide</li>
                          <li className="dropdown-item">Privacy Policy</li>
                          <li className="dropdown-item">Terms of Service</li>
                          <li className="dropdown-item">404 Page</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <button>Contact</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>


            <div className="col-lg-2 col-12 helpC">
              <div className="container">
                <div className="row">
                  <div className="col-2 me-0 mt-1">
                    <HeadphonesOutlined className="supportIcon" />
                  </div>
                  <div className="col-10 ms-0 ps-0">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 helpC1">
                          <p>1800 - 990</p>
                        </div>
                        <div className="col-12 helpC2 pt-2">
                          <p>24/7 Support Center</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
