import React from 'react';
import { Row } from 'antd';
import ToApply from './Section/ToApply';
import Applied from './Section/Applied';
import Ongoing from './Section/Ongoing';
import Rejected from './Section/Rejected';
import Offer from './Section/Offer';


const Dashboard =() => {
    return (
      <Row>
        <ToApply/>
        <Applied/>
        <Ongoing/>
        <Rejected/>
        <Offer/>
      </Row>
    );
};

export default Dashboard;
