import Image from "next/image";
import { Row, Col, Button } from "antd";
// component
import CommonSectionCardView from "../commonSectionCardView/CommonSectionCardView";
//css
import styles from "./whats-new.module.sass";

function Card({ data }) {
  const base_url = process.env.BASE_URL;
  return (
    <div className={`${styles.whats_new_card} p-4`}>
      <div className={`${styles.whats_new_card_image} mb-3`}>
        <Image
          src={base_url + data.NewsImage[0].formats.thumbnail.url}
          alt="card-img"
          width="284"
          height="202"
        />
      </div>
      <div className={`${styles.whats_new_card_text}`}>
        <h3>{data.NewsTitle}</h3>
        <p>{data.NewsDescription}</p>
      </div>
      <Button className={`${styles.whats_new_card_btn}`}>
        <h6 className={`m-0`}>READ MORE</h6>
      </Button>
    </div>
  );
}

export default function WhatsNew({ newsData }) {
  let cardsData = newsData.slice(0, 3);
  return (
    <Row>
      <Col xs={0} sm={0} md={0} lg={24} xl={24}>
        <CommonSectionCardView
          card={Card}
          title={`What's New`}
          view={"desktop"}
          cardsData={cardsData}
        />
      </Col>
      <Col xs={0} sm={0} md={24} lg={0} xl={0}>
        <CommonSectionCardView
          card={Card}
          title={`What's New`}
          view={"tablet"}
          cardsData={cardsData}
        />
      </Col>
    </Row>
  );
}
