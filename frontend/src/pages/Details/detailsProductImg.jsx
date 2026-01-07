import React, { useEffect, useRef, useState } from "react";
import "./detailsProductImg.css";

export const DetailsProductImg = ({ images = [] }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  const imgRef = useRef(null);

  useEffect(() => {
    if (images.length > 0) {
      setMainImg(`http://localhost:5000/images/${images[0]}`);
    }
  }, [images]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transformOrigin = "center";
  };

  return (
    <div className="imgContainer">
      <div className="mainImgWrapper">
        {mainImg && (
          <img
            ref={imgRef}
            src={mainImg}
            alt="Product"
            className="mainImg border"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        )}
        <div className="zoomLens" />
      </div>

      <div className="thumbnailRow">
        {images.map((img, index) => {
          const fullUrl = `http://localhost:5000/images/${img}`;
          return (
            <img
              key={index}
              src={fullUrl}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${mainImg === fullUrl ? "active" : ""} border`}
              onClick={() => setMainImg(fullUrl)}
            />
          );
        })}
      </div>
    </div>
  );
};
