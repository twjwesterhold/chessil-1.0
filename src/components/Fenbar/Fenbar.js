import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import Button from "../Button";
import { isValidFen } from "../../fenUtils.js";

const Fenbar = () => {
	const [fen, setFen] = useState("");
	const [toBoard, setToBoard] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!isValidFen(fen)) {
			alert(`${fen} is not a valid FEN`);
		} else {
			setToBoard(true);
		}
	};

	if (toBoard) {
		return (
			<Redirect
				to={{
					pathname: "/board",
					search: `?fen=${fen.replace(/ /g, "_")}`
				}}
			/>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			Enter custom FEN:

			<FenInputBar
				type="text"
				value={fen}
				onChange={(event) => setFen(event.target.value)}
			/>

			<Button onClick={handleSubmit}>Load</Button>
		</form>
	);
};

const FenInputBar = styled.input`
	width: 350px;
	font-size: 14px;
	margin: 0 15px;
	padding: 5px;
`;

export default Fenbar;
