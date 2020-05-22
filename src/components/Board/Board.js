import React from "react";

import Square from "../Square";

const Board = (props) => {
  var cols = [];
  var rows = [];
  var boardArray = props.squares;

  for (var i = 0; i <= 7; i++) {
    for (var j = 0; j <=7; j++) {
      var thisSquare = boardArray[j + 8*i]
      cols.push(
        <Square
          color={thisSquare.squareColor}
          piece={thisSquare.piece}
        />
      );
    }
    rows.push(<div>{cols}</div>);
    cols = [];
  }
  return (
    <div>
      {rows}
    </div>
  );
};

export default Board;