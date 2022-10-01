import React, {
  useState
} from 'react';
import styled from "styled-components";

import Theme from 'containers/Theme';
import ThemesSelect from 'containers/ThemesSelect';
import Page from 'containers/Page';
import Loader from 'components/Loader';
import Background from 'components/Background';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 2vw 2vh;
  background-color: ${props => props.theme.colors.background};
  color:  ${props => props.theme.colors.text};
  transition: background-color .5s
`;

const  App = () => {
  const [themeType, setThemeType] = useState('light');
  const [showLoader, setLoader] = useState(true);

  const changeTheme = type => {
    setThemeType(type)
  }

  return (
    <Theme type={themeType}>
      <Container>
        {
          !showLoader && <ThemesSelect onChange={changeTheme} currentTheme={themeType} />
        }
        <Page showLoader={showLoader}/>
        <Background theme={themeType}/>
        <Loader showLoader={showLoader} setLoader={setLoader}/>
      </Container>
    </Theme>
  );
}

export default App;
