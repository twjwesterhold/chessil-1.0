import React from "react";

import styled from "styled-components";

const Square = (props) => {
  var piece = props.piece.charAt(0);
  return (
    <ChessSquare id={props.color}>
      {piece}
    </ChessSquare>
  );
};

const ChessSquare = styled.button`
	width: 70px;
	height: 70px;
  	font-size: 20px;
`;

export default Square;