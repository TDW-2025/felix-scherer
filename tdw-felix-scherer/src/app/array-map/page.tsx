import styles from "@/app/page.module.css";

import Link from "next/link";
import React from "react";

const ArrayMap = () => {
  const array = ["First item", "Second item", "Third item", "Fourth item"];

  return (
    <div className={styles.page}>
      <div>
        {array.map((item) => (
          <div key={item}>Item: {item}</div>
        ))}
      </div>
      <Link href={"/"}>
        <button>Homepage</button>
      </Link>
    </div>
  );
};

export default ArrayMap;
