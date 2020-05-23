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
	width: 65px;
	height: 65px;
  font-size: 20px;
  outline: none;
`;

export default Square;