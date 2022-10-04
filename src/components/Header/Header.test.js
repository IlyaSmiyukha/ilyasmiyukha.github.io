import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('renders Header component', () => {
  let component;

  beforeEach(() => {
    component = render(<Header />);
  });

  it('should render name', async () => {
    const { getByText } = component;
    const name = await getByText(/Ilya/i);
    expect(name).toBeInTheDocument();
  });

  it('should render description', async () => {
    const { getByText } = component;
    const name = await getByText(/front/i);
    expect(name).toBeInTheDocument();
  });

});
