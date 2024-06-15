import React from "react";
import watch1 from "../../assets/Aboutwatch1.jpg";
import watch2 from "../../assets/Aboutwatch2.jpg";
import watch3 from "../../assets/Aboutwatch3.jpg";
import "./About.css";
function About() {
  return (
    <>
      <h1 className="firstHeading">About Aura Watches</h1>
      <div className="container-1">
        <div className="image-container-1">
          <img src={watch1} alt="" className="image1" />
        </div>
        <div className="text-section-1">
          <h3>Our Story</h3>
          <p>
            Aura Watches was born out of a passion for horology and a desire to
            offer distinctive timepieces that reflect both style and substance.
            Established in 2010 by a team of watch enthusiasts, Aura Watches
            quickly became synonymous with elegance and craftsmanship. Our
            journey began with a commitment to curate a collection of watches
            that embody innovation and timeless design.
          </p>
        </div>
      </div>

      <div className="container-2">
        <div className="text-section-2">
          <h3>Our Mission</h3>
          <p>
            At Aura Watches, our mission is to celebrate individuality through
            finely crafted timepieces. We believe that a watch is more than just
            an accessory; it's a statement of personal style and character. We
            strive to provide our customers with a curated selection of watches
            that blend tradition with modernity, offering something unique for
            every taste.
          </p>
        </div>
        <div className="image-container-2">
          <img src={watch2} alt="" className="image2" />
        </div>
      </div>
      <div className="container-3">
        <div className="image-container-3">
          <img src={watch3} alt="" className="image3" />
        </div>
        <div className="text-section-3">
          <h3>Our Commitment to Excellence</h3>
          <p>
            At Aura Watches, excellence is at the heart of everything we do. We
            are dedicated to providing an exceptional customer experience, from
            the moment you explore our collection to the day your watch arrives
            at your doorstep. Our team is committed to upholding the highest
            standards of service and integrity, ensuring that every interaction
            with us is both enjoyable and rewarding.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
