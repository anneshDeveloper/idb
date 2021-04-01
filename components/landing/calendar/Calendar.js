import React from "react";
import { Row, Col } from "antd";
// component
import AppCalendar from "./AppCalender";
import Indicators from "./Indicators";
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
//css
import styles from "./calendar.module.sass";

export default function Calendar() {
  return (
    <div
      className={`${styles.calender_bg}`}
      style={{
        backgroundImage: `url(/background/calender.svg)`,
      }}
    >
      <div className={`${styles.calender_container} pt-5`}>
        <CommonSectionHeader title={"Events Calendar"} sliderSection={false} />
        <div className={`${styles.calender_subcontainer}`}>
          <Row>
            <Col xs={0} sm={0} md={18} lg={18} xl={18}>
              <Row>
                <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                  <div className={`${styles.main}`}>
                    <AppCalendar />
                  </div>
                </Col>
                <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                  <Indicators />
                </Col>
              </Row>
            </Col>
            <Col xs={0} sm={0} md={6} lg={6} xl={6}>
              <div className={`${styles.slider}`}></div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
