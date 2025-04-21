import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  text-align: center;
  box-shadow: 1px 4px 8px 2px var(--box-shadow);
  transition: 0.3s;
  border-radius: 1em;
  background-color: var(--primary-color);
`;

export const ImgContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease;
  max-height: 600px;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;

  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      71.9deg,
      rgba(53, 76, 98, 0.71) -3.77%,
      rgba(158, 43, 43, 0.37) 92.46%
    );
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }
`;

export const ImgRes = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;

  ${ImgContainer}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 767px) {
    min-height: 200px;
  }

  @media (min-width: 768px) {
    min-height: 287px;
  }
`;

export const CardTitle = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  font-size: large;
  padding: 1em;
  background-color: #000000a8;
  width: 100%;
  z-index: 1;

  p {
    margin: 0;
    ${ImgContainer}:hover & {
      transform: scale(0.858);
    }
  }
`;

export const CardRating = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-size: large;
  background-color: var(--btn);
  padding: 0.4em 1.3em;
  border-bottom-left-radius: 1em;
  border-top-right-radius: 0.891em;
  z-index: 1;

  .fa {
    font-size: smaller;
    padding: 0.3em 0.8em 0.3em 0;
    color: gold;
  }
`;

export const CardContent = styled.div`
  padding: 1.4em 2em;
  font-size: 14px;
  text-align: left;
`;

export const CardContentTitle = styled.p`
  font-weight: bold;
  padding-bottom: 0.376em;
`;

export const Truncate = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  background-color: var(--primary-color);

  @media only screen and (max-width: 600px) {
    -webkit-line-clamp: 8;
  }
`;

export const CardButton = styled.a`
  display: inline-block;
  font-family: 'Comfortaa', cursive;
  margin: 1em 0.5em 0 0;
  padding: 0.5em 1em;
  font-weight: 700;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: var(--btn);
  border: 1px solid transparent;
  border-radius: 0.5em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--btn-hover);
  }

  @media (max-width: 600px) {
    margin: 0.5em 0.25em;
    padding: 0.4em 0.8em;
    font-size: 0.9em;
  }
`;
