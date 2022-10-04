import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Contacts from './Contacts';

const theme = {
  colors: {
    text: '#fff'
  }
}

describe('renders Contacts component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
          <Contacts />
      </ThemeProvider>
      );
  });

  it('should render page LinkedIn link', async () => {
    const { getByText } = component;
    const link = await getByText(/LinkedIn/i);
    expect(link).toBeInTheDocument();
  });

  it('should render page Twitter link', async () => {
    const { getByText } = component;
    const link = await getByText(/Twitter/i);
    expect(link).toBeInTheDocument();
  });

  it('should render page Github link', async () => {
    const { getByText } = component;
    const link = await getByText(/Github/i);
    expect(link).toBeInTheDocument();
  });

  it('should render page Mail link', async () => {
    const { getByText } = component;
    const link = await getByText(/Mail/i);
    expect(link).toBeInTheDocument();
  });

  it('should render page CV link', async () => {
    const { getByText } = component;
    const link = await getByText(/CV/i);
    expect(link).toBeInTheDocument();
  });

});
