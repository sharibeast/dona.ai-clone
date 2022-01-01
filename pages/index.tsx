import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 1rem;

  @media (min-width: 500px) {
    margin: 0 6rem;
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Dona - Home</title>
        <meta name="description" content="A more humane to-do list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      {/* <main>this is main</main> */}
    </Container>
  );
};

export default Home;
