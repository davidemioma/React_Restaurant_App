import React from "react";
import { images, data } from "../../constants";
import classes from "./Laurels.module.css";

const Laurels = () => {
  return (
    <div className={classes.container}>
      <div className={classes.awards}>
        <p className="p_cormorant">Awards & Recognition</p>

        <img style={{ marginBottom: "2rem" }} src={images.spoon} alt="" />

        <div className={classes.contents}>
          <div className={classes.laurels}>
            <h1 className="headtext_cormorant">Our Laurels</h1>

            <div className={classes.list}>
              {data.awards.map((award) => (
                <div key={award.title} className={classes.listItem}>
                  <img src={award.imgUrl} alt="award-img" />

                  <div className={classes.listItemContent}>
                    <p className="p_cormorant" style={{ color: "#DCCA87" }}>
                      {award.title}
                    </p>

                    <p className={classes.text}>{award.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={classes.images}>
            <img src={images.laurels} alt="laurels_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laurels;
