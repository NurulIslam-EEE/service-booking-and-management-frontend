import { authOptions } from "@/lib/AuthOptions";
import Navbar from "../../ui/Navbar/Navbar";
import { getServerSession } from "next-auth";

const AdminHeader = async () => {
  const items = [{ key: "1", label: "Admins", href: "/admins" }];
  const session = await getServerSession(authOptions);

  console.log("admin nav", session);
  return (
    <>
      <Navbar items={items} session={session ? true : false} hasSider />
    </>
  );
};

export default AdminHeader;
