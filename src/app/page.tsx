import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOptions";
import PublicHeader from "@/components/view/Header/PublicHeader";
import Banner from "@/components/view/Banner/Banner";
import WeAreReady from "@/components/view/WeAreReady";
import ServiceView from "@/components/view/ServiceView";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log("session", session);
  return (
    <main className={styles.main}>
      <PublicHeader />
      <Banner />
      <WeAreReady />
      <ServiceView />
    </main>
  );
}
