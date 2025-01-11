import { ReactElement } from "react";

import styles from "./page.module.css";

import FilterComponent from "./component/filter";

const item = Array(100)
  .fill(null)
  .map((_, i) => i + 1);
export default function page(): ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <FilterComponent
          title="زوج یا فرد"
          options={[
            { value: "even", label: "زوج" },
            { value: "odd", label: "فرد" },
          ]}
        />
      </div>
      <ul className={styles.results}>
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
