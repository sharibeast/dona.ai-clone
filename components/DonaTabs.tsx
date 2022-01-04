import React from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from './TodoListShowCase';
import { VideoContainer, Video } from './ShowCase';
import { media } from 'utils/mediaQuery';

const Container = styled.div`
  border-radius: 20px;
  margin-top: 50px;
  padding: 40px 70px;

  background-color: rgb(244, 244, 245);
  -webkit-mask-image: -webkit-radial-gradient(center, white, black);
  ${media.sm} {
    display: flex;
    justify-content: space-between;
  }
`;

const Box = styled.div`
  border: none;
  ${media.sm} {
    width: 40%;
  }
`;

const Spacer = styled.div`
  width: 30px;
`;

const DetailsContainer = styled.div`
  padding: 50px;
`;

export default function DonaTabs(): JSX.Element {
  return (
    <Container>
      <Box>
        <Title>Light,dark & black UI theme</Title>
        <Paragraph>
          Dona offers lot of customizations, one of them allowing you to choose from light,dark and
          black UI theme
        </Paragraph>
        <VideoContainer>
          <Video>
            <source src="/video/video3.mp4" type="video/mp4" />
          </Video>
        </VideoContainer>
      </Box>
      <Spacer />
      <Box>
        <VideoContainer>
          <Video>
            <source src="/video/video4.mp4" type="video/mp4" />
          </Video>
        </VideoContainer>

        <DetailsContainer>
          <Title>Details Matter</Title>
          <Paragraph>We want to bring satisfaction to every interaction</Paragraph>
        </DetailsContainer>
      </Box>
    </Container>
  );
}
