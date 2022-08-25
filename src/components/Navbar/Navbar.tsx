import React from 'react';

import { TextInput } from '@components/TextInput';
import { Icon } from '@components/Icon';
import { Badge } from '@components/Badge';

import * as S from './Navbar.style';
import * as T from './Navbar.types';

const Header = ({logo, cartItems}: T.NavbarProps) => {
  return (
    <S.Container>

      <S.Navbar>
        <S.LogoContainer>
          {logo}
        </S.LogoContainer>
        <S.SearchContainer>
          <TextInput.Search onChange={() => null} onSearch={() => null}/>
          {/* TODO: badge notification counter based on itens on cart */}
          <S.CartButton>
            <Badge value={cartItems}>
              <Icon name="shopping-bag" />
            </Badge>
          </S.CartButton>
        </S.SearchContainer>
      </S.Navbar>
    </S.Container>
  );
};

export { Header };