import { Row, Col } from "antd";
// component
import CommonSection from "../commonSection/CommonSection";
// css
import styles from "./publications-section.module.sass";

export default function PublicationsSection({ news }) {
  return (
    <div className={`${styles.news_bg}`}>
      <div className={`${styles.news_container} py-5`}>
        <h3>Publications</h3>
        <Row gutter={[16, 16]}>
          {news.map((newsObject) => (
            <Col span={8}>
              <CommonSection
                news={newsObject}
                section={"publication"}
                imageWidth={"160"}
                imageHeight={"240"}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
