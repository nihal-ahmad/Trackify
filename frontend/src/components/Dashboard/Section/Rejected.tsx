import React from 'react';
import { Col } from 'antd';
import Column from "../Column/Column";
import Category from '../Category/Category';
import AddButton from '../AddButton/AddButton';

function Rejected() {

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
        {
            id : 3,
            company : "Code Nation",
            position : "SDE intern",
            date : "01/09/2021",
            status : "to apply"
        },
        {
            id : 4,
            company : "Code Nation",
            position : "SDE",
            date : "01/09/2021",
            status : "to apply"
        },
        {
            id : 5,
            company : "Code Nation",
            position : "SDE",
            date : "01/09/2021",
            status : "to apply"
        },
        {
            id : 6,
            company : "Code Nation",
            position : "SDE intern",
            date : "01/09/2021",
            status : "to apply"
        },
        {
            id : 7,
            company : "Code Nation",
            position : "SDE intern",
            date : "01/09/2021",
            status : "to apply"
        },
        {
            id : 8,
            company : "Code Nation",
            position : "SDE intern",
            date : "01/09/2021",
            status : "to apply"
        },
        {
            id : 9,
            company : "Code Nation",
            position : "SDE",
            date : "01/09/2021",
            status : "to apply"
        },
        {
            id : 10,
            company : "Code Nation",
            position : "SDE",
            date : "01/09/2021",
            status : "to apply"
        },
    ]

    const [data, setData ] = React.useState(initialData);

    return (
        <Col span={"20%"}>
          <Category color="red" text="Rejected" />
          <Column data={data}/>
          <AddButton status="rejected"/>
        </Col>
    )
}

export default Rejected
