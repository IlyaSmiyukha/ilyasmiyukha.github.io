import React from 'react';
import styled from "styled-components";

import Content from 'components/Content';

const P = styled.p`
  font-size: 1.25rem;
  max-width: 150px;
  line-height: 2rem;
  font-waight: bold;
`;

const  Projects = () => {
  return (
    <Content>
      <P>
        Projects
      </P>
    </Content>
  );
}

export default Projects;
