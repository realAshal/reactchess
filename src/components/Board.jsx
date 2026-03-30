import React from "react";
import Square from "./Square";
// FIX: Use ../ to go up one folder to find App.css
import "../App.css"; 

const initialBoard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

const Board = () => {
  return (
    <div className="board">
      {initialBoard.map((row, rowIndex) =>
        row.map((piece, colIndex) => {
          // Standard chess logic: black if row+col is odd
          const isBlack = (rowIndex + colIndex) % 2 !== 0;
          
          return (
            <Square 
              key={`${rowIndex}-${colIndex}`} 
              isBlack={isBlack} // Passing boolean for clarity
              piece={piece} 
            />
          );
        })
      )}
    </div>
  );
};

export default Board;