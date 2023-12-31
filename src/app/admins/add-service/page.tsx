"use client";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import { Button, Col, Form, Input, Row, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";

type FieldType = {
  title?: string;
  picture?: string;
  description: string;
};
function AddService() {
  const [addService, isLoading] = useAddServiceMutation();

  const [form] = Form.useForm();
  const { data: session, status } = useSession();

  const onFinish = async (values: any) => {
    // console.log("vv", values);
    try {
      //@ts-ignore
      await addService({ body: values, token: session?.accessToken });
      // const res = await axios.post(
      //   `http://localhost:5000/api/v1/services/create-service`,
      //   values,
      //   {

      //     headers: { Authorization: session?.accessToken },
      //   }
      // );

      message.success("Service added successfully");
    } catch (err: any) {
      message.error(err?.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={{ span: 21 }} lg={{ span: 15 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 700 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType> label="Title" name="title">
              <Input type="text" />
            </Form.Item>
            <Form.Item<FieldType> label="Image Link" name="picture">
              <Input type="text" />
            </Form.Item>

            <Form.Item<FieldType> label="Description" name="description">
              <TextArea />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default AddService;
