import { Carousel } from "react-responsive-carousel";
//css
import styles from "./app-slider.module.sass";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function AppSlider({ children, btnIcon, showIndicators }) {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={30000}
      showIndicators={showIndicators}
      renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
        hasPrev && (
          <button
            onClick={clickHandler}
            type="button"
            aria-label="next slide / item"
            style={{ backgroundImage: `url(${btnIcon})` }}
            className={`${styles.slide_btn} control-arrow control-prev`}
          ></button>
        )
      }
      renderArrowNext={(clickHandler, hasPrev, labelPrev) =>
        hasPrev && (
          <button
            onClick={clickHandler}
            type="button"
            aria-label="next slide / item"
            style={{ backgroundImage: `url(${btnIcon})` }}
            className={`${styles.slide_btn} ${styles.image_position} control-arrow control-next`}
          ></button>
        )
      }
    >
      {children}
    </Carousel>
  );
}
