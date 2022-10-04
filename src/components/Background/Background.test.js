import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Background from './Background';

const theme = {
  colors: {
    text: '#fff'
  }
}

describe('renders Background component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
          <Background />
      </ThemeProvider>
      );
  });

  it('should render page LinkedIn link', async () => {
    const { getByTestId } = component;
    const background = await getByTestId('background');
    expect(background).toBeInTheDocument();
  });

});
