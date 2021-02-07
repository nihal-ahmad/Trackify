import React from 'react';
import { Col } from 'antd';
import Column from "../Column/Column";
import Category from '../Category/Category';
import AddButton from '../AddButton/AddButton';

function Offer() {

    const initialData = [
        {
            id : 1,
            company : "Pikkal & Co",
            position : "SDE intern",
            date : "01/09/2021",
            status : "to apply"
        }
    ]

    const [data, setData ] = React.useState(initialData);

    return (
        <Col span={"20%"}>
          <Category color="green" text="Offer"/>
          <Column data={data}/>
          <AddButton status="offer"/>
        </Col>
    )
}

export default Offer
