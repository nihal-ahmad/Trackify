import React from 'react';
import { Form, Input, Button, DatePicker, Select, Tag } from 'antd';

const { Option } = Select;

interface Props {
    id? : number;
    status? : string;
    company? : string;
    position? : string;
    date? : string;
    notes? : string;
}

const DumbModal = ( props : Props ) => {

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 20 },
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
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
                rules={[{ required: true, message: 'Please enter company!' }]}
            >
                <Input value={props.company}/>
            </Form.Item>

            <Form.Item
                label="Position"
                name="position"
                rules={[{ required: true, message: 'Please enter position!' }]}
            >
                <Input value={props.position}/>
            </Form.Item>

            <Form.Item
                label="Extra Notes"
                name="notes"
            >
                <Input.TextArea/>
            </Form.Item>

            <Form.Item
                label="Date"
                name="applied_date"
            >
                <DatePicker onChange={onChange} />
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

            <Button>Apply</Button>
        </Form>
    )
}

export default DumbModal
