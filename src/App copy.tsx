import React, { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array<string | null>(9).fill(null)
  );
  const [xTurn, setXTurn] = useState<boolean>(true);
  let status = "X's turn...";
  const winner = calculateWinner(squares);
  if (winner != null) {
    status = 'Winner is: ' + winner;
  } else {
    status = 'Currently it is ' + (xTurn ? 'X' : '0') + "'s turn...";
  }

  function handleSquareClick(index: number): void {
    if (squares[index] != null || calculateWinner(squares) != null) return;
    const currentSquares: Array<string | null> = squares.slice();
    let flag = 'X';
    if (!xTurn) flag = 'O';
    currentSquares[index] = flag;
    setSquares(currentSquares);
    setXTurn(!xTurn);
  }

  return (
    <>
      <div className="text-4xl">{status}</div>
      <div className="flex flex-row">
        <Square
          label={squares[0]}
          index={0}
          onSquareClick={() => {
            handleSquareClick(0);
          }}
        />
        <Square
          label={squares[1]}
          index={1}
          onSquareClick={() => {
            handleSquareClick(1);
          }}
        />
        <Square
          label={squares[2]}
          index={2}
          onSquareClick={() => {
            handleSquareClick(2);
          }}
        />
      </div>
      <div className="flex flex-row">
        <Square
          label={squares[3]}
          index={3}
          onSquareClick={() => {
            handleSquareClick(3);
          }}
        />
        <Square
          label={squares[4]}
          index={4}
          onSquareClick={() => {
            handleSquareClick(4);
          }}
        />
        <Square
          label={squares[5]}
          index={5}
          onSquareClick={() => {
            handleSquareClick(5);
          }}
        />
      </div>
      <div className="flex flex-row">
        <Square
          label={squares[6]}
          index={6}
          onSquareClick={() => {
            handleSquareClick(6);
          }}
        />
        <Square
          label={squares[7]}
          index={7}
          onSquareClick={() => {
            handleSquareClick(7);
          }}
        />
        <Square
          label={squares[8]}
          index={8}
          onSquareClick={() => {
            handleSquareClick(8);
          }}
        />
      </div>
    </>
  );
}

function Square({
  index,
  label,
  onSquareClick: handleSquareClick
}: SquareProps): JSX.Element {
  return (
    <button
      className="text-2xl bg-slate-100/80 w-20 h-20 border"
      onClick={handleSquareClick}
    >
      {label}
    </button>
  );
}

interface SquareProps {
  label: string | null;
  index: number;
  onSquareClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      Boolean(squares[a]) &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

export default App;
