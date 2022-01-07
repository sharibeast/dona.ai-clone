import Footer from 'components/Footer';
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { media } from 'utils/mediaQuery';
import NavBar from 'components/NavBar';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Container = styled.div`
  margin: 0 1rem;

  ${media.sm} {
    margin: 0 auto;
    max-width: 480px;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${media.md} {
    max-width: 720px;
  }

  ${media.lg} {
    max-width: 960px;
  }
  ${media.xl} {
    max-width: 1140px;
  }
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Dona - Home</title>
        <meta name="description" content="A more humane to-do list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <NavBar />
        <main>{children}</main>
      </Container>
      <Footer />
      <GlobalStyle />
    </>
  );
}
