import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Square from "../Square";
import { fenToObject }  from "../../fenUtils.js"

const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

const Board = (props) => {

  var fenStr;
  if (props.location.state === null) {
    fenStr = START_FEN;
  } else {
    fenStr = props.location.state.userFen;
  }

  var cols = [];
  var rows = [];

  const boardArray = fenToObject(fenStr);

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

export default withRouter(Board);