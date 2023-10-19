"use client";
import { Button, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useRouter } from "next/navigation";

type FieldType = {
  title?: string;
  picture?: string;
  description: string;
};
function BookPage() {
  const onFinish = async (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {" "}
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

export default BookPage;
