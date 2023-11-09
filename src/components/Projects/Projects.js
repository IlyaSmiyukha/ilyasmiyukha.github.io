import React from 'react';
import styled from "styled-components";

import Content from 'components/Content';

const A = styled.a`
  font-size: 2.5rem;
  line-height: 2rem;
  width: 110px;
  color:  ${props => props.theme.colors.text};
  font-weight: 300;
  text-decoration: none;
  letter-spacing: -1px;
  word-spacing: -1px;
  display: block;
  width: auto;
  text-align: right;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;


const  Projects = () => {
  return (
    <Content>
      <A href='https://portaldev.touchcast.io/showcase/big-beautiful-showcase#/'
         target="_blank"
         rel="noopener norefferer"
         style={{
           fontSize: '4rem'
         }}>
        Showcase
      </A>
      <A href='https://tc.touchcast.com/'
         target="_blank"
         rel="noopener norefferer"
         style={{
           fontSize: '3rem'
         }}>
        Touchcast
      </A>
      <A href='https://ilyasmiyukha.github.io/by-me-a-coffee/' target="_blank" rel="noopener norefferer">
        Buy me a crypto coffee
      </A>
      <A href='https://pioneerapp.xyz/'
         target="_blank"
         rel="noopener norefferer"
         style={{
           fontSize: '3rem'
         }}>
           Pioneer (Joystream)
      </A>
      <A href='https://app.gearbox.fi/'
         target="_blank"
         rel="noopener norefferer"
         style={{
           fontSize: '4rem'
         }}>
        Gearbox
      </A>
    </Content>
  );
}

export default Projects;
