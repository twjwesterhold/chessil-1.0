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
	height: 30px;
	width: 200px;
	background-color: aliceblue;
	padding: 15px;
`;

const Navlink = styled(Link)`
	margin-right: 10px;
`;

export default Navbar;