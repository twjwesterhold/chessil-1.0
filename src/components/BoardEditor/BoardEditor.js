import React from "react";
import queryString from "query-string";
import styled from "styled-components";

import Board from "../Board";
import { Color } from "../../styles/colors.js";

const DEFAULT_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

const BoardEditor = ({ location }) => {
	const fen = (queryString.parse(location.search).fen || DEFAULT_FEN).replace(/_/g, " ");

	return (
		<div>
			<Board fen={fen}/>
			<FenDisplay>
				{fen}
			</FenDisplay>
		</div>
	);
};

const FenDisplay = styled.div`
	display: flex;
	overflow: hidden;
	padding: 3px;
	margin-top: 10px;
	width: 50%;
	border: 2px solid ${Color.RockBlue};
`;



export default BoardEditor;