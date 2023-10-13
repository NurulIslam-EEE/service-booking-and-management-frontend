import AdminHeader from "@/components/view/Header/AdminHeader";
import AdminSidebar from "@/components/Sidebar/AdminSidebar/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminHeader />
      <div className="admin-container">
        <AdminSidebar>{children}</AdminSidebar>
      </div>
    </div>
  );
}
