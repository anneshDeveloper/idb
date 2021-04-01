import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
// component
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
import AppMultiSlider from "../../../common_components/appMultiSlider/AppMultiSlider";
//css
import styles from "./upcoming-events.module.sass";

const responsive = {
  0: { items: 1 },
  568: { items: 2.25 },
  1000: { items: 3.25 },
  1024: { items: 4.5 },
  1440: { items: 9 },
};

function Card({ data, bg, bgImage }) {
  return (
    <div
      className={`${styles.event_card} p-4`}
      style={{ backgroundImage: `url(${bgImage})`, backgroundColor: bg }}
    >
      <div
        className={`${styles.event_card_date} mb-5 py-1`}
        style={{ color: bg }}
      >
        <p className={`${styles.date} mt-2 mb-0`}>
          {data.EventCreatedDate.split(",")[0].split(" ")[1]}
        </p>
        <p className={`${styles.month} m-0`}>
          {data.EventCreatedDate.split(",")[0].split(" ")[0]}
        </p>
      </div>
      <h3 className={`${styles.event_title} pr-4 mb-4`}>{data.EventTitle}</h3>
      <p className={`${styles.event_time}`}>3:30 PM - 5:30 PM</p>
      <div className={`d-flex justify-content-center`}>
        <Button
          type="text"
          size={`large`}
          className={`${styles.event_button}`}
          shape="round"
          onClick={() => (location.href = `${data.RegistrationLink}`)}
        >
          Register Now
        </Button>
      </div>
    </div>
  );
}

const items = [];

function setBackground(item) {
  let arrayBgImage = [
    "/upcomingEvent/Activities_Icons_Set2.svg",
    "/upcomingEvent/Activities_Icons_Set3.svg",
    "/upcomingEvent/Activities_Icons_Set4.svg",
    "/upcomingEvent/Activities_Icons_Set5.svg",
  ];
  let bg;
  let bgImage = arrayBgImage[Math.floor(Math.random() * arrayBgImage.length)];
  switch (item.EventType) {
    case "Educational":
      bg = "#24B3B7";
      return [bg, bgImage];
    case "Community":
      bg = "#FC6273";
      return [bg, bgImage];
    case "Promotional":
      bg = "#223771";
      return [bg, bgImage];
  }
}

function setItem(data) {
  data.forEach((item, i) => {
    let [bg, bgImage] = setBackground(item);
    items.push(
      <div
        className={`item ${styles.event_card_container}`}
        data-value={i.toString}
      >
        <Card data={item} bg={bg} bgImage={bgImage} />
      </div>
    );
  });
}

export default function UpcomingEvents({ eventsData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderFinalIndex, setSliderFinalIndex] = useState(3);
  const [prevBtn, setPrevBtn] = useState("disable");
  const [nextBtn, setNextBtn] = useState("enable");
  let finalIndex = parseInt(eventsData.length);

  useEffect(() => {
    if (window.innerWidth < 1440 && window.innerWidth > 1024)
      setSliderFinalIndex(3);

    if (window.innerWidth <= 1024 && window.innerWidth >= 768)
      setSliderFinalIndex(2);

    if (window.innerWidth < 768) setSliderFinalIndex(2);
  }, []);

  useEffect(() => {
    if (activeIndex === 0) setPrevBtn("disable");
    else setPrevBtn("enable");
    if (activeIndex === finalIndex - sliderFinalIndex) setNextBtn("disable");
    else setNextBtn("enable");
  }, [activeIndex]);

  setItem(eventsData);

  const slidePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    if (activeIndex < finalIndex - sliderFinalIndex)
      setActiveIndex(activeIndex + 1);
  };

  const onSlideChanged = ({ item }) => setActiveIndex(item);

  return (
    <Row className={`py-5`}>
      <div className={`${styles.events_container}`}>
        <CommonSectionHeader
          title={"Upcoming Events & Activities"}
          sliderSection={true}
          prevBtn={prevBtn}
          nextBtn={nextBtn}
          onClickPrev={slidePrev}
          onClickNext={slideNext}
        />
      </div>
      <AppMultiSlider
        responsive={responsive}
        items={items}
        activeIndex={activeIndex}
        onSlideChanged={onSlideChanged}
        paddingLeft={100}
        paddingRight={50}
        animationType={"slide"}
      />
    </Row>
  );
}
