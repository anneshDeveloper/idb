import { useState } from "react";
import { Row, Col } from "antd";
//component
import AppBtn from "../appBtn/AppBtn";
import ResponsiveView from "./ResponsiveView";
//service
import { subscribeChangeHandler, onClickSubscribeHandler } from "./localService";
//css
import styles from "./footer.module.sass";

export default function Footer({ logo, socialMediaIcon, contactUsData }) {
  const [validEmail, setEmailValidation] = useState(0);
  const [emailValue, setEmailValue] = useState("");
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
                        {contactUsData[0].ContactDetails}
                      </p>
                      <p className={`m-0 ${styles.contact_us_subtext_des}`}>
                        {contactUsData[0].ContactTime}
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
            <input
              placeholder="Email Address"
              value={emailValue}
              className={`form-control ${
                validEmail === 0 ? "" : validEmail ? "is-valid" : "is-invalid"
              }`}
              onChange={(e) =>
                subscribeChangeHandler(e, setEmailValidation, setEmailValue)
              }
            />
            <button
              onClick={() =>
                onClickSubscribeHandler(
                  emailValue,
                  setEmailValue,
                  setEmailValidation
                )
              }
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
