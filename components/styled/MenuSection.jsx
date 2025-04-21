import styled from 'styled-components';

export const MenuTitle = styled.h3`
  font-size: 1.5em;
  padding: 1em 1em 0 1em;
  background-color: var(--primary-color);
  font-weight: bold;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const DetailMenu = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.245em;
  }
`;

export const DetailFood = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;

  h4 {
    font-weight: bold;
    font-size: 1.37em;
    padding: 1em;
    background-color: var(--primary-color);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0.5em 0;
    display: block;
    background-color: var(--primary-color);
    border: 0.5px solid var(--secondary-color);
    border-width: 0 0 0.5px;
  }
`;

export const DetailDrink = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: center;

  h4 {
    font-weight: bold;
    font-size: 1.37em;
    padding: 1em;
    background-color: var(--primary-color);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0.5em 0;
    display: block;
    background-color: var(--primary-color);
    border: 0.5px solid var(--secondary-color);
    border-width: 0 0 0.5px;
  }
`;
