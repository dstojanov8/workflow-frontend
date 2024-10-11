import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 3vh;
  border: none;
`;

export const StyledForm = styled.form`
  margin-top: 10vh;
  place-items: center;
  width: 25vw;
  display: grid;
  background-color: #f4f4f4;
  padding: 15px 50px 20px 50px;
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  width: -webkit-fill-available;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledSubmitButton = styled.button`
  width: 10vw;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
`;

export const StyledAlert = styled.div`
  padding-top: 10px;
  color: #f44336;
  // margin-top: 10px;
  border-radius: 5px;
  font-size: 13px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: -webkit-fill-available;
  justify-content: space-between;
`;
