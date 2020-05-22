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
	width: true;
	background-color: #003366;
`;

const Navlink = styled(Link)`
	margin-left: 75px;
	text-decoration: none;
	color: white;
	activeStyle {
		font-weight: bold;
		color: blue;
	}
`;

export default Navbar;