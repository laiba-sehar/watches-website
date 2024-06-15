import React from "react";
import lifestyle from '../../assets/LifestyleEdit.png';
import './Edit.css'

function Edit() {
  return (
    <>
    <h1 className="firstHeading">The Lifestyle Edit</h1>
    <div className="container">
      <div className="text-section">
        <h3>
          Timeless Style Upgrade: Elevate Your Look with Exquisite Watches
        </h3>
        <p>
          Watches have a remarkable ability to enhance a man's appearance and
          attractiveness by conveying sophistication, attention to detail, and a
          sense of style. Beyond merely telling time, a well-chosen watch serves
          as a subtle yet powerful statement of one's personality and status.
          Whether it's a classic timepiece exuding timeless elegance or a
          modern, sleek design reflecting contemporary taste, a watch adds a
          touch of refinement to any ensemble.
        </p>
        <button className="button">Shop Now</button>
      </div>
      <div className="image-container">
      <img src={lifestyle} alt="" className="image"/>
      </div>
    </div>
    </>
  );
}

export default Edit;
