import React from 'react';
import "./index.css"
import { Row, Col ,Layout,Card} from 'antd';
import nihal from "./nihal-ahmad.jpeg"
import saifur from "./saifur-rehman.jpg"
import github from "./github-logo.svg"
import linkedin from "./linkedin.svg"
import resume from "./resume.svg"

function About() {
  const {Content} = Layout;
  const {Meta} = Card;
  
  return (
    <>
    <Layout style={{display: "flex",
  justifyContent: "center"}}> 
      <Content style={{
        paddingTop: "12vh",
    
      }}>
<Row style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>
  <b style={{
    fontSize:"1.8em",
    color: "#3690CC"
  }}>Intro :</b>
</Row >
<br />
<Row style={{
 display: "flex",
 justifyContent: "center",
 alignItems: "center"
}}>
  <Row style={{fontSize: "2em"}}>
  We went through the job application process ourselves and we were not so happy about it.
  </Row>
  
</Row>
<br />
<Row className="row">
  # Messy spreadsheets, lost emails, lack of information.
  </Row>
  <br />
  <Row className="row">
  # We decided to make a job search simple and data-driven and career advising efficient.
  </Row>
  <br />
  <Row className="row">
  # In a nutshell,<b className="bold">Trackify</b> as a platform,simplifies and manages a student's dream to 
  land jobs.
  </Row>
  <br />
<br />
<Row style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>
  <b style={{
    fontSize:"1.8em",
    color: "#3690CC"
  }}>Our Team :</b>
</Row >
<br />
<Row style={{
display: "flex",
justifyContent: "space-around",
// alignItems: "center"
}} >
  <Col xs={22} sm={22} lg={12} style={{display: "flex",
  justifyContent: "center",
marginBottom: "3em",

}}>
  <Row>
  <Card
    style={{ width: 350,borderRadius: "4em",
  marginBottom: "1em" 
  }}
    cover={
      <img
        alt="example"
        src={nihal}
        style={{borderRadius: "4em"}}
      />
    }
   hoverable={true}

  >
    
    <Meta
      style={{display: "flex",justifyContent: "center"}}
      title="Nihal Ahmad | Software Developer"
      description="I am a Software Developer Persuing B.Tech in ECE from Jamia Millia Islamia.
      Worked on Frontend of Trackify. Have keen interest in development and ready to adapt to new technologies."
    />
  </Card>
  <Row style={{paddingLeft: "8em",alignItems: "center"}}>
<span style={{marginRight:"1em"}}>
<a href={"https://github.com/nihal-ahmad"} target={"_blank"}><img src={github} className="img"/></a>
</span>
<span style={{marginRight:"1em"}}>
<a href={"https://www.linkedin.com/in/nihal-ahmad-46042a192"} target={"_blank"}><img src={linkedin} className="img"/></a>
</span>
<span style={{marginRight:"1em"}}>
<a href={"https://drive.google.com/file/d/16zKrrpGBQUPRPgiBFboQFOEmaWPwdYsS/view"} target={"_blank"}><img src={resume} className="img"/></a>
</span>
</Row>
  </Row>
 
  </Col>
  <Col xs={22} sm={22} lg={12} style={{display: "flex",
  justifyContent: "center",
marginBottom: "3em",
}}>
  <Row>
  <Card
    style={{ width: 350,borderRadius: "4em",marginBottom:"1em" }}
    cover={
      <img
        alt="example"
        src={saifur}
        style={{borderRadius: "4em"}}
      />
    }
    hoverable={true}
   
  >
    
    <Meta
      style={{display: "flex",justifyContent: "center"}}
      title="Saifur Rehman | Software Developer"
      description="I am a Software Developer Persuing B.Tech in CSE from Jamia Millia Islamia.
      Worked on Backend of Trackify. Have keen interest in development and Data Structures and Algorithms."
    />
  </Card>
  <Row style={{paddingLeft: "8em",alignItems: "center"}}>
<span style={{marginRight:"1em"}}>
<a href={"https://github.com/Saifu0"} target={"_blank"}><img src={github} className="img"/></a>
</span>
<span style={{marginRight:"1em"}}>
<a href={"https://www.linkedin.com/in/saifur-rehman-khan-5770a9172/"} target={"_blank"}><img src={linkedin} className="img"/></a>
</span>
<span style={{marginRight:"1em"}}>
<a href={"https://drive.google.com/file/d/1RciXgfhS3qv0lDQMrEpA8cR1_VVuJdS9/view?usp=sharing"} target={"_blank"}><img src={resume} className="img"/></a>
</span>
</Row>
  </Row>
  
  </Col>
</Row>

      </Content>
    </Layout>
    </>
  );
}

export default About;
