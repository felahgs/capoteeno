import React, { KeyboardEvent, useState } from 'react';

import { Icon } from '@components/Icon';

import * as S from './TextInput.style';
import * as T from './TextInput.types';

const TextInput = ({ placeholder, value: initialValue, onChange }: T.InputProps) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(value);
  };

  return (
    <S.WrapperInput>
      <S.Input type="text" value={value} onChange={handleChange} placeholder={placeholder} />
    </S.WrapperInput>
  );
};

TextInput.Search = function SearchInput({ placeholder, value: initialValue, onChange, onSearch }: T.SearchProps) {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(value);
  };

  const handleKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      return onSearch(value);
    }
  };

  const handleSearch = () => {
    return onSearch(value);
  };

  return (

    <S.WrapperInput>
      <S.Input type="text" value={value} onKeyDown={handleKeydown} onChange={handleChange} placeholder={placeholder} />
      <S.SearchButton onClick={handleSearch}>
        <Icon name="search" />
      </S.SearchButton>
    </S.WrapperInput>
  );
};


export { TextInput };