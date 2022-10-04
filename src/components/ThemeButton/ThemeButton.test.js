import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import fireEvent from '@testing-library/user-event';

import ThemeButton from './ThemeButton';

const props = {
  type: 'dark',
  isSelected: false,
  onChange: jest.fn(),
}

const theme = {
  colors: {
    text: '#fff'
  }
}

describe('renders ThemeButton component', () => {
  let component;

  beforeEach(() => {
    component = render(<ThemeProvider theme={theme}>
        <ThemeButton {...props} />
      </ThemeProvider>);
  });

  it('should render theme button', async () => {
    const { getByText } = component;
    const text = await getByText(props.type);
    expect(text).toBeInTheDocument();
  });

  it('should call onChange', async () => {
    // const { getByLabelText, container, debug } = component;
    // const btn = await getByLabelText(props.type);
    // fireEvent.click(btn);
    // expect(props.onChange).toHaveBeenCalledTimes(1)
  });

});
