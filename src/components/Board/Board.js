import React from "react";
import styled from "styled-components";

import Square from "../Square";
import { fenToObject }  from "../../utils.js"

const Board = (props) => {
  var cols = [];
  var rows = [];
  const boardArray = fenToObject(props.fen);

  for (var i = 0; i <= 7; i++) {
    for (var j = 0; j <=7; j++) {
      var thisSquare = boardArray[j + 8*i];
      cols.push(
        <Square
          color={thisSquare.squareColor}
          piece={thisSquare.piece}
        />
      );
    }
    rows.push(<ChessRow>{cols}</ChessRow>);
    cols = [];
  }
  return (
    
    <div>
      {rows}
    </div>
  );
};

const ChessRow = styled.pre`
  margin: 0px;
`;

export default Board;