import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Board from "../Board";
import fenToObject from "../../App.js"

const Fenbar = () => {
	return (
		<div>
			Enter custom FEN:
			<FenInputBar type="text" id="fenload"/>
			<button onclick="load()">LOAD</button>
		</div>
	);
};

const load = () => {
	var customFen = document.getElementById("fenload").value;
	var customBoard = fenToObject(customFen);
	return (
		<Link path="/board"><Board squares={customBoard}/></Link>
	);
};

const FenInputBar = styled.input`
	padding: 5px;
	margin-left: 15px;
	margin-right: 15px;
	width: 350px;
	font-size: 14px;
`;

export default Fenbar;