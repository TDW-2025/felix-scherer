import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello World!</h1>
      <h2>This is the edited page.</h2>
    </div>
  );
}
