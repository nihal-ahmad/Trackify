import React from 'react';
import axios from 'axios';
import moment from "moment";
import { Form, Input, Button, DatePicker, Select, Tag } from 'antd';

const { Option } = Select;

interface Props {
    id? : number;
    status? : string;
    company? : string;
    position? : string;
    date? : string;
    notes? : string;
    update? : boolean;
}

const DumbModal = ( props : Props ) => {

    const [referesh, setRefresh ] = React.useState(undefined)

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 20 },
    };

    const dateFormat = 'YYYY/MM/DD';

    const onFinish = (values: any) => {
        const date = moment(values.applied_date).format("YYYY-MM-DD")
        const token = sessionStorage.getItem("token");


        const bodyParameters = {
          company : (values.company===undefined ? props.company : values.company),
          role : (values.position === undefined ? props.position : values.position),
          status : (values.status===undefined ? props.status : values.status),
          notes : (values.notes===undefined ? props.notes : values.notes),
          applied_date : date
        }

        console.log(bodyParameters)

        const config = {
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        };
        if(props.update===false){
            axios.post('/api/create',bodyParameters,config)
              .then(res => {
                console.log("Status",res.data);
                window.location.reload();
              })
              .catch(err => {
                console.log(err.message)
              })
        }else{
            const updatedBody = {...bodyParameters, id : props.id }
            axios.post('/api/update',updatedBody,config)
              .then(res => {
                console.log("Status",res.data)
                window.location.reload();
              })
              .catch(err => {
                console.log(err.message)
              })
        }

        // console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (date : any, dateString : any ) =>{
        console.log(date, dateString);
    }

    const handleChange = (value : string ) => {
        console.log(`selected ${value}`);
    }

    return (
        <Form
            {...layout}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Company Name"
                name="company"
                rules={[{ required: !props.update, message: 'Please enter company!' }]}
            >
                <Input defaultValue={props.company}/>
            </Form.Item>

            <Form.Item
                label="Position"
                name="position"
                rules={[{ required: !props.update, message: 'Please enter position!' }]}
            >
                <Input defaultValue={props.position}/>
            </Form.Item>

            <Form.Item
                label="Extra Notes"
                name="notes"
            >
                <Input.TextArea defaultValue={props.notes}/>
            </Form.Item>

            <Form.Item
                label="Date"
                name="applied_date"
            >
                <DatePicker
                    defaultValue={moment('2021/02/14',dateFormat)}
                    onChange={onChange}
                    format={dateFormat}
                />
            </Form.Item>

            <Form.Item
                label="Status"
                name="status"
            >
                <Select defaultValue={props.status} style={{ width: 120 }} onChange={handleChange}>
                    <Option value="to apply">
                        <Tag color="gold">
                            To apply
                        </Tag>
                    </Option>

                    <Option value="applied">
                        <Tag color="blue">
                            Applied
                        </Tag>
                    </Option>

                    <Option value="ongoing">
                        <Tag color="magenta">
                            On going
                        </Tag>
                    </Option>

                    <Option value="rejected">
                        <Tag color="red">
                            Rejected
                        </Tag>
                    </Option>

                    <Option value="offer">
                        <Tag color="green">
                            Offer
                        </Tag>
                    </Option>
                </Select>
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" onClick={() => setRefresh(undefined)}>Apply</Button>
            </Form.Item>
        </Form>
    )
}

export default DumbModal
