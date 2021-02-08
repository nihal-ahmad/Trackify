import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row,Layout, Menu,} from "antd";
import AuthenticationNavigation from "../Navigations/AuthenticationNavigation";
import GuestMode from "../GuestMode/GuestMode";


const Home = () => {
  const history = useHistory();

  useEffect(() => {
    if (
      sessionStorage.getItem("token") 
    //   sessionStorage.getItem("guestmode")
    ) {
      history.push("/dashboard");
    }
  },[]);
  
  const { Content, Footer } = Layout;

return(
    <>
  <Layout style={{height: "100vh", width: "100vw"}}>
    
  
<Content style={{paddingTop: "5em"}}>
      <Row>
        <AuthenticationNavigation />
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ marginTop: 50, marginBottom: 20 }}>or</h1>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <GuestMode />
      </Row>
      </Content>
    <Footer style={{ textAlign: 'center',display: "flex",justifyContent: "space-between" }}>
      <h1>TRACKIFY ©2021 Created by <b>Nihal Ahmad | Saifur Rehman</b></h1>
      <h1>About Us</h1></Footer>
      </Layout>
  

</>
  );
};

export default Home;
