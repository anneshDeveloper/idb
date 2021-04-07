import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
// component
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
import AppMultiSlider from "../../../common_components/appMultiSlider/AppMultiSlider";
//css
import styles from "./gallery.module.sass";

function getImgArray(imgUrl) {
  let array = [];
  for (let i = 0; i < 9; i++) {
    array.push({ image: imgUrl });
  }
  return array;
}

let sliderItems = [];

function getSliderItems(imgArray) {
  imgArray.forEach((image, index) => {
    if ((index + 1) % 3 === 0) {
      sliderItems.push(
        <div
          className={`item ${styles.slider_container}`}
          data-value={index.toString()}
        >
          <div className={` p-2 ${styles.slider_container_single}`}>
            <div className={`my-2`}>
              <Image
                className={`${styles.gallery_card}`}
                src={imgArray[index - 2].image}
                alt={"gallery-image"}
                width="250"
                height="250"
              />
            </div>
            <div className={`my-2`}>
              <Image
                className={`${styles.gallery_card}`}
                src={imgArray[index - 1].image}
                alt={"gallery-image"}
                width="250"
                height="250"
              />
            </div>
          </div>
          <div className={` p-2 ${styles.slider_container_single}`}>
            <div className={`my-2`}>
              <Image
                className={`${styles.gallery_card}`}
                src={imgArray[index].image}
                alt={"gallery-image"}
                width="250"
                height="250"
              />
            </div>
          </div>
        </div>
      );
    }
  });
}

const responsive = {
  0: { items: 1 },
  568: { items: 2.25 },
  1000: { items: 3.25 },
  1024: { items: 2.5 },
  1440: { items: 9 },
};

// const items = [
//   <div className={`item p-2 ${styles.slider_container_single}`} data-value="1">
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//   </div>,
//   <div className={`item p-2 ${styles.slider_container_single}`} data-value="2">
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//   </div>,
//   <div className={`item p-2 ${styles.slider_container_single}`} data-value="3">
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//   </div>,
//   <div className={`item p-2 ${styles.slider_container_single}`} data-value="4">
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//   </div>,
//   <div className={`item p-2 ${styles.slider_container_single}`} data-value="5">
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//   </div>,
//   <div className={`item p-2 ${styles.slider_container_single}`} data-value="6">
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//   </div>,
//   <div className={`item p-2 ${styles.slider_container_single}`} data-value="7">
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//   </div>,
//   <div className={`item p-2 ${styles.slider_container_single}`} data-value="8">
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//   </div>,
//   <div className={`item p-2 ${styles.slider_container_single}`} data-value="9">
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//     <div className={`my-2`}>
//       <Image
//         className={`${styles.gallery_card}`}
//         src={"/testimonial.PNG"}
//         alt={"test"}
//         width="250"
//         height="250"
//       />
//     </div>
//   </div>,
// ];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const onSlideChanged = ({ item }) => setActiveIndex(item);

  let imgUrl = "/testimonial.PNG";
  let imgArray = getImgArray(imgUrl);
  getSliderItems(imgArray);
  return (
    <div
      className={`${styles.gallery_bg}`}
      style={{
        backgroundImage: `url(/background/gallery.svg)`,
      }}
    >
      <Row>
        <div className={`${styles.gallery_container}`}>
          <CommonSectionHeader
            title={"Gallery"}
            sliderSection={true}
            // prevBtn={}
            // nextBtn={}
            onClickPrev={slidePrev}
            onClickNext={slideNext}
          />
        </div>
        <AppMultiSlider
          responsive={responsive}
          items={sliderItems}
          activeIndex={activeIndex}
          onSlideChanged={onSlideChanged}
          paddingLeft={100}
          paddingRight={50}
          animationType={"slide"}
          disableDotsControls={true}
        />
      </Row>
    </div>
  );
}
