import React from "react";
import classes from "./SpecialMenu.module.css";

const MenuItem = ({ title, tags, price }) => {
  return (
    <div className={classes.menuItem}>
      <div className={classes.info}>
        <p className="p_cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>

        <div className={classes.prices}>
          <div />

          <p className="p_cormorant">{price}</p>
        </div>
      </div>

      <div className={classes.btm}>
        <p className="p_opensans" style={{ color: "#AAAAAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
