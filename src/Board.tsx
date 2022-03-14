import * as React from "react";
import Square, { SquareValue } from "./Square";
import styles from "./Board.module.scss";

export type Props = {};

function Board({}: Props) {
  const [squares, setSquares] = React.useState<SquareValue[]>(
    Array<SquareValue>(9).fill(null)
  );

  const handleClick = (i: number) => () => {
    const newSquares = [...squares];
    newSquares[i] = "X";
    setSquares(newSquares);
  };
  const status = "Next player: X";

  return (
    <div>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        <Square value={squares[0]} onClick={handleClick(0)} />
        <Square value={squares[1]} onClick={handleClick(1)} />
        <Square value={squares[2]} onClick={handleClick(2)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[3]} onClick={handleClick(3)} />
        <Square value={squares[4]} onClick={handleClick(4)} />
        <Square value={squares[5]} onClick={handleClick(5)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[6]} onClick={handleClick(6)} />
        <Square value={squares[7]} onClick={handleClick(7)} />
        <Square value={squares[8]} onClick={handleClick(8)} />
      </div>
    </div>
  );
}

export default Board;
