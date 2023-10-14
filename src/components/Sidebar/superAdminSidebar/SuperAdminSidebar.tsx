import Sidebar from "@/components/ui/Sidebar/Sidebar";
import React from "react";

const SuperAdminSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    { key: "1", label: "Manage Users", href: "/super_admin/manage-users" },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default SuperAdminSidebar;
