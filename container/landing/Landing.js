//component
import Layout from "../../container/layout/Layout";
// import ComponentHead from "../../components/head/Head";
// import Header from "../../components/header/Header";
import Banner from "../../components/landing/banner/Banner";
import ServicesActivities from "../../components/landing/servicesActivities/ServicesActivities";
import NewsPublications from "../../components/landing/newsPublications/NewsPublications";
import UpcomingEvents from "../../components/landing/upcomingEvents/UpcomingEvents";
import Testimonials from "../../components/landing/testimonials/Testimonials";
import ContactUsSection from "../../components/landing/contactUsSection/ContactUsSection";
import Gallery from "../../components/landing/gallery/Gallery";
import VideoSection from "../../components/landing/videoSection/VideoSection";

export default function Landing({
  news,
  bannerData,
  eventsData,
  socialMediaIcon,
  contactUsData,
}) {
  return (
    <>
      <Layout socialMediaIcon={socialMediaIcon} contactUsData={contactUsData}>
        <Banner bannerData={bannerData} />
        <ServicesActivities />
        <VideoSection/>
        <NewsPublications newsData={news} />
        <Testimonials />
        <UpcomingEvents eventsData={eventsData} />
        <Gallery />
        <ContactUsSection contactUsData={contactUsData} />
      </Layout>
    </>
  );
}
