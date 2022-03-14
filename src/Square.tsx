import * as React from "react";
import styles from "./Square.module.scss";

export type Props = {
  value: number;
};

function Square({}: Props) {
  const [value, setValue] = React.useState<string | null>(null);
  return (
    <button className={styles.square} onClick={() => setValue("X")}>
      {value}
    </button>
  );
}

export default Square;
