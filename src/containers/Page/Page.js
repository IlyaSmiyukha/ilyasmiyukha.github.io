import React, { useRef } from 'react';
import styled from "styled-components";
import { Transition } from 'react-transition-group';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import Header from 'components/Header'
import Navigation from 'components/Navigation'
import HomePage from 'components/HomePage'
import Projects from 'components/Projects'
import Contacts from 'components/Contacts'

const PageContainer = styled.div`
  position: fixed;
  top: 21px;
  left: 21px;
  bottom: 21px;
  right: 21px;
  z-index: 1;
  padding: 20px;
  opacity: 0;
  display: flex;
  align-items: stretch;
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
`;

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const  Page = ({ showLoader }) => {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={!showLoader} timeout={2000} mountOnEnter>
    {
      state => (
        <PageContainer ref={nodeRef}  style={transitionStyles[state]}>
          <BrowserRouter>
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
          </BrowserRouter>
        </PageContainer>
      )
    }
    </Transition>
  );
}

export default Page;
