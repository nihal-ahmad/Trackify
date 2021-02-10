import React from 'react'
import {Row,Col,Layout} from "antd"
import AuthenticationNavigation from "../Navigations/AuthenticationNavigation";
import GuestMode from "../GuestMode/GuestMode";
function Login() {
    const {Content} = Layout;
    return (
        
        <>
        <Layout style={{height: "100vh",width: "100vw"}}>
            <Content style={{paddingTop: "13vh"}}>
        <Row>
        <AuthenticationNavigation />
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ marginTop: 50, marginBottom: 20 }}>or</h1>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <GuestMode />
      </Row>
      <Row style={{display: "flex",justifyContent: "space-between",marginTop: "5vh",paddingLeft: ".7em"}}>
    <Col>
    <h1><b>TRACKIFY</b> ©2021 Created by <strong>Nihal Ahmad | Saifur Rehman</strong></h1>
    </Col>
  <Col>
  <h1 style={{cursor: "pointer",paddingRight: ".7em"}}><b>About Us</b></h1>
  </Col>
  </Row>
  </Content>
  </Layout>
      </>
   
    )
}

export default Login
