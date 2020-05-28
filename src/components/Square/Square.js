import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Color, Chamois, Teak } from "../../styles/colors.js";

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
  outline: none;
  background-color: ${(props) =>
  	(props.checker === "whiteSquare") ? Chamois : Teak };
  text-shadow: #000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px,
  							#000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px;
  color: #fff;
  transition-duration: 0.2s;
  &:hover {
  	background-color: ${(props) =>
  		(props.checker === "whiteSquare") ? Color.RockBlue : Color.BaliHai};
  }
  &:active {
  	background-color: ${(props) =>
  		(props.checker === "whiteSquare") ? Color.BaliHai : Color.RockBlue};
  }
`;

export default Square;