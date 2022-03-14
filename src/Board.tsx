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
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div className={styles.boardRow}>
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className={styles.boardRow}>
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </div>
  );
}

export default Board;
