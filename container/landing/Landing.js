//component
import ComponentHead from "../../components/head/Head";
import Header from "../../components/header/Header";
import BannerBG from "../../components/landing/carousel/Carousel";
import ServicesActivities from "../../components/landing/servicesActivities/ServicesActivities";
import WhatsNew from "../../components/landing/whatsNew/WhatsNew";
import UpcomingEvents from "../../components/landing/upcomingEvents/UpcomingEvents";
import Testimonials from "../../components/landing/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";
import Layout from "../../container/layout/Layout";
// css
import styles from "./index.module.sass";

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
        {/* <ComponentHead logo={"/favicon.ico"} /> */}
        <div className={`${styles.carousel_header}`}>
          {/* <Header
          logo={
            "/IsDB Group _ EN _ logo _ primary _ single colour _ white_header.png"
          }
        /> */}
          <BannerBG bannerData={bannerData} />
        </div>
        <ServicesActivities />
        <WhatsNew newsData={news} />
        <Testimonials />
        <UpcomingEvents eventsData={eventsData} />
        {/* <Footer
        logo={"/StaffSocialClub-Logo_footer.png"}
        socialMediaIcon={socialMediaIcon}
        contactUsData={contactUsData}
      /> */}
      </Layout>
    </>
  );
}
