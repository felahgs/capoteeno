import React from 'react';

import { fireEvent, render, screen } from 'tests/test-utils';

import { Pagination } from './Pagination';


jest.mock("next/image", () => function MockImage() {
  return null;
});

describe('Pagination', () => {
  it('should render the component with all links', () => {
    render(<Pagination currentPage={1} lastPage={5} onPageChange={jest.fn()} />);

    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();
    expect(screen.queryByText(/6/i)).toBeFalsy();
  });

  it('should call onPageChange when clicking to change ', () => {
    const onPageChangeMock = jest.fn();

    render(<Pagination currentPage={2} lastPage={5} onPageChange={onPageChangeMock} />);    
    const pageTwo = screen.getByText(/1/i);
    fireEvent.click(pageTwo);

    expect(onPageChangeMock).toHaveBeenCalled();
  });

  it('should call onPageChange when clicking to go to the next page ', () => {
    const onPageChangeMock = jest.fn();

    render(<Pagination currentPage={2} lastPage={5} onPageChange={onPageChangeMock} />);    
    const nextPage = screen.getByLabelText('next page');
    fireEvent.click(nextPage);

    expect(onPageChangeMock).toHaveBeenCalled();
  });
  
  it('should call onPageChange when clicking to go to the previous page ', () => {
    const onPageChangeMock = jest.fn();

    render(<Pagination currentPage={2} lastPage={5} onPageChange={onPageChangeMock} />);    
    const previousPage = screen.getByLabelText('previous page');
    fireEvent.click(previousPage);

    expect(onPageChangeMock).toHaveBeenCalled();
  });

  it('should render more pages on the right', () => {
    const onPageChangeMock = jest.fn();

    render(<Pagination currentPage={6} lastPage={9} onPageChange={onPageChangeMock} />);    
    
    const newPage = screen.getByText(/9/i);
    fireEvent.click(newPage);
    
    expect(screen.getByText(/7/i)).toBeInTheDocument();
    expect(screen.getByText(/8/i)).toBeInTheDocument();
    expect(screen.getByText(/9/i)).toBeInTheDocument();
  });
});
