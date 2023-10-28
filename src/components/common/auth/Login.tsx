import { validateEmail } from "@/utils/validation/validate";
import { Button, Form, Input } from "antd";
import { Store } from "antd/es/form/interface";
import React from "react";

const Login = () => {
  const onFinish = (values: Store) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <Form name="loginForm" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "This field is required" },
            { validator: validateEmail },
          ]}
        >
          <Input placeholder="Email Address *" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
