import React from "react";
import "./PageTop.css";

const PageTop = ({ pageName }) => {
  return (
    <div className="PageTop-container">
      <div className="PageTop-Shadow"></div>
      <h1>{pageName}</h1>
    </div>
  );
};

export default PageTop;
