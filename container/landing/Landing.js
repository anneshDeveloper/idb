//component
import Layout from "../../container/layout/Layout";
// import ComponentHead from "../../components/head/Head";
// import Header from "../../components/header/Header";
import Banner from "../../components/landing/banner/Banner";
import ServicesActivities from "../../components/landing/servicesActivities/ServicesActivities";
import WhatsNew from "../../components/landing/whatsNew/WhatsNew";
import UpcomingEvents from "../../components/landing/upcomingEvents/UpcomingEvents";
import Testimonials from "../../components/landing/testimonials/Testimonials";
import ContactUsSection from "../../components/landing/contactUsSection/ContactUsSection"
// import Footer from "../../components/footer/Footer";

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
        {/* <WhatsNew newsData={news} /> */}
        <Testimonials />
        <UpcomingEvents eventsData={eventsData} />
        <ContactUsSection contactUsData={contactUsData}/>
      </Layout>
    </>
  );
}
