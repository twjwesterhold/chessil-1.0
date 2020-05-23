import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<NavbarContainer>
			<StyledLink exact to="/" >Home</StyledLink>
			<StyledLink exact to="/board" >Board Editor</StyledLink>
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
	background-color: #002020;
`;

const StyledLink = styled(NavLink)`
	margin-left: 65px;
	font-size: 20px;
	text-decoration: none;
	color: white;
	&.active {
		color: #b0e6ff;
		border-bottom: solid white 2px;
		padding-bottom: 5px;
	}
`;



export default Navbar;