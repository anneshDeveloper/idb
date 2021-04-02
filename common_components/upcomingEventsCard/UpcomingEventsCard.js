import { Button } from "antd";
//css
import styles from "./upcoming-events-card.module.sass";

export default function UpcomingEventsCard({ data, bg, bgImage, boxShadow }) {
  return (
    <div
      className={`${styles.event_card} p-4`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: bg,
        boxShadow: boxShadow,
      }}
    >
      <div
        className={`${styles.event_card_date} mb-5 py-1`}
        style={{ color: bg }}
      >
        <p className={`${styles.date} mt-2 mb-0`}>
          {data.EventCreatedDate.split(",")[0].split(" ")[1]}
        </p>
        <p className={`${styles.month} m-0`}>
          {data.EventCreatedDate.split(",")[0].split(" ")[0]}
        </p>
      </div>
      <h3 className={`${styles.event_title} pr-4 mb-4`}>{data.EventTitle}</h3>
      <p className={`${styles.event_time}`}>3:30 PM - 5:30 PM</p>
      <div className={`d-flex justify-content-center`}>
        <Button
          type="text"
          size={`large`}
          className={`${styles.event_button}`}
          shape="round"
          onClick={() => (location.href = `${data.RegistrationLink}`)}
        >
          Register Now
        </Button>
      </div>
    </div>
  );
}
