import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <nav className={classes.navBar}>
        <img className={classes.logo} src={images.gericht} alt="App Logo" />

        <ul className={classes.navLinks}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#awards">Awards</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className={classes.tasks}>
          <a href="#login">Log In / Register</a>
          <div />
          <a href="/">Book Table</a>
        </div>

        <GiHamburgerMenu
          className={classes.navToggler}
          onClick={() => setToggleMenu(true)}
        />
      </nav>

      {toggleMenu && (
        <div className={`${classes.modal} ${classes.slideBottom}`}>
          <MdOutlineRestaurantMenu
            className={classes.modalIcon}
            onClick={() => setToggleMenu(false)}
          />

          <ul className={classes.modalLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#awards">Awards</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
