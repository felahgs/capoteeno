import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`;

export const Badge = styled.div<{ color: string }>`
  position: absolute;
  top: calc(100% - 15px);
  left: calc(100% - 10px);
  width: 17px;
  height: 17px;

  background-color: ${({ color }) => color};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;

  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 26px;
  color: #ffffff;
`;
