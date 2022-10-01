import React, {
  useRef,
  useEffect
 } from 'react';
import { Transition } from 'react-transition-group';
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: fixed;
  top: 21px;
  left: 21px;
  bottom: 21px;
  right: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 300;
  transition: opacity 2000ms ease-in-out;
  opacity: 1;
  background-color: ${props => props.theme.colors.background};
  z-index: 2;
`;

const Span = styled.span`
  font-weight: 400;
  margin-left: 5px;
`;

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const  Loader = ({ showLoader, setLoader }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    setLoader(false)
  }, [setLoader])

  return (
    <Transition nodeRef={nodeRef} in={showLoader} timeout={2000} unmountOnExit={true} mountOnEnter>
      {state => (
        <LoaderContainer ref={nodeRef} style={{
          ...transitionStyles[state]
        }}>
          Ilya Smiyukha
          <Span>Portfolio</Span>
        </LoaderContainer>
      )}
    </Transition>
  );
}

export default Loader;
