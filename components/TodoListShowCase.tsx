import React from 'react';
import styled from 'styled-components';
import { VideoContainer, Video } from './ShowCase';
import { media } from 'utils/mediaQuery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #f3f4f5; */
  margin-top: 60px;
  border-radius: 30px;
  padding: 30px;
  background-color: rgb(244, 244, 245);
  mask-image: radial-gradient(center, white, black);
  border-radius: 20px;
  /* @media (min-width: 993px) {
    flex-direction: row;
  } */
  ${media.md} {
    flex-direction: row;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;

  ${media.md} {
    font-size: 32px;
  }
`;

const Paragraph = styled.div`
  font-size: 16px;
  color: #777d85;
  -webkit-font-smoothing: antialised;

  ${media.sm} {
    font-size: 18px;
  }
`;

const VidContainer = styled(VideoContainer)`
  width: 100%;
  ${media.md} {
    width: 64%;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  ${media.md} {
    width: 36%;
  }
`;

export default function TodoListShowCase(): JSX.Element {
  return (
    <Container>
      <TextContainer>
        <Title>
          Fast and delightful <br /> user experience{' '}
        </Title>
        <Paragraph>
          Dona helps you to manage your tasks and achieve your goal in intutive and delightfult way.
          We wanted to build an app you will enjoy using everyday
        </Paragraph>
      </TextContainer>

      <VidContainer>
        <Video autoPlay loop muted>
          <source src="/video/video2.mp4" type="video/mp4" />
        </Video>
      </VidContainer>
    </Container>
  );
}
