import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Color, Chamois, Teak } from "../../styles/colors.js";

const Square = (props) => {
	const piece = props.piece;
	return (
		<ChessSquare isWhite={props.isWhite}>
			{piece}
		</ChessSquare>
	);
};

Square.propTypes = {
	piece: PropTypes.string,
	isWhite: PropTypes.bool,
};

const ChessSquare = styled.button`
	width: 65px;
	height: 65px;
  font-size: 22px;
  border: 0;
  outline: none;
  background-color: ${(props) => (props.isWhite) ? Chamois : Teak };
  text-shadow: #000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px,
  							#000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px;
  color: #fff;
  transition-duration: 0.2s;
  &:hover {
  	background-color: ${(props) => (props.isWhite) ? Color.RockBlue : Color.BaliHai};
  	border: 4px solid ${(props) => (props.isWhite) ? Color.BaliHai : Color.RockBlue};
  }
  &:active {
  	background-color: ${(props) => (props.isWhite) ? Color.BaliHai : Color.RockBlue};
  	border: 4px solid ${(props) => (props.isWhite) ? Color.RockBlue : Color.BaliHai};
  }
`;

export default Square;