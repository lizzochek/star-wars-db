import React from "react";
import "./error.css";
import icon from "./death-star.png";

const Error = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error-icon" />
      <span className="boom">BOOM!</span>
      <span>Something went wrong!</span>
    </div>
  );
};

export default Error;
