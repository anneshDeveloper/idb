import Image from "next/image";
import { Row, Col, Button, Avatar } from "antd";
// component
import CommonSectionCardView from "../commonSectionCardView/CommonSectionCardView";
//css
import styles from "./services-activities.module.sass";

function Card({ data }) {
  let card_spacing = "";
  switch (data.spacing) {
    case "m_br":
      card_spacing = styles.m_br;
      break;
    case "m_bl":
      card_spacing = styles.m_bl;
      break;
    case "m_tr":
      card_spacing = styles.m_tr;
      break;
    case "m_tl":
      card_spacing = styles.m_tl;
      break;
    default:
      card_spacing = "";
      break;
  }
  return (
    <div className={`${styles.services_card} ${card_spacing}`}>
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
            <Avatar className={`${styles.card_avatar}`} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default function ServicesActivities() {
  const cardsData = [
    { title: "Wellbeing Awareness Sessions", spacing: "m_br" },
    { title: "Family & Social Sessions", spacing: "m_bl" },
    { title: "Religious Activities Sessions", spacing: "m_tr" },
    { title: "Entertainment & Online Game Sessions", spacing: "m_tl" },
  ];
  return (
    <div className={`${styles.service_container} pt-5`}>
      <Row>
        <Col xs={0} sm={0} md={24} lg={8} xl={8}>
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
        </Col>
      </Row>
    </div>
  );
}
