import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/board">Board Editor</NavLink>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 30px;
  background-color: aliceblue;
  padding: 15px;
`;

const NavLink = styled(Link)`
  margin-right: 10px;
`;

export default Navbar;
