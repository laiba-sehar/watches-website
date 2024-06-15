import React from "react";
import Tip1 from "../../assets/Tip1.jpg";
import second from "../../assets/SecondTip.avif";
import Tip2 from "../../assets/Tip2.avif";
import Tip3 from "../../assets/Tip3.avif";
import "./Tips.css";

function Tips() {
  return (
    <>
      <div className="imageTip1">
        <img src={Tip1} alt="" className="TipImage" />
      </div>
      <div className="mainTips-container">
        <div className="paragraph1-container">
          <div className="first-para">
            <h1> FIVE TIPS FOR WATCH CARE </h1>
            <p>
              Your watch has enemies. They include dirt, dust, moisture, and
              shocks, to say nothing about temperature extremes and UV
              radiation. For more than a century, watchmakers like IWC have
              developed and utilized engineering solutions to fight these
              enemies. Today, technology has produced watches that are more
              sealed and shockproof than ever.
            </p>
            <p>
              But still the front-line attack against these enemies must be done
              by the individual user. No fine mechanical watch will work well if
              it is maltreated, even inadvertently, and all mechanical watches
              are inherently intricate mechanisms, usually involving 200 to 400
              movement parts, many of which are minuscule in size. To keep these
              parts running well requires care and maintenance.
            </p>
            <p>
              As a watch collector for more than three decades, I've been guided
              by numerous principles to keep my watches in top shape. Some of
              these I've learned the hard way —such as dropping a watch while
              winding it —and others involve using common sense or following
              “rules” that you can find from maintenance guides on the Internet.
              Not surprisingly, given the diversity of opinion about watches
              generally, not everyone concurs about everything pertaining to
              watch maintenance. That's fine, too; if it works for you, that
              might be good enough. But my tips are follows:
            </p>
          </div>
        </div>

        <div className="containerTip-1">
          <div className="image-containerTip-1">
            <img src={second} alt="" className="imageTip-1" />
          </div>
          <div className="text-sectionTip-1">
            <h3>1.KEEP YOUR WATCH WOUND.</h3>
            <p>
              Even though modern lubricants are long lasting, they do dry or
              conceal over time. An appropriately lubricated watch will work
              better and longer. Winding keeps the watch working, and spreads
              the lubricants.
            </p>
            <p>
              You don't have to do this daily for every watch; for example, I
              have dozens of pocket watches and try to wind them once monthly.
              Most watches are regulated and adjusted at a state of full wind.
              As the mainspring uncoils, isochronism error can creep in: it's
              usually slight, but accuracy should be best with a fully wound
              watch.
            </p>
            <p>
              For a manual wind watch, it's a good habit to consistently wind it
              at the same time each day. I try to do so early in the morning as
              I dress for the day. For 7 or 8-day movements, I recently learned
              an expression: “Sunday is wind-day”.
            </p>
          </div>
        </div>
      </div>
      <div className="paragraph2-container">
        <div className="text-sectionTip-2">
          <h3>2. DON'T WIND YOUR WATCH ON YOUR WRIST.</h3>
          <p>
            When you access the crown while the watch is on your wrist, most
            people tilt the crown side of the watch up. That creates pressure on
            the stem, and I've seen them bend or break.
          </p>
        </div>
      </div>

      <div className="paragraph3-container">
        <div className="text-sectionTip-3">
          <h3>3. BE CAREFUL WHERE YOU WIND YOUR WATCH.</h3>
          <p>
            Now that you're taking the watch off your wrist to wind it, don't
            wind it walking down the street or anywhere there's a hard surface.
            I once wound my Regulateur Tourbillon in the bathroom, and it fell
            on the tile floor. My beloved watch thankfully survived with just a
            few nicks, but I think my heart stopped for seconds. Lesson learned.
          </p>
        </div>
      </div>

      <div className="containerTip-4">
        <div className="text-sectionTip-4">
          <h3>4.KEEP IT CLEAN, BUT NEVER WITH SOAP.</h3>
          <p>
            Even though modern lubricants are long lasting, they do dry or
            conceal over time. An appropriately lubricated watch will work
            better and longer. Winding keeps the watch working, and spreads the
            lubricants.
          </p>
          <p>
            You don't have to do this daily for every watch; for example, I have
            dozens of pocket watches and try to wind them once monthly. Most
            watches are regulated and adjusted at a state of full wind. As the
            mainspring uncoils, isochronism error can creep in: it's usually
            slight, but accuracy should be best with a fully wound watch.
          </p>
          <p>
            For a manual wind watch, it's a good habit to consistently wind it
            at the same time each day. I try to do so early in the morning as I
            dress for the day. For 7 or 8-day movements, I recently learned an
            expression: “Sunday is wind-day”.
          </p>
        </div>
        <div className="image-containerTip-4">
          <img src={Tip2} alt="" className="imageTip4" />
        </div>
      </div>

      <div className="containerTip-5">
          <div className="image-containerTip-5">
            <img src={Tip3} alt="" className="imageTip-5" />
          </div>
          <div className="text-sectionTip-5">
            <h3>5. SPEAKING OF WATER, CHECK THOSE GASKETS AND SEALS REGULARLY.</h3>
            <p>
            A watch might have a high water resistance rating, but the material used in gaskets and seals can dry out,
            </p>
            <p>
            A watch might have a high water resistance rating, but the material used in gaskets and seals can dry out,
            </p>
            <p>
            Many watchmakers have machines to check water resistance via pressure settings, and it is not a costly nor time-consuming test.
            </p>
            <p>If I'm not wearing a diving watch with extraordinary water resistance, but am caught in a torrential downpour, I'll even take my watch off my wrist and place it in my pocket.</p>
          </div>
        </div>
      
    </>
  );
}

export default Tips;
