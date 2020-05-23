import React from "react";
import styled from "styled-components";

import Button from "../Button";
import Fenbar from "../Fenbar";

const Home = () => {
	return (
		<div>
			<TitleFont>
				Home Page
			</TitleFont>

			<Fenbar/>

			<Button>
				Starting Position
			</Button>
			<Button>
				Empty Board
			</Button>
		</div>
	);
};

const TitleFont = styled.h1`
	font-family: "Lucida Console", monospace;
	font-size: 40px;
`;

export default Home;
