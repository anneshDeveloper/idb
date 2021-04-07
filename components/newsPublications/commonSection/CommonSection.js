import Image from "next/image";
import { Row, Col, Button } from "antd";

export default function CommonSection({
  news,
  section,
  imageWidth,
  imageHeight,
}) {
  const base_url = process.env.BASE_URL;
  return (
    <Row>
      {section === "intro" && (
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <h3>Most Viewed</h3>
        </Col>
      )}
      <Col xs={0} sm={0} md={8} lg={8} xl={8}>
        <Image
          src={base_url + news.NewsImage[0].url}
          alt={"publication-image"}
          width={imageWidth}
          height={imageHeight}
        />
      </Col>
      <Col xs={0} sm={0} md={16} lg={16} xl={16}>
        <div className={`d-flex justify-content-center flex-column h-100`}>
          <h3>{news.NewsTitle}</h3>
          <p>{news.NewsAuthor}</p>
          <p>{news.CreatedDate}</p>
          {section === "intro" && (
            <p>
              {news.NewsDescription.length > 350
                ? news.NewsDescription.substring(0, 350)
                : news.NewsDescription}
            </p>
          )}
          <div>
            <Button type="primary" shape="round" size={"large"}>
              Get The Book
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
