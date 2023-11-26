import { authApi } from "@/api/authApi";
import { useAuthentication } from "@/context/authContext";
import { RegisterType } from "@/types/auth";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils/validation/validate";
import { Button, Checkbox, Form, Input, message } from "antd";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RegisterValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  agreeRule: boolean;
}

const Register = () => {
  const { openLogin } = useAuthentication();

  const onFinish = async (values: RegisterValues) => {
    const bodyPost: RegisterType = {
      address: values.address,
      name: values.firstName.concat(" ", values.lastName),
      email: values.email,
      password: values.password,
      phone: values.phoneNumber,
    };
    const response = await authApi.register(bodyPost);

    if (response?.success === true) {
      toast.success(response?.message);
      openLogin();
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <div>
      <Form name="register" onFinish={onFinish} scrollToFirstError>
        {/* email */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "This field is required" },
            { validator: validateEmail },
          ]}
        >
          <Input className="input-field" placeholder="Email Address *" />
        </Form.Item>
        {/* first name */}
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Input className="input-field" placeholder="First Name *" />
        </Form.Item>
        {/* last name */}
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Input className="input-field" placeholder="Last Name *" />
        </Form.Item>
        {/* address */}
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Input className="input-field" placeholder="Address *" />
        </Form.Item>
        {/* phoneNumber */}
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please enter your phone number!",
            },
            {
              validator: validatePhone,
            },
          ]}
        >
          <Input className="input-field" placeholder="Phone Number *" />
        </Form.Item>
        {/* password */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your Password!",
            },
            {
              validator: validatePassword,
            },
          ]}
        >
          <Input.Password className="input-field" placeholder="Password *" />
        </Form.Item>
        {/* confirm password */}
        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("The two passwords do not match");
              },
            }),
          ]}
        >
          <Input.Password
            className="input-field"
            placeholder="Confirm Password *"
          />
        </Form.Item>
        {/* agree rules */}
        <Form.Item
          name="agreeRule"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Please agree term and conditional *",
            },
          ]}
        >
          <Checkbox>
            <p className="text-[#4e515e] text-[10px]">
              I AGREE TO THE{" "}
              <Link
                href="https://www.corsair.com/ww/en/s/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-1"
              >
                TERMS AND CONDITIONS
              </Link>{" "}
              AND{" "}
              <Link
                href="https://www.corsair.com/ww/en/s/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-1"
              >
                PRIVACY POLICY
              </Link>
            </p>
          </Checkbox>
        </Form.Item>

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

export default Register;
