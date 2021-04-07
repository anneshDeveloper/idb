import { Row, Col } from "antd";
//css
import styles from "./our-mission.module.sass";

export default function OurMissionSection() {
  return (
    <div className={`${styles.mission_bg}`}>
      <div className={`${styles.mission_container} py-5`}>
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <h3>Our Mission</h3>
          </Col>
          <Col xs={0} sm={0} md={18} lg={18} xl={18}>
            <ul className={`pt-4 ${styles.bullet}`}>
              <li className={`mb-4`}>
                {
                  "Promote cooperation and knowledge sharing among all IsDB Group staff members (IsDB HQ and Regional Hubs)"
                }
              </li>
              <li>{`Help IsDB Group staff members balance their work and family social life`}</li>
              <li>{`Encourage social interaction among IsDB Group staff members and their families`}</li>
              <li>{`Facilitate communication between the staff members and the Senior Management of the IsDBG in an informal context`}</li>
              <li>{`To establish a “Voluntary Staff Donation Fund” in order to help the emergencies situation for staff members`}</li>
              <li>{`Welcoming new staff and encourage them to volunteer for SSC activities`}</li>
              <li>{`Announcing any happiness or sorrow about for all staff member`}</li>
              <li>{`The SSC Executive Team will organize social, spiritual events, farewell events, UN Days and ...etc.`}</li>
            </ul>
          </Col>
          <Col xs={0} sm={0} md={6} lg={6} xl={6}>
            <div className={`${styles.image}`}></div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
