import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Square from "../Square";
import { getBoardFromFen }  from "../../fenUtils.js";

const Board = ({ fen, onChange }) => {
	const boardArray = getBoardFromFen(fen);
	const rows = [];

	for (var i = 0; i <= 7; i++) {
		const cols = [];
		for (var j = 0; j <=7; j++) {
			const thisSquare = boardArray[j + 8*i];
			cols.push(
				<Square
					isWhite={thisSquare.isWhite}
					piece={thisSquare.piece}
				/>
			);
		}
		rows.push(<ChessRow>{cols}</ChessRow>);
	}

	return (
		<div>
			{rows}
		</div>
	);
};

Board.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
		search: PropTypes.string,
	}),
};

const ChessRow = styled.pre`
  margin: 0;
`;

export default Board;