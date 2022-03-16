import * as React from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers/calculateWinner';

export default () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [isNext, setIsNext] = React.useState(false);

  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isNext ? 'x' : '0'}`;

  const handleSquareClick = (position: number) => {
    if (board[position] || winner) {
      return;
    }
    setBoard((prev) => {
      return prev.map((value, index) => {
        if (index === position) {
          return isNext ? 'x' : '0';
        }
        return value;
      });
    });
    setIsNext(!isNext);
  };

  return (
    <div className="app">
      <h1>TIC TAC GAME</h1>
      <p>{message} </p>
      <Board handleClick={handleSquareClick} board={board} />
    </div>
  );
};
