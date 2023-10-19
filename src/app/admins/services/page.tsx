"use client";

import {
  useDeleteServiceMutation,
  useServicesQuery,
} from "@/redux/api/serviceApi";
import { Button, Popconfirm, Space, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import Loader from "@/app/loading";

interface DataType {
  key: string;
  title: string;
  picture: string;
  description: string;
}
const text = "Are you sure to delete the service?";
function ServicesPage() {
  const [services, setServices] = useState([]);
  const { data, isError, isLoading, isSuccess } = useServicesQuery({});

  const [deleteService] = useDeleteServiceMutation();

  const confirm = async (id: string) => {
    const res = await deleteService(id);

    // console.log(res, "deleteeee", id);
    if (res) {
      message.info("Successfully Deleted");
    }
  };
  useEffect(() => {
    if (data?.services?.length > 0) {
      const res = data?.services?.map((user: any) => {
        return {
          key: user._id,
          title: user.title,
          picture: user.picture,
          description: user.description,
        };
      });
      setServices(res);
    }
  }, [data]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Picture",
      dataIndex: "picture",
      key: "picture",
      render: (_, record) => {
        return (
          <div>
            <img src={record?.picture} alt="" height={50} width={50} />
          </div>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Link
              href={{
                pathname: `/admins/update-service/${record?.key}`,
              }}
            >
              {" "}
              <Button>Edit</Button>
            </Link>
            <Popconfirm
              placement="top"
              title={text}
              onConfirm={() => confirm(record?.key)}
              okText="Yes"
              cancelText="No"
            >
              <Button>Delete</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Table columns={columns} dataSource={services} />
    </div>
  );
}

export default ServicesPage;
