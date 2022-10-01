import React from 'react';
import styled from "styled-components";

import ThemeButton from 'components/ThemeButton';

const ThemeContainer = styled.div`
  position: fixed;
  left: 20px;
  bottom: 0;
`;

const butotns = ['dark', 'light']

const  ThemesSelect = ({ currentTheme, onChange }) => {
  return (
    <ThemeContainer>
      {
        butotns.map(button => <ThemeButton
                                key={button}
                                isSelected={currentTheme === button}
                                type={button}
                                onChange={onChange} />)
      }
    </ThemeContainer>
  );
}

export default ThemesSelect;
