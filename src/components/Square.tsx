import * as React from 'react';

type SquareProps = {
  type?: 'button' | 'submit' | 'reset';
  value: number;
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
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinning ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
}
