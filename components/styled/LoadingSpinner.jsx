import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid var(--secondary-color);
  border-top: 4px solid var(--btn);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 50px auto;
`;
