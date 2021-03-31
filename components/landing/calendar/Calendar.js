import React, { useEffect } from "react";
import { Row, Col } from "antd";
// import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
// component
import AppCalendar from "./AppCalender";
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
                  <div className={`${styles.footer}`}>
                    <Row className={`${styles.footer_row}`}>
                      <Col
                        xs={0}
                        sm={0}
                        md={8}
                        lg={8}
                        xl={8}
                        className={`d-flex align-items-center`}
                      >
                        <div
                          className={`${styles.indicator_box} ${styles.wellbeing_bg}`}
                        ></div>
                        <div
                          className={`${styles.indecator_text} ${styles.wellbeing_ft}`}
                        >
                          Wellbeing Awareness
                        </div>
                      </Col>
                      <Col
                        xs={0}
                        sm={0}
                        md={8}
                        lg={8}
                        xl={8}
                        className={`d-flex align-items-center`}
                      >
                        <div
                          className={`${styles.indicator_box} ${styles.family_bg}`}
                        ></div>
                        <div
                          className={`${styles.indecator_text} ${styles.family_ft}`}
                        >
                          Family & Social
                        </div>
                      </Col>
                      <Col
                        xs={0}
                        sm={0}
                        md={8}
                        lg={8}
                        xl={8}
                        className={`d-flex align-items-center`}
                      >
                        <div
                          className={`${styles.indicator_box} ${styles.sports_bg}`}
                        ></div>
                        <div
                          className={`${styles.indecator_text} ${styles.sports_ft}`}
                        >
                          Virtual Sports & Recreational
                        </div>
                      </Col>
                    </Row>
                    <Row className={`${styles.footer_row}`}>
                      <Col
                        xs={0}
                        sm={0}
                        md={8}
                        lg={8}
                        xl={8}
                        className={`d-flex align-items-center`}
                      >
                        <div
                          className={`${styles.indicator_box} ${styles.religious_bg}`}
                        ></div>
                        <div
                          className={`${styles.indecator_text} ${styles.religious_ft}`}
                        >
                          Religious Activities
                        </div>
                      </Col>
                      <Col
                        xs={0}
                        sm={0}
                        md={8}
                        lg={8}
                        xl={8}
                        className={`d-flex align-items-center`}
                      >
                        <div
                          className={`${styles.indicator_box} ${styles.entertainment_bg}`}
                        ></div>
                        <div
                          className={`${styles.indecator_text} ${styles.entertainment_ft}`}
                        >
                          Entertainment & Online Games
                        </div>
                      </Col>
                      <Col
                        xs={0}
                        sm={0}
                        md={8}
                        lg={8}
                        xl={8}
                        className={`d-flex align-items-center`}
                      >
                        <div
                          className={`${styles.indicator_box} ${styles.educational_bg}`}
                        ></div>
                        <div
                          className={`${styles.indecator_text} ${styles.educational_ft}`}
                        >
                          Educational Activities
                        </div>
                      </Col>
                    </Row>
                  </div>
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
