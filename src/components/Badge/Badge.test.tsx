import React from 'react';

import { render, screen } from 'tests/test-utils';

import { Badge } from './Badge';

describe('Button', () => {
  it('should render the component', () => {
    render(<Badge value={42}> Test </Badge>);
    expect(screen.getByText(/42/i)).toBeInTheDocument();
  });

  it('should render a badge with 99+ when the value has more than 2 digits ', () => {
    render(<Badge value={1701}> Test </Badge>);
    expect(screen.getByText(/99+/i)).toBeInTheDocument();
  });

  it('should not be rendered when value is <= 0', () => {
    render(<Badge value={0}> Test </Badge>);
    expect(screen.queryByText(/0/i)).toBeNull();
  });
});
