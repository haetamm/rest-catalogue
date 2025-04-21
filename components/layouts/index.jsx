import React from 'react';
import NavBar from '../NavBar';
import HeroSection from '../HeroSection';
import Footer from '../FooterSection';
import { Main } from '../styled/Main';
import Container from '../styled/Container';
import { AppProvider } from '@/lib/context/AppProvider';
import Head from 'next/head';

const index = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nongki&apos;s</title>
      </Head>
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
