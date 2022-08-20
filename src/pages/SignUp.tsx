import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';

interface Props {

}

const SignUp: React.FC<Props> = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{}}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email address!' }]}
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

                <Form.Item
                    label="Retype Password"
                    name="retypepassword"
                    rules={[{ required: true, message: 'Please input your password again!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignUp;