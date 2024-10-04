import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 55%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  // place-items: center;
  width: 80vw;
  height: 80vh;
  display: flex;
  background-color: #f4f4f4;
  padding: 15px 50px 20px 20px;
  border-radius: 5px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction:column;
  width: -webkit-fill-available; 
`;