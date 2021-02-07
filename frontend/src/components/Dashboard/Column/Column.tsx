import React from 'react'
import {Layout,Row,Col,Button} from 'antd';
import "./index.css"
const Column = () => {
    
    const { Content } = Layout;
    return (
        <Layout>
           
        <Content >  
 
  <Row style={{display:"flex",justifyContent: "center",alignItems: "center",paddingTop: "4.8em",paddingBottom: ".2em"}}>

<Button type="primary" ghost>
     ADD JOB
    </Button>
  </Row>
    <Row  style={{display: "flex",justifyContent: "center",height: "83.5vh"}}  >
      <Col xs={24} sm={24} md={11} lg={4} xl={4} className="col">
        <div >col-6</div>
        <div >col-6</div>
        <div>col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>

        <div >col-6</div>
        <div >col-6</div><div>col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>

        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        <div >col-6</div>
        

      
      </Col>
      <Col xs={24} sm={24} md={11} lg={4} xl={4} className="col">
        <div >col-6</div>
      </Col>
      <Col xs={24} sm={24} md={11} lg={4} xl={4} className="col">
        <div >col-6</div>
      </Col>
      <Col xs={24} sm={24} md={11} lg={4} xl={4} className="col">
        <div >col-6</div>
      </Col>
      <Col xs={24} sm={24} md={22} lg={4} xl={4} className="col">
        <div>col-6</div>
      </Col>
    </Row>
    </Content>
    </Layout>
    );
};

export default Column;
