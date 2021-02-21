import React from 'react';
import axios from 'axios';
import { Col } from 'antd';
import Column from "../Column/Column";
import Category from '../Category/Category';
import AddButton from '../AddButton/AddButton';

interface Props{
    color : string;
    text : string;
    status : string;    
}
function Heading(props: Props) {

    // const initialData = [
    //     {
    //         id : 1,
    //         company : "Code Nation",
    //         position : "SDE intern",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //     {
    //         id : 2,
    //         company : "Code Nation",
    //         position : "SDE intern",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //     {
    //         id : 3,
    //         company : "Code Nation",
    //         position : "SDE intern",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //     {
    //         id : 4,
    //         company : "Code Nation",
    //         position : "SDE",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //     {
    //         id : 5,
    //         company : "Code Nation",
    //         position : "SDE",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //      {
    //         id : 6,
    //         company : "Code Nation",
    //         position : "SDE",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //     {
    //         id : 7,
    //         company : "Code Nation",
    //         position : "SDE",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //     {
    //         id : 8,
    //         company : "Code Nation",
    //         position : "SDE",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //     {
    //         id : 9,
    //         company : "Code Nation",
    //         position : "SDE",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //     {
    //         id : 10,
    //         company : "Code Nation",
    //         position : "SDE",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },
    //     {
    //         id : 11,
    //         company : "Code Nation",
    //         position : "SDE",
    //         date : "01/09/2021",
    //         status : "to apply"
    //     },

    // ]

    const [data, setData ] = React.useState([]);

    React.useEffect(() => {
        const token = sessionStorage.getItem("token");
        const config = {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        };
        axios.get(`/api/${props.status}`,config)
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            console.log(err.message);
        });
    },[]);

    console.log(data);

    return (
        <Col span={"20%"} style={{height: "90vh",marginTop: "12vh"}}>
            <Category color={props.color} text={props.text} />
            <Col  className="css" style={{ overflowY: "scroll",height: "70vh", }}>
                <Column data={data}/>
            </Col>
            <AddButton status={props.status==="toapply" ? "to apply" : props.status}/>
        </Col>
    );
}

export default Heading;
