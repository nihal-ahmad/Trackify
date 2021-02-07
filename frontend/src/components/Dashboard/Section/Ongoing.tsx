import React from 'react';
import { Col } from 'antd';
import Column from "../Column/Column";
import Category from '../Category/Category';
import AddButton from '../AddButton/AddButton';

function Ongoing() {

    const initialData = [
        {
            id : 1,
            company : "Code Nation",
            position : "SDE intern",
            date : "01/09/2021",
            status : "to apply"
        },
        {
            id : 2,
            company : "Code Nation",
            position : "SDE intern",
            date : "01/09/2021",
            status : "to apply"
        },
    ]

    const [data, setData ] = React.useState(initialData);

    return (
        <Col span={"20%"}>
          <Category color="magenta" text="On going" />
          <Column data={data}/>
          <AddButton status="ongoing"/>
        </Col>
    )
}

export default Ongoing
