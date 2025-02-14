import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="HomeBanner-container">
      <div className="bannerShadowWrapper">
        <div className="bannerDetails">
          <span className="iaseicra">IAS EICRA</span>
          <span className="bannerpara">
            An integrated initiative for Harmonizing Performing Arts, Culture,
            Sports & Education
            {/* a knowledge hub where wisdom merges with civil service training
            ,arts,music dance and sports */}
          </span>
          <button className="iasecrabtn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
