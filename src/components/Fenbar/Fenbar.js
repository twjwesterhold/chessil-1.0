import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Board from "../Board";
import fenToObject from "../../App.js"

const Fenbar = () => {
	return (
		<div>
			<div>
				Enter custom FEN:
				<FenInputBar type="text" id="fenload"/>
				<Navlink to="/board">LOAD</Navlink>
			</div>
			{/*<Route path="/board">
				<Board fen={document.getElementById("fenload").value}/>
			</Route>*/}
		</div>
	);
};

// const load = () => {
// 	var customFen = document.getElementById("fenload").value;
// 	var customBoard = fenToObject(customFen);
// 	return (
// 		<Board squares={customBoard}/>
// 	);
// };

const FenInputBar = styled.input`
	padding: 5px;
	margin-left: 15px;
	margin-right: 15px;
	width: 350px;
	font-size: 14px;
`;

const Navlink = styled(Link)`
	text-decoration: none;
	color: black;
	border: 1.1px black solid;
	border-radius: 5px;
	padding-left: 4px;
	padding-right: 4px;
	padding-top: 2px;
	padding-bottom: 2px;
`;

export default Fenbar;