import React, { useEffect, useState } from "react";
import "./detailsProduct.css";
import { useLocation } from "react-router-dom";

import { DetailsInfo } from "./detailsInfo";
import { DetailsProductImg } from "./detailsProductImg";
import { StarRating } from "../Home/starRating";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import { DetailsReview } from "./detailsReview";

import { FavoriteBorderOutlined } from "@mui/icons-material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { ShareOutlined } from "@mui/icons-material";


const DetailsBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#" },
  { label: "Snack" },
];

export const DetailsProduct = () => {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) return <p>Product not found</p>;

  useEffect(() => {
    const breadcrumb = document.getElementById("breadcrumb");
    if (breadcrumb) {
      breadcrumb.scrollIntoView({ behavior: "smooth" });
    }
  }, []);



  return (
    <div>
      <div className="detailsBreadcrumb mt-3" id="breadcrumb">
        <Breadcrumb items={DetailsBreadcrumb} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <DetailsProductImg images={product.images} />
          </div>

          <div className="col-lg-6 col-sm-12">
            <h1> {product.name} </h1>
            <div className="d-flex">
              <StarRating rating={product.ratingP} />
              <p className="mb-0 ms-3 reviews"> (32 reviews) </p>
            </div>
            <div className="d-flex mt-4 gap-2 prices">
              <h3> ₹{product.price - (product.price * 10) / 100} </h3>
              <h5> ₹{product.price} </h5>
            </div>
            <div className="mt-4">
              <p>{product.description || "No description available."}</p>
            </div>
            <div className="mt-4 buttons container">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <button className="btnP">
                    <ShoppingCartOutlined /> Add to cart
                  </button>
                </div>
                <div className="col-lg-2 col-sm-2">
                  <button className="btnP">
                    <FavoriteBorderOutlined />
                  </button>
                </div>
                <div className="col-lg-2 col-sm-2">
                  <button className="btnP">
                    <ShareOutlined />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailsInfo />
      <DetailsReview />
    </div>
  );
};
