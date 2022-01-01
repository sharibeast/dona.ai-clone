import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import { GlobalStyle } from 'styles/global';
import HeroSection from 'components/HeroSection';

const Container = styled.div`
  margin: 0 1rem;

  @media (min-width: 500px) {
    margin: 0 3rem;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Head>
          <title>Dona - Home</title>
          <meta name="description" content="A more humane to-do list" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />

        <main>
          <HeroSection />
        </main>
      </Container>

      <GlobalStyle />
    </>
  );
};

export default Home;
