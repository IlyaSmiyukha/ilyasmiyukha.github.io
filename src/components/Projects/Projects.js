import React from 'react';
import styled, { keyframes } from "styled-components";

import Content from 'components/Content';

const widthAnimation = keyframes`
 0% {  width: 100px; }
 100% { width: 110px; }
`
const P = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
  width: 110px;
`;

const Animation = styled.span`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${widthAnimation} 3s infinite ease-in-out;
`;

const  Projects = () => {
  return (
    <Content>
      <P>
        <Animation>
          Coming soon...
        </Animation>
      </P>
    </Content>
  );
}

export default Projects;
