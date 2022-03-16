import * as React from 'react';
import { Game } from '~App';

type History = {
  history: Game[];
  moveTo: (index: number) => void;
  currentMove: number;
};

export default function History({ history, moveTo, currentMove }: History) {
  return (
    <ul>
      {history.map((_, index) => {
        return (
          <li key={index}>
            <button
              type="button"
              style={{ fontWeight: index === currentMove ? 'bold' : 'normal' }}
              onClick={() => moveTo(index)}
            >
              {index === 0 ? 'Go to Game start' : `Go to move ${index}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
