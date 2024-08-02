import React from 'react';
import './ImageGrid.css'; // Ensure you create this CSS file

const ImageGrid = () => {
  const images = [
    "https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/Browse%20By%20Category/rings.webp",
    "https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/Browse%20By%20Category/rings.webp",
    "https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/Browse%20By%20Category/rings.webp",
    "https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/Browse%20By%20Category/rings.webp",
    "https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/Browse%20By%20Category/rings.webp",
    "https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/Browse%20By%20Category/rings.webp",
    "https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/Browse%20By%20Category/rings.webp",
    "https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/Browse%20By%20Category/rings.webp",
    "https://cf-cdn.pcjeweller.com/public/uploads/editor-images/top%20trending%20clxn/Browse%20By%20Category/rings.webp"
  ];

  return (
    <div className="image-grid-container">
      <h2 className="image-grid-title">Our Gallery</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-grid-item">
            <img src={image} alt={`Gallery item ${index + 1}`} className="image-grid-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
