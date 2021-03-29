import Image from "next/image";
import { Row, Col, Button, Avatar } from "antd";
// component
import CommonSectionCardView from "../commonSectionCardView/CommonSectionCardView";
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
//css
import styles from "./services-activities.module.sass";

function Card({ data }) {
  return (
    <div className={`${styles.services_card}`}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={`${styles.card_text_container} pl-2`}>
            <div>
              <h4 className={`${styles.services_card_text} mb-4`}>
                {data.title}
              </h4>
              <Button className={`${styles.services_know_more_btn}`}>
                <h6 className={`${styles.services_know_more} m-0`}>
                  Know More
                </h6>
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={`${styles.card_avatar_container} pr-2`}>
            <Avatar
              className={`${styles.card_avatar} pt-3`}
              src={
                <Image
                  src={"/Services & Activities lcons set2.svg"}
                  alt="card-img"
                  width="100"
                  height="100"
                />
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default function ServicesActivities() {
  const cardsData = [
    { title: "Wellbeing Awareness Sessions" },
    { title: "Family & Social Sessions" },
    { title: "Virtual Sports and Recreational" },
    { title: "Religious Activities Sessions" },
    { title: "Entertainment & Online Game Sessions" },
    { title: "Educational Courses" },
    { title: "IsDB Group Activities" },
    { title: "Buy and Sell Sessions" },
  ];
  return (
    <div
      style={{ backgroundImage: `url('/background/ServicesActivities.svg')` }}
      className={`${styles.service_bg}`}
    >
      <div className={`${styles.service_container} py-5`}>
        <CommonSectionHeader
          title={"Services & Activities"}
          sliderSection={false}
        />
        <Row>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <Row gutter={[16, 16]}>
              {cardsData.map((cardData) => (
                <Col span={8}>
                  <Card data={cardData} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={0} sm={0} md={24} lg={0} xl={0}>
            <Row gutter={[16, 16]} className={`w-100 pl-3`}>
              {cardsData.map((cardData) => (
                <Col span={12}>
                  <Card data={cardData} />
                </Col>
              ))}
            </Row>
          </Col>
          {/* <Col xs={0} sm={0} md={24} lg={8} xl={8}>
          <div className={`pt-5 ${styles.service_left_container}`}>
            <h3 className={`${styles.services_tilte}`}>
              {"Services & Activities"}
            </h3>
            <div className={`${styles.services_image}`}>
              <Image src={"/s&a.PNG"} alt="card-img" width="380" height="300" />
            </div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={24} lg={16} xl={16}>
          <div
            className={`px-3 pt-4 d-flex flex-wrap ${styles.service_card_container}`}
          >
            <CommonSectionCardView
              card={Card}
              cardsData={cardsData}
              title={"Services & Activities"}
            />
          </div>
        </Col> */}
        </Row>
      </div>
    </div>
  );
}
