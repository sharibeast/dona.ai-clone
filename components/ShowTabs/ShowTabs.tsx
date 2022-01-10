import React from 'react'
import styled from 'styled-components'
import { media } from 'utils/mediaQuery'
import { Title } from 'components/TodoListShowCase'
import { VideoContainer,Video } from 'components/ShowCase'

const ShowTabsContainer = styled.div`
justify-content:space-between;
margin-top:30px;
${media.lg}{
            display:flex;

        }
`
const TabContainer= styled.div`
    width:100%;
    background-color:#F3F4F5;
    border-radius:20px;
    padding:40px 60px;

    margin-bottom:30px;

    ${media.lg}{
        width:48%;
    }
`
export default function ShowTabs() {

    return (
        <ShowTabsContainer>
            <TabContainer>
                <Title>Light,dark & black UI theme</Title>
                <p>Dona offers lot of customizations, one of them allowing you to choose from light,dark and black UI theme</p>
                <VideoContainer>
                    <Video autoPlay loop muted>
                        <source src='/video/video3.mp4' type='video/mp4'/>
                    </Video>
                </VideoContainer>


            </TabContainer>
            <TabContainer>
                <VideoContainer>
                    <Video autoPlay loop muted>
                        <source src='/video/video4.mp4' type='video/mp4'/>
                    </Video>
                </VideoContainer>
                <Title>Details matter</Title>
                <p>We want to bring satisfaction to every interaction</p>
            </TabContainer>
        </ShowTabsContainer>
    )
}
