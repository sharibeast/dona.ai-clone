import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { BtnColor } from 'interface/color';

const Button = styled.button`
  padding: 10px 25px;
  font-size: 14px;
  border-radius: 50px;
  border: none;
  background-color: ${({ bgColor }: BtnColor) => bgColor || 'white'};
  font-weight: 500;

  &:hover {
    background-color: #f2f4f7;
    transition: 500ms;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export default function NavBar(): JSX.Element {
  return (
    <NavContainer>
      <Button bgColor="white">About</Button>
      <Logo />
      <Button bgColor="#EAECEF">login</Button>
    </NavContainer>
  );
}
