import React from "react";
//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import EventsIntroSection from "../../components/eventsActivities/eventsIntroSection/EventsIntroSection";
import AllEventsActivities from "../../components/eventsActivities/allEventsActivities/AllEventsActivities";
import Slider from "../../components/eventsActivities/slider/Slider";
//services
import { setBackground } from "../../services/eventService";

const items = [];

function setSliderData(eventsData) {
  eventsData.forEach((event, i) => {
    let [bg, bgImage, boxShadow] = setBackground(event);
    items.push(
      <div data-value={i.toString()}>
        <EventsIntroSection
          event={event}
          bg={bg}
          bgImage={bgImage}
          boxShadow={boxShadow}
        />
      </div>
    );
  });
}

export default function EventsActivities({
  eventsData,
  socialMediaIcon,
  contactUsData,
}) {
  setSliderData(eventsData);
  return (
    <>
      <Layout socialMediaIcon={socialMediaIcon} contactUsData={contactUsData}>
        <InnerPageTitleSection title={"events & activities"} />
        <Slider items={items} eventsData={eventsData} />
        <AllEventsActivities eventsData={eventsData} />
      </Layout>
    </>
  );
}
