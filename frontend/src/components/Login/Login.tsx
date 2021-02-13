import React from 'react'
import {Row,Layout} from "antd"
import AuthenticationNavigation from "../Navigations/AuthenticationNavigation";
import Navbar from "../Navbar/Navbar";

const { Content } = Layout;
const Login = () => <>
        <Navbar />
        <Layout style={{height: "100vh",width: "100vw"}}>
            <Content style={{paddingTop: "13vh"}}>
            <Row>
                <AuthenticationNavigation />
            </Row>
            </Content>
        </Layout>
    </>
        
export default Login
