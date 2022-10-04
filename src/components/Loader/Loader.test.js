import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Loader from './Loader';

const theme = {
  colors: {
    text: '#fff'
  }
}

const props = {
  setLoader: jest.fn(),
  showLoader: true
}

describe('renders Loader component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
          <Loader {...props} />
      </ThemeProvider>
      );
  });

  it('should render page Loader', async () => {
    const { getByText } = component;
    const text = await getByText(/ilya/i);
    expect(text).toBeInTheDocument();
  });


});
