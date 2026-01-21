import React from "react";
import { Link } from "react-router-dom";
import blogImg from "./blog1.jpg";
import './blogs.css';


export const Blog1 = () => {
  return (
    <div className="container blogMain">
      <h1> Top 10 Must‑Have Gadgets for 2026 </h1>
      <div className="row">
        <div className="col-8">
          <p>
            <span className='textBold'> Intro: </span> Technology is evolving faster than ever, and shoppers want
            products that make life easier.
          </p>
          <p>
            <span className="textBold"> Body Highlights: </span>
            <ul>
              <li>
                - Smart home assistants that integrate with your daily routine
              </li>
              <li>- Wireless earbuds with noise cancellation</li>
              <li>- Portable power banks for travel</li>
              <li>- Fitness trackers with advanced health monitoring</li>
            </ul>
          </p>
        </div>
        <div className="col-4">
          <img src={blogImg} className="img-fluid" />
        </div>
      </div>
      <h6>
        Read other blogs - <Link to="/blogs"> click here</Link>
      </h6>
    </div>
  );
};
