import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('renders HomePage component', () => {
  let component;

  beforeEach(() => {
    component = render(<HomePage />);
  });

  it('should render HomePage', async () => {
    const { getByText } = component;
    const text = await getByText(/hi there/i);
    expect(text).toBeInTheDocument();
  });

});
