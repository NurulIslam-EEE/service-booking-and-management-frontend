import PublicHeader from "@/components/view/Header/PublicHeader";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PublicHeader />
      <div className="min-h-100">{children}</div>
    </div>
  );
}
