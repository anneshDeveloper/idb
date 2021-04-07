//component
import AboutUs from "../container/aboutUs/AboutUs";
//service
import { fetchService } from "../services/fetchService";
//constant
import { CONST } from "../constant";

export default function AboutUsPage({ socialMediaIcon, contactUsData }) {
  return (
    <>
      <AboutUs
        socialMediaIcon={socialMediaIcon}
        contactUsData={contactUsData}
      />
    </>
  );
}

export async function getStaticProps() {
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let contactUsUrl = process.env.BASE_URL + process.env.PATH.CONTACT_US;

  const [socialMediaIcon, contactUsData] = await Promise.all([
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(contactUsUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      socialMediaIcon,
      contactUsData,
    },
  };
}
