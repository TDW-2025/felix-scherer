import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello World!</h1>
      <h2>This is the edited page.</h2>
      <div>Let&apos;s test the full pipeline!</div>
      <li>
        <ul>Lint</ul>
        <ul>Prettify</ul>
        <ul>Test</ul>
      </li>
      <Link href={"/array-map"}>
        <button>Navigate</button>
      </Link>
    </div>
  );
}
