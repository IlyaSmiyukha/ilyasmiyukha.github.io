import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";

const Section = styled.section`
  opacity: 0;
  transition: opacity: .1s;
  width: 100%;
  overflow-y: auto;
  max-height: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

const Content = ({ children }) => {
  const [isIn, setIsIn] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    setIsIn(true);
  }, []);
  return (
    <Transition nodeRef={nodeRef} in={isIn} timeout={100}>
      {(state) => (
        <Section
          ref={nodeRef}
          style={{
            ...transitionStyles[state],
          }}
        >
          {children}
        </Section>
      )}
    </Transition>
  );
};

export default Content;
