import React from 'react';
import styled from 'styled-components';

export const VideoContainer = styled.div`
  width: 100%;
  border-radius: 20px;
`;

export const Video = styled.video`
  width: 100%;
  display: block;
  /* border: none; */
  object-fit: contain;
  border-radius: 20px;
`;

export default function ShowCase(): JSX.Element {
  return (
    <VideoContainer>
      <Video autoPlay loop muted>
        {/* <source src="one-does-not-simply.webm" type="video/webm" /> */}
        <source src="/video/video1.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
}
