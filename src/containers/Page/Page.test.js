import React from 'react';
import { render } from '@testing-library/react';
import Page from './Page';

test('renders Page component', () => {
  const { getByText } = render(<Page />);

  expect(getByText(/Portfolio/i)).toBeInTheDocument();
});
