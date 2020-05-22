import React from "react";
import styled from "styled-components";

import Fenbar from "../Fenbar";

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
	margin-left: 50px;
`;

const Defaults = styled.button`
	margin-top: 20px;
	margin-right: 15px;
	font-size: 16px;
`;

export default Home;