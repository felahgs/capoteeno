import React from 'react';

import { fireEvent, render, screen } from 'tests/test-utils';

import { TextInput } from './TextInput';


jest.mock("next/image", () => function MockImage() {
  return null;
});

describe('TextInput', () => {
  it('should render the component', () => {
    render(<TextInput onChange={jest.fn()} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should be able to enter an text input and display it', () => {
    const onChangeMock = jest.fn();
    render(<TextInput onChange={onChangeMock} />);

    const input = screen.getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: 'testing asdf' } });

    expect(input.value).toBe('testing asdf');
    expect(onChangeMock).toBeCalled();
  });
});

describe('TextInput', () => {
  jest.mock('next/image', () => null);

  it('should render the component', () => {
    render(<TextInput.Search onSearch={jest.fn()} onChange={jest.fn()} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should be able to enter an text input and display it', () => {
    const onChangeMock = jest.fn();
    render(<TextInput.Search onSearch={jest.fn()} onChange={onChangeMock} />);

    const input = screen.getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: 'testing asdf' } });

    expect(input.value).toBe('testing asdf');
    expect(onChangeMock).toBeCalled();
  });

  it('should be able to call onSearch', () => {
    const onSearchMock = jest.fn();
    render(<TextInput.Search onSearch={onSearchMock} onChange={jest.fn()} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onSearchMock).toBeCalled();
  });

  it('should be able to call onSearch when pressing enter', () => {
    const onSearchMock = jest.fn();
    render(<TextInput.Search onSearch={onSearchMock} onChange={jest.fn()} />);

    const input = screen.getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.click(input);

    fireEvent.keyDown(input, {key: 'Enter', code: 'Enter', charCode: 13});

    expect(onSearchMock).toBeCalled();
  });
});