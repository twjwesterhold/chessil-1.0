import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { isValidFen } from "../../fenUtils.js";
import { Colors } from "../../styles/colors.js";

const Fenbar = () => {
	const [fen, setFen] = useState("");
	const [toBoard, setToBoard] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!isValidFen(fen)) {
			alert(`${fen} is not a valid FEN.`);
		} else {
			setToBoard(true);
		}
	};

	if (toBoard) {
		return (
			<Redirect 
				to={{
					pathname: "/boardeditor",
					search: `?fen=${fen.replace(/ /g, "_")}`,
				}}
			/>
		);
	}
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Enter custom FEN:
				<FenInputBar
					type="text"
					value={fen}
					onChange={(event) => setFen(event.target.value)}
				/>
			</label>
			<LoadButton type="submit" value="Load" />
		</form>
	);
};

const FenInputBar = styled.input`
	padding: 5px;
	margin: 10px 15px;
	width: 350px;
	font-size: 14px;
`;

const LoadButton = styled.input`
	background-image: linear-gradient(to bottom right, ${Colors.PattensBlue}, ${Colors.LilyWhite});
	border-radius: 2px 7px;
	font-size: 14px;
	border: 1px solid gray;
	outline: none;
	&.hover {
		background-image: linear-gradient(to bottom right, white, black);
	}
`;

export default Fenbar;