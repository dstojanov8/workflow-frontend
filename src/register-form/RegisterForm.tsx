import React from 'react';
import { StyledForm, StyledInput, StyledButton, StyledAlert, StyledLabel } from './RegisterForm.styled';

function RegisterForm() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('mitadima@gmail.com');
    const [firstname, setFirstname] = React.useState('Dimitrije');
    const [lastname, setLastname] = React.useState('Stojanov');
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');
    const [passwordInvalid, setPasswordInvalid] = React.useState(false);

    const register = async () => {
        const response = await fetch("http://127.0.0.1:8000/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                username,
                password,
                firstname,
                lastname,
            }),
            credentials: 'include', // include cookies in the request
        });
        const data = await response.json();
        if (data.success) {
            console.log('Registration successful');
        } else {
            console.error(data.error);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // validate password and set passwordInvalid state accordingly
        if (password.length < 8 || password !== rePassword) {
            setPasswordInvalid(true);
        } else {
            setPasswordInvalid(false);
            register();
        }
    }

    const usernameEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const emailEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    
    const firstnameEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(e.target.value);
    }
    
    const lastnameEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value);
    }

    const passwordEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const rePasswordEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRePassword(e.target.value);
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>Username:</StyledLabel>
            <StyledInput type="text" value={username} onChange={e => usernameEntered(e)}/>

            <StyledLabel>Email:</StyledLabel>
            <StyledInput type="text" value={email} onChange={e => emailEntered(e)}/>

            <StyledLabel>Firstnme:</StyledLabel>
            <StyledInput type="text" value={firstname} onChange={e => firstnameEntered(e)}/>

            <StyledLabel>Lastname:</StyledLabel>
            <StyledInput type="text" value={lastname} onChange={e => lastnameEntered(e)}/>


            <StyledLabel $invalid={passwordInvalid}>Password:</StyledLabel>
            <StyledInput type="password" value={password} onChange={(e) => passwordEntered(e)} />
            <StyledLabel $invalid={passwordInvalid}>Repeat Password:</StyledLabel>
            <StyledInput type="password" value={rePassword} onChange={(e) => rePasswordEntered(e)} />
            {passwordInvalid && <StyledAlert>Password is invalid or passwords don't match.</StyledAlert>}
            <StyledButton type="submit" disabled={!username || !password || !rePassword}>Register</StyledButton>
        </StyledForm>
    )
}

export default RegisterForm;