import React from "react";
import styled from "styled-components";

import Content from "components/Content";

import portfolio from "./Ilya_Smiyukha_CV.pdf";

const A = styled.a`
  color: ${(props) => props.theme.colors.text};
  display: block;
  font-size: 1.25rem;
  line-height: 2rem;
  text-decoration: none;
  cursor: pointer;
  text-align: right;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

const Contacts = () => {
  return (
    <Content>
      <A
        href="https://www.linkedin.com/in/ilya-smiukha/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </A>
      <A
        href="https://twitter.com/Ilya_Smiyukha"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </A>
      <A
        href="https://github.com/IlyaSmiyukha"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </A>
      <A
        href="mailto:ilya.smiyuha@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mail
      </A>
      <A href={portfolio} download>
        Download CV
      </A>
    </Content>
  );
};

export default Contacts;
