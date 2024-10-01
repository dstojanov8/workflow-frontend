import styled from "styled-components";

export const StyledForm = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  place-items: center;
  width: 25vw;
  display: grid;
  background-color: #f4f4f4;
  padding: 20px;
  padding-top: 15px;
  border-radius: 5px;
`

interface FormStyleProps {
    $invalid?: boolean;
    enabled?: boolean;
}

export const StyledLabel = styled.label<FormStyleProps>`
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;
  color: ${props => props.$invalid ? 'red' : 'black'};
`

export const StyledInput = styled.input`
  width: 20vw;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledButton = styled.button<FormStyleProps>`
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
    opacity: 1.0;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`

export const StyledAlert = styled.div`
  padding: 10px;
  color: #f44336;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 13px;
`