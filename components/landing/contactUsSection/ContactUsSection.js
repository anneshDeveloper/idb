import { useState } from "react";
import Image from "next/image";
import { Row, Col } from "antd";
//component
import AppBtn from "../../../common_components/appBtn/AppBtn";
//service
import {
  subscribeChangeHandler,
  onClickSubscribeHandler,
} from "./localService";
//css
import styles from "./contact-us-section.module.sass";

export default function ContactUsSection({ contactUsData }) {
  const [validEmail, setEmailValidation] = useState(0);
  const [emailValue, setEmailValue] = useState("");
  return (
    <div className={`${styles.contact_us_section}`}>
      <div className={`${styles.second_layer}`}>
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div
              className={`${styles.contact_us_container} pt-5`}
              style={{
                backgroundImage: `url('/background/contactUs.svg')`,
              }}
            >
              <div className={`${styles.contact_us_subcontainer} pt-5`}>
                <h3 className={`${styles.contact_us_text} mb-4`}>Contact us</h3>
                <p className={`${styles.contact_us_para} mb-2`}>
                  We’d love to discuss how we can help your queries.
                </p>
                <p className={`${styles.contact_us_para}`}>
                  Email us or Raise Services Request for any issues.
                </p>
                <Row>
                  <Col xs={10} sm={10} md={12} lg={10} xl={10}>
                    <AppBtn text={`Raise Request`} prefix={""} suffix={""} mode={'light'}/>
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
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div
              className={`${styles.group_img_bg}`}
              style={{
                backgroundImage: `url('/background/contactImgSec.svg')`,
              }}
            >
              <h3 className={`${styles.group_img_title}`}>ISDB GROUP</h3>
              <div className={`${styles.group_img_container}`}>
                <Image
                  src={"/ISDB_Group_Logo.svg"}
                  alt="groupLogo"
                  layout="fill"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`${styles.first_layer}`}>
        <div
          className={`${styles.newsletter_container}`}
          style={{
            backgroundImage: `url('/background/newsletter.svg')`,
          }}
        >
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
    </div>
  );
}
