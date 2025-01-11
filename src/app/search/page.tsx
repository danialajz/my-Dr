import { ReactElement } from "react";

import styles from "./page.module.css";

import CardComponent from "@/components/card/card.component";
import FilterButton from "@/components/filter-button/filter-button.component";

const item = Array(100)
  .fill(null)
  .map((_, i) => i + 1);
export default function page(): ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <CardComponent>
          <div className={styles.title}>زوح یا فرد</div>
          <div className={styles.buttons}>
            <FilterButton>زوج</FilterButton>
            <FilterButton>فرد</FilterButton>
          </div>
        </CardComponent>
      </div>
      <ul className={styles.results}>
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
