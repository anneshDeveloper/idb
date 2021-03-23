//component
import Landing from "../container/landing/Landing";
//service
import { fetchService } from "../services/fetchService";
//constant
import { CONST } from "../constant";

export default function Home({
  news,
  bannerData,
  eventsData,
  socialMediaIcon,
  contactUsData,
}) {
  return (
    <>
      <Landing
        news={news}
        bannerData={bannerData}
        eventsData={eventsData}
        socialMediaIcon={socialMediaIcon}
        contactUsData={contactUsData}
      />
    </>
  );
}

export async function getStaticProps() {
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
  let bannerUrl = process.env.BASE_URL + process.env.PATH.BANNER;
  let eventsUrl = process.env.BASE_URL + process.env.PATH.EVENTS;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let contactUsUrl = process.env.BASE_URL + process.env.PATH.CONTACT_US;

  const [
    news,
    bannerData,
    eventsData,
    socialMediaIcon,
    contactUsData,
  ] = await Promise.all([
    await fetchService(newsUrl, CONST.API_METHOD.GET),
    await fetchService(bannerUrl, CONST.API_METHOD.GET),
    await fetchService(eventsUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(contactUsUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      news,
      bannerData,
      eventsData,
      socialMediaIcon,
      contactUsData,
    },
  };
}
