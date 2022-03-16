import * as React from 'react';

type SquareProps {
    type?: "button" | "submit" | "reset"
    value:number
}

export default function Square({type="button",value}:SquareProps) {
    return <button type={type}>{value}</button>;
}
