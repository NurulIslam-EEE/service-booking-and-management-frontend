"use client";
import { useSession } from "next-auth/react";
import { useMyProfileQuery } from "@/redux/api/userApi";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import Loader from "../loading";
import { UserOutlined } from "@ant-design/icons";

function MyProfile() {
  const { data: session, status } = useSession();

  const { data, isLoading } = useMyProfileQuery(session?.user?.email);

  if (isLoading) {
    return <Loader />;
  }

  console.log("ss", data);
  return (
    <div className="container">
      <div className="my-profile">
        <div className="user-pic">
          <UserOutlined style={{ fontSize: "50px" }} />
        </div>
        <p>Name: {data?.name}</p>
        <p>Email: {data?.email}</p>
        <p>Address: {data?.address}</p>
      </div>
    </div>
  );
}

export default MyProfile;
