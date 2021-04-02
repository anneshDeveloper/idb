import { Drawer, Row, Col } from "antd";
import { CloseOutlined } from "@ant-design/icons";
//
import styles from "./drawer.module.sass";

export default function AppDrawer({ visbility, setVisbility }) {
  let menuLists = [
    {
      header: "Discover",
      links: [
        {
          name: "Home",
          link: "https://www.google.co.in/",
        },
        {
          name: "Gallery",
          link: "https://www.google.co.in/",
        },
        {
          name: "About Us",
          link: "https://www.google.co.in/",
        },
        {
          name: "Events",
          link: "https://www.google.co.in/",
        },
        {
          name: "Publications",
          link: "https://www.google.co.in/",
        },
      ],
    },
    {
      header: "Services",
      links: [
        {
          name: "Wellbeing Awareness",
          link: "https://www.google.co.in/",
        },
        {
          name: "Virtual Sports & Recreational",
          link: "https://www.google.co.in/",
        },
        {
          name: "Religious Activities",
          link: "https://www.google.co.in/",
        },
        {
          name: "Educational Courses",
          link: "https://www.google.co.in/",
        },
        {
          name: "Family & Social",
          link: "https://www.google.co.in/",
        },
        {
          name: "Entertainment & Online Games",
          link: "https://www.google.co.in/",
        },
        {
          name: "IsDB Group Activities",
          link: "https://www.google.co.in/",
        },
        {
          name: "Buy & Sell",
          link: "https://www.google.co.in/",
        },
      ],
    },
    {
      header: "Media",
      links: [
        {
          name: "News",
          link: "https://www.google.co.in/",
        },
        {
          name: "Press Office",
          link: "https://www.google.co.in/",
        },
        {
          name: "Resources",
          link: "https://www.google.co.in/",
        },
      ],
    },
  ];
  return (
    <>
      <Drawer
        placement={"top"}
        closable={false}
        height={"100vh"}
        onClose={() => setVisbility(false)}
        visible={visbility}
        key={"top"}
        // className={`${styles.drawer_bg}`}
        bodyStyle={{ background: "#000000FA", color: "#fff" }}
      >
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <span onClick={() => setVisbility(false)} className={`d-flex mb-5`}>
              <CloseOutlined className={`${styles.close_Icon_btn}`} />
              <p
                className={`d-flex ml-4 m-0 align-items-center ${styles.close_btn}`}
              >
                Close
              </p>
            </span>
          </Col>
          {menuLists.map((listItem) => (
            <Col
              xs={0}
              sm={0}
              md={8}
              lg={8}
              xl={8}
              className={`d-flex justify-content-center`}
            >
              <div className={`${styles.list_header}`}>
                {listItem.header}
                <ul className={`${styles.list_items} mt-4 pl-4`}>
                  {listItem.links.map((list) => (
                    <li className={`mb-4`}>
                      <a href={list.link}>{list.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
          {/* <Col
            xs={0}
            sm={0}
            md={8}
            lg={8}
            xl={8}
            className={`d-flex justify-content-center`}
          >
            Services
          </Col>
          <Col
            xs={0}
            sm={0}
            md={8}
            lg={8}
            xl={8}
            className={"d-flex justify-content-center"}
          >
            Media
          </Col> */}
        </Row>
      </Drawer>
    </>
  );
}
