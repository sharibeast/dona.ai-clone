import React from 'react'
import Head from 'components/Head/Head'
import Link from 'next/link'
import styled from 'styled-components'
import Logo from 'components/Logo'

const Container = styled.div`
background:rgb(222, 232, 241);
height: 100vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
overflow-x:none;
`

const FormWrapper = styled.div`
margin:50px auto;
background:#ffffff;
max-width:400px;
padding: 50px 70px 50px;
border-radius:12px;
`

const FormHeader = styled.h1`
font-size:28px;
margin: 0 0 8px 0;
font-weight:500;
color: #27272b;
`
const Small = styled.small`
display:block;
font-size:14px;
margin-bottom:24px;
color:#616870;
`

const Input = styled.input`
border-radius:15px;
padding:16px 16px;
font-size:14px;
font-weight:400;
border-width:1px;
// outline-color:transparent;
outline-width:3px;
max-width:400px;
width:100%;
margin-top:10px;
 box-shadow: inset 0 0 0 9999px var(--overlay,transparent),inset 0 0 0 var(--border-width,1px) var(--border-color,var(--background)),0 0 0 var(--outline-width,0) var(--outline-color,var(--c-grey));


 &:active{
     border-width:1px;
     outline-color:black;
 }
`

const Button = styled.button`
margin-top:12px;
width:100%;
padding:15px 15px;
background:#19191b;
border-radius:15px;
color:white;
outline:none;
border:none;
cursor:pointer;
max-width:400px;




&:disabled{
    opacity:1;
    color:hsla(0,0%,100%,0.5);
    cursor:not-allowed;
}

`

export default function Login(): JSX.Element {
    return (

        <Container>
            <Head title='Login - Dona' />
            <Link href='/' passHref={true}>
                <a>

                    <Logo />
                </a>
            </Link>
            <FormWrapper>
                <FormHeader>Log in</FormHeader>
                <Small>Sign in if you already have account</Small>

                <form action="/">
                    <div>
                        <Input type="email" placeholder='Email' />
                        <div>The email field is required</div>
                    </div>
                    <div>
                        <Input type="password" placeholder='Password' />
                        <div>The passoword field is required</div>
                    </div>
                    <Button type='submit'>Sign in</Button>
                </form>
            </FormWrapper>
        </Container>


    )
}
