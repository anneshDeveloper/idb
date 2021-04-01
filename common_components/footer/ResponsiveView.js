import Image from "next/image";
import { Row, Col } from "antd";
//css
import styles from "./footer.module.sass";

export default function ResponsiveView({ view, logo, socialMediaIcon }) {
    socialMediaIcon = socialMediaIcon.slice(0, 4);
    return (
      <div className={`${styles.navigation_container_bg} pt-5`}>
        <div
          className={`${styles.navigation_container} ${
            view === "tablet" ? "px-2" : "px-5"
          }`}
        >
          <div>
            <Row>
              <Col xs={0} sm={0} md={5} lg={5} xl={5} className={`d-flex justify-content-center flex-column`}>
                <Image src={logo} alt="logo" width="200" height="116" />
                <div className={`mt-4 d-flex justify-content-center ${view === "tablet" ? "px-2" : "px-4"}`}>
                  {socialMediaIcon.map((icon) => (
                    <span
                      className={`mx-2 ${styles.footer_list_cursor_pointer}`}
                      key={icon.id}
                    >
                      <Image
                        src={process.env.BASE_URL + icon.Logo.url}
                        alt={`${icon.toString()}`}
                        width="22"
                        height="18"
                      />
                    </span>
                  ))}
                </div>
              </Col>
              <Col xs={0} sm={0} md={7} lg={7} xl={7}>
                <ul className={`${styles.footer_list}`}>
                  <li
                    className={`${styles.footer_list_header} ${styles.footer_list_cursor_auto}`}
                  >
                    IsDB Group
                  </li>
                  <li
                    className={`${styles.footer_list_address} ${styles.footer_list_cursor_auto}`}
                  >
                    P.O. Box 55335, Jeddah 21534 Kingdom of Saudi Arabia
                  </li>
                  <li className={`${styles.footer_list_cursor_auto}`}>
                    Tel: +966 12 646 8364
                  </li>
                  <li className={`${styles.footer_list_cursor_auto}`}>
                    Fax: +966 12 637 1064
                  </li>
                </ul>
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <ul className={`${styles.footer_list}`}>
                  <li
                    className={`${styles.footer_list_header} ${styles.footer_list_cursor_auto}`}
                  >
                    Quick Links
                  </li>
                  <li>About</li>
                  <li>Articles of Agreement</li>
                  <li>Community</li>
                  <li>Privacy Policy</li>
                </ul>
              </Col>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <ul className={`${styles.footer_list}`}>
                  <li
                    className={`${styles.footer_list_header} ${styles.footer_list_cursor_auto}`}
                  >
                    Other Resources
                  </li>
                  <li>News</li>
                  <li>Press Office</li>
                  <li>Resources</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }