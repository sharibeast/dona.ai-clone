import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from 'components/NavBar';
import styled from 'styled-components';
import { GlobalStyle } from 'styles/global';
import HeroSection from 'components/HeroSection';

const Container = styled.div`
  margin: 0 1rem;

  @media (min-width: 500px) {
    margin: 0 auto;
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  border-radius: 20px;
`;

const Video = styled.video`
  width: 100%;
  display: block;
  object-fit: contain;
  border-radius: 20px;
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
          <VideoContainer>
            <Video autoPlay loop muted>
              {/* <source src="one-does-not-simply.webm" type="video/webm" /> */}
              <source src="/video/video1.mp4" type="video/mp4" />
            </Video>
          </VideoContainer>
        </main>
      </Container>

      <GlobalStyle />
    </>
  );
};

export default Home;
