import * as React from "react";
import styles from "./Square.module.scss";

export type Props = {};

function Square({}: Props) {
  return <button className={styles.square}>{/* TODO */}</button>;
}

export default Square;
