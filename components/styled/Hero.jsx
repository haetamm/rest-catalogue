import styled from 'styled-components';

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  width: 100%;
  text-align: center;
  background: var(--image-color), url('/images/hero.jpg');
  background-position: center;
  background-color: var(--primary-color);
  object-fit: cover;
  padding: 0 10%;

  @media only screen and (max-width: 992px) {
    background: var(--image-color), url('/images/hero.jpg');
    background-position: center;
  }

  @media only screen and (max-width: 600px) {
    min-height: 500px;
    background: var(--image-color), url('/images/hero.jpg');
    background-size: cover;
    background-position: center;
  }
`;

export const HeroInner = styled.div`
  align-self: center;
  max-width: 600px;
  margin: auto 0;
  padding-bottom: 3em;
`;

export const HeroTitle = styled.h1`
  color: var(--primary-color);
  font-weight: 500;
  font-size: x-large;
`;

export const HeroBold = styled.span`
  font-weight: bold;
  font-size: x-large;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  padding: 0.3em 0.2em;
  border-radius: 0.5em;
  margin: 0.2em;
  display: inline-block;
`;

export const HeroTagline = styled.p`
  color: var(--primary-color);
  margin: 16px 16px 22px 16px;
  font-size: 13pt;
  font-weight: 500;
  word-spacing: 2px;
  line-height: 1.36em;
`;

export const HeroButton = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: var(--btn);
  color: white;
  padding: 0.8em 1.6em;
  font-weight: bold;
  border-radius: 0.5em;
  transition: background 0.3s ease;

  &:hover {
    background-color: var(--secondary-color-dark);
  }
`;
