"use client";
import { Button, Popconfirm, Space, Table, Tag, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface DataType {
  key: string;

  name: string;
  service: string;
  schedule: string;
  email: string;
}

function MyOrder() {
  const [orders, setOrders] = useState([]);

  const { data: session, status } = useSession();
  const fetchMy = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/${session?.user?.email}`
    );

    if (res?.data?.data?.length > 0) {
      const res222 = res?.data?.data?.map((user: any) => {
        return {
          key: user._id,
          name: user.name,
          service: user.service,
          schedule: user.schedule,
          email: user.email,
        };
      });
      setOrders(res222);
    }

    console.log("rrr", res);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Schedule",
      dataIndex: "schedule",
      key: "schedule",
    },
  ];

  useEffect(() => {
    if (session?.user?.email) {
      fetchMy();
    }
  }, [session?.user?.email, fetchMy]);

  return (
    <div>
      <Table columns={columns} dataSource={orders} />
    </div>
  );
}

export default MyOrder;
