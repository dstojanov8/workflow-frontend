import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  display: flex;
  place-items: center;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 80vh;
  display: flex;
  background-color: #f4f4f4;
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
`

export const StyledTable = styled.table`
  width: 70vw;
  height: 50vh
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

export const StyledButton = styled.button`
  width: 100%;
  background-color: #cb2424;
  color: white;
  padding: 3px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  opacity: 1;
`;