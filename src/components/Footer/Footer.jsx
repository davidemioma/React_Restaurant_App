import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import NewsLetter from "./NewsLetter";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="app_bg">
      <NewsLetter />

      <div id="contact" className={classes.footer}>
        <div className={classes.contents}>
          <div className={classes.links}>
            <h1>Contact Us</h1>

            <p className="p_opensans">9 W 53rd St, New York, NY 10019, USA</p>

            <p className="p_opensans">+1 212-344-1230</p>

            <p className="p_opensans">+1 212-555-1230</p>
          </div>

          <div className={classes.images}>
            <img className={classes.logo} src={images.gericht} alt="" />

            <p className="p_opensans">
              "The Best Way To Find Yourself Is To Lose Yourself In The Service
              Of Others.”
            </p>

            <img className={classes.spoon} src={images.spoon} alt="" />

            <div className={classes.icons}>
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>

          <div className={classes.work}>
            <h1>Working Hours</h1>

            <p style={{ marginBottom: "0.5rem" }} className="p_opensans">
              Monday-Friday:
              <br />
              08:00 Am -12:00 Am
            </p>

            <p className="p_opensans">
              Saturday-Sunday:
              <br />
              07:00am -11:00 Pm
            </p>
          </div>
        </div>

        <p style={{ textAlign: "center" }} className="p_opensans">
          2021 Gericht. All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
