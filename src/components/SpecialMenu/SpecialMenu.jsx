import React from "react";
import { images, data } from "../../constants";
import MenuItem from "./MenuItem";
import classes from "./SpecialMenu.module.css";

const SpecialMenu = () => {
  return (
    <div id="menu" className={classes.container}>
      <div className={classes.menu}>
        <div className={classes.header}>
          <p className="p_cormorant">Menu That Fits You Palatte</p>

          <img src={images.spoon} alt="" />

          <h1 className="headtext_cormorant">Today's Special</h1>
        </div>

        <div className={classes.contents}>
          <div className={classes.menuContent}>
            <p className={classes.menuTitle}>Wine & Beer</p>

            <div className={classes.menuList}>
              {data.wines.map((wine, i) => (
                <MenuItem
                  key={wine.title + i}
                  title={wine.title}
                  tags={wine.tags}
                  price={wine.price}
                />
              ))}
            </div>
          </div>

          <div className={classes.menuImg}>
            <img src={images.menu} alt="menu_img" />
          </div>

          <div className={classes.menuContent}>
            <p className={classes.menuTitle}>Cocktails</p>

            <div className={classes.menuList}>
              {data.cocktails.map((cocktail, i) => (
                <MenuItem
                  key={cocktail.title + i}
                  title={cocktail.title}
                  tags={cocktail.tags}
                  price={cocktail.price}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={classes.button}>
          <button className="custom_button">View More</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
