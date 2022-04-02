import React from "react";
import images from "../../constants/images";
import classes from "./Chef.module.css";

const Chef = () => {
  return (
    <div className="app_bg">
      <div className={classes.chef}>
        <div className={classes.chefContents}>
          <img src={images.chef} alt="chef_img" />

          <div className={classes.chefInfo}>
            <p className="p_cormorant">Chef’s Word</p>

            <img className={classes.spoon} src={images.spoon} alt="" />

            <h1 className="headtext_cormorant">What We Believe In</h1>

            <div className={classes.quote}>
              <img src={images.quote} alt="" />

              <p className="p_opensans">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor
                Sit .
              </p>
            </div>

            <p className="p_opensans">
              Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
              Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
              Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
              Nunc.
            </p>

            <div className={classes.signature}>
              <p className={classes.name}>Kevin Luo</p>

              <p className="p_opensans">Chef & Founder</p>

              <img src={images.sign} alt="sign_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
