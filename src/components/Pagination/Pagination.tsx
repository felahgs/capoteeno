import React, { useState } from 'react';

import { Icon } from '@components/Icon';

import * as S from './Pagination.style';
import * as T from './Pagination.types';

const MAX_ARRAY_SIZE = 5;

const Pagination = ({currentPage: initialPage, lastPage, onPageChange}: T.PaginationProps) => {
  const pageArraySize = lastPage < MAX_ARRAY_SIZE ? lastPage : MAX_ARRAY_SIZE;

  const handlePageSelection = (newPage: number) => {
    setSelectedPage(newPage);
    onPageChange(newPage);
  };

  const [selectedPage, setSelectedPage] = useState(initialPage);
  
  const getOffset = () => {
    const leftLimit = Math.floor(pageArraySize / 2);
    const rightLimit = Math.ceil(pageArraySize / 2);

    if (selectedPage <= leftLimit) {
      return 1;
    }

    if ((lastPage - selectedPage) <= rightLimit) {
      return lastPage - pageArraySize + 1;
    }

    return selectedPage - leftLimit;
  };

  const PagesList = () => { 
    const offset = getOffset();

    return  (
      <>
        {new Array(pageArraySize).fill(1).map((page, index) => {
          const i = index + offset;
          const isSelected = i === selectedPage;
          return (
            <S.PageButton 
              onClick={() => !isSelected && handlePageSelection(i)} 
              aria-label={isSelected ? `current page ${i}` : `go to page ${i}`}
              key={`${page}-${i}`} 
              selected={isSelected}
            > 
              {i} 
            </S.PageButton>
          );})}
      </>
    );
  }; 

  return (
    <S.Container>
      <PagesList />
      <S.PreviousPageButton 
        aria-label='previous page' 
        onClick={() => handlePageSelection(selectedPage - 1)} 
        disabled={selectedPage === 1}
      > 
        <Icon name="left-arrow" size={14}/> 
      </S.PreviousPageButton>

      <S.NextPageButton 
        aria-label='next page' 
        onClick={() => handlePageSelection(selectedPage + 1)} 
        disabled={selectedPage >= lastPage}
      > 
        <Icon name="right-arrow" size={14}/> 
      </S.NextPageButton>
    </S.Container>
  );
};

export { Pagination };