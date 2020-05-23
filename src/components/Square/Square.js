import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Square = (props) => {
	var piece = props.piece;
	return (
		<ChessSquare id={props.color}>
			{piece}
		</ChessSquare>
	);
};

Square.propTypes = {
	piece: PropTypes.string,
	color: PropTypes.string,
};

const ChessSquare = styled.button`
	width: 65px;
	height: 65px;
  font-size: 20px;
  outline: none;
`;

export default Square;