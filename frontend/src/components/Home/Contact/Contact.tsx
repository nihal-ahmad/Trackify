import React from 'react';
import { Form, Input, Button, Checkbox,Layout,Row,Alert} from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { TextArea } = Input;

function AppContact() {
  const {Content} = Layout;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
//   const onFinish = (values: any) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//       .then((result) => {
//         <Alert message="Mail Successfully Sent" type="success" showIcon />
//       }, (error) => {
//         <Alert message="Oops! Try Submitting Again" type="error" showIcon />
//       });
    
//   }

// const onFinishFailed = (errorInfo: any) => {
  
// }
  return (
 
    <Layout>
      <Content style={{paddingTop: "12vh",display: "flex",alignItems: "center",justifyContent: "center"}}>


    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder" style={{display: "flex",justifyContent: "center"}}>
        <span style={{fontSize: "2em",marginRight: ".5em"}}><MailOutlined /></span>
          <h2 style={{fontSize: "2em",color: "#A0A0A0"}}>Get in Touch</h2>
         
        </div>
        <Form
        {...formItemLayout}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
       
          
         
        >
          <Form.Item
            name="fullname"
        
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
         label="Full Name"
         labelAlign="left"
          >
            <Input placeholder="* Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            labelAlign="left"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}

          >
            <Input placeholder="* Email Address"/>
          </Form.Item>
          <Form.Item
            name="telephone"
            label="Mobile No."
            labelAlign="left"
            
          >
            <Input placeholder="Mobile No." />
          </Form.Item>
          <Form.Item
            name="subject"
            label="Subject."
            labelAlign="left"
            rules={[
              { 
                required: true,
                message: 'Please enter subject of mail!' 
              }]
            }
          >
            <Input placeholder="* Subject" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Messege"
            labelAlign="left"
            rules={[
              { 
                required: true,
                message: 'Messege cannot be empty!' 
              }]
            }
          >
            <TextArea placeholder="* Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
         <Row style={{display: "flex",justifyContent: "center",marginBottom: "2em"}}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
            </Row>
        </Form>
      </div>
    </div>  

    </Content>
    </Layout>
  );
}

export default AppContact;