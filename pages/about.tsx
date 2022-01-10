import React from 'react'
import Layout from 'components/Layout/Layout'
import { media } from 'utils/mediaQuery'
import Head from 'components/Head/Head'
import styled from 'styled-components'

const AboutSummary = styled.div`
        margin-top:50px;
`
const Brief =styled.h1`
font-size:40px;
line-height:1.1;
color:rgb(25,25,27);
font-weight:700;

${media.sm}{
    font-size:48px;
    line-height:1.15;
}
${media.md}{
    font-size:56px;
}
${media.lg}{
    max-width:65%;
    font-size:64px;
}
`
const BriefSpan = styled.span`
    display: inline;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
    margin-bottom: -4px;
    background: linear-gradient(to right, rgb(211, 215, 219) 50%, rgba(179, 207, 255, 0.7) 100%) text rgb(120, 128, 136);
`

const Details = styled.p`
margin-top:24px;
font-weight:600;
font-size:18px;
max-width:90%;

${media.sm}{
    font-size:20px;
}

${media.md}{
    max-width:60%;
}

`

const DetailSpan = styled.span`
  font-weight:500;
  color:rgb(176,181,186);
`


export default function about() {
    return (
        <Layout>
            <Head title='About - Dona' description=''/>
            <AboutSummary>
                <Brief>
                    <BriefSpan>We&apos;re building</BriefSpan> <br />
                    to-do list you&apos;ll enjoy using
                </Brief>
            <Details>
               Our mission with Dona is to solve current problems with to-do list apps by a more humane design approach and a completely natural user experience.
               <DetailSpan>We want to bring satisfaction to every day use of to-do lists and not feeling it like a chore anymore</DetailSpan>
            </Details>
            </AboutSummary>
        </Layout>
    )
}
