import * as React from 'react';
import Square from './Square';

function Board() {
  return (
    <div>
      <div>
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default Board;
