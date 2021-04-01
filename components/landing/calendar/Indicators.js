import { Row, Col } from "antd";
//css
import styles from "./calendar.module.sass";

export default function Indicators() {
  let indicateTexts = [
    {
      text: "Wellbeing Awareness",
      color: { bg: styles.wellbeing_bg, ft: styles.wellbeing_ft },
    },
    {
      text: "Family & Social",
      color: { bg: styles.family_bg, ft: styles.family_ft },
    },
    {
      text: "Virtual Sports & Recreational",
      color: { bg: styles.sports_bg, ft: styles.sports_ft },
    },
    {
      text: "Religious Activities",
      color: { bg: styles.religious_bg, ft: styles.religious_ft },
    },
    {
      text: "Entertainment & Online Games",
      color: { bg: styles.entertainment_bg, ft: styles.entertainment_ft },
    },
    {
      text: "Educational Activities",
      color: { bg: styles.educational_bg, ft: styles.educational_ft },
    },
  ];
  return (
    <div className={`${styles.footer}`}>
      <Row className={`${styles.footer_row}`}>
        {indicateTexts.map((indicator, index) => {
          return (
            <Col
              xs={0}
              sm={0}
              md={8}
              lg={8}
              xl={8}
              className={`d-flex align-items-center`}
              keys={index.toString()}
            >
              <div
                className={`${styles.indicator_box} ${indicator.color.bg}`}
              ></div>
              <div className={`${styles.indecator_text} ${indicator.color.ft}`}>
                {indicator.text}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
