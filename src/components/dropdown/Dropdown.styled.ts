import styled from "styled-components";

// Styled dropdown components
export const DropdownWrapper = styled.div`
  position: relative;
  width: -webkit-fill-available;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 9px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const StyledOption = styled.option`
  padding: 10px;
  background-color: #fff;
  color: #333;
`;
