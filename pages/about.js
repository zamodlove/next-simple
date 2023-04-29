import styles from "@/styles/about.module.css";
import Head from "next/head";
import Image from "next/image";


export default function About() {
  return (
    <>
    <Head>
        <title>เกี่ยวกับเรา | Zamod</title>
        <meta name="Keywords"content="Zamod,ร้านค้า,BIOHAZARD"/>
    </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>เกียวกับเรา </h1>
        <Image src={"/about.svg"} width={500} height={500} alt="logo" />
      </div>
    </>
  );
}
