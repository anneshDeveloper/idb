import Image from "next/image";
import { Row, Col } from "antd";
// component
import CommonSectionCardView from "../commonSectionCardView/CommonSectionCardView";
//css
import styles from "./upcoming-events.module.sass";

function Card({ data, view, logo }) {
  const base_url = process.env.BASE_URL;
  return (
    <div className={`${styles.events_card} mb-4`}>
      <div className={`${styles.events_card_image}`}>
        <Image
          src={base_url + data.News_image[0].formats.thumbnail.url}
          alt="card-img"
          width="352"
          height="221"
        />
      </div>
      <div className={`p-3`}>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <div
              className={`d-flex justify-content-center align-items-center h-100 flex-column`}
            >
              <p className={`${styles.events_card_date_month} m-0`}>
                {data.Created_Date.split(",")[0]
                  .split(" ")[0]
                  .toUpperCase()
                  .substring(0, 3)}
              </p>
              <p className={`${styles.events_card_date_day} m-0`}>
                {data.Created_Date.split(",")[0].split(" ")[1]}
              </p>
            </div>
          </Col>
          <Col xs={18} sm={18} md={18} lg={18} xl={18}>
            <h6 className={`${styles.events_card_title} m-0 mb-2`}>
              {view === "tablet"
                ? data.News_title.length > 26
                  ? `${data.News_title.substring(0, 26)}...`
                  : data.News_title
                : data.News_title.length > 32
                ? `${data.News_title.substring(0, 32)}...`
                : data.News_title}
            </h6>
            <p className={`${styles.events_card_des} m-0`}>
              {data.News_description.length > 60
                ? `${data.News_description.substring(0, 60)}...`
                : data.News_description}
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default function UpcomingEvents({ newsData, logo }) {
  let cardsData = newsData.slice(0, 6);
  return (
    <Row>
      <Col xs={0} sm={0} md={0} lg={24} xl={24}>
        <CommonSectionCardView
          card={Card}
          title={`Upcoming Events`}
          view={"desktop"}
          cardsData={cardsData}
          logo={logo}
        />
      </Col>
      <Col xs={0} sm={0} md={24} lg={0} xl={0}>
        <CommonSectionCardView
          card={Card}
          title={`Upcoming Events`}
          view={"tablet"}
          cardsData={cardsData}
          logo={logo}
        />
      </Col>
    </Row>
  );
}
