import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
//component
import AppBtn from "../appBtn/AppBtn";
//css
import styles from "./card-view.module.sass";

export default function CommonSectionCardView({
  card,
  title,
  view,
  cardsData,
}) {
  const Card = card;
  return (
    <div
      className={`${
        title === "Upcoming Events" || title === "Services & Activities"
          ? ""
          : `${styles.whats_new_bg} pt-5`
      }`}
    >
      <div
        className={`${
          title === "Services & Activities" ? "" : styles.cscv_container
        }`}
      >
        <Row>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            className={`${
              view === "tablet"
                ? "px-1"
                : title === "Upcoming Events"
                ? "px-3"
                : "px-4"
            }`}
          >
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                {title !== "Services & Activities" && (
                  <div
                    className={`d-flex align-items-center ${styles.title_container}`}
                  >
                    <h3
                      className={`${
                        title === "Upcoming Events" ? "" : styles.font_white
                      }`}
                    >
                      {title}
                    </h3>
                  </div>
                )}
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                {/* <div className={`d-flex justify-content-end`}>
                  {title === "Upcoming Events" && (
                    <AppBtn
                      text={`Filter`}
                      prefix={
                        <i
                          className={`fa fa-filter mr-2 ${styles.btn_icon}`}
                        ></i>
                      }
                      suffix={""}
                    />
                  )}
                </div> */}
              </Col>
            </Row>
          </Col>
          {cardsData.map((cardData, i) => {
            if (title === "Services & Activities") {
              return (
                <Col xs={12} sm={12} md={12} lg={12} xl={12} key={i.toString()}>
                  <Card data={cardData} />
                </Col>
              );
            } else {
              return (
                <Col
                  xs={8}
                  sm={8}
                  md={8}
                  lg={8}
                  xl={8}
                  className={`${
                    view === "tablet"
                      ? "px-1"
                      : title === "Upcoming Events"
                      ? "px-3"
                      : "px-4"
                  }`}
                >
                  <Card data={cardData} view={view ? view : ""} />
                </Col>
              );
            }
          })}
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            className={`${styles.cscv_btn_container} ${
              title === "Services & Activities"
                ? ""
                : view === "tablet"
                ? "px-1"
                : title === "Upcoming Events"
                ? "px-3"
                : "px-4"
            }`}
          >
            <AppBtn
              text={`See All`}
              prefix={""}
              suffix={<ArrowRightOutlined className={`ml-2 pt-1`} />}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
