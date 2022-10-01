import React from 'react';
import styled from "styled-components";

import Content from 'components/Content';

const A = styled.a`
  color:  ${props => props.theme.colors.text};
  display: block;
  font-size: 1.25rem;
  line-height: 2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const  Contacts = () => {
  return (
    <Content>
      <A href='https://www.linkedin.com/in/ilya-smiukha-147925b3/' target='_blank' rel='noopener noreferrer'>LinkedIn</A>
      <A href='https://twitter.com/Ilya_Smiyukha' target='_blank' rel='noopener noreferrer'>Twitter</A>
      <A href='https://github.com/IlyaSmiyukha' target='_blank' rel='noopener noreferrer'>Github</A>
      <A href='mailto:ilya.smiyuha@gmail.com' target='_blank' rel='noopener noreferrer'>Mail</A>
    </Content>
  );
}

export default Contacts;
