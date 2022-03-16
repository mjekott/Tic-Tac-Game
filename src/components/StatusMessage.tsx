import * as React from 'react';
import { Game } from '~App';

type StatusMessageProps = {
  winner: string | null;
  current: Game;
};

export default function StatusMessage({ winner, current }: StatusMessageProps) {
  const noMovesLeft = current.board.every((element) => element !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {' '}
            {winner}
          </span>
        </>
      )}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isNext ? 'X' : '0'}`}
      {!winner && noMovesLeft && 'Game is a draw'}
    </div>
  );
}
