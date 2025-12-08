import React, { useState } from "react";
import "../header/header.css";
import logo from "../../assets/images/logo-nav.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { categories } from "./categories";
import { Location } from "./location";

import { HeaderTop } from "./headerTop";
import { HeaderBottom } from "./headerBottom";

import { Cart } from "./navLinkBtn/cart";
import { CompareIt } from "./navLinkBtn/compare";
import { Wishlist } from "./navLinkBtn/wishlist";
import { Account } from "./navLinkBtn/account";

export const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const closeSelect = (index) => {
    setSelectedIndex(index);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header>

        < HeaderTop />

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
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
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {categories[selectedIndex]}
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <input
                              type="text"
                              className="form-control mb-2"
                              placeholder="Search categories..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                          </li>
                          {filteredCategories.length > 0 ? (
                            filteredCategories.map((cat, index) => (
                              <li
                                key={index}
                                onClick={() => {
                                  closeSelect(categories.indexOf(cat));
                                  setSearchTerm(""); // optional: clear search after selection
                                }}
                                className={`${
                                  selectedIndex === categories.indexOf(cat)
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <a className="dropdown-item">{cat}</a>
                              </li>
                            ))
                          ) : (
                            <li className="dropdown-item text-muted">
                              No matches found
                            </li>
                          )}

                          <li
                            onClick={() => closeSelect(0)}
                            className={`${selectedIndex === 0 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">All Categories</a>
                          </li>
                          <li
                            onClick={() => closeSelect(1)}
                            className={`${selectedIndex === 1 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">Milk & Dairy</a>
                          </li>
                          <li
                            onClick={() => closeSelect(2)}
                            className={`${selectedIndex === 2 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">Wines & Drinks</a>
                          </li>
                          <li
                            onClick={() => closeSelect(3)}
                            className={`${selectedIndex === 3 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">Clothing & Beauty</a>
                          </li>
                          <li
                            onClick={() => closeSelect(4)}
                            className={`${selectedIndex === 4 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">Fresh Seafood</a>
                          </li>
                          <li
                            onClick={() => closeSelect(5)}
                            className={`${selectedIndex === 5 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">Pet Foods & Toys</a>
                          </li>
                          <li
                            onClick={() => closeSelect(6)}
                            className={`${selectedIndex === 6 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">Fast Food</a>
                          </li>
                          <li
                            onClick={() => closeSelect(7)}
                            className={`${selectedIndex === 7 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">Baking Material</a>
                          </li>
                          <li
                            onClick={() => closeSelect(8)}
                            className={`${selectedIndex === 8 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">Vegetables</a>
                          </li>
                          <li
                            onClick={() => closeSelect(9)}
                            className={`${selectedIndex === 9 ? "active" : ""}`}
                          >
                            <a className="dropdown-item">Fresh Fruit</a>
                          </li>
                          <li
                            onClick={() => closeSelect(10)}
                            className={`${
                              selectedIndex === 10 ? "active" : ""
                            }`}
                          >
                            <a className="dropdown-item">Bread and Juice</a>
                          </li>
                        </ul>
                      </div>

                      <div className="col-8">
                        <form className="d-flex" role="search">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search for items..."
                            aria-label="Search"
                          ></input>
                          <button className="searchBtn" type="submit">
                            <SearchIcon />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Location />
                </li>

                <li className="nav-item ps-4">
                  <a className="nav-link active" aria-current="page" href="#">
                    <CompareIt />
                  </a>
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
                  <a className="nav-link" href="#">
                    <Account />
                  </a>
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
