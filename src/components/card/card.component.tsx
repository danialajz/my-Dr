import React, { PropsWithChildren } from "react";

import styles from "./card.module.css";
type Props = PropsWithChildren;
function CardComponent({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}

export default CardComponent;
