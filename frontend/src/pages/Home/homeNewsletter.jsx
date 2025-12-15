import React, { useState } from "react";
import newsletter from "../../assets/images/homeNewsletter.jpg";
import "./homeNewsletter.css";
import { InputAdornment, TextField } from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";
import { HomeNewsletterFeatureCard } from "./homeNewsletterFeatureCard";
import { NewsletterFeaturesInfo } from "./newsletterFeaturesInfo";

function SubscribeBtn2() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(!clicked)}
      style={{
        backgroundColor: clicked ? "#fff" : "#ff6600",
        color: clicked ? "#ff6600" : "#fff",
        padding: "0.5rem 1rem",
        border: "1.5px solid #ff6600",
        borderRadius: "5px",
        width: "7.5rem",
        height: "3rem",
        transition: "background-color 0.3s ease",
      }}
    >
      {clicked ? "Unsubscribe" : "Subscribe"}
    </button>
  );
}

export const HomeNewsletter = () => {
  return (
    <>
      <div className="m-lg-5 m-1 newsletter">
        <img src={newsletter} className="img-fluid" />

        <div className="newsletterText">
          <h1>
            Stay home & get your daily
            <br />
            needs from our shop.
          </h1>
          <p>Start your daily shopping with <span className="Ecommerce">Ecommerce</span>.</p>
          <div className="neL">
            <TextField
              type="email"
              className="newsletterEmail me-2"
              placeholder="Your email address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <div className="newsBtn"><SubscribeBtn2 /></div>
          </div>
        </div>
              <HomeNewsletterFeatureCard NewsletterFeaturesInfo={NewsletterFeaturesInfo} />
      </div>
    </>
  );
};
