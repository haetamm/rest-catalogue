import styled from 'styled-components';

export const Nav = styled.nav`
  z-index: 999;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.3em 5em;
  height: 75px;
  font-family: 'Unica One', cursive;
  width: 100%;
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'var(--primary-color)' : 'transparent'};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' : 'none'};
  transition: background-color 0.3s ease; /* Smooth transition for background */

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 1.5em 1em;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  @media only screen and (max-width: 320px) {
    padding: 1.5em 0.1em;
  }
`;

export const Logo = styled.div`
  font-size: x-large;
  font-weight: bold;
  color: ${({ isScrolled }) =>
    isScrolled ? 'var(--secondary-color)' : 'var(--primary-color)'};
  text-decoration: none;
  padding: 0.378em 0.3em;
`;

export const MenuHp = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const Menu = styled.div`
  font-size: 25px;
  display: none;
  padding: 0 0.3em;
  color: ${({ isScrolled }) =>
    isScrolled ? 'var(--secondary-color)' : 'var(--primary-color)'};
  background-color: transparent;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    display: block;
    background-color: transparent;
    border: 1px solid transparent;
    text-align: center;

    svg {
      color: ${({ isScrolled }) =>
        isScrolled ? 'var(--secondary-color)' : 'var(--primary-color)'};
      font-size: 25px;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  margin-bottom: 0;
  list-style: none;
  flex-wrap: wrap;
  transition: ease;
  background-color: transparent;

  @media only screen and (max-width: 600px) {
    display: none;
    position: fixed;
    flex-direction: column;
    width: 50%;
    z-index: 9;
    right: 16px;
    top: 80px;
    background-color: var(--primary-color);

    &.nav-list-block {
      display: flex;
    }
  }
`;

export const NavItem = styled.li`
  box-sizing: border-box;
  line-height: 24px;

  a {
    padding: 0.665rem;
    display: inline-block;
    font-size: 1.38em;
    text-decoration: none;
    color: ${({ isScrolled }) =>
      isScrolled ? 'var(--secondary-color)' : 'var(--primary-color)'};
  }

  button {
    padding: 0.9265rem;
    background-color: transparent;
    border: 0 solid transparent;
    color: ${({ isScrolled }) =>
      isScrolled ? 'var(--secondary-color)' : 'var(--primary-color)'};
    cursor: pointer;
    font-size: 1.38;
    vertical-align: middle;

    svg {
      color: ${({ isScrolled }) =>
        isScrolled ? 'var(--secondary-color)' : 'var(--primary-color)'};
    }
  }

  @media only screen and (max-width: 600px) {
    a {
      padding: 1.3em;
      color: var(--secondary-color);
    }

    button {
      padding: 1.8em;

      svg {
        color: var(--secondary-color);
      }
    }
  }

  @media only screen and (max-width: 320px) {
    a {
      font-size: 1.2em;
    }
  }
`;
