//css
import styles from "./video-section.module.sass";

export default function VideoSection() {
  return (
    <div
      className={`${styles.video}`}
      style={{ backgroundImage: `url(/video.svg)` }}
    ></div>
  );
}
