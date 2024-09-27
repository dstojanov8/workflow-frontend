import styled from 'styled-components';

export const StyledTable = styled.table`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  width: 60vw;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
`;

export const StyledTh = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  border: 1px solid #ddd;
`;

export const StyledTd = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

export const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;