import React from "react";
import styled from "styled-components";

const HeaderConteiner = styled.header`
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
`;

const Description = styled.h2`
  font-size: 1.3rem;
  font-weight: 300;
  margin-top: 10px;
`;

const Header = () => {
  return (
    <HeaderConteiner>
      <Title>Ilya Smiyukha</Title>
      <Description>Front-end developer</Description>
    </HeaderConteiner>
  );
};

export default Header;
