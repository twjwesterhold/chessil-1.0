import React from "react";
import styled from "styled-components";

import Square from "../Square";
import fenToObject from "../../App.js"
import expandFenEmptySquares from "../../App.js"
import isValidFen from "../../App.js"

const Board = (props) => {
  var cols = [];
  var rows = [];
  var fenStr = props.fen;
  const boardArray = fenToObject(fenStr);

  for (var i = 0; i <= 7; i++) {
    for (var j = 0; j <=7; j++) {
      var thisSquare = boardArray[j + 8*i];
      cols.push(
        <Square
          color="blackS"
          piece="p"
        />
      );
    }
    rows.push(<ChessRow>{cols}</ChessRow>);
    cols = [];
  }
  return (
    <div>
    <div>
      {fenStr}
    </div>
    <div>
      {rows}
    </div>
    </div>
  );
};

const ChessRow = styled.pre`
  margin: 0px;
`;

export default Board;