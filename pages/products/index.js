import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Products.module.css";
// https://dummyjson.com/products?limit=12

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();

  return {
    props: { products: data.products },
  };
}
export default function Index({ products }) {
  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด | Zamod</title>
        <meta name="Keywords" content="Zamod,ร้านค้า,BIOHAZARD" />
      </Head>
    
      <div className={styles.container}>
        {products.map(item => (
          <div key={item.id}>
            <h2 className={styles.title}>{item.title}</h2>
            <Image
              src={item.thumbnail}
              width={300}
              height={300}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}
