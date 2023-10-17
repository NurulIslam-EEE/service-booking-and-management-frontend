import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const AdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Dashboard", href: "/admins/dashboard" },
    { key: "2", label: "Services", href: "/admins/services" },
    {
      key: "3",
      label: "Add Service",
      href: "/admins/add-service",
    },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
