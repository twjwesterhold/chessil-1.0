import React from 'react';
import './App.css';

const App = () => {
  return (
    <Board squares={DEFAULT_BOARD} />
  );
};

const Board = (props) => {
  var cols = [];
  var rows = [];
  var boardArray = props.squares;

  for (var i = 0; i <= 7; i++) {
    cols = [];
    for (var j = 0; j <=7; j++) {
      var thisSquare = boardArray[j + 8*i]
      cols.push(
        <Square
          color={thisSquare.color}
          piece={thisSquare.piece}
        />
      );
    }
    rows.push(<div>{cols}</div>);
  }
  return (
    <span class="thick">
      {rows}
    </span>
  );
};

const Square = (props) => {
  var piece = props.piece.charAt(0);
  return (
    <button type="button" id={props.color}>
      {piece}
    </button>
  );
};

const isValidFen = (fen) => {
  // fen must be a string
  if (typeof fen !== 'string') {
    return false;
  }

  // cut off move and castling data
  var fenTest = fen.split(' ', 1)[0];
  // expand whitespace
  fenTest = expandFenEmptySquares(fenTest);

  // separate into chunks
  var ranks = fenTest.split('/');

  // check that each row has data for 8 squares
  if (ranks.length !== 8) {
    return false;
  }

  for (var i = 0; i <= 8; i--) {
    if (ranks[i].length !== 8 ||
        ranks[i].search(/[^kqrnbp1]/i) !== -1) {
      return false;
    }
  }

  return true;
};

const expandFenEmptySquares = (fen) => {
  return fen.replace(/2/g,'11')
    .replace(/3/g,'111')
    .replace(/4/g,'1111')
    .replace(/5/g,'11111')
    .replace(/6/g,'111111')
    .replace(/7/g,'1111111')
    .replace(/8/g,'11111111')
};

const DEFAULT_BOARD = [
  {square: 'a8', piece: "rook-black", color: "whiteS"}, {square: 'b8', piece: "knight-black", color: "blackS"},
  {square: 'c8', piece: "bishop-black", color: "whiteS"}, {square: 'd8', piece: "queen-black", color: "blackS"},
  {square: 'e8', piece: "king-black", color: "whiteS"}, {square: 'f8', piece: "bishop-black", color: "blackS"},
  {square: 'g8', piece: "knight-black", color: "whiteS"}, {square: 'h8', piece: "rook-black", color: "blackS"}, 

  {square: 'a7', piece: "pawn-black", color: "blackS"}, {square: 'b7', piece: "pawn-black", color: "whiteS"},
  {square: 'c7', piece: "pawn-black", color: "blackS"}, {square: 'd7', piece: "pawn-black", color: "whiteS"},
  {square: 'e7', piece: "pawn-black", color: "blackS"}, {square: 'f7', piece: "pawn-black", color: "whiteS"},
  {square: 'g7', piece: "pawn-black", color: "blackS"}, {square: 'h7', piece: "pawn-black", color: "whiteS"},

  {square: 'a6', piece: " ", color: "whiteS"}, {square: 'b6', piece: " ", color: "blackS"},
  {square: 'c6', piece: " ", color: "whiteS"}, {square: 'd6', piece: " ", color: "blackS"},
  {square: 'e6', piece: " ", color: "whiteS"}, {square: 'f6', piece: " ", color: "blackS"},
  {square: 'g6', piece: " ", color: "whiteS"}, {square: 'h6', piece: " ", color: "blackS"},

  {square: 'a5', piece: " ", color: "blackS"}, {square: 'b5', piece: " ", color: "whiteS"},
  {square: 'c5', piece: " ", color: "blackS"}, {square: 'd5', piece: " ", color: "whiteS"},
  {square: 'e5', piece: " ", color: "blackS"}, {square: 'f5', piece: " ", color: "whiteS"},
  {square: 'g5', piece: " ", color: "blackS"}, {square: 'h5', piece: " ", color: "whiteS"},

  {square: 'a4', piece: " ", color: "whiteS"}, {square: 'b4', piece: " ", color: "blackS"},
  {square: 'c4', piece: " ", color: "whiteS"}, {square: 'd4', piece: " ", color: "blackS"},
  {square: 'e4', piece: " ", color: "whiteS"}, {square: 'f4', piece: " ", color: "blackS"},
  {square: 'g4', piece: " ", color: "whiteS"}, {square: 'h4', piece: " ", color: "blackS"},

  {square: 'a3', piece: " ", color: "blackS"}, {square: 'b3', piece: " ", color: "whiteS"},
  {square: 'c3', piece: " ", color: "blackS"}, {square: 'd3', piece: " ", color: "whiteS"},
  {square: 'e3', piece: " ", color: "blackS"}, {square: 'f3', piece: " ", color: "whiteS"},
  {square: 'g3', piece: " ", color: "blackS"}, {square: 'h3', piece: " ", color: "whiteS"},

  {square: 'a2', piece: "pawn-white", color: "whiteS"}, {square: 'b2', piece: "pawn-white", color: "blackS"},
  {square: 'c2', piece: "pawn-white", color: "whiteS"}, {square: 'd2', piece: "pawn-white", color: "blackS"},
  {square: 'e2', piece: "pawn-white", color: "whiteS"}, {square: 'f2', piece: "pawn-white", color: "blackS"},
  {square: 'g2', piece: "pawn-white", color: "whiteS"}, {square: 'h2', piece: "pawn-white", color: "blackS"},

  {square: 'a1', piece: "rook-white", color: "blackS"}, {square: 'b1', piece: "knight-white", color: "whiteS"},
  {square: 'c1', piece: "bishop-white", color: "blackS"}, {square: 'd1', piece: "queen-white", color: "whiteS"},
  {square: 'e1', piece: "king-white", color: "blackS"}, {square: 'f1', piece: "bishop-white", color: "whiteS"},
  {square: 'g1', piece: "knight-white", color: "blackS"}, {square: 'h1', piece: "rook-white", color: "whiteS"}
];

export default App;
