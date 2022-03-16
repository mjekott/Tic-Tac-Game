import * as React from 'react';
import { Game } from '~App';

type StatusMessageProps = {
  winner: string | null;
  current: Game;
};

export default function StatusMessage({ winner, current }: StatusMessageProps) {
  const noMovesLeft = current.board.every((element) => element !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isNext ? 'X' : '0'}`}
      {!winner && noMovesLeft && 'Game is a draw'}
    </h2>
  );
}
