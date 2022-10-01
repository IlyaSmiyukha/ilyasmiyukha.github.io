import React from 'react';
import styled from "styled-components";

import Content from 'components/Content';

const P = styled.p`
  font-size: 1.25rem;
  max-width: 150px;
  line-height: 2rem;
  font-waight: bold;
`;

const  HomePage = () => {
  return (
    <Content>
      <P>
        Hi there! I'm Optimistic, creative, innovative, and enthusiastic.
        I even believe in what seems impossible or unattainable. Passionate traveler.
        I love to make the world better.
        I have a solid experience as a front-end developer.
        And I enjoy my job.
      </P>
    </Content>
  );
}

export default HomePage;
