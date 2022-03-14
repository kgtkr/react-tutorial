import * as React from "react";
import styles from "./Square.module.scss";

export type Props = {
  value: number;
};

function Square({ value }: Props) {
  return <button className={styles.square}>{value}</button>;
}

export default Square;
