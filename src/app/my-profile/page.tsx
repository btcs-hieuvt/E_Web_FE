"use client";

import { profileState } from "@/atom/authAtom";
import useAuth from "@/hooks/useAuthentication";
import {
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils/validation/validate";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const MyProfilePage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
  const profile = useRecoilValue(profileState);
  const { updateProfile } = useAuth();

  console.log(profile);

  useEffect(() => {
    if (profile) {
      form.setFieldsValue({
        email: profile?.email,
        name: profile?.name,
        address: profile?.address,
        phoneNumber: profile?.phone,
        password: profile?.password,
      });
    }
  }, [profile]);

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      form.submit();
    }
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  return (
    <div>
      <div className="uppercase h-12 flex items-center text-[28px] text-[#444] tracking-[.01rem] font-semibold">
        Account Information
      </div>
      <div>
        <Form
          name="register"
          form={form}
          onFinish={async (v) => {
            await updateProfile({
              address: v.address,
              email: v.email,
              name: v.name,
              password: v.password,
              phone: v.phoneNumber,
            });

            setIsEdit(false);
          }}
          scrollToFirstError
        >
          {/* email */}
          <Form.Item
            name="email"
            // initialValue={profile?.email}
            rules={[
              { required: true, message: "This field is required" },
              { validator: validateEmail },
            ]}
          >
            <Input
              className="input-field"
              placeholder="Email Address *"
              disabled={!isEdit}
            />
          </Form.Item>
          {/* name */}
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <Input
              className="input-field"
              placeholder="Name *"
              disabled={!isEdit}
            />
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
            <Input
              className="input-field"
              placeholder="Address *"
              disabled={!isEdit}
            />
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
            <Input
              className="input-field"
              placeholder="Phone Number *"
              disabled={!isEdit}
            />
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
            <Input.Password
              className="input-field"
              placeholder="Password *"
              disabled={!isEdit}
            />
          </Form.Item>
        </Form>
        <div className="flex items-center space-x-[8px]">
          <Button
            onClick={handleEdit}
            className="h-10 w-[180px] uppercase opacity-95 hover:opacity-100 bg-[#ece81a] rounded-md border border-[#ffffff85] flex items-center justify-center text-base font-semibold"
          >
            {isEdit ? "Save" : "Edit"}
          </Button>
          {isEdit ? (
            <Button
              onClick={handleCancelEdit}
              className="h-10 w-[180px] uppercase opacity-95 hover:opacity-100 bg-red-400 rounded-md border border-[#ffffff85] flex items-center justify-center text-base font-semibold"
            >
              Cancel
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
