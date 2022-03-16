import * as React from 'react';
import Square from './Square';

type BoardProps = {
  handleClick: (position: number) => void;
  board: any[];
};

function Board({ handleClick, board }: BoardProps) {
  const generateSquare = (postion: number) => (
    <Square value={board[postion]} onClick={() => handleClick(postion)} />
  );

  return (
    <div className="board">
      <div className="board-row">
        {generateSquare(0)}
        {generateSquare(1)}
        {generateSquare(2)}
      </div>
      <div className="board-row">
        {generateSquare(3)}
        {generateSquare(4)}
        {generateSquare(5)}
      </div>
      <div className="board-row">
        {generateSquare(6)}
        {generateSquare(7)}
        {generateSquare(8)}
      </div>
    </div>
  );
}

export default Board;
