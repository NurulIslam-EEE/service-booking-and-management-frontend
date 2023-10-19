"use client";
import Loader from "@/app/loading";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { Card, Col, Row, Tooltip } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlusOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const { Meta } = Card;

const text = <span>Book</span>;
const text2 = <span>Details</span>;

function ServiceCard() {
  const { data, isError, isLoading, isSuccess } = useServicesQuery({});

  const [arrow, setArrow] = useState("Show");

  const router = useRouter();

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  const handleBook = (service: string) => {
    router.push("/services/book");
  };

  // console.log("", data, isError, isLoading, isSuccess);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <Row justify="space-around">
        {data?.services?.map((m: any) => {
          return (
            <Col key={m} xs={{ span: 20 }} lg={{ span: 10 }} md={{ span: 10 }}>
              <Card
                hoverable
                style={{ maxWidth: 500, margin: "10px 0" }}
                cover={<img alt="Picture" src={m?.picture} />}
                actions={[
                  <Tooltip
                    key="1"
                    placement="top"
                    title={text}
                    arrow={mergedArrow}
                  >
                    {" "}
                    <Link
                      href={{
                        pathname: `/services/book/${m?.title}`,
                      }}
                    >
                      {" "}
                      <PlusOutlined style={{ fontSize: "20px" }} />
                    </Link>
                  </Tooltip>,

                  <Tooltip
                    key="2"
                    placement="top"
                    title={text2}
                    arrow={mergedArrow}
                  >
                    {" "}
                    <EyeOutlined style={{ fontSize: "20px" }} />
                  </Tooltip>,
                ]}
              >
                <Meta title={m?.title} description={m?.description} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ServiceCard;
