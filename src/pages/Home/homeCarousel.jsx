import React, { useState } from "react";
import c1 from "../../assets/images/homeCarousel1.png";
import c2 from "../../assets/images/homeCarousel2.png";
import "./home.css";
import { EmailOutlined } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";


function SubscribeBtn() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(!clicked)}
      style={{
        backgroundColor: clicked ? '#fff' : '#ff6600' ,
        color: clicked ? '#ff6600' : '#fff' ,
        padding: '0.5rem 1rem',
        border: '1.5px solid #ff6600',
        borderRadius: '5px',
        width: '7.5rem',
        height: '3rem',
        transition: 'background-color 0.3s ease',
      }}
    >
      {clicked ? 'Unsubscribe' : 'Subscribe'}
    </button>
  );
}


export const HomeCarousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide m-lg-5 m-1 homeCarousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={c1} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-flex flex-column align-items-end carouselText">
            <h1 className="carouselHeading">Don't miss Amazing Deals!</h1>
            <h6>Sign up for daily newsletter.</h6>
            <div>
              <TextField
                type="email"
                className="carouselEmail me-2"
                placeholder="Your email address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                }}
              />
              <SubscribeBtn />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={c2} className="d-block w-100" alt="Slide 2" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

