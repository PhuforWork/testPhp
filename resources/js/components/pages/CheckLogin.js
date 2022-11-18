import { Button, Checkbox, Form, Input, notification } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { fetchCheckLogin } from "../../src/services/postTest";

export default function CheckLogin() {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        await fetchCheckLogin(values)
            .then(function (response) {
                if (response.status === 200) {
                    localStorage.setItem(
                        "user_acounts",
                        JSON.stringify(response.data)
                    );
                    navigate("/");
                }
            })
            .catch(function (err) {
                if (err.response.status === 400) {
                    notification.error({
                        message: `${err.response.data.message}`,
                    });
                }
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <Form
            style={{ marginTop: "20px" }}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 10,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your username!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
}
