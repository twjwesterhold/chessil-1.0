import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<NavbarContainer>
			<Navlink to="/">Home</Navlink>
			<Navlink to="/board">Board Editor</Navlink>
		</NavbarContainer>
	);
};

const NavbarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	horizontal-align: center;
	height: 60px;
	width: 250px;
	background-color: aliceblue;
`;

const Navlink = styled(Link)`
	margin-right: 25px;
	margin-left: 25px;
	text-decoration: none;
	activeStyle={{
		fontWeight: bold;
		color: red;
	}}
`;

export default Navbar;