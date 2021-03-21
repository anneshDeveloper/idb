import Image from "next/image";
import { Row, Col, Input, Avatar } from "antd";
import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
//css
import styles from "./header.module.sass";

function Header({ logo }) {
  return (
    <header className={styles.header_container}>
      <Row>
        {/* desktop view */}
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <div className={styles.header}>
            <Row>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className={`${styles.header_contain} ${styles.menu}`}>
                  <MenuOutlined
                    className={`${styles.font_white} ${styles.menu_icon} pr-4`}
                  />
                  Menu
                </div>
              </Col>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className={`${styles.header_contain} ${styles.logo}`}>
                  <Image src={logo} alt="logo" width="170" height="72" />
                </div>
              </Col>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <div
                    className={`${styles.header_contain} ${styles.search_container}`}
                  >
                    <Col
                      xs={17}
                      sm={17}
                      md={17}
                      lg={16}
                      xl={17}
                      className={`${styles.search_inner_container}`}
                    >
                      <Input
                        placeholder="Search"
                        suffix={
                          <SearchOutlined className={styles.search_logo} />
                        }
                        className={`${styles.search} pl-4`}
                      />
                    </Col>
                    <Col
                      xs={7}
                      sm={7}
                      md={7}
                      lg={8}
                      xl={7}
                      className={`${styles.search_inner_container}`}
                    >
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
                      >
                        {/* <UserOutlined className={`${styles.avatar_img}`} /> */}
                      </Avatar>
                    </Col>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        {/* tablet view */}
        <Col xs={0} sm={0} md={24} lg={0} xl={0}>
          <div className={styles.header}>
            <Row>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className={`${styles.header_contain} ${styles.menu}`}>
                  <MenuOutlined
                    className={`${styles.font_white} ${styles.menu_icon} pr-4`}
                  />
                  Menu
                </div>
              </Col>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className={`${styles.header_contain} ${styles.logo}`}>
                  <Image src={logo} alt="logo" width="170" height="72" />
                </div>
              </Col>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <Row>
                  <div
                    className={`${styles.header_contain} ${styles.search_container}`}
                  >
                    <Col
                      xs={18}
                      sm={18}
                      md={17}
                      lg={18}
                      xl={18}
                      className={`${styles.search_inner_container} pr-3`}
                    >
                      <Input
                        placeholder="Search"
                        suffix={
                          <SearchOutlined className={styles.search_logo} />
                        }
                        className={`${styles.search_tab} pl-4`}
                      />
                    </Col>
                    <Col
                      xs={6}
                      sm={6}
                      md={7}
                      lg={6}
                      xl={6}
                      className={`${styles.search_inner_container}`}
                    >
                      <Avatar
                        size={64}
                        src={
                          <Image
                            src={"/fake-avatar.jpg"}
                            alt="card-img"
                            width="150"
                            height="150"
                          />
                        }
                      >
                        {/* <UserOutlined className={`${styles.avatar_img}`} /> */}
                      </Avatar>
                    </Col>
                  </div>
                </Row>
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
