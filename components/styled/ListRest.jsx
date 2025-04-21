import styled from 'styled-components';

export const ListRest = styled.section`
  display: grid;
  grid-gap: 1.545em;
  background-color: var(--primary-color);

  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.545em;
  }

  @media only screen and (min-width: 1400px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
