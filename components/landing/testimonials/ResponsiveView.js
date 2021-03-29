import Image from "next/image";
import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
//component
import AppBtn from "../appBtn/AppBtn";
// css
import styles from "./testimonials.module.sass";

export default function ResponsiveView({ view }) {
    return (
      <div
        className={`d-flex justify-content-center ${styles.testimonials_container} pt-5`}
      >
        <div className={`h-100 w-100 ${view === "desktop" ? "px-3" : "px-1"}`}>
          <Row>
            <Col xs={15} sm={15} md={15} lg={15} xl={15}>
              <div className={`${styles.testimonials_text}`}>
                <h3 className={`${styles.testimonials_title} mb-5`}>
                  Testimonials
                </h3>
                <p className={`${styles.testimonials_des} mb-5`}>
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip.
                </p>
                <h5 className={`${styles.testimonials_author}`}>Ayaz Ahamed</h5>
              </div>
            </Col>
            <Col xs={9} sm={9} md={9} lg={9} xl={9}>
              <div className={`${styles.image_container} w-100 mb-5`}>
                <Image
                  src={'/testimonial.PNG'}
                  alt="card-img"
                  width="416"
                  height="387"
                />
              </div>
              <div className={`d-flex justify-content-end w-100`}>
                <AppBtn
                  text={`See All`}
                  prefix={""}
                  suffix={<ArrowRightOutlined className={`ml-2 pt-1`} />}
                  mode={'dark'}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }