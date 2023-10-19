"use client";

import {
  useServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { Button, Col, Form, Input, Row, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

type IDProps = {
  params: any;
};

type FieldType = {
  title?: string;
  picture?: string;
  description: string;
};

function UpdateService({ params }: IDProps) {
  const { id } = params;

  const { data } = useServiceQuery(id);

  const [updateService] = useUpdateServiceMutation();
  const onFinish = async (values: any) => {
    // console.log("vv", values);
    try {
      message.success("Updated successfully");
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
            initialValues={{
              title: data?.title,
              picture: data?.picture,
              description: data?.description,
            }}
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
              <TextArea rows={4} />
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

export default UpdateService;
