import React, { useEffect, useState } from "react";
import "./detailsProduct.css";
import { useParams } from "react-router-dom";

import { DetailsInfo } from "./detailsInfo";
import { DetailsProductImg } from "./detailsProductImg";
import { StarRating } from "../Home/starRating";
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import { DetailsReview } from "./detailsReview";

import { FavoriteBorderOutlined } from "@mui/icons-material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { ShareOutlined } from "@mui/icons-material";

import { useContext } from "react";
import { CartContext } from "../Cart/cartContext";


const DetailsBreadcrumb = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#" },
  { label: "Snack" },
];

export const DetailsProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data))
    .catch((err) => console.error("Error fetching product: ", err));
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behaviour: "smooth "});
  }, [id]);

  if (!product) return <p>There was an error while loading the product.</p>;


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
                  <button className="btnP" onClick={() => addToCart(product)}>
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
