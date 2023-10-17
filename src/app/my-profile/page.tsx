"use client";
import { useSession } from "next-auth/react";
import { useMyProfileQuery } from "@/redux/api/userApi";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";

function MyProfile() {
  const { data: session, status } = useSession();

  //@ts-ignore

  const { data, isLoading } = useMyProfileQuery(session?.user?.email);
  //@ts-ignore
  // console.log("ss", data);
  return <div className="container"></div>;
}

export default MyProfile;
