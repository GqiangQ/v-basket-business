import { Card,Form, Input, Button,Modal, Checkbox } from 'antd';
import { UserOutlined, LockOutlined,  } from '@ant-design/icons';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface  INProps {
}

export default class IN extends React.Component<INProps> {
  onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  state = {
    isModalVisible: false
  }
  handleOk(){}
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
            rules={[{ required: true, message: '请输入账户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="输入邮箱或手机号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site -form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <span onClick={()=>{this.setState({isModalVisible: true})}}>
              忘记密码?
            </span>
            <Link to='/sign/on'>注册</Link>
          </div>
          <Form.Item>
            <Button block type="primary" htmlType="submit" className="login-form-button">
              登陆
            </Button>
          </Form.Item>
        </Form>
        <Modal title="忘记密码" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={()=>{this.setState({isModalVisible: false})}}>
          发送临时密码到邮箱!
          <Form.Item name={['user', 'email']} label="邮箱" rules={[{ type: 'email' }]}>
            <Input placeholder="输入邮箱"/>
          </Form.Item>
        </Modal>
      </Card>
    );
  }
}
