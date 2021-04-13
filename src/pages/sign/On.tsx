import * as React from 'react';
import { Form,Card, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
const { Search } = Input;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default class In extends React.Component {
  onFinish = (values: any) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  onSearch = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  public render() {
    return (
      <Card style={{width: '500px',padding: '1em 2em',position: 'relative', top: '0%',left:'50%', transform: 'translate(-50%, 20px)'}}>
        <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '输入用户名!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '输入密码！' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="确认密码"
        name="password"
        rules={[{ required: true, message: '再次输入密码！' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="手机号码"
        name="tel"
        rules={[{ required: true, message: '输入手机号！' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="邮箱"
        name="email"
        rules={[{ required: true, message: '输入邮箱' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="验证码"
        name="email"
        rules={[{ required: true, message: '输入验证码' }]}
      >
        <Search placeholder="输入验证码" onSearch={this.onSearch} enterButton="发送验证码" />
        {/* <Input.Password /> */}
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" block>
          注册
        </Button>
      </Form.Item>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Link to='/sign/in'>已有账号去登陆</Link>
      </div>     
    </Form>
      </Card>
    );
  }
}