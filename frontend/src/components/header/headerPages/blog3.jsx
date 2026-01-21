import React from 'react'
import { Link } from 'react-router-dom'
import blogImg from "./blog3.jpg";
import './blogs.css';


export const Blog3 = () => {
  return (
    <div className="container blogMain">
      <h1> Gift Guide 2026: Perfect Presents for Every Occasion </h1>
      <div className="row">
        <div className="col-8">
          <p>
            <span className='textBold'> Intro: </span> Shoppers often search for inspiration during birthdays, anniversaries, or holidays.
          </p>
          <p>
            <span className="textBold"> Body Highlights: </span>
            <ul>
              <li>- Affordable gifts under ₹1000</li>
              <li>- Luxury picks for special milestones</li>
              <li>- Personalized items (engraved, custom colors, etc.)</li>
              <li>- Seasonal bundles or curated gift boxes</li>
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
  )
}
