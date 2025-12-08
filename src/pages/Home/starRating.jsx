import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

export const StarRating = ({rating}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating d-flex align-items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="text-warning me-1"
        />
      ))}
      {hasHalfStar && (
        <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning me-1" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          className="text-secondary me-1"
          style={{ opacity: 0.3 }}
        />
      ))}
      <span className="ms-2">({rating.toFixed(1)})</span>
    </div>
  );
};
