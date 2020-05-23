import React from "react";
import styled from "styled-components";

import Fenbar from "../Fenbar";
import { Colors } from "../../styles/colors.js";

const Home = () => {
	return (
		<div>
			<TitleFont>
				Home Page
			</TitleFont>
			<Fenbar/>
			<Defaults>
				Starting Postion
			</Defaults>
			<Defaults>
				Empty Board
			</Defaults>
		</div>
	);
};

const TitleFont = styled.h1`
	font-family: "Lucida Console", monospace;
	font-size: 40px;
`;

const Defaults = styled.button`
	background-image: linear-gradient(to bottom right, ${Colors.PattensBlue}, ${Colors.LilyWhite});
	margin-top: 20px;
	margin-right: 15px;
	border-radius: 2px 7px;
	font-size: 14px;
	border: 1px solid timberwolf;
	outline: none;
`;

export default Home;