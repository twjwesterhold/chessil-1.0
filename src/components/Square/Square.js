import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Square = (props) => {
	var piece = props.piece;
	return (
		<ChessSquare checker={props.color}>
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
  font-size: 22px;
  border: 0;
  background-color: ${(props) => (props.checker === "whiteS") ? "#F0D9B7" : "#B48866"};
  text-shadow: #000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px,
  							#000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px;
  color: #fff;
`;

export default Square;