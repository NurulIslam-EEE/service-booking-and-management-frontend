"use client";

import { getServerSession } from "next-auth";
import Navbar from "../../ui/Navbar/Navbar";
import { authOptions } from "@/lib/AuthOptions";
import { useSession } from "next-auth/react";

const PublicHeader = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },

    { key: "2", label: "About Us", href: "/aboutUs" },
    { key: "3", label: "Contact Us", href: "/contact-us" },
    { key: "4", label: "Services", href: "/services" },
  ];
  const { data: session, status } = useSession();
  // const session = await getServerSession(authOptions);
  console.log(session, "ssssss");
  return (
    <>
      <Navbar session={session ? true : false} items={items} />
    </>
  );
};

export default PublicHeader;
