import { useState } from "react";
import Image from "next/image";
import { Row, Col, Avatar, Button } from "antd";
import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
//css
import styles from "./header.module.sass";

function Header({ menuIcon, logo, setDrawerVisbility }) {
  const [userLogedIn, setUserLogedIn] = useState(false);
  return (
    <header className={styles.header_container}>
      <Row>
        {/* desktop view */}
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <div className={styles.header}>
            <Row>
              <Col xs={8} sm={8} md={6} lg={8} xl={8}>
                <div className={`${styles.header_contain}`}>
                  <Button
                    type="text"
                    // className={`mb-2`}
                    icon={
                      // <MenuOutlined className={` ${styles.menu_icon} pr-4`} />
                      <Image
                        src={menuIcon}
                        alt="logo"
                        width="33"
                        height="26"
                      />
                    }
                    onClick={() => setDrawerVisbility(true)}
                  />
                  <Button
                    type="text"
                    className={`${styles.menu_btn} px-4`}
                    onClick={() => setDrawerVisbility(true)}
                  >
                    Menu
                  </Button>
                </div>
              </Col>
              <Col xs={8} sm={8} md={11} lg={8} xl={8}>
                <div className={`${styles.header_contain} ${styles.logo}`}>
                  <Image src={logo} alt="logo" width="368" height="85" />
                </div>
              </Col>
              <Col xs={8} sm={8} md={7} lg={8} xl={8}>
                <div className={`${styles.header_contain} justify-content-end`}>
                  <Button
                    type="text"
                    icon={<SearchOutlined className={styles.search_icon} />}
                    className={`${styles.search_btn} mb-2`}
                  />
                  <div>
                    {!userLogedIn ? (
                      <>
                        <Button
                          type="text"
                          className={`${styles.sign_up_btn}`}
                        >{`Sign up`}</Button>
                        <Button
                          type="text"
                          className={`${styles.sign_in_btn}`}
                          onClick={() => setUserLogedIn(true)}
                        >{`Sign in`}</Button>
                      </>
                    ) : (
                      <Avatar
                        size={72}
                        src={
                          <Image
                            src={"/fake-avatar.jpg"}
                            alt="card-img"
                            width="150"
                            height="150"
                          />
                        }
                        className={`ml-5`}
                      >
                        <UserOutlined className={`${styles.avatar_img}`} />
                      </Avatar>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* mobile view */}
        <Col xs={24} sm={0} md={0} lg={0} xl={0}></Col>
      </Row>
    </header>
  );
}

export default Header;
