import styled from "styled-components";

export const StyledForm = styled.form`
  place-items: center;
  width: 25vw;
  display: grid;
  background-color: #f4f4f4;
  padding: 15px 50px 20px 50px;
  border-radius: 5px;
  margin-top: 10vh;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;
  color: "black";
`;

export const StyledInput = styled.input`
  width: -webkit-fill-available;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  width: 10vw;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: 1;
`;
