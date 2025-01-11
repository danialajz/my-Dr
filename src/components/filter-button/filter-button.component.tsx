import { ComponentProps } from "react";
import styles from "./filter-button.module.css";
import clsx from "clsx";

type Props = ComponentProps<"button"> & {
  isActive?: boolean;
};
export default function FilterButton({
  className,
  children,
  isActive = false,
  ...otherProps
}: Props) {
  return (
    <button className={clsx(styles.filterbtn, className)} {...otherProps}>
      {children}
    </button>
  );
}
