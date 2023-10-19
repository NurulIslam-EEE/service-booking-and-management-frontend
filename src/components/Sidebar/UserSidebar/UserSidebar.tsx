import Sidebar from "@/components/ui/Sidebar/Sidebar";

const UserSidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [{ key: "1", label: "My Orders", href: "/dashboard/my-order" }];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default UserSidebar;
