import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOptions";
import PublicHeader from "@/components/view/Header/PublicHeader";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log("session", session);
  return (
    <main className={styles.main}>
      <PublicHeader />
    </main>
  );
}
