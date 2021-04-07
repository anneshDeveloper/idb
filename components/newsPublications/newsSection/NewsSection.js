import { Row, Col } from "antd";
// component
import NewsPublicationsCard from "../../../common_components/newsPublicationsCard/NewsPublicationsCard";
// css
import styles from "./news-section.module.sass";

export default function NewsSection({ news }) {
  return (
    <div className={`${styles.news_bg}`}>
      <div className={`${styles.news_container} py-5`}>
        <h3>News</h3>
        <Row gutter={[16, 16]}>
          {news.map((newsObject) => (
            <Col span={8}>
              <NewsPublicationsCard data={newsObject} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
