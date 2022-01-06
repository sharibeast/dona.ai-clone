import Footer from 'components/Footer';
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GlobalStyle } from 'styles/global';
import NavBar from 'components/NavBar';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Container = styled.div`
  margin: 0 1rem;

  @media (min-width: 500px) {
    margin: 0 auto;
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
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
        <Footer />
      </Container>
      <GlobalStyle />
    </>
  );
}
