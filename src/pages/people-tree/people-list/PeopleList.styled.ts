import styled from "styled-components";

// Styled container for the side menu
export const SideMenu = styled.div`
  width: 25vh;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #f4f4f4;
  overflow: auto;
`;

// Styled for individual person items in the list
export const PersonItem = styled.p`
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Title = styled.h3`
  margin: unset;
  // position: fixed;
`;
