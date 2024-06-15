import React from "react";
import T1 from "../../assets/Technology1.jpg";
import T2 from "../../assets/Technology2.jpg";
import T3 from "../../assets/Technology3.jpg";
import T4 from "../../assets/Technology4.webp";
import "./Technology.css";

function Technology() {
  return (
    <>
      <h1 className="firstHeading">Technology</h1>

      <div className="containerTech-1">
        <div className="text-sectionTech-1">
          <h3>WATCH TECHNOLOGY</h3>
          <p>
            Since their invention, timepieces have been impressing viewers with
            intricate machinery and advanced technology.
          </p>
          <p>
            Be it a modern mechanical piece powered by gravity or an accurate
            pendant requiring constant winding, have always inspired the
            imagination and served the wearer. Today's watches may be most often
            used as luxury fashion accessories, while a marvelous history lies
            hidden beneath the dial.
          </p>
        </div>
        <div className="image-containerTech-1">
          <img src={T1} alt="" className="imageTech1" />
        </div>
      </div>

      <div className="containerTech-2">
        <div className="image-containerTech-2">
          <img src={T2} alt="" className="imageTech2" />
        </div>
        <div className="text-sectionTech-2">
          <h3>THE CLOCKWATCH</h3>
          <p>
            The first timepieces weren't meant to be used for time-telling, as
            they were far too inaccurate.
          </p>
          <p>
            Instead, they were novelty pendants. Called "clock watches," they
            were spherical brass pendants that delighted early 16th century
            nobility. They were invented by Peter Henlein towards the beginning
            of the century.
          </p>
          <p>
            Some had rudimentary complications like alarms and chimes, but they
            still were inaccurate by hours. In fact, many of them did not even
            have a second hand.
          </p>
        </div>
      </div>

      <div className="containerTech-3">
        <div className="text-sectionTech-3">
          <h3>THE POCKET WATCH</h3>
          <p>
            Ocket watches became popular along with the waistcoat. As their name
            implies, they are meant to be worn in the pocket.
          </p>
          <p>
            Early pocket watches were not especially accurate - sometimes being
            hours off - but great advancements in horology in the later half of
            the century allowed for far more precise and useful pieces.
          </p>
          <p>
            Note that, around this time, only men (with some exceptions) had
            pocket watches. Women still wore pendants, which would continue for
            centuries.
          </p>
        </div>
        <div className="image-containerTech-3">
          <img src={T3} alt="" className="imageTech3" />
        </div>
      </div>

      <div className="containerTech-4">
        <div className="image-containerTech-4">
          <img src={T4} alt="" className="imageTech4" />
        </div>
        <div className="text-sectionTech-4">
          <h3>THE MECHANICAL WRISTWATCH</h3>
          <p>
            
The actual origin of mechanical wristwatches is disputed. Many attribute them to Abraham-Louis Breguet of the eponymous brand in 1810, but some assert that the first was an “arm watch” given in 1571.
          </p>
          <p>
          Regardless, it wasn't until the 19th century before wristwatches became popular for men and women alike. This is largely due to their functionality, as they were frequently used in Great Britain's colonial wars and,
          </p>
          <p>
          later, by the various nations involved in World War I and II. Mechanical wristwatches are still worn today and admired for their intricate machinery and artistic design..
          </p>
        </div>
      </div>
      {/* <div className="containerTech-3">
        <div className="text-sectionTech-3">
          <h3>WATCH TECHNOLOGY</h3>
          <p>
            Since their invention, timepieces have been impressing viewers with
            intricate machinery and advanced technology.
          </p>
          <p>
            Be it a modern mechanical piece powered by gravity or an accurate
            pendant requiring constant winding, have always inspired the
            imagination and served the wearer. Today's watches may be most often
            used as luxury fashion accessories, while a marvelous history lies
            hidden beneath the dial.
          </p>
        </div>
        <div className="image-containerTech-3">
          <img src={T3} alt="" className="imageTech3" />
        </div>
      </div> */}
    </>
  );
}

export default Technology;
