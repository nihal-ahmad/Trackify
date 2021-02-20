import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, Alert } from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

function LoginForm() {

    const [ error, setError ] = useState('');
    const history = useHistory();

    const onFinish = (values: any) => {
        const confidential = {
            username : values.username,
            password : values.password
        }

        console.log(confidential);

        axios.post('login', confidential)
            .then( res => {
                sessionStorage.setItem("username",res.data.username);
                sessionStorage.setItem("token",res.data.token);

                console.log(sessionStorage);

                history.push("/dashboard");
            })
            .catch(err => {
                console.log(err.response.status)
                if(err.response.status === 400){
                    setError("Incorrect confidential!");
                    setTimeout(() => {
                        setError('');
                    },5000);
                }
            });
      };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {error && <Alert message={error} type="error"/>}
        </>
    )
}

export default LoginForm
