import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/view/Footer/Footer";
import PublicHeader from "@/components/view/Header/PublicHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoque Construction",
  description: "Hoque Construction",
};

export default function MyProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader />

      <div className="">{children}</div>
    </>
  );
}
