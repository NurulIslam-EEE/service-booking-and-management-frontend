"use client";

import axios from "axios";
import styles from "./page.module.css";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

type FieldType = {
  email?: string;
  password?: string;
};
function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("dddd", data);
    console.log(watch("email"));
    try {
      const result = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        data
      );
      const result2 = await signIn("service-booking-backend", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });
      console.log("222222", result2);
      if (result2?.ok) {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onFinish = async (values: any) => {
    const result = await signIn("service-booking-backend", {
      email: values.email,
      password: values.password,
      redirect: false,
      // callbackUrl: "/",
    });
    console.log(result, "login page");
    if (result?.ok && !result.error) {
      router.push("/");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container-align">
      <div className="login-container">
        <h3 className="">Login</h3>
        {/* <Form onFinish={handleSubmit(onSubmit)} onFinishFailed={onFinishFailed}>
          <h3 className="">Login</h3>
          <Input
            placeholder="Email"
            {...register("email", { required: true })}
          />{" "}
          <br />
          {errors.email && <span>This field is required</span>}
          <br />
          <Input
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && <span>This field is required</span>}
          <br />
       
          <Button htmlType="submit">Submit</Button>
        </Form> */}
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
