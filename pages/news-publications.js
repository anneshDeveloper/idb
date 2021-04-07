//component
import NewsPublications from "../container/newsPublications/NewsPublications";
//service
import { fetchService } from "../services/fetchService";
//constant
import { CONST } from "../constant";

export default function NewsPublicationsPage({
  news,
  socialMediaIcon,
  contactUsData,
}) {
  return (
    <>
      <NewsPublications
        news={news}
        socialMediaIcon={socialMediaIcon}
        contactUsData={contactUsData}
      />
    </>
  );
}

export async function getStaticProps() {
  let newsUrl = process.env.BASE_URL + process.env.PATH.NEWS;
  let socialMediaUrl = process.env.BASE_URL + process.env.PATH.SOCIAL_MEDIA;
  let contactUsUrl = process.env.BASE_URL + process.env.PATH.CONTACT_US;

  const [news, socialMediaIcon, contactUsData] = await Promise.all([
    await fetchService(newsUrl, CONST.API_METHOD.GET),
    await fetchService(socialMediaUrl, CONST.API_METHOD.GET),
    await fetchService(contactUsUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      news,
      socialMediaIcon,
      contactUsData,
    },
  };
}
