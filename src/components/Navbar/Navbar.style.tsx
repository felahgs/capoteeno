import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  width: 100%;

  background-color: #ffff;
`;

export const CartButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;

  position: relative;

  // TODO: Use max-width for extra-large breakpoints (e.g. ultrawide screens)
  /* max-width: 1120px; */

  padding: 0 60px;
  height: 80px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled(Content)`
  font-family: 'Saira Stencil One';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;

  color: ${({ theme }) => theme.logo};
`;

export const SearchContainer = styled(Content)`
  display: flex;
  gap: 24px;
`;