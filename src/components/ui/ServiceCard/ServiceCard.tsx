"use client";
import Loader from "@/app/loading";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

function ServiceCard() {
  const { data, isError, isLoading, isSuccess } = useServicesQuery({});

  console.log("", data, isError, isLoading, isSuccess);
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
