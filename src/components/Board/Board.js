import React from "react";
import styled from "styled-components";
import queryString from "query-string";

import Square from "../Square";
import { getBoardFromFen }  from "../../fenUtils.js";

const DEFAULT_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

const Board = ({ location }) => {
	const fen = (queryString.parse(location.search).fen || DEFAULT_FEN).replace(/_/g, " ");

	const boardArray = getBoardFromFen(fen);

	const rows = [];
	for (let i = 0; i <= 7; i++) {
		const cols = [];
		for (let j = 0; j <=7; j++) {
			const thisSquare = boardArray[j + 8*i];
			cols.push(
				<Square
					color={thisSquare.squareColor}
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

const ChessRow = styled.pre`
  margin: 0;
`;

export default Board;
