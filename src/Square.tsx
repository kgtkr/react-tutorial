import * as React from "react";
import styles from "./Square.module.scss";

export type SquareValue = "X" | "O" | null;

export type Props = {
  value: SquareValue;
  onClick?: () => void;
};

function Square({ value, onClick }: Props) {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
