import { Row, Col } from "antd";
//component
import ResponsiveView from "./ResponsiveView";
import AppSlider from "../../appSlider/AppSlider";
// css
import styles from "./testimonials.module.sass";

export default function Testimonials({}) {
  return (
    <div className={`${styles.testimonial_bg}`}>
      <AppSlider
        btnIcon={`/context/slider_btn_icon_dark.svg`}
        showIndicators={false}
      >
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <ResponsiveView view={"desktop"} />
          </Col>
          <Col xs={0} sm={0} md={24} lg={0} xl={0}>
            <ResponsiveView view={"tablet"} />
          </Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <ResponsiveView view={"desktop"} />
          </Col>
          <Col xs={0} sm={0} md={24} lg={0} xl={0}>
            <ResponsiveView view={"tablet"} />
          </Col>
        </Row>
      </AppSlider>
    </div>
  );
}
