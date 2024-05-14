import React from 'react';
import { Form, Input, Button } from 'antd';
import Img2 from '../assets/images/img2.jpg';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
      <div className="flex justify-center items-center">
        <h1 className='text-4xl font-bold text-center '>Contact Us</h1>
      </div>
      
      <div className="flex justify-center items-center">
        <br /><br /><br /> <br /> <br />
        <Form layout="vertical" className="w-full max-w-md">
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input type="email" />
            </Form.Item>
          </div>
          <Form.Item label="Message" name="message">
            <Input.TextArea style={{ height: '120px' }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactPage;