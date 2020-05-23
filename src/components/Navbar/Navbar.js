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
	margin-left: 75px;
	text-decoration: none;
	color: white;
	&.active {
		color: #80C0E0;
	}
`;



export default Navbar;