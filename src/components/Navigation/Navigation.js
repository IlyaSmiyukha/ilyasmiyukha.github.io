import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 30vh;
  flex: 1;
  display: flex;
  align-items: center;

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.25rem;
    line-height: 2rem;
    display: block;
    margin-bottom: 5px;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const  Navigation = () => {
  return (
    <Nav>
      <List>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
      </List>
    </Nav>
  );
}

export default Navigation;
