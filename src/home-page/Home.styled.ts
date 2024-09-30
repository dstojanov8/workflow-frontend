import styled, { keyframes } from 'styled-components';

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-150px);
  }
  60% {
    transform: translateY(-75px);
  }
`;

export const Ball = styled.div`
  width: 50px;
  height: 50px;
  background-color: #4caf50;
  border-radius: 50%;
  position: relative;
  animation: ${bounce} 1s infinite;
`;
