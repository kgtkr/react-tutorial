import * as React from "react";
import Board from "./Board";
import styles from "./Game.module.scss";

export type Props = {};

function Game({}: Props) {
  return (
    <div className={styles.game}>
      <div>
        <Board />
      </div>
      <div className={styles.gameInfo}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
