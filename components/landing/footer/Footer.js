import Image from "next/image";
import { Row, Col } from "antd";
//component
import AppBtn from "../appBtn/AppBtn";
//css
import styles from "./footer.module.sass";

function ResponsiveView({ view, logo, socialMediaIcon }) {
  return (
    <div className={`${styles.navigation_container_bg}`}>
      <div
        className={`${styles.navigation_container} ${
          view === "tablet" ? "px-2" : "px-5"
        }`}
      >
        <div>
          <Row>
            <Col xs={0} sm={0} md={6} lg={6} xl={6}>
              <Image src={logo} alt="logo" width="200" height="116" />
              <div className={`mt-4 ${view === "tablet" ? "px-2" : "px-4"}`}>
                {Object.keys(socialMediaIcon).map((icon, i) => (
                  <span
                    className={`mx-2 ${styles.footer_list_cursor_pointer}`}
                    key={i.toString()}
                  >
                    <Image
                      src={socialMediaIcon[icon]}
                      alt={`${icon.toString()}`}
                      width="22"
                      height="18"
                    />
                  </span>
                ))}
              </div>
            </Col>
            <Col xs={0} sm={0} md={6} lg={6} xl={6}>
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

export default function Footer({ logo, socialMediaIcon }) {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.second_layer}`}>
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div className={`${styles.contact_us_container} pt-5`}>
              <div className={`${styles.contact_us_subcontainer}`}>
                <h3 className={`${styles.contact_us_text} mb-4`}>Contact us</h3>
                <p className={`${styles.contact_us_para} mb-2`}>
                  We’d love to discuss how we can help your queries.
                </p>
                <p className={`${styles.contact_us_para}`}>
                  Email us or Raise Services Request for any issues.
                </p>
                <Row>
                  <Col xs={10} sm={10} md={12} lg={10} xl={10}>
                    <AppBtn text={`Raise Request`} prefix={""} suffix={""} />
                  </Col>
                  <Col xs={14} sm={14} md={12} lg={14} xl={14}>
                    <div
                      className={`d-flex justify-content-center flex-column h-100 pl-3`}
                    >
                      <p className={`m-0 ${styles.contact_us_subtext_title}`}>
                        services@isdb.org
                      </p>
                      <p className={`m-0 ${styles.contact_us_subtext_des}`}>
                        Monday - Friday, 9am - 6pm
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <ResponsiveView
              view={"desktop"}
              logo={logo}
              socialMediaIcon={socialMediaIcon}
            />
          </Col>
          <Col xs={0} sm={0} md={24} lg={0} xl={0}>
            <ResponsiveView
              view={"tablet"}
              logo={logo}
              socialMediaIcon={socialMediaIcon}
            />
          </Col>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div className={`${styles.rights_reserved}`}>
              <div>© 2021 IsDB Group. All rights reserved.</div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`${styles.first_layer}`}>
        <div className={`${styles.newsletter_container}`}>
          <h2 className={`${styles.newsletter_title}`}>Our Newsletter</h2>
          <div className={`${styles.newsletter_input_container}`}>
            <input placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
