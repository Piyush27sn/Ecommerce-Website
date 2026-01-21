import React from 'react'
import { Link } from 'react-router-dom'
import blogImg from "./blog4.jpg";
import './blogs.css';


export const Blog4 = () => {
  return (
    <div className="container blogMain">
      <h1> Sustainable Shopping: How Your Choices Make a Difference </h1>
      <div className="row">
        <div className="col-8">
          <p>
            <span className='textBold'> Intro: </span> Sustainability is a huge trend in e‑commerce, and customers want to feel good about their purchases.
          </p>
          <p>
            <span className="textBold"> Body Highlights: </span>
            <ul>
              <li>- Eco-friendly packaging and why it matters</li>
              <li>- Supporting local vendors and small business</li>
              <li>- Choosing reusable or recyclable products</li>
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
