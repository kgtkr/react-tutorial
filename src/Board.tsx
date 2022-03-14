import * as React from "react";
import Square from "./Square";
import styles from "./Board.module.scss";

export type Props = {};

function Board({}: Props) {
  const status = "Next player: X";

  return (
    <div>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.boardRow}>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default Board;
