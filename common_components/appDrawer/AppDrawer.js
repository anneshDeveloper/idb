import { Drawer, Row, Col } from "antd";
//
import styles from "./drawer.module.sass";

export default function AppDrawer({ visbility, setVisbility }) {
  return (
    <>
      <Drawer
        placement={"top"}
        closable={false}
        height={"100vh"}
        onClose={() => setVisbility(false)}
        visible={visbility}
        key={"top"}
        // className={`${styles.drawer_bg}`}
        bodyStyle={{background:'#000000FA',color:'#fff'}}
      >
        <Row>
          <Col xs={0} sm={0} md={3} lg={3} xl={3}>
            <span onClick={() => setVisbility(false)}>Close</span>
          </Col>
          <Col xs={0} sm={0} md={7} lg={7} xl={7}>
            Discovery
          </Col>
          <Col xs={0} sm={0} md={7} lg={7} xl={7}>
            Services
          </Col>
          <Col xs={0} sm={0} md={7} lg={7} xl={7}>
            Media
          </Col>
        </Row>
      </Drawer>
    </>
  );
}
