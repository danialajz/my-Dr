import CardComponent from "@/components/card/card.component";
import styles from "./filter.module.css";
import FilterButton from "@/components/filter-button/filter-button.component";

type Option = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  options: Option[];
};
export default function FilterComponent({ title, options }: Props) {
  return (
    <CardComponent>
      <div className={styles.filter}>
        <div className={styles.title}>{title}</div>
        <div className={styles.buttons}>
          {options.map((option) => (
            <FilterButton key={option.value}>{option.label}</FilterButton>
          ))}
        </div>
      </div>
    </CardComponent>
  );
}
