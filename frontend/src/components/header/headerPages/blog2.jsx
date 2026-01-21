import React from "react";
import { Link } from "react-router-dom";
import blogImg from "./blog2.jpg";
import './blogs.css';


export const Blog2 = () => {
  return (
    <div className="container blogMain">
      <h1> Healthy Eating Made Easy: Fresh Picks from Our Store </h1>
      <div className="row">
        <div className="col-8">
          <p>
            <span className='textBold'> Intro: </span> Customers love practical tips on how to eat better without
            sacrificing convenience.
          </p>
          <p>
            <span className="textBold"> Body Highlights: </span>
            <ul>
              <li>- Benefits of buying fresh fruits and vegetables online</li>
              <li>- Quick breakfast ideas using dairy and grains</li>
              <li>- How to store produce for longer freshness</li>
            </ul>
          </p>
        </div>
        <div className="col-4">
            <img src={blogImg} className="img-fluid" />
        </div>
      </div>
      <h6>
        Browse vegetables and fruits now -{" "}
        <Link to="/category/Vegetables%20&%20Fruits"> Click here </Link>
      </h6>
      <h6>
        Read other blogs - <Link to="/blogs"> click here</Link>
      </h6>
    </div>
  );
};
