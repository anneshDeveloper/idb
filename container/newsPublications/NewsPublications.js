import React, { useState, useEffect } from "react";
//component
import Layout from "../layout/Layout";
import InnerPageTitleSection from "../../common_components/innerPageTitleSection/InnerPageTitleSection";
import NewsIntroSection from "../../components/newsPublications/newsIntroSection/NewsIntroSection";
import Slider from "../../components/newsPublications/slider/Slider";
import PublicationsSection from "../../components/newsPublications/publicationsSection/PublicationsSection";
import NewsSection from "../../components/newsPublications/newsSection/NewsSection";

const items = [];

function setSliderData(news) {
  news.forEach((newsObject, i) => {
    items.push(
      <div data-value={i.toString()}>
        <NewsIntroSection
          news={newsObject}
          section={"intro"}
          imageWidth={"350"}
          imageHeight={"430"}
        />
      </div>
    );
  });
}

export default function NewsPublications({
  news,
  socialMediaIcon,
  contactUsData,
}) {
  setSliderData(news);
  return (
    <>
      <Layout socialMediaIcon={socialMediaIcon} contactUsData={contactUsData}>
        <InnerPageTitleSection title={"news & publications"} />
        <Slider items={items} news={news} />
        <PublicationsSection news={news} />
        <NewsSection news={news} />
      </Layout>
    </>
  );
}
