import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {
  HashRouter,
} from "react-router-dom";
import Navigation from './Navigation';

const theme = {
  colors: {
    text: '#fff'
  }
}

describe('renders Navigation component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Navigation />
        </HashRouter>
      </ThemeProvider>
      );
  });

  it('should render Home link', async () => {
    const { getByText } = component;
    const link = await getByText(/home/i);
    expect(link).toBeInTheDocument();
  });

  it('should render Projects link', async () => {
    const { getByText } = component;
    const link = await getByText(/projects/i);
    expect(link).toBeInTheDocument();
  });

  it('should render Contacts link', async () => {
    const { getByText } = component;
    const link = await getByText(/contacts/i);
    expect(link).toBeInTheDocument();
  });
});
