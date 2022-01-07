import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/mediaQuery';
import { Container } from 'components/Layout/Layout';

const FooterWrapper = styled.div`
  border-top: 1px solid rgb(236, 239, 242);
  padding: 64px 0px;
  margin-top: 70px;
  margin: 0 1rem;
`;

const FooterContainer = styled.div`
  color: rgb(97, 104, 112);
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.sm} {
    margin: 0px auto;
    max-width: 480px;
  }
  ${media.md} {
    max-width: 720px;
  }
  ${media.lg} {
    max-width: 960px;
  }
  ${media.xl} {
    max-width: 1140px;
  }
`;

const TermsServiceContainer = styled.div`
  display: flex;
  color: rgb(25, 25, 27);
  font-size: 14px;
  font-weight: 400;
  margin-top: 4px;
  cursor: default;
  align-items: center;
`;

const Name = styled.span`
  color: black;
  cursor: pointer;
`;

const A = styled.div`
  margin-right: 10px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: rgb(236, 239, 242);
  box-shadow: rgb(0 0 0 / 2%) 0px 2px 4px, rgb(0 0 0 / 3%) 0px -1px 2px inset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  transition: background-color 0.15s ease 0s;

  &:hover {
    background-color: rgb(233, 236, 239);
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div>
          <p>© {new Date().getFullYear()}</p>
          <p>
            Made by <Name>Jakub Antalik</Name> & <Name>Aaron Iker</Name>{' '}
          </p>
          <TermsServiceContainer>
            <A>Terms of service</A>

            <A>Privacy policy</A>
          </TermsServiceContainer>
        </div>
        <IconWrapper>
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="Base__IconWrapper-sc-v8f88g-0 bEznrZ"
            height="24"
            width="24"
            fill="#000000"
          >
            <path d="M16 3C15.4 3.3 14.8 3.4 14.1 3.5C14.8 3.1 15.3 2.5 15.5 1.7C14.9 2.1 14.2 2.3 13.4 2.5C12.8 1.9 11.9 1.5 11 1.5C9.3 1.5 7.8 3 7.8 4.8C7.8 5.1 7.8 5.3 7.9 5.5C5.2 5.4 2.7 4.1 1.1 2.1C0.8 2.6 0.7 3.1 0.7 3.8C0.7 4.9 1.3 5.9 2.2 6.5C1.7 6.5 1.2 6.3 0.7 6.1C0.7 7.7 1.8 9 3.3 9.3C3 9.4 2.7 9.4 2.4 9.4C2.2 9.4 2 9.4 1.8 9.3C2.2 10.6 3.4 11.6 4.9 11.6C3.8 12.5 2.4 13 0.8 13C0.5 13 0.3 13 0 13C1.5 13.9 3.2 14.5 5 14.5C11 14.5 14.3 9.5 14.3 5.2C14.3 5.1 14.3 4.9 14.3 4.8C15 4.3 15.6 3.7 16 3Z"></path>
          </svg>
        </IconWrapper>
      </FooterContainer>
    </FooterWrapper>
  );
}
