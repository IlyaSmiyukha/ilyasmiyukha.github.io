import React, { useRef } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { Route, Routes, HashRouter } from "react-router-dom";

import Header from "components/Header";
import Navigation from "components/Navigation";
import HomePage from "components/HomePage";
import Projects from "components/Projects";
import Contacts from "components/Contacts";

const PageContainer = styled.div`
  position: fixed;
  top: 21px;
  left: 21px;
  bottom: 21px;
  right: 21px;
  z-index: 1;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  padding 2rem 0;

  @media (min-width: 768px) {
    align-items: stretch;
    flex-direction: row;
  }
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  width: 100%;
`;

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Page = ({ showLoader }) => {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={!showLoader} timeout={2000} mountOnEnter>
      {(state) => (
        <PageContainer ref={nodeRef} style={transitionStyles[state]}>
          <HashRouter>
            <RightPanel>
              <Header />
              <Navigation />
            </RightPanel>
            <Content>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </Content>
          </HashRouter>
        </PageContainer>
      )}
    </Transition>
  );
};

export default Page;
