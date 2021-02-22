import React,{ useEffect } from "react";
import { useHistory } from "react-router-dom";
import frame1 from "./frame1.png"
import frame2 from "./frame2.png"
import { Row,Layout,Col,Button} from "antd";
import "./index.css";
const LandingPage = () => {
    const history = useHistory();
    useEffect(() => {
        if (
          sessionStorage.getItem("token") 
        //   sessionStorage.getItem("guestmode")
        ) {
          history.push("/dashboard");
        }
      },[]);
      const Handler1 = () => {
        history.push("/dashboard");
      }
      const Handler2 = () => {
        history.push("/login");
      }


    const { Content} = Layout;
    return(
<Layout>

<Content style={{paddingRight: "1em"}}>
<Row style={{display: "flex",justifyContent: "center",height: "100vh",width: "100vw"}}>
<Col style={{display: "flex",alignItems: "center",justifyContent: "center",paddingTop: "8vh"}} span={12} xs={22} sm={22} lg={12}>
  <Row style={{display: "flex",justifyContent: "center"}}>
  <Row className="glow">  Simplify Your Job Hunt!</Row>
  <Row style={{display: "flex",justifyContent: "center",alignItems: "center",paddingTop: "1em"}}><h3 style={{color: "#A0A0A0",fontSize: "1.4em",paddingLeft: ".4em"}}>Track your application progress in a seamless and intuitive way <b style={{color: "#7BC74D"}}>✔</b></h3></Row>
  
  <br></br>

  <Row style={{display: "flex",justifyContent: "center",paddingTop: "2em"}}>
<Button  style={{marginRight: "1em"}} onClick={Handler1} size="large" shape="round" type="primary" ghost>
    Guest Mode!
  </Button>
  <Button onClick={Handler2}  size="large" type="primary" shape="round" >
    Sign up for free
  </Button>
</Row>
</Row>
</Col>
<Col style={{display: "flex",justifyContent: "center",alignItems: "center"}} span={12} sm={22} xs={22}lg={12}>
<img style={{height: "85%",width: "85%",paddingTop: "3em",borderRadius: "1em"}} src={frame1} alt="landingimage"></img>
</Col>
</Row>

<Row style={{display: "flex",justifyContent: "center",height: "100vh",width: "100vw"}}>
<Col style={{display: "flex",justifyContent: "center",alignItems: "center"}} span={12} sm={24} xs={24}lg={12}>
<img style={{height: "85%",width: "85%",paddingTop: "3em",borderRadius: "1em"}} src={frame2} alt="landingimage"></img>
</Col>

<Col style={{display: "flex",alignItems: "center",justifyContent: "center",paddingTop: "3vh"}} span={12} xs={24} sm={24} lg={12}>
  <Row style={{display: "flex",justifyContent: "center"}}>
  <Row className="glow">  Create a Card For Each Application!</Row>
  <Row style={{display: "flex",justifyContent: "center",alignItems: "center",paddingTop: "1em"}}><h3 style={{color: "#A0A0A0",fontSize: "1.4em"}}>Application process is visualized like no spreadsheet can do <b style={{color: "#7BC74D"}}>✔</b></h3></Row>
  
  <br></br>


  <Row style={{display: "flex",justifyContent: "center",paddingTop: "2em",paddingBottom: "1em"}}>
<Button  style={{marginRight: "1em"}} onClick={Handler1} size="large" shape="round" type="primary" ghost>
   GuestMode!
  </Button>
  <Button onClick={Handler2}  size="large" type="primary" shape="round" >
    Sign up for free
  </Button>
</Row>
</Row>
</Col>
</Row>
</Content>
</Layout>
    );
};

export default LandingPage;