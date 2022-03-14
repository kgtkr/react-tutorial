import * as React from "react";
import Square, { SquareValue } from "./Square";
import styles from "./Board.module.scss";

export type Props = {};

function Board({}: Props) {
  const [squares, setSquares] = React.useState<SquareValue[]>(
    Array<SquareValue>(9).fill(null)
  );
  const [xIsNext, setXIsNext] = React.useState<boolean>(true);

  const handleClick = (i: number) => () => {
    if (calculateWinner(squares) !== null || squares[i] !== null) {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status =
    winner !== null
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? "X" : "O"}`;

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

function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
