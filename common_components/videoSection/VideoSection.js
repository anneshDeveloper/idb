import React from "react";
import ReactPlayer from "react-player";
//css
import styles from "./video-section.module.sass";

export default function VideoSection() {
  return (
    <div
      className={`${styles.video}`}
      // style={{ backgroundImage: `url(/video.svg)` }}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={"100%"}
        height={`100%`}
        controls={true}
      />
    </div>
  );
}
