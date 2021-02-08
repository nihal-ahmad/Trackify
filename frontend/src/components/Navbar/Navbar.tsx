import React from 'react'
import {Layout,Menu} from "antd";
import { useHistory } from "react-router-dom";
import { Button } from 'antd';
const Navbar = () => {
    const history = useHistory();
    
    const Handler1 = () => {
        history.push("/dashboard");
    }
    const Handler2 = () => {
        history.push("/");
    }
    const { Header} = Layout;
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: "100%",height: "10vh"}}>

<Menu theme="dark" mode="horizontal" style={{width: "100%"}} >
    <Menu.Item key= "1" style={{backgroundColor: "transparent",paddingRight: "0"}} >
        <img src="favicon.ico"></img>
    </Menu.Item>
<Menu.Item key="2" style={{fontFamily: "'Cinzel', serif", fontSize: "1.4em",backgroundColor: "transparent",color: "#A4ABAB",paddingLeft: "1em"}} onClick={Handler2}>TRACKIFY</Menu.Item>
<Menu.Item key="3" style={{float: "right",fontFamily: "'Cinzel', serif", fontSize: "1.4em",backgroundColor: "transparent", }} onClick={Handler1}><Button type="primary" ghost>
     TRY NOW
    </Button></Menu.Item>
</Menu>
</Header>
        </Layout>
    )
}

export default Navbar;
