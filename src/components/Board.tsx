import * as React from 'react';
import Square from './Square';

function Board() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [isNext, setIsNext] = React.useState(false);

  const handleSquareClick = (position: number) => {
    if (board[position]) {
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

  const generateSquare = (postion: number) => (
    <Square value={board[postion]} onClick={() => handleSquareClick(postion)} />
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
