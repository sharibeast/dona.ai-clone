import React, { useState, useEffect } from 'react'
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

const Error = styled(Small)`
color:#EE7474;
`

const Input = styled.input`
border-radius:15px;
padding:16px 16px;
font-size:14px;
font-weight:400;
border-width:1px;
outline-width:3px;
max-width:400px;
width:100%;
margin-top:10px;
 box-shadow: inset 0 0 0 9999px var(--overlay,transparent),inset 0 0 0 var(--border-width,1px) var(--border-color,var(--background)),0 0 0 var(--outline-width,0) var(--outline-color,var(--c-grey));

 &:active{
     border-width:1px;
     border-color:#616870;
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

interface FormState {
    email?: string;
    password?: string;
}
export default function Login(): JSX.Element {
    const [state, setState] = useState<FormState>({ email: '', password: '' })
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormState>({})


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value })
        console.log('hey babe this is our state ', state)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors(validate(state))
        setIsSubmit(true);
    }

    const validate = (values: FormState) => {
        const erorrObject: FormState = {};
        if (!values.email) {
            erorrObject.email = 'The email field is required'
        }
        if (!values.password) {
            erorrObject.password = 'The password field is required'
        }
        return erorrObject;
    }


    useEffect(() => {
        console.log('here is your errors', errors);
    })


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

                <form onSubmit={handleSubmit}>
                    <div>
                        <Input type="email" onChange={handleChange} value={state.email} name='email' placeholder='Email' />
                        <Error>
                            {errors.email}
                        </Error>
                    </div>
                    <div>
                        <Input type="password" onChange={handleChange} value={state.password} name='password' placeholder='Password' />
                        <Error>{errors.password}</Error>
                    </div>
                    <Button type='submit'>Sign in</Button>
                </form>
            </FormWrapper>

        </Container>


    )
}
