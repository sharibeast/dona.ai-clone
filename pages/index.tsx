import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import { GlobalStyle } from 'styles/global';
import HeroSection from 'components/HeroSection';
import ShowCase from 'components/ShowCase';
import TodoListShowCase from 'components/TodoListShowCase';
import DonaTabs from 'components/DonaTabs';

const Container = styled.div`
  margin: 0 1rem;

  @media (min-width: 500px) {
    margin: 0 auto;
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
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
          <ShowCase />
          <TodoListShowCase />
          <DonaTabs/>
        </main>
      </Container>

      <GlobalStyle />
    </>
  );
};

export default Home;
