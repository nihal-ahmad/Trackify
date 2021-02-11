import React,{useState} from 'react'
import {Menu} from "antd";
import { useHistory } from "react-router-dom";
import { Layout} from 'antd';
import { DownOutlined } from '@ant-design/icons';
const Navbar = () => {
    const history = useHistory();

    const Handler1 = () => {
        history.push("/dashboard");
    }
    const Handler2 = () => {
        history.push("/");
    }
    const { SubMenu } = Menu;
    const {Header} = Layout;

//         <Layout>
//             <Header style={{ position: 'fixed', zIndex: 1, width: "100%",height: "10vh"}}>

// <Menu theme="dark" mode="horizontal" style={{width: "100%",display: "flex",justifyContent: "center"}} >
//     <Menu.Item key= "1" style={{backgroundColor: "transparent",paddingRight: "0"}} >
//         <img src="favicon.ico"></img>
//     </Menu.Item>
// <Menu.Item key="2" style={{fontFamily: "'Cinzel', serif", fontSize: "1.8em",backgroundColor: "transparent",color: "#A4ABAB",paddingLeft: ".3em",alignItems: "center",paddingTop: ".1em"}} onClick={Handler2}><strong>TRACKIFY</strong></Menu.Item>

// </Menu>
// </Header>
//         </Layout>






    return (
      <Layout>
      <Header>
      <Menu style={{width: "100%",display: "flex",justifyContent: "space-between",fontFamily: "'Cinzel', serif",height: "10vh",alignItems: "center",position: "sticky"}}  mode="horizontal" onClick={Handler2}>
        <Menu.Item key="mail" style={{fontSize: "2em"}} >
        <img src="favicon.ico"></img>
          Trackify 
        </Menu.Item>
       

        <SubMenu key="SubMenu" icon={<DownOutlined style={{fontSize: "1.6em"}}/>} >
       
            <Menu.Item key="1" style={{fontSize: "1.3em"}}>About Us</Menu.Item>
            <Menu.Item key="2" style={{fontSize: "1.3em"}}>Contact US</Menu.Item>
            <Menu.ItemGroup title="Team">
            <Menu.Item key="3" style={{fontSize: "1.3em"}}>Saifur Rehman</Menu.Item>
            <Menu.Item key="4" style={{fontSize: "1.3em"}}>Nihal Ahmad</Menu.Item>
            </Menu.ItemGroup>
        </SubMenu>
      
      </Menu>
      </Header>
      </Layout>

    )
}

export default Navbar;
