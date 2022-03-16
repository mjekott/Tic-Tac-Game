import * as React from 'react';

type SquareProps = {
  type?: 'button' | 'submit' | 'reset';
  value: number;
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Square({
  type = 'button',
  value,
  children,
  onClick,
}: SquareProps) {
  return (
    <button type={type} className="square" onClick={onClick}>
      {value}
    </button>
  );
}
