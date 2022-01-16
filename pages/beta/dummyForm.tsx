
import React, { useState, useRef, useEffect } from 'react'

interface FormState {
    username?: string;
    email?: string;
    password?: string;
}
export default function DummyForm() {
    const [state, setState] = useState<FormState>({ username: '', email: '', password: '?' });
    const [errors, setErrors] = useState<FormState>({});
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value })
        console.log(state);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrors(validate(state))
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(state);
        }

    }, [errors, isSubmit, state])

    const validate = (values: FormState) => {
        const errorsObj: FormState = {};
        const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

        if (!values.username) {
            errorsObj.username = 'username required'
        }
        if (!values.email) {
            errorsObj.email = 'email is required'
        }
        if (!values.password) {
            errorsObj.password = 'password is required'
        }

        return errorsObj

    }
    return (
        <div>
            <h1>this is dummy form</h1>
            <pre>{JSON.stringify(state)}</pre>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" name='username' value={state.username} onChange={handleChange} placeholder='username' /> <br />
                <p>{errors.username}</p>
                <label htmlFor="email"  >email</label>

                <input type="email" name='email' value={state.email} onChange={handleChange} placeholder='email' /> <br />
                <p>{errors.email}</p>
                <label htmlFor="passoword">password</label>
                <input type="password" value={state.password} onChange={handleChange} placeholder='password' name='password' /><br />
                {errors.password}
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
