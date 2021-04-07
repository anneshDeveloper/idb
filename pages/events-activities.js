//component
import EventsActivities from "../container/eventsActivities/EventsActivities";
//service
import { fetchService } from "../services/fetchService";
//constant
import { CONST } from "../constant";

export default function EventsActivitiesPage({
  eventsData,
  socialMediaIcon,
  contactUsData,
}) {
  return (
    <>
      <EventsActivities
        eventsData={eventsData}
        socialMediaIcon={socialMediaIcon}
        contactUsData={contactUsData}
      />
    </>
  );
}

export async function getStaticProps() {
  let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let contactUsUrl = process.env.BASE_URL + process.env.PATH.CONTACT_US;

  const [eventsData, socialMediaIcon, contactUsData] = await Promise.all([
    await fetchService(eventsUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(contactUsUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      eventsData,
      socialMediaIcon,
      contactUsData,
    },
  };
}
