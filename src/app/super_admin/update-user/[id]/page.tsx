"use client";

import FormInput from "@/components/Forms/FormInput";
import { useUserQuery } from "@/redux/api/userApi";
import { Button, Col, Flex, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";

const { Option } = Select;

type IDProps = {
  params: any;
};
type Inputs = {
  name: string;
  email: string;
  role: string;
  address: string;
};

type FieldType = {
  name?: string;
  email?: string;
  role?: string;
  address?: string;
};
function UpdateUser({ params }: IDProps) {
  const { id } = params;

  const [user, setUser] = useState<FieldType>({});

  const { data, isLoading } = useUserQuery(id);
  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const onFinish = async (values: any) => {
    console.log("vvv", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onGenderChange = (value: string) => {
    switch (value) {
      case "super_admin":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  console.log("ppp", data);
  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <Row gutter={[16, 16]} justify="center" align="middle">
      <Col xs={{ span: 21 }} lg={{ span: 15 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 700 }}
          initialValues={{
            name: data?.name,
            email: data?.email,
            role: data?.role,
            address: data?.address,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType> label="Name" name="name">
            <Input type="text" />
          </Form.Item>
          <Form.Item<FieldType> label="Email" name="email">
            <Input type="email" />
          </Form.Item>

          <Form.Item<FieldType> label="Role" name="role">
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="super_admin">Super Admin</Option>
              <Option value="admin">Admin</Option>
              <Option value="customer">User</Option>
            </Select>
          </Form.Item>

          <Form.Item<FieldType> label="Address" name="address">
            <Input type="text" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default UpdateUser;
