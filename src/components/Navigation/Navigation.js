import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

    &:hover {
      text-decoration: underline;
    }

    &.active {
      font-weight: bold;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const List = styled.ul`
  list-style: none;
`;


const  Navigation = () => {
  return (
    <Nav>
      <List>
        <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to='/' end>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to='/projects'>Projects</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to='/contacts'>Contacts</NavLink></li>
      </List>
    </Nav>
  );
}

export default Navigation;
