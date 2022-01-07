import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';

const GetEarlyAccess = styled.input`
  line-height: 48px;
  font-size: 36px;
  cursor: text;
  display: block;
  border: none;
  margin-top: 50px;
  color: gray;
  padding: 20px 0px;
  font-family: inherit;
  width: 100%;
`;

const Submit = styled.button`
  font-family: inherit;
  display: block;
  border: none;
  outline: none;
  text-align: center;
  padding: 14px 26px;
  font-weight: 500;
  border-radius: 32px;
  background-color: rgb(25, 25, 27);
  color: rgb(255, 255, 255);
  cursor: pointer;
  ${media.sm} {
    padding: 20px 26px;
    font-size: 18px;
  }
`;
const InputWrapper = styled.form``;
export default function Input(): JSX.Element {
  return (
    <InputWrapper>
      <GetEarlyAccess placeholder="Enter your email" />
      <Submit type="submit">Get early access</Submit>
    </InputWrapper>
  );
}
