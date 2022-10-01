import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`;

const Description = styled.h2`
  font-size: 1.3rem;
  font-weight: 300;
  margin-top: 10px;
`;

const  Header = () => {
  return (
    <header>
      <Title>Ilya Smiyukha</Title>
      <Description>Front-end developer</Description>
    </header>
  );
}

export default Header;
