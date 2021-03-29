import Image from "next/image";
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
//component
import AppBtn from "../appBtn/AppBtn";
// css
import styles from "./testimonials.module.sass";

export default function ResponsiveView({ view }) {
  return (
    <div className={`${styles.testimonials_container}`}>
      <div
        className={`${styles.testimonials_subcontainer} ${
          view === "desktop" ? "px-3" : "px-1"
        }`}
      >
        <Row>
          <Col xs={17} sm={17} md={16} lg={17} xl={17}>
            <div /* className={`${styles.testimonials_text}`} */>
              <h3 className={`${styles.testimonials_title}`}>Testimonials</h3>
              <Row>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                  <div
                    className={`${styles.before_des_img}`}
                    style={{
                      backgroundImage: `url(/context/testimonialsDoubleQuote.svg)`,
                    }}
                  ></div>
                </Col>
                <Col xs={18} sm={18} md={18} lg={18} xl={18}>
                  <p className={`${styles.testimonials_des}`}>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip.
                  </p>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                  <div
                    className={`${styles.after_des_img}`}
                    style={{
                      backgroundImage: `url(/context/testimonialsDoubleQuote.svg)`,
                    }}
                  ></div>
                </Col>
              </Row>
              <h5 className={`${styles.testimonials_author}`}>Ayaz Ahamed</h5>
            </div>
          </Col>
          <Col xs={7} sm={7} md={8} lg={7} xl={7}>
            <div className={`${styles.image_container} w-100`}>
              <div className={`${styles.testimonials_image_box}`}>
                <Image
                  src={"/testimonial.PNG"}
                  alt="card-img"
                  width="200"
                  height="200"
                  className={`${styles.testimonials_image}`}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
