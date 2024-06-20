import React from 'react';
import './ExpansionPanels.css';

const ExpansionPanels = () => {
  return (
    <div className="expansion-panels-container">
      <div className="expansion-panel">
        <div className="panel-header">About</div>
        <div className="panel-content">Description about the product.</div>
      </div>
      <div className="expansion-panel">
        <div className="panel-header">Overview & Specs</div>
        <div className="panel-content">Overview and specifications of the product.</div>
      </div>
      <div className="expansion-panel">
        <div className="panel-header">Warranty</div>
        <div className="panel-content">Warranty details for the product.</div>
      </div>
      <button className="close-button">Close</button>
    </div>
  );
};

export default ExpansionPanels;
