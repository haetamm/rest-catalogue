import React, { useContext, useState } from 'react';
import { Nav, Logo, Menu, NavList, NavItem, MenuHp } from './styled/Nav';
import { TbAlignRight } from 'react-icons/tb';
import { FaMoon, FaSun } from 'react-icons/fa';
import useScroll from '@/lib/hooks/useScroll';
import { VscClose } from 'react-icons/vsc';
import Link from 'next/link';
import { AppContext } from '@/lib/context/AppContext';
import { isActive, navLinks } from '@/lib/utils';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();
  const { theme, toggleTheme } = useContext(AppContext);
  const { pathname } = useRouter();

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
        {navLinks.map(({ label, href, external }, index) => {
          const active = isActive(href, pathname);
          return (
            <NavItem isScrolled={isScrolled} key={index} isActive={active}>
              <Link
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {label}
              </Link>
            </NavItem>
          );
        })}

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
