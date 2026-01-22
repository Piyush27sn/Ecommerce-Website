import React from "react";
import { Link } from "react-router-dom";
import "./headerBottom.css";

import { CategoryOutlined } from "@mui/icons-material";
import { HeadphonesOutlined } from "@mui/icons-material";
import megaMenu from "../../assets/images/megaMenu.webp";
import { Dropdown } from "react-bootstrap";

export const HeaderBottom = () => {
  return (
    <>
      <div className="top-row bg-light py-2 border-bottom border top">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-2 col-12">
              <div className="">
                <Link to='/listing'>
                <button className="navBottomBtn">
                  Browse All Categories
                </button>
                </Link>
              </div>
            </div>

            <nav className="col-lg-8 navbar navbar-expand-lg navbar-light bg-light navBottomMidList">
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
                      <Link to="/listing" className="navBottomLink">
                        <button>Shop</button>
                      </Link>
                    </li>
                    <li>
                      <button>
                        <Link to="/about" className="navBottomLink">
                          About
                        </Link>
                      </button>
                    </li>
                    <li>
                      <Dropdown>
                        <Dropdown.Toggle
                          className="text-black"
                          variant="secondary"
                        >
                          Vendors
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Vendor - One</Dropdown.Item>
                          <Dropdown.Item>Vendor - Two</Dropdown.Item>
                          <Dropdown.Item>Vendor - Three</Dropdown.Item>
                          <Dropdown.Item>Vendor - Four</Dropdown.Item>
                          <Dropdown.Item>Vendor - Six</Dropdown.Item>
                          <Dropdown.Item>Vendor - Seven</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="nav-item dropdown megaMenu position-static">
                      <Dropdown className="megaMenu position-static">
                        <Dropdown.Toggle
                          variant="link"
                          className="nav-link dropdown-toggle"
                          id="megaMenuDropdown"
                        >
                          Mega Menu
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="w-100 mt-0 border-0 rounded-0">
                          <div className="container-fluid bg-light py-4">
                            <div className="row">
                              {/* Fruit & Vegetables */}
                              <div className="col-12 col-md-6 col-lg-3 mb-3">
                                <h5>Fruit & Vegetables</h5>
                                <Link className="dropdown-item" to="#">
                                  Fresh Vegetables
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Fresh Fruits
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Herbs & Seasonings
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Cuts & Sprouts
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Exotic Fruits & Veggies
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Packaged Produce
                                </Link>
                              </div>
                              {/* Breakfast & Dairy */}
                              <div className="col-12 col-md-6 col-lg-3 mb-3">
                                <h5>Breakfast & Dairy</h5>
                                <Link className="dropdown-item" to="#">
                                  Milk & Flavoured Milk
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Butter and Margarine
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Eggs Substitutes
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Marmalades
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Sour Cream
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Cheese
                                </Link>
                              </div>

                              {/* Meat & Seafood */}
                              <div className="col-12 col-md-6 col-lg-3 mb-3">
                                <h5>Meat & Seafood</h5>
                                <Link className="dropdown-item" to="#">
                                  Breakfast Sausage
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Dinner Sausage
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Chicken
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Sliced Deli Meat
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Wild Caught Fillets
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Crab and Shellfish
                                </Link>
                              </div>
                              {/* Image */}
                              <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
                                <img
                                  src={megaMenu}
                                  alt="logo"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <button>
                        <Link to="/blogs" className="navBottomLink">
                          Blogs
                        </Link>
                      </button>
                    </li>
                    <li>
                      <Dropdown>
                        <Dropdown.Toggle
                          className="text-black"
                          variant="secondary"
                        >
                          Pages
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to='/account'>Account</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/listing'>Shop</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/cart'>Cart</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/wishlist'>Wishlist</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/blogs'>Blogs</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/about'>About</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/contact-us'>Contact</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/404-page-not-found'>Page not found</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <button>
                        <Link to="/contact-us" className="navBottomLink">
                          Contact
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="col-lg-2 col-12 helpC">
              <div className="container helpBtn">
                <div className="row">
                  <div className="col-2">
                    <HeadphonesOutlined className="supportIcon" />
                  </div>
                  <div className="col-10 ms-0 ps-0">
                    <div className="container">
                      <Link style={{textDecoration: 'none'}} to='/contact-us'>
                      <div className="row">
                        <div className="col-12 helpC1">
                          <h6>1800 - 990</h6>
                        </div>
                        <div className="col-12 helpC2 pt-2">
                          <h6>24/7 Support Center</h6>
                        </div>
                      </div>
                      </Link>
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
