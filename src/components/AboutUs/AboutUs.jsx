import React from "react";
import images from "../../constants/images";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div id="about" className="app_bg">
      <div className={classes.aboutUs}>
        <div className={classes.bgImage}>
          <img src={images.G} alt="" />
        </div>

        <div className={classes.content}>
          <div className={classes.contentAbout}>
            <h1 className="headtext_cormorant">about us</h1>

            <img src={images.spoon} alt="" />

            <p className="p_opensans">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
              Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
              Odio Nec Aliquet Eu Proin Mauris Et.
            </p>

            <button className="custom_button">know more</button>
          </div>

          <div className={classes.knifeImg}>
            <img src={images.knife} alt="" />
          </div>

          <div className={classes.contentHistory}>
            <h1 className="headtext_cormorant">our history</h1>

            <img src={images.spoon} alt="" />

            <p className="p_opensans">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis
              Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed
              Odio Nec Aliquet Eu Proin Mauris Et.
            </p>

            <button className="custom_button">know more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
