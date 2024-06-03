import React, { useState } from 'react';
import './ImgWithFall.css';

const ImageWithFallback = ({ src, alt, fallbackSrc }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;
