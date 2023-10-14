import AdminHeader from "@/components/view/Header/AdminHeader";
import AdminSidebar from "@/components/Sidebar/AdminSidebar/AdminSidebar";
import SuperAdminSidebar from "@/components/Sidebar/superAdminSidebar/SuperAdminSidebar";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminHeader />
      <div className="admin-container">
        <SuperAdminSidebar>{children}</SuperAdminSidebar>
      </div>
    </div>
  );
}
