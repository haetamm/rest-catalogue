import React, { useContext, useState } from 'react';
import { Nav, Logo, Menu, NavList, NavItem, MenuHp } from './styled/Nav';
import { TbAlignRight } from 'react-icons/tb';
import { FaMoon, FaSun } from 'react-icons/fa';
import useScroll from '@/lib/hooks/useScroll';
import { VscClose } from 'react-icons/vsc';
import Link from 'next/link';
import { AppContext } from '@/lib/context/AppContext';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();
  const { theme, toggleTheme } = useContext(AppContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav isScrolled={isScrolled}>
      <MenuHp>
        <Logo isScrolled={isScrolled}>Nongki&apos;s</Logo>
        <Menu
          isScrolled={isScrolled}
          aria-label="button menu dropdown on mobile"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <VscClose /> : <TbAlignRight />}
        </Menu>
      </MenuHp>

      <NavList className={isMenuOpen ? 'nav-list-block' : ''}>
        <NavItem isScrolled={isScrolled}>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem isScrolled={isScrolled}>
          <Link
            href="#
          /favorite"
          >
            FavoriTe
          </Link>
        </NavItem>
        <NavItem isScrolled={isScrolled}>
          <Link
            href="https://github.com/firmanjabar/nongkis"
            target="_blank"
            rel="noopener noreferrer"
          >
            AbouT Us
          </Link>
        </NavItem>
        <NavItem isScrolled={isScrolled}>
          <button
            onClick={toggleTheme}
            tabIndex="0"
            aria-label="button for toggle light or dark mode"
            type="button"
            id="dark-mode"
            className="light"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
