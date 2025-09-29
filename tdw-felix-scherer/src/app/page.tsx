import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello World!</h1>
      <h2>This is the edited page.</h2>
      <div>Let&apos;s test the lint pipeline!</div>
      <Link href={"/array-map"}>
        <button>Navigate</button>
      </Link>
      <ol>
        
      </ol>
    </div>
  );
}
