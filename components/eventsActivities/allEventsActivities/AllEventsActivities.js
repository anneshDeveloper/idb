import { Row, Col, Button, Avatar } from "antd";
//component
import UpcomingEventsCard from "../../../common_components/upcomingEventsCard/UpcomingEventsCard";
//css
import styles from "./all-events-activities.module.sass";
//service
import { setBackground } from "../../../services/eventService";

export default function AllEventsActivities({ eventsData }) {
  return (
    <div className={`${styles.container} py-5`}>
      <h3>{`All Events & Activities`}</h3>
      <Row gutter={[48, 40]}>
        {eventsData.map((event) => {
          let [bg, bgImage, boxShadow] = setBackground(event);
          return (
            <Col span={8}>
              <UpcomingEventsCard
                bg={bg}
                bgImage={bgImage}
                boxShadow={boxShadow}
                data={event}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
