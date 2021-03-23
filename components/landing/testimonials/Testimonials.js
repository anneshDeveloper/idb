import { Row, Col } from "antd";
//component
import ResponsiveView from "./ResponsiveView"

export default function Testimonials({}) {
  return (
    <Row>
      <Col xs={0} sm={0} md={0} lg={24} xl={24}>
        <ResponsiveView view={"desktop"} />
      </Col>
      <Col xs={0} sm={0} md={24} lg={0} xl={0}>
        <ResponsiveView view={"tablet"} />
      </Col>
    </Row>
  );
}
