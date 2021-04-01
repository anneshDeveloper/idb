import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
// component
import AppBtn from "../../../common_components/appBtn/AppBtn";
import AppMultiSlider from "../../../common_components/appMultiSlider/AppMultiSlider";
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
//css
import styles from "./news-publications.module.sass";

function Card({ data }) {
  const base_url = process.env.BASE_URL;
  return (
    <div className={`${styles.whats_new_card} p-4`}>
      <div className={`${styles.whats_new_card_image} mb-3`}>
        <Image
          src={base_url + data.NewsImage[0].formats.thumbnail.url}
          alt="card-img"
          width="284"
          height="202"
        />
      </div>
      <div className={`${styles.whats_new_card_text}`}>
        <h3>{data.NewsTitle}</h3>
        <p>{data.NewsDescription}</p>
      </div>
      <Button className={`${styles.whats_new_card_btn}`}>
        <h6 className={`m-0`}>READ MORE</h6>
      </Button>
    </div>
  );
}

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1000: { items: 1 },
  1024: { items: 1 },
  1440: { items: 1 },
};

const items = [];
const itemsTab = [];

function setItem(data) {
  data.forEach((item, index) => {
    if ((index + 1) % 3 === 0) {
      items.push(
        <div className={`${styles.news_container}`} data-value="1">
          <Row gutter={[16, 16]}>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <Card data={data[index - 2]} />
            </Col>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <Card data={data[index - 1]} />
            </Col>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <Card data={data[index]} />
            </Col>
          </Row>
        </div>
      );
      itemsTab.push(
        <div className={`${styles.news_container}`} data-value="1">
          <Row gutter={[8, 8]}>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <Card data={data[index - 2]} />
            </Col>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <Card data={data[index - 1]} />
            </Col>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <Card data={data[index]} />
            </Col>
          </Row>
        </div>
      );
    }
  });
}

export default function NewsPublications({ newsData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevBtn, setPrevBtn] = useState("disable");
  const [nextBtn, setNextBtn] = useState("enable");
  let finalIndex = Math.floor(parseInt(newsData.length) / 3);

  const slidePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    if (activeIndex < finalIndex - 1) setActiveIndex(activeIndex + 1);
  };

  const onSlideChanged = ({ item }) => setActiveIndex(item);

  useEffect(() => {
    if (activeIndex === 0) setPrevBtn("disable");
    else setPrevBtn("enable");
    if (activeIndex === finalIndex - 1) setNextBtn("disable");
    else setNextBtn("enable");
  }, [activeIndex]);

  setItem(newsData);

  return (
    <div className={`${styles.news_container} py-5`}>
      <CommonSectionHeader
        title={"News & Publications"}
        sliderSection={true}
        prevBtn={prevBtn}
        nextBtn={nextBtn}
        onClickPrev={slidePrev}
        onClickNext={slideNext}
      />
      <Row>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <AppMultiSlider
            responsive={responsive}
            items={items}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
            paddingLeft={0}
            paddingRight={0}
            animationType={"fadeout"}
          />
        </Col>
        <Col xs={0} sm={0} md={24} lg={0} xl={0}>
          <AppMultiSlider
            responsive={responsive}
            items={itemsTab}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
            paddingLeft={0}
            paddingRight={0}
          />
        </Col>
        <div className={`d-flex w-100 justify-content-end`}>
          <AppBtn
            text={`See All`}
            prefix={""}
            suffix={<ArrowRightOutlined className={`ml-2 pt-1`} />}
            mode={"dark"}
          />
        </div>
      </Row>
    </div>
  );
}
