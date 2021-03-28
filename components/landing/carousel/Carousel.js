import Image from "next/image";
import moment from "moment";
import { Carousel } from "react-responsive-carousel";
import { Button } from "antd";
//css
import styles from "./carousel.module.sass";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BannerBG({ bannerData }) {
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
      {bannerData.map((banner) => (
        <div className={`${styles.banner_container}`}>
          <Image
            src={process.env.BASE_URL + banner.BannerImage[0].formats.large.url}
            alt={banner.BannerImage[0].formats.large.hash}
            layout="fill"
          />
          <p className={`legend ${styles.text}`}>
            <div className={`pl-5`}>
              <h1 className={`${styles.text_title} mb-4`}>
                {banner.BannerTitle}
              </h1>
              <p className={`${styles.text_des} mb-4`}>
                {banner.BannerDescription &&
                banner.BannerDescription.length > 100
                  ? `${banner.BannerDescription.substring(0, 100)}...`
                  : banner.BannerDescription}
              </p>
              <p className={`${styles.text_time}`}>
                {`${banner.CreatedDate.split(",")[0]} - ${moment(
                  banner.BannerExpiration
                ).format("MMMM DD")}`}
              </p>
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
      ))}
    </Carousel>
  );
}
