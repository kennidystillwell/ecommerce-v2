import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
          {index === currentIndex && (
            <>
              <img src={image.src} alt={image.alt} />
              <div className="product-info">
                <h3>{image.title}</h3>
                <h4>{image.price}</h4>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;