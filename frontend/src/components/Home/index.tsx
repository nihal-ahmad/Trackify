import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row,Layout,Col,Carousel,Button} from "antd";
import "./index.css";

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
  const Handler = () => {
    history.push("/login");
  }
  const { Content} = Layout;
  
return(
    <>
  <Layout style={{ height: "100vh",width: "100vw"}}>
    <Content style={{height: "100vh"}}>
     
<Row  className="glow">
      Simplify Your Job Hunt
    </Row>
 <Row style={{display:"flex",justifyContent: "center",marginTop: "10vh",alignItems: "center"}}>
<Row >

  <h2 className="p1">Track your application progress in a seamless and intuitive way <b style={{color: "#7BC74D"}}>✔</b></h2>
  </Row>
  <Row >
  <h2 className="p1">Apply anywhere - get it tracked in one place. <b style={{color: "#7BC74D"}}>✔</b></h2>
 
  </Row> 
<Row > 
  <h2 className="p1">Application process is visualized like no spreadsheet can do <b style={{color: "#7BC74D"}}>✔</b></h2>
</Row> 
</Row>
  <Row style={{display: "flex",justifyContent: "center",marginTop:"5vh"}}>
  <Button  style={{marginRight: "1em"}} onClick={Handler} size="large" shape="round" type="primary" ghost>
      Try it out!
    </Button>
    <Button onClick={Handler}  size="large" type="primary" shape="round" >
      Sign up for free
    </Button>
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
  );
};

export default Home;
