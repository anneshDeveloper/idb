import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Button } from "antd";
//css
import styles from "./carousel.module.sass";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BannerBG() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={30000}
      renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
        hasPrev && (
          <button
            onClick={clickHandler}
            type="button"
            aria-label="next slide / item"
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
            className={`${styles.slide_btn} control-arrow control-next`}
          ></button>
        )
      }
    >
      <div className={`${styles.banner_container}`}>
        <Image src={"/banner1.jpg"} alt="card-img" layout="fill" />
        <p className={`legend ${styles.text}`}>
          <div className={`pl-5`}>
            <h1 className={`${styles.text_title} mb-4`}>
              Live Concert : Dolor sit amet consectetur
            </h1>
            <p className={`${styles.text_time}`}>3:30 PM - 5:30 PM</p>
            <Button
              shape="round"
              size={"large"}
              className={`${styles.text_button}`}
            >
              Register Now
            </Button>
          </div>
        </p>
      </div>
      <div className={`${styles.banner_container}`}>
        <Image src={"/banner2.jpg"} alt="card-img" layout="fill" />
        <p className={`legend ${styles.text}`}>
          <div className={`pl-5`}>
            <h1 className={`${styles.text_title} mb-4`}>
              Live Concert : Dolor sit amet consectetur
            </h1>
            <p className={`${styles.text_time}`}>3:30 PM - 5:30 PM</p>
            <Button
              shape="round"
              size={"large"}
              className={`${styles.text_button}`}
            >
              Register Now
            </Button>
          </div>
        </p>
      </div>
    </Carousel>
  );
}
