import * as React from 'react';

type SquareProps = {
  type?: 'button' | 'submit' | 'reset';
  value: string;
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isWinning: boolean;
};

export default function Square({
  type = 'button',
  value,
  children,
  onClick,
  isWinning,
}: SquareProps) {
  return (
    <button
      type={type}
      className={`square ${isWinning && 'winning'} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
