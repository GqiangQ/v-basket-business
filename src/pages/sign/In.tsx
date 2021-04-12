import { Card,Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as React from 'react';

export interface  INProps {
}

export default class IN extends React.Component<INProps> {
    onFinish = (values: any) => {
        console.log('Received values of form: ', values);
      };
  public render() {
    return (
        <Card style={{width: '500px',padding: '1em 2em',position: 'relative', top: '50%',left:'50%', transform: 'translate(-50%, -50%)'}}>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site -form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          忘记密码
        </a>
        <a href="">注册</a>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" className="login-form-button">
          登陆
        </Button>
      </Form.Item>
    </Form>
        </Card>
      );
  }
}
