import React from 'react';
import {Layout} from 'antd';
import Navbar from "../Navbar/Navbar";
import Column from "./Column/Column";


const Dashboard =() => {

    return (
      
      <Layout>
    <Navbar />
    <Column />    

    </Layout>
 
    
    );
};

export default Dashboard;
