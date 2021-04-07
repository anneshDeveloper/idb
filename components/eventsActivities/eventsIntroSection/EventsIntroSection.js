import { Row, Col, Button } from "antd";
//component
import UpcomingEventsCard from "../../../common_components/upcomingEventsCard/UpcomingEventsCard";
//css
import styles from "./events-intro-section.module.sass";

export default function EventsIntroSection({
  event,
  bg,
  bgImage,
  boxShadow,
}) {
  return (
    <div className={`${styles.events_bg}`}>
      <div className={`${styles.events_container} py-5`}>
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <h3>Upcoming Events</h3>
          </Col>
          <Col xs={0} sm={0} md={8} lg={8} xl={8}>
            <UpcomingEventsCard
              bg={bg}
              bgImage={bgImage}
              boxShadow={boxShadow}
              data={event}
            />
          </Col>
          <Col xs={0} sm={0} md={16} lg={16} xl={16}>
            <div className={`d-flex justify-content-center flex-column h-100`}>
              <h3>{event.EventTitle}</h3>
              <p>{event.EventAuthor}</p>
              <p>{event.EventDescription}</p>
              <div>
                <Button type="primary" shape="round" size={"large"}>
                  Register Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
