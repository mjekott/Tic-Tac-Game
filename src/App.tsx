import * as React from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers/calculateWinner';
import History from './components/history';
import StatusMessage from './components/StatusMessage';

export type Game = {
  board: any[];
  isNext: boolean;
};

export default () => {
  const [history, setHistory] = React.useState<Game[]>([
    {
      board: Array(9).fill(null),
      isNext: false,
    },
  ]);

  const [currentMove, setCurrentMove] = React.useState(0);

  const current: Game = history[currentMove];

  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isNext ? 'x' : '0'}`;

  const handleSquareClick = (position: number) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((value, index) => {
        if (index === position) {
          return last.isNext ? 'x' : '0';
        }
        return value;
      });
      return prev.concat({ board: newBoard, isNext: !last.isNext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (value: number) => setCurrentMove(value);

  return (
    <div className="app">
      <h1>TIC TAC GAME</h1>
      <StatusMessage winner={winner} current={current} />
      <Board handleClick={handleSquareClick} board={current.board} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
