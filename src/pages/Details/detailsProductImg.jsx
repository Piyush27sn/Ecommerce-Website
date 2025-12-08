import React, { useRef, useState } from "react";
import "./detailsProductImg.css";


export const DetailsProductImg = ({ images = [] }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  const imgRef = useRef(null);

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
        <img 
        ref={imgRef}
        src={mainImg} 
        alt="Product" 
        className="mainImg border" 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        />
        <div className="zoomLens" />
      </div>

      <div className="thumbnailRow">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={"Thumbnail ${index + 1}"}
            className={`thumbnail ${mainImg === img ? "active" : ""} border`}
            onClick={() => setMainImg(img)}
          />
        ))}
      </div>
    </div>
  );
};
