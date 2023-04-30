import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Error424 = () => {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const handleColorChange = () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  }
    
  const handleMouseEnter = () => {
    document.body.style.cursor = 'none';
  }
  

  const handleMouseLeave = () => {
    document.body.style.cursor = "auto";
  }
  
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh', backgroundColor: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleColorChange}
    >
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you were looking for.</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error424;
