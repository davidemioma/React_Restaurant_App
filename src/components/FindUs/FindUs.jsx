import React from "react";
import { images } from "../../constants";
import classes from "./FindUs.module.css";

const FindUs = () => {
  return (
    <div className="app_bg">
      <div className={classes.findUs}>
        <div className={classes.contents}>
          <div className={classes.info}>
            <p className="p_cormorant">Contact</p>

            <img src={images.spoon} alt="" />

            <h1 className="headtext_cormorant">Find Us</h1>

            <p className="p_opensans">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </p>

            <p className={classes.text}>Opening Hours</p>

            <p className="p_opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>

            <p className="p_opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>

            <button className="custom_button">Visit Us</button>
          </div>

          <div className={classes.image}>
            <img src={images.findus} alt="finus_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
