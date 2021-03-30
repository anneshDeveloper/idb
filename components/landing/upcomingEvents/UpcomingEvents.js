import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
// component
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
import AppMultiSlider from "../../appMultiSlider/AppMultiSlider";
//css
import styles from "./upcoming-events.module.sass";

const responsive = {
  0: { items: 1 },
  568: { items: 2.25 },
  1000: { items: 3.25 },
  1024: { items: 4.5 },
  1440: { items: 9 },
};

function Card({ bg, bgImage }) {
  return (
    <div
      className={`${styles.event_card} p-4`}
      style={{ backgroundImage: `url(${bgImage})`, backgroundColor: bg }}
    >
      <div className={`${styles.event_card_date} mb-5 py-1`} style={{ color: bg }}>
        <p className={`${styles.date} mt-2 mb-0`}>21</p>
        <p className={`${styles.month} m-0`}>April</p>
      </div>
      <h3 className={`${styles.event_title} pr-4 mb-4`}>Application deadline for lorem ipsum alt selto</h3>
      <p className={`${styles.event_time}`}>3:30 PM - 5:30 PM</p>
      <div className={`d-flex justify-content-center`}>
        <Button type="text" size={`large`} className={`${styles.event_button}`} shape="round">Register Now</Button>
      </div>
    </div>
  );
}

const items = [
  <div className={`item ${styles.event_card_container}`} data-value="1">
    <Card bg={"#FDCF3C"} bgImage={"/Activities_Icons_Set2.svg"} />
  </div>,
  <div className={`item ${styles.event_card_container}`} data-value="2">
    <Card bg={"#24B3B7"} bgImage={"/Activities_Icons_Set2.svg"} />
  </div>,
  <div className={`item ${styles.event_card_container}`} data-value="3">
    <Card bg={"#223771"} bgImage={"/Activities_Icons_Set2.svg"} />
  </div>,
  <div className={`item ${styles.event_card_container}`} data-value="4">
    <Card bg={"#FC6273"} bgImage={"/Activities_Icons_Set2.svg"} />
  </div>,
  <div className={`item ${styles.event_card_container}`} data-value="5">
    <Card bg={"#6B3AD6"} bgImage={"/Activities_Icons_Set2.svg"} />
  </div>,
  <div className={`item ${styles.event_card_container}`} data-value="6">
    <Card bg={"#299155"} bgImage={"/Activities_Icons_Set2.svg"} />
  </div>,
];

export default function UpcomingEvents({ eventsData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const onSlideChanged = ({ item }) => setActiveIndex(item);
  return (
    <Row className={`py-5`}>
      <div className={`${styles.events_container}`}>
        <CommonSectionHeader
          title={"Upcoming Events & Activities"}
          sliderSection={true}
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
      />
    </Row>
  );
}
