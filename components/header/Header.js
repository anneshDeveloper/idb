import Image from "next/image";
import { Row, Col, Form, Input, Avatar, Button } from "antd";
import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
//css
import styles from "./header.module.sass";

function Header({ logo, setDrawerVisbility }) {
  const [form] = Form.useForm();

  return (
    <header className={styles.header_container}>
      <Row>
        {/* desktop view */}
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <div className={styles.header}>
            <Row>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className={`${styles.header_contain}`}>
                  <Button
                    type="text"
                    icon={
                      <MenuOutlined
                        className={`${styles.font_white} ${styles.menu_icon} pr-4`}
                      />
                    }
                    onClick={() => setDrawerVisbility(true)}
                  />
                  <Button
                    type="text"
                    className={`${styles.menu_btn} mt-2`}
                    onClick={() => setDrawerVisbility(true)}
                  >
                    Menu
                  </Button>
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
                      className={`${styles.search_inner_container} h-100`}
                    >
                      <Form
                        form={form}
                        className={`w-100 d-flex justify-content-end`}
                      >
                        <Form.Item
                          name="search"
                          rules={[
                            {
                              min: 3,
                              max: 30,
                              message:
                                "Search must be minimum 3 & maximum 30 characters.",
                            },
                          ]}
                          className={`${styles.search_form_item} m-0 w-100`}
                        >
                          <Input
                            placeholder="Search"
                            suffix={
                              <SearchOutlined className={styles.search_logo} />
                            }
                            className={`${styles.search} pl-4`}
                          />
                        </Form.Item>
                      </Form>
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
                <div className={`${styles.header_contain}`}>
                  <Button
                    type="text"
                    icon={
                      <MenuOutlined
                        className={`${styles.font_white} ${styles.menu_icon} pr-4`}
                      />
                    }
                  />
                  <Button type="text" className={`${styles.menu_btn} mt-2`}>
                    Menu
                  </Button>
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
                      className={`${styles.search_inner_container} h-100 pr-3`}
                    >
                      <Form
                        form={form}
                        className={`w-100 d-flex justify-content-end`}
                      >
                        <Form.Item
                          name="search"
                          rules={[
                            {
                              min: 3,
                              max: 30,
                              message: "Min 3 & max 30 characters.",
                            },
                          ]}
                          className={`${styles.search_form_item} m-0 w-100`}
                        >
                          <Input
                            placeholder="Search"
                            suffix={
                              <SearchOutlined className={styles.search_logo} />
                            }
                            className={`${styles.search_tab} pl-4`}
                          />
                        </Form.Item>
                      </Form>
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
