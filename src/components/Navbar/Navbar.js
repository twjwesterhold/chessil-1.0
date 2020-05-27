import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Colors } from "../../styles/colors.js";

const Navbar = () => {
	return (
		<NavbarContainer>
			<StyledNavLink exact to="/" >Home</StyledNavLink>
			<StyledNavLink exact to="/boardeditor" >Board Editor</StyledNavLink>
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

const StyledNavLink = styled(NavLink)`
	margin-left: 65px;
	font-size: 20px;
	font-family: "Lucida Console", monospace;
	text-decoration: none;
	color: white;
	&.active {
		color: ${Colors.Anakiwa};
		border-bottom: solid white 2px;
		padding-bottom: 5px;
	}
`;



export default Navbar;