import * as React from "react";
import Board from "./Board";
import styles from "./Game.module.scss";
import { SquareValue } from "./Square";

export type Props = {};

function Game({}: Props) {
  const [history, setHistory] = React.useState<
    {
      squares: SquareValue[];
    }[]
  >([
    {
      squares: Array<SquareValue>(9).fill(null),
    },
  ]);
  const [xIsNext, setXIsNext] = React.useState<boolean>(true);
  const [stepNumber, setStepNumber] = React.useState<number>(0);

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares;

    if (calculateWinner(squares) !== null || squares[i] !== null) {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...newHistory, { squares: newSquares }]);
    setXIsNext(!xIsNext);
    setStepNumber(newHistory.length);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move !== 0 ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status =
    winner !== null
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className={styles.game}>
      <div>
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className={styles.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;

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
