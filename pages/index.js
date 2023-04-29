import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Head>
        <title>หน้าแรก | Zamod</title>
        <meta name="Keywords"content="Zamod,ร้านค้า,BIOHAZARD"/>
    </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Index หน้าทดสอบ</h1>
        <Image src={"/shopping.svg"} width={400} height={400} alt="logo" />
        <p>ยินดีต้อนรับเข้าสู่ร้านค้าเด็กชายคอนโซล</p>
        <Link href={"/products"} className={styles.btn}>
          ดูสินค้าทั้งหมด
        </Link>
      </div>
    </>
  );
}
