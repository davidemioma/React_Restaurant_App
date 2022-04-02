import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import classes from "./Intro.module.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  return (
    <div className={classes.intro}>
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className={classes.overlay}>
        <div
          className={classes.controls}
          onClick={() => {
            setPlayVideo(!playVideo);

            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize="30px" />
          ) : (
            <BsFillPlayFill color="#fff" fontSize="30px" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
