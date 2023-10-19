import UserSidebar from "@/components/Sidebar/UserSidebar/UserSidebar";
import PublicHeader from "@/components/view/Header/PublicHeader";
import React from "react";

function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <PublicHeader />
      <UserSidebar>{children}</UserSidebar>
    </div>
  );
}

export default Dashboard;
