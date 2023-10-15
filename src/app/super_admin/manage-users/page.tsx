"use client";
import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUsersQuery } from "@/redux/api/userApi";

interface DataType {
  key: string;
  name: string;
  role: string;
  address: string;
}

function ManageUsers() {
  const [users, setUsers] = useState([]);

  const { data } = useUsersQuery({});

  console.log("qqqqqq", data);

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
    fetchUser();
  }, []);

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
              <a>Edit</a>
            </Link>
          </Space>
        );
      },
    },
  ];

  console.log("super admin", users);
  return (
    <div>
      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default ManageUsers;
