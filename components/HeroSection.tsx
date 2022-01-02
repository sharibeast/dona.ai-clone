import React from 'react';
import styled from 'styled-components';

import { BtnColor, TxtColor } from 'interface/color';
const HeroSectionContainer = styled.section`
  padding: 120px 0;
`;
const Title = styled.h1`
  font-size: 40px;
  line-height: 1.15;

  @media (min-width: 500px) {
    font-size: 50px;

    /* max-width: 100%; */
  }

  @media (min-width: 1000px) {
    font-size: 84px;
    letter-spacing: 1px;
    max-width: 90%;
  }
`;
const Description = styled.p`
  font-size: 18px;
  margin-top: 24px;
  font-weight: 500;

  @media (min-width: 500px) {
    max-width: 90%;
    font-size: 20px;
    margin-top: 32px;
  }

  @media (min-width: 1000px) {
    max-width: 60%;
    font-size: 24px;
  }
`;
const Span = styled.span`
  color: #d3d7db;
  /* color: linear-gradient(to right, rgb(211, 215, 219) 50%, rgba(179, 207, 255, 0.7) 100%); */
  display: inline;
  /* -webkit-text-fill-color: transparent; */
  line-height: 1.1;
  /* margin-bottom: -4px; */
  /* background: linear-gradient(to right, rgb(211, 215, 219) 50%, rgba(179, 207, 255, 0.7) 100%) text
    rgb(120, 128, 136); */
  /* background-image: linear-gradient(
    to right,
    rgb(211, 215, 219) 50%,
    rgba(179, 207, 255, 0.7) 100% */
  /* ); */
  /* font-size: 40px; */
  /* background-position-x: initial; */
  /* background-position-y: initial; */
  /* background-size: initial; */
  /* background-repeat-x: initial; */
  /* background-repeat-y: initial; */
  /* background-attachment: initial; */
  /* background-origin: initial; */
  background-clip: text;
  /* background-color: rgb(120, 128, 136); */
`;

const ButtonContainer = styled.section`
  margin-top: 50px;
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  align-items: flex-start;
  justify-items: center;

  @media (min-width: 500px) {
    /* flex-direction: row; */
    max-width: 100%;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 14px 26px;
  font-weight: 500;
  margin-bottom: 10px;
  border-radius: 32px;
  background-color: ${({ bgColor }: BtnColor) => bgColor};
  border: none;
  margin-right: 16px;
  /* text-align: center; */
  /* height: 30px; */
  /* color: white; */
  /* margin-bottom: 8px; */
  width: 200px;
  box-shadow: rgb(12 20 66 / 2%) 0px 2px 4px, rgb(12 20 66 / 3%) 0px -1px 2px inset;

  @media (min-width: 500px) {
    width: 200px;
  }
`;
export default function HeroSection() {
  return (
    <HeroSectionContainer>
      <Title>
        <Span>A more humane</Span>
        <br /> to do list
      </Title>
      <Description>
        Dona is a back to basic to-do list focused on fast and delightful user experience
      </Description>
      <ButtonContainer>
        <Button bgColor="#EDEFF2">
          <svg
            height="20"
            width="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              d="M3 13.2591V2.7409C3 1.55552 4.31017 0.838508 5.30858 1.47749L13.5259 6.73659C14.4478 7.3266 14.4478 8.6734 13.5259 9.26341L5.30858 14.5225C4.31017 15.1615 3 14.4445 3 13.2591Z"
            ></path>
          </svg>
          Watch videos
        </Button>
        <Button bgColor="rgb(0, 143, 253)">Earl Access</Button>
      </ButtonContainer>
    </HeroSectionContainer>
  );
}
