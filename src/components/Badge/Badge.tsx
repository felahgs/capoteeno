import React from 'react';

import { useTheme } from 'styled-components';

import * as S from './Badge.style';
import * as T from './Badge.types';


export const Badge = ({ color, value, children }: T.Badge) => {
  const { badge } = useTheme();
  const showBadge = !!(value && value > 0);

  return (
    <S.Container>
      {children}
      {showBadge && (
        <S.Badge color={color || badge}>
          {value > 99 ? '99+' : value}
        </S.Badge>
      )}
    </S.Container>
  );
};
