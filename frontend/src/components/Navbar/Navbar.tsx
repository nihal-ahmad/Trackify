import React from 'react'
import {Menu} from "antd";
import { useHistory } from "react-router-dom";
import { Layout, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const Navbar = () => {
    const history = useHistory();

    const Handler2 = () => {
        history.push("/contact");
    }
    const { SubMenu } = Menu;
    return (
      <Layout style={{width: "100%"}}>

      <Menu 
          style={{
          width: "100%",
          position: "fixed",
          zIndex: 1,
          display: "flex",
          // fontFamily: "'Cinzel', serif",
          height: "10vh",
          alignItems: "center"
          }}  
          mode="horizontal" 
          onClick={Handler2}>
        <Menu.Item disabled={true} key="mail" style={{fontSize: "2em",color: "white"}} >
        <img style={{paddingRight: ".5em"}} src="favicon.ico" alt="logo"></img>
          <b style={{color: "white"}}>Trackify</b> 
        </Menu.Item>
       

        <SubMenu  key="SubMenu" icon={<DownOutlined style={{fontSize: "1.6em"}}/>} >
       
            <Menu.Item key="1" style={{fontSize: "1.3em"}}>About Us</Menu.Item>
            <Menu.Item key="2" style={{fontSize: "1.3em"}}>Contact US</Menu.Item>
            <Menu.ItemGroup title="Team">
              <Menu.Item key="3" style={{fontSize: "1.3em"}}>Saifur Rehman</Menu.Item>
              <Menu.Item key="4" style={{fontSize: "1.3em"}}>Nihal Ahmad</Menu.Item>
            </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item style={{ float : "right" }}>
          <Button type="primary" >Log out</Button>
        </Menu.Item>
        <Menu.Item>
          <h3>gk</h3>
        </Menu.Item>
      </Menu>

   
      </Layout>

    )
}

export default Navbar;
