//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import AboutUsIntroSection from "../../components/aboutUs/aboutUsIntroSection/AboutUsIntroSection";
import OurMissionSection from "../../components/aboutUs/ourMission/OurMission";
import StaffSocialClub from "../../components/aboutUs/staffSocialClub/StaffSocialClub";
import VideoSection from "../../common_components/videoSection/VideoSection";

export default function AboutUs({ socialMediaIcon, contactUsData }) {
  return (
    <>
      <Layout socialMediaIcon={socialMediaIcon} contactUsData={contactUsData}>
        <InnerPageTitleSection title={"about us"} />
        <AboutUsIntroSection />
        <OurMissionSection />
        <StaffSocialClub />
        <VideoSection />
      </Layout>
    </>
  );
}
