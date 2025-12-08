import React, { useState } from "react";
import "./detailsInfo.css";
import { StarRating } from "../Home/starRating";
import { DetailsReview } from "./detailsReview";

import { useLocation } from "react-router-dom";

export const DetailsInfo = () => {
  const { state } = useLocation();
  const product = state?.product;

  const [active, setActive] = useState(1);

  const paragraphs = {
    1: (
      <div>
        <p>{product?.description || "No description available."}</p>
      </div>
    ),
    2: (
      <div><p>{product?.addInfo || "Not available."}</p></div>
    ),
    3: (
      <div><p>{product?.vendor || "No vendor found."}</p></div>
    ),
    4: (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="card p-4 mb-2">
                <h6>Aman</h6>
                <StarRating rating={3.9} />
                <p>"Really nice and comfortable to use."</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="card p-4 mb-2">
                <h6>Priya</h6>
                <StarRating rating={4.1} />
                <p>"Quality is really good."</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="card p-4 mb-2">
                <h6>Rahul</h6>
                <StarRating rating={4.0} />
                <p>"Audio quality is awesome."</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="card p-4 mb-2">
                <h6>Jatin</h6>
                <StarRating rating={4.5} />
                <p>"Really nice and comfortable to use."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };
  const [review, setReview] = useState(null);

  return (
    <div className="detailsInfo border">
      <button
        onClick={() => setActive(1)}
        className={active === 1 ? "detailsBtnActive" : "detailsBtn"}
      >
        Description
      </button>
      <button
        onClick={() => setActive(2)}
        className={active === 2 ? "detailsBtnActive" : "detailsBtn"}
      >
        Additional Info
      </button>
      <button
        onClick={() => setActive(3)}
        className={active === 3 ? "detailsBtnActive" : "detailsBtn"}
      >
        Vendor
      </button>
      <button
        onClick={() => setActive(4)}
        className={active === 4 ? "detailsBtnActive" : "detailsBtn"}
      >
        Reviews
      </button>
      <div className="mt-3">{paragraphs[active]}</div>
    </div>
  );
};
