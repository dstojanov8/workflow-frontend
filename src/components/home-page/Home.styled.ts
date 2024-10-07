import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50);
  }
  40% {
    transform: translateX(-700px);
  }
`;

export const Text = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10%;
  left: 10%;
  animation: ${bounce} 10s infinite;
  font-weight: bold; // 900
  font-size: 480px;
`;
