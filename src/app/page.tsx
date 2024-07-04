import Image from "next/image";
import "./../../public/Hero.png";
import styles from "./../styles/home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.nav}>

      </div>
      <img src="/Hero.png" alt={"Hero-Image"} className={styles.heros}/>

      <h1 className={styles.title}>selamat datang</h1>

    </main>
  );
}
