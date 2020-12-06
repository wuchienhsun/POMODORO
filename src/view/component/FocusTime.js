import React, { useState } from "react";
import "../../style/FocusTime.scss";


const FocusTime = props => {
  return (
    <div className="FocusTime-container">
      <div className="FocusTime-title-container">
        <div className="FocusTime-title-text">{props.name}</div>
        <div></div>
      </div>
      <div className="FocusTime-detail-container">
        <div className="FocusTime-detail-content-container">
          <div className="FocusTime-detail-content-title">today</div>
          <div className="FocusTime-detail-content-value-container">
            <div className="FocusTime-detail-content-value">20</div>
            <div className="FocusTime-detail-content-caption">/tomato</div>
          </div>
        </div>
        <div className="FocusTime-detail-content-container">
          <div className="FocusTime-detail-content-title">week</div>
          <div className="FocusTime-detail-content-value-container">
            <div className="FocusTime-detail-content-value">108</div>
            <div className="FocusTime-detail-content-caption">/tomato</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusTime;
