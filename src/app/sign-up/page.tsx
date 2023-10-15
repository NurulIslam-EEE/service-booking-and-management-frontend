"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import axios from "axios";

type Inputs = {
  name: string;
  email: string;
  password: string;
  address: string;
};

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  address?: string;
};

function SignUp() {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: any) => {
    try {
      const res = await axios.post(
        `https://service-booking-and-management.vercel.app/api/v1/auth/signup`,
        values
      );
      message.success(" successfully Registered");
      if (res.status === 200) {
        router.push("/login");
      }

      console.log("res", res);
    } catch (err) {}
    console.log("sssss", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="login-container-align">
        <div className="login-container">
          <h3 className="">Sign Up</h3>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              label="Name"
              name="name"
              style={{ width: "100%" }}
              rules={[{ required: true, message: "Please input your name" }]}
            >
              <Input type="text" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input type="text" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item wrapperCol={{ offset: 8, span: 8 }}> */}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            {/* </Form.Item> */}
          </Form>

          <p style={{ margin: "10px 0" }}>
            Already registered{" "}
            <Link style={{ fontWeight: "bold", color: "blue" }} href="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
