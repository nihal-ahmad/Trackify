import React from 'react';
import { Row } from 'antd';
import Heading from "./Section/Heading";

const Dashboard =() => {
    return (
      <Row>
        <Row style={{display: "flex",justifyContent: "center"}}>
        <Heading color="blue" text="APPLIED" status="applied"/>
        <Heading color="gold" text="TO APPLY" status="toapply"/>
        <Heading color="magenta" text="ONGOING" status="ongoing"/>
        <Heading color="green" text="OFFER" status="offer"/>
        <Heading color="red" text="REJECTED" status="rejected"/>
        
      </Row>      

      </Row>
    );
};

export default Dashboard;
