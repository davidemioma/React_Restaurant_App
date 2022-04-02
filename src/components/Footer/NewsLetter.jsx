import React from "react";
import { images } from "../../constants";
import classes from "./Footer.module.css";

const NewsLetter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.newsLetter}>
        <p className="p_cormorant">Newsletter</p>

        <img src={images.spoon} alt="" />

        <h1 className="headtext_cormorant">Subscribe To Our Newsletter</h1>

        <p className="p_opensans">And Never Miss Latest Updates!</p>

        <div className={classes.form}>
          <input type="email" placeholder="Enter your e-mail address" />

          <button className="custom_button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
