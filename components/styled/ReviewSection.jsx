import styled from 'styled-components';

export const ReviewTitle = styled.h3`
  font-size: 1.5em;
  padding: 1em 1em 0 1em;
  background-color: var(--primary-color);
  font-weight: bold;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const DetailReview = styled.div`
  max-width: 100%;
  font-size: 1em;
  text-align: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.245em;
  }
`;

export const DetailReviewItem = styled.div`
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  background-color: var(--primary-color);
  border-radius: 1em;
  box-shadow: 1px 2px 4px 2px var(--box-shadow);
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1em;
  color: var(--secondary-color);
  border-bottom: 1px solid var(--font-color);
`;

export const ReviewName = styled.p`
  font-weight: bold;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 130px;

  .fa {
    font-size: 1.3em;
    margin-right: 0.5em;
  }
`;

export const ReviewDate = styled.p`
  font-size: 0.8em;
  font-weight: lighter;
`;

export const ReviewBody = styled.div`
  padding: 1.5em;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
  margin: auto;
`;
