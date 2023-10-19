"use client";
import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Space, Table, Tag, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDeleteUserMutation, useUsersQuery } from "@/redux/api/userApi";
import Loader from "@/app/loading";

interface DataType {
  key: string;

  name: string;
  role: string;
  address: string;
  email: string;
}

const text = "Are you sure to delete the user?";
const description = "Delete the task";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  const { data, isLoading } = useUsersQuery({});

  const [deleteUser] = useDeleteUserMutation();

  // console.log("qqqqqq", data);

  const confirm = async (id: string) => {
    const res = await deleteUser({ id });
    // console.log(res, "deleteeee", id);
    if (res) {
      message.info("Successfully Deleted");
    }
  };

  // let data: DataType[] = [];

  const fetchUser = async () => {
    const result = await axios.get(
      "https://service-booking-and-management.vercel.app/api/v1/users"
    );

    if (result.status === 200) {
      // setUsers(result?.data?.data);
      const res = result?.data.data.map((user: any) => {
        return {
          key: user._id,
          name: user.name,
          role: user.role,
          address: user.address,
        };
      });
      setUsers(res);
    }
  };
  useEffect(() => {
    // fetchUser();
    if (data?.users?.length > 0) {
      const res = data?.users?.map((user: any) => {
        return {
          key: user._id,
          name: user.name,
          role: user.role,
          address: user.address,
          email: user.email,
        };
      });
      setUsers(res);
    }
  }, [data]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Link
              href={{
                pathname: `/super_admin/update-user/${record?.key}`,
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

  // console.log("super admin", users);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default ManageUsers;
