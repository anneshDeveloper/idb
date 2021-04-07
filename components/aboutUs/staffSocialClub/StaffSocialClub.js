import Image from "next/image";
import { Row, Col } from "antd";
//css
import styles from "./staff-social-club.module.sass";

function getFinalData(data) {
  let result = [];
  for (let i = 0; i < 11; i++) {
    result.push(data);
  }
  return result;
}

export default function AboutUsCommonSection() {
  let data = {
    image: "/testimonial.PNG",
    name: "Br. Abdurrahman York1",
    degisnation: "Member, IsDB",
  };
  let finalData = getFinalData(data);
  console.log(finalData);
  return (
    <div className={`${styles.container} py-5`}>
      <h3 className={`${styles.h3}`}>Lorem ipsum dolor sit amet</h3>
      <p className={`${styles.p}`}>Lorem ipsum dolor sit amet</p>
      <Row gutter={[16, 16]} className={`d-flex justify-content-center`}>
        {finalData.map((data) => (
          <Col span={6}>
            <div className={`${styles.ssc_image_box} mb-5`}>
              <Image
                src={"/testimonial.PNG"}
                alt="ssc"
                width="230"
                height="220"
                className={`${styles.ssc_image}`}
              />
            </div>
            <h5>{data.name}</h5>
            <p>{data.degisnation}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}
