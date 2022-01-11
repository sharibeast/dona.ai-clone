import React from 'react'
import styled from 'styled-components'
import { IconWrapper } from 'components/Footer'
import Image from 'next/image'
import Link from 'next/link'


const ProfileWrapper = styled.div`
margin-botton:20px;
`

const ImageContainer = styled.div`
border-radius:100px;
background:red;
`

const ProfileName = styled.h4`
margin-top:24px;
color:rgb(25,25,27);
line-height:1.35;
font-weight:600;
font-size:18px;
`

const ProfileDescription = styled.p`
font-size:16px;
margin:8px 0px 16px;
line-height:1.45;
color:rgb(97,104,112);
`

const IconContainer = styled.div`
display:flex;
// max-width:20%;
// background:red;

>svg{
    margin-right:12px;
}
`
export const Icon = styled(IconWrapper)`
margin-right:12px;

background-color:rgb(221,224,228);
&:hover{
    background-color:rbg(218,221,225);
}

`

interface ProfileProps {
    image: StaticImageData;
    name: string;
    description: string;
    children?: JSX.Element | JSX.Element[];
    twitterUrl: string;
    dribbbleUrl: string;
    instaUrl?: string;
}
export default function Profile({ image, name, description, twitterUrl, instaUrl, dribbbleUrl, children }: ProfileProps): JSX.Element {
    return (
        <ProfileWrapper>
            <Image src={image} height={150} width={150} alt={`${name}+image`} />
            <ProfileName>{name}</ProfileName>
            <ProfileDescription>{description}</ProfileDescription>
            <IconContainer>
                <Link href={twitterUrl} passHref={true}>
                    <Icon>
                        <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            className="Base__IconWrapper-sc-v8f88g-0 bEznrZ"
                            height="20"
                            width="20"
                            fill="#000000"
                        >
                            <path d="M16 3C15.4 3.3 14.8 3.4 14.1 3.5C14.8 3.1 15.3 2.5 15.5 1.7C14.9 2.1 14.2 2.3 13.4 2.5C12.8 1.9 11.9 1.5 11 1.5C9.3 1.5 7.8 3 7.8 4.8C7.8 5.1 7.8 5.3 7.9 5.5C5.2 5.4 2.7 4.1 1.1 2.1C0.8 2.6 0.7 3.1 0.7 3.8C0.7 4.9 1.3 5.9 2.2 6.5C1.7 6.5 1.2 6.3 0.7 6.1C0.7 7.7 1.8 9 3.3 9.3C3 9.4 2.7 9.4 2.4 9.4C2.2 9.4 2 9.4 1.8 9.3C2.2 10.6 3.4 11.6 4.9 11.6C3.8 12.5 2.4 13 0.8 13C0.5 13 0.3 13 0 13C1.5 13.9 3.2 14.5 5 14.5C11 14.5 14.3 9.5 14.3 5.2C14.3 5.1 14.3 4.9 14.3 4.8C15 4.3 15.6 3.7 16 3Z"></path>
                        </svg>
                    </Icon>
                </Link>
                <Link href={dribbbleUrl} passHref={true}>
                    <Icon>
                        <svg height="20" width="20" viewBox="0 0 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM10.2 7.4C10.2 7.4 10 6.8 9.9 6.6C11.6 5.8 12.7 4.9 13.1 4.4C13.8 5.3 14.2 6.4 14.3 7.6C13.5 7.4 11.7 7.1 10.2 7.4ZM9.1 5.1C8.3 3.7 7.4 2.5 7 1.8C8.9 1.3 10.6 1.9 11.9 3.1C11.5 3.6 10.7 4.4 9.1 5.1ZM5.1 2.5C5.5 3 6.3 4.2 7.1 5.7C4.9 6.2 2.9 6.3 2 6.3C2.4 4.7 3.6 3.3 5.1 2.5ZM8 7.3C8.1 7.5 8.2 7.7 8.3 7.8C5.5 8.7 3.7 11 3.1 11.9C2.3 10.8 1.8 9.5 1.8 8.2C2.7 8.1 5.3 8 8 7.3ZM9 9.5C9.7 11.5 10.1 13.1 10.2 13.9C8.1 14.6 5.7 14.2 4.4 13.1C4.8 12.4 6.1 10.6 9 9.5ZM11.9 12.9C11.7 12.1 11.4 10.7 10.8 9C11.9 8.8 13.5 9 14.1 9.2C13.8 10.7 13 12 11.9 12.9Z"></path></svg>
                    </Icon>
                </Link>
                {children}

            </IconContainer>
        </ProfileWrapper>
    )
}
