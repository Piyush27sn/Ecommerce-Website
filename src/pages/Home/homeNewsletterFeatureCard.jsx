import React from "react";
import { NewsletterFeaturesInfo } from "./newsletterFeaturesInfo";
import './homeNewsletterFeatureCard.css'

export const HomeNewsletterFeatureCard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {NewsletterFeaturesInfo.map((product) => {
          const Icon = product.image;
          return (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-12">
              <div className="container card pt-3">
                <div className="row">
                  <div className="col-3">
                    <Icon className="featureIcon" />
                  </div>
                  <div className="col-9">
                    <h6> {product.title} </h6>
                    <p> {product.info} </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
