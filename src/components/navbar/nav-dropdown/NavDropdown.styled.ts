import styled from "styled-components";

export const MenuWrapper = styled.div`
  margin: 0px 5px 0px 5px;
  position: relative;
  padding: 3px 0px 3px 0px;
`;

export const StyledButton = styled.button`
  background: #333;
  box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.05);
  color: #fff;
  font-size: 1rem;
  border: none;
  padding: unset;
  cursor: pointer;

  &:hover {
    color: #ff6347; // tomato color on hover
  }
`;
