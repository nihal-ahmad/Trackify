import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { useHistory } from "react-router-dom";
import { Layout } from "antd";
import { UnorderedListOutlined, LogoutOutlined } from "@ant-design/icons";
const Navbar = () => {
  const history = useHistory();

  const Handler1 = () => {
    history.push("/about");
  };
  const Handler2 = () => {
    history.push("/contact");
  };
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Layout style={{ width: "100%" }}>
      <Menu
        style={{
          width: "100%",
          position: "fixed",
          zIndex: 1,
          display: "flex",
          fontFamily: "'Cinzel', serif",
          height: "10vh",
          alignItems: "center",
        }}
        mode="horizontal"
      >
        <Menu.Item
          disabled={true}
          key="mail"
          style={{ fontSize: "2em", color: "white" }}
        >
          <img
            style={{ paddingRight: ".5em" }}
            src="favicon.ico"
            alt="logo"
          ></img>
          <b style={{ color: "white" }}>Trackify</b>
        </Menu.Item>
        <Menu.Item>
          <UnorderedListOutlined
            style={{ fontSize: "2em" }}
            onClick={showDrawer}
          />
        </Menu.Item>
      </Menu>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu>
          <Menu.Item key="1" style={{ fontSize: "1.3em" }} onClick={Handler1}>
            About Us
          </Menu.Item>
          <Menu.Item key="2" style={{ fontSize: "1.3em" }} onClick={Handler2}>
            Contact US
          </Menu.Item>
          <Menu.Item>
            <hr></hr>
          </Menu.Item>
          <Menu.ItemGroup title="Team">
            <Menu.Item key="3" style={{ fontSize: "1.3em" }}>
              <a
                href={
                  "https://www.linkedin.com/in/saifur-rehman-khan-5770a9172/"
                }
                target={"_blank"}
              >
                Saifur Rehman
              </a>
            </Menu.Item>
            <Menu.Item key="4" style={{ fontSize: "1.3em" }}>
              <a
                href={"https://www.linkedin.com/in/nihal-ahmad-46042a192"}
                target={"_blank"}
              >
                Nihal Ahmad
              </a>
            </Menu.Item>
            <Menu.Item>
              <hr></hr>
            </Menu.Item>
            <Menu.Item key="5" style={{ fontSize: "1.3em" }}>
              Logout <LogoutOutlined />
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default Navbar;
