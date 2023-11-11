import useAuth from "@/hooks/useAuthentication";
import { LoginType } from "@/types/auth";
import { validateEmail, validatePassword } from "@/utils/validation/validate";
import { Button, Form, Input, Spin } from "antd";
import { Store } from "antd/es/form/interface";
import React from "react";

const Login = () => {
  const { login } = useAuth();
  const onFinish = (values: Store) => {
    login(values as LoginType);
  };
  return (
    <div>
      <Form
        name="loginForm"
        onFinish={onFinish}
        className="flex flex-col justify-between"
        scrollToFirstError
      >
        <div>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "This field is required" },
              { validator: validateEmail },
            ]}
          >
            <Input className="input-field" placeholder="Email Address *" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password must be at least 8 characters",
              },
            ]}
          >
            <Input.Password className="input-field" placeholder="Password *" />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            className="h-[43px] w-[150px] bg-black text-white rounded-sm mt-3"
            htmlType="submit"
          >
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
