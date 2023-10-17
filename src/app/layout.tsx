import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./lib/Providers";
import Footer from "@/components/view/Footer/Footer";
import PublicHeader from "@/components/view/Header/PublicHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoque Construction",
  description: "Hoque Construction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
