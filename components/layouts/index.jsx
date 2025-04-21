import React from 'react';
import NavBar from '../NavBar';
import HeroSection from '../HeroSection';
import Footer from '../FooterSection';
import { Main } from '../styled/Main';
import Container from '../styled/Container';
import { AppProvider } from '@/lib/context/AppProvider';

const index = ({ children }) => {
  return (
    <>
      <AppProvider>
        <NavBar />
        <HeroSection />
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer />
      </AppProvider>
    </>
  );
};

export default index;
