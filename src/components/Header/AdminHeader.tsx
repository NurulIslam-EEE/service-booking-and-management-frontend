import Navbar from "../Navbar/Navbar";

const AdminHeader = () => {
  const items = [{ key: "1", label: "Admins", href: "/admins" }];
  return (
    <>
      <Navbar items={items} hasSider />
    </>
  );
};

export default AdminHeader;
