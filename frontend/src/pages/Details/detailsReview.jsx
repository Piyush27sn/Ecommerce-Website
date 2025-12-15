import React, { useState } from "react";
import "./detailsReview.css";
import { Form } from "react-bootstrap";

export const DetailsReview = () => {
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);

  const [formData, setFormData] = useState({
    comment: "",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = { rating, ...formData };
    console.log("Review submitted:", reviewData);

    onSubmitReview(reviewData); // pass data up
    setClicked(true);



  setClicked(true);
  };

  const [clicked, setClicked] = useState(false);


  return (
    <>
      <Form onSubmit={handleSubmit} className="pt-5 ps-5 pe-5 detailsReview">
        <h4>Add a review</h4>

        <div className="mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                cursor: "pointer",
                color: (hover || rating) >= star ? "#ffc107" : "#e4e5e9",
                fontSize: "1.5rem",
              }}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Write Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Your review..."
          />
        </Form.Group>

        <button className={ clicked ? "submitted" : "submit"} type="submit" onClick={ () => setClicked(!clicked)}>
          { clicked ? "Submitted !" : "Submit Review"}
        </button>

      </Form>
    </>
  );
};
