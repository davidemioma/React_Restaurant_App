import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../../constants";
import classes from "./Gallery.module.css";

const Gallery = () => {
  const gallaria = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === "Left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.gallery}>
        <div className={classes.title}>
          <p className="p_cormorant">Instagram</p>

          <img src={images.spoon} alt="" />
        </div>

        <div className={classes.contents}>
          <div className={classes.header}>
            <h1 className="headtext_cormorant">Photo Gallery</h1>

            <p className="p_opensans" style={{ color: "#AAAAAA" }}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
              Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
            </p>

            <button className="custom_button" type="button">
              View More
            </button>
          </div>

          <div className={classes.images}>
            <div ref={scrollRef} className={classes.imgesContainer}>
              {gallaria.map((image, index) => (
                <div
                  className={classes.imageItem}
                  key={`gallery_image-${index + 1}`}
                >
                  <img src={image} alt="" />
                  <BsInstagram className={classes.icon} />
                </div>
              ))}
            </div>

            <div className={classes.controls}>
              <BsArrowLeftShort
                className={classes.iconLeft}
                onClick={() => scroll("Left")}
              />

              <BsArrowRightShort
                className={classes.iconRight}
                onClick={() => scroll("Right")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
