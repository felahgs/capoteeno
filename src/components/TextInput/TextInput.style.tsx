import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  background: none;
  flex-grow: 1;
`;

export const WrapperInput = styled.div`
  display: flex;
  position: relative;
  width: fit-content;

  padding: 0px 16px;
  height: 42px;
  min-width: 352px;
  
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.lightBackground};
  
  letter-spacing: 0.0275em;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;

  top: 0;
  right: 0;

  background: none;
  border: none;
  
  height: 100%;
  cursor: pointer;
`;
