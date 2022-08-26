import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const PageButton = styled.button<{
  selected?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  border: none;
  border: 1px solid ${(props) => props.theme.inputBackground};
  border-radius: 8px;
  background-color: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.text.secondary};
  cursor: pointer;

  font-family: 'Saira Regular';
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  ${(props) =>
    props.selected &&
    css`
      background-color: #fff;
      border: 1px solid ${props.theme.selection};
      border-radius: 8px;
      color: ${props.theme.selection};
    `}

    ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.4;
    `}
`;

export const PreviousPageButton = styled(PageButton)``;
export const NextPageButton = styled(PageButton)``;