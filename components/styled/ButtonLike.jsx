import styled from 'styled-components';

export const ButtonLike = styled.button`
  font-size: 18px;
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: ${({ $liked }) =>
    $liked ? '#db0000' : 'var(--secondary-color)'};
  color: var(--primary-color);
  border: 0;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
