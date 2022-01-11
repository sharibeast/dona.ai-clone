import React from 'react'
import Profile from './Profile'
import styled from 'styled-components'
import { media } from 'utils/mediaQuery'
import { Icon } from './Profile'
import Link from 'next/link'
import aaron from '../../public/images/aaron.jpg'
import jakub from '../../public/images/jakub.jpg'

const TeamWrapper = styled.div`
    background:rgb(239, 242, 245);
    border-radius:20px;
    padding:48px;
    margin:100px 0;


`

const ProfileContainer = styled.div`
margin-top:36px;

display:grid;
grid-template-columns:repeat(1,minmax(0px,1fr));
gap:32px;

${media.md}{
     gap:60px;
     grid-template-columns:repeat(2,minmax(0px,1fr));
 }
`

export default function Team() {
    return (
        <TeamWrapper>
            <h2>Team</h2>
            <ProfileContainer>
                <Profile dribbbleUrl='https://dribbble.com/antalik' twitterUrl='https://twitter.com/jakubantalik' name='Jakub Antalik' image={jakub} description='product designer with passion for motion design and interactive experiences' />

                <Profile twitterUrl='https://twitter.com/aaroniker_me' dribbbleUrl='https://dribbble.com/ai' name='Aaron Iker' description='Creative developer who loves to bring more fun to the web & entertain people by creating playful micro interactions.' image={aaron} >
                    <Link href='https://www.instagram.com/aaroniker' passHref={true}>
                        <Icon>
                            <svg height='20' strokeWidth='1.5' width='20' viewBox="0 0 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg"><path d="M12.1451 4.85189C12.6753 4.85189 13.1051 4.42208 13.1051 3.89188C13.1051 3.36169 12.6753 2.93188 12.1451 2.93188C11.6149 2.93188 11.1851 3.36169 11.1851 3.89188C11.1851 4.42208 11.6149 4.85189 12.1451 4.85189Z"></path><path d="M8 12C5.794 12 4 10.206 4 8C4 5.794 5.794 4 8 4C10.206 4 12 5.794 12 8C12 10.206 10.206 12 8 12ZM8 6C6.897 6 6 6.897 6 8C6 9.103 6.897 10 8 10C9.103 10 10 9.103 10 8C10 6.897 9.103 6 8 6Z"></path><path d="M12 16H4C1.944 16 0 14.056 0 12V4C0 1.944 1.944 0 4 0H12C14.056 0 16 1.944 16 4V12C16 14.056 14.056 16 12 16ZM4 2C3.065 2 2 3.065 2 4V12C2 12.953 3.047 14 4 14H12C12.935 14 14 12.935 14 12V4C14 3.065 12.935 2 12 2H4Z"></path></svg>
                        </Icon>
                    </Link>
                </Profile>

            </ProfileContainer>

        </TeamWrapper>
    )
}
