import React from 'react';
import { render } from '@testing-library/react';
import Projects from './Projects';


describe('renders Projects component', () => {
  let component;

  beforeEach(() => {
    component = render(<Projects />);
  });

  it('should render Projects component', async () => {
    const { getByText } = component;
    const text = await getByText(/projects/i);
    expect(text).toBeInTheDocument();
  });

});
