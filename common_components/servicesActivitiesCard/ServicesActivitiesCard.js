import Image from "next/image";
import { Row, Col, Button, Avatar } from "antd";
//css
import styles from "./services-activities-card.module.sass";

export default function ServicesActivitiesCard({ data }) {
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
