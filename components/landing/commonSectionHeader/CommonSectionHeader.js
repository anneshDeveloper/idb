import { Row, Col, Button } from "antd";
// css
import styles from "./common-section-header.module.sass";

export default function CommonSectionHeader({ title, sliderSection }) {
  return (
    <Row className="mb-3">
      <Col xs={0} sm={0} md={12} lg={12} xl={12} className={`${styles.title}`}>
        {title}
      </Col>
      <Col xs={0} sm={0} md={12} lg={12} xl={12} className={`d-flex justify-content-end`}>
        {sliderSection ? (
          <>
            <Button
              type="text"
              className={`${styles.slider_btn} mx-2`}
              icon={<i className={`fa fa-chevron-left ${styles.font_size_20}`} aria-hidden="true"></i>}
            />
            <Button
              type="text"
              className={`${styles.slider_btn} mx-2`}
              icon={<i className={`fa fa-chevron-right ${styles.font_size_20}`} aria-hidden="true"></i>}
            />
          </>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
}
