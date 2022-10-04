import React from 'react';
import { render } from '@testing-library/react';
import Content from './Content';

describe('renders Content component', () => {
  let component;

  beforeEach(() => {
    component = render(<Content>text</Content>);
  });

  it('should render page LinkedIn link', async () => {
    const { getByText } = component;
    const link = await getByText(/text/i);
    expect(link).toBeInTheDocument();
  });

});
