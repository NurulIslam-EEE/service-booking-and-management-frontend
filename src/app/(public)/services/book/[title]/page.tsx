"use client";
import { Button, Col, Form, Input, Row, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { FormInstance } from "antd/es/form";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import axios from "axios";
const { Option } = Select;
type IDProps = {
  params: any;
};
type FieldType = {
  name?: string;
  email?: string;
  inquiry: string;
  service: string;
};
function BookPage({ params }: IDProps) {
  const { title } = params;

  const [scheduleDate, setScheduleDate] = useState("");
  const onFinish = async (values: any) => {
    values.schedule = scheduleDate;

    console.log("1111", values);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/create-order`,
        values
      );

      if (res.status === 200) {
        message.success("Order place successFully");
      }
      // console.log("ooooo", res);
    } catch (err) {
      console.log("ooooo", err);
    }
    // console.log("vvvv", values);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    // console.log("dateeee", dateString);
    setScheduleDate(dateString);
  };

  const router = useRouter();
  const formRef = React.useRef<FormInstance>(null);
  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        formRef.current?.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        formRef.current?.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        formRef.current?.setFieldsValue({ note: "Hi there!" });
        break;
      default:
        break;
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // console.log("ttttt", title);
  return (
    <div>
      {" "}
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={{ span: 21 }} lg={{ span: 15 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 700, width: "100%" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType> label="Name" name="name">
              <Input type="text" />
            </Form.Item>
            <Form.Item<FieldType> label="Email" name="email">
              <Input type="text" />
            </Form.Item>
            <Form.Item
              name="service"
              label="Services"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a service"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="Interior Design">Interior Design</Option>
                <Option value="Removal Or Creation Of Wall">
                  Removal Or Creation Of Wall
                </Option>
                <Option value="Fit-Out">Fit-Out</Option>
                <Option value="Painting, Plumbing And Electricity">
                  Painting, Plumbing And Electricity
                </Option>
              </Select>
            </Form.Item>
            <Form.Item<FieldType> label="Inquiry" name="inquiry">
              <TextArea />
            </Form.Item>
            <DatePicker
              onChange={onChange}
              style={{ maxWidth: "460px", width: "100%", marginBottom: "10px" }}
            />{" "}
            <br />
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
