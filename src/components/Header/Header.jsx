import React from "react";
import images from "../../constants/images";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div id="home" className={classes.container}>
      <div className={classes.header}>
        <div className={classes.intro}>
          <p className="p_cormorant">chase the new flavour</p>

          <img src={images.spoon} alt="" />

          <h1>the key to fine dining</h1>

          <p className="p_opensans">
            Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum
            Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus
            Aliquam Amet Tellus
          </p>

          <button className="custom_button" type="button">
            explore menu
          </button>
        </div>

        <div className={classes.image}>
          <img src={images.welcome} alt="header_img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
