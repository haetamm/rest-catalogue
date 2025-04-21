import styled from 'styled-components';

export const DetailRest = styled.section`
  font-size: 1em;
  background-color: var(--primary-color);
`;

export const Detail = styled.div`
  display: grid;
  grid-gap: 1.545em;
  font-size: 1em;

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 1fr;
    justify-content: center;
  }
`;

export const DetailImageContainer = styled.div`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const ImgRes2 = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  min-height: 200px; /* Biar ga mengkerut */
  border-bottom-left-radius: 3em;
  border-top-right-radius: 3em;
  border: 1em solid var(--secondary-color);

  @media (max-width: 768px) {
    min-height: 150px; /* Sesuaikan buat mobile */
  }
`;

export const DetailInfo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const DetailInfoItem = styled.li`
  position: relative;
  display: flex;
  padding: 0.6em;
  color: var(--font-color);
  background-color: var(--primary-color);
  border: 0.5px solid var(--secondary-color);
  border-width: 0 0 0.5px;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 0.5em;
    width: 25px;
    height: 20px;
  }

  .truncate2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    background-color: var(--primary-color);
  }
`;

export const Category = styled.span`
  padding: 0.3em 1em;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  margin-right: 2px;
  border-radius: 1.5em;
`;
