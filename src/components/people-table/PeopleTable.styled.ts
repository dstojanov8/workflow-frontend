import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 55%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  place-items: center;
  width: 80vw;
  height: 80vh;
  display: grid;
  background-color: #f4f4f4;
  padding: 15px 50px 20px 50px;
  border-radius: 5px;
`

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