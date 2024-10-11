import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLabel,
} from "./LoginForm.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUserAsync } from "../../store/account/accountThunk";

function LoginForm() {
  const accountId = useAppSelector((state) => state.account.accountInfo?.id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordInvalid, setPasswordInvalid] = React.useState(false);

  useEffect(() => {
    if (accountId) navigate("/");
  }, [navigate, accountId]);

  // const login = async () => {
  //   const response = await fetch("http://127.0.0.1:8000/user/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       usernameOrEmail: username,
  //       password: password,
  //     }),
  //     credentials: 'include', // include cookies in the request
  //   });
  //   // console.log(response.text())
  //   const data = await response.json();
  //   if (data.success) {
  //     console.log("Login successful");
  //     dispatch(loginUser(data.user));
  //     navigate('/');
  //     // localStorage.setItem("user", JSON.stringify(data.user));
  //   } else {
  //     console.error(data.error);
  //   }
  // }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate password and set passwordInvalid state accordingly
    if (password.length < 8) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
      dispatch(loginUserAsync({ usernameOrEmail: username, password }));
      // login();
    }
  };

  const usernameEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const passwordEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Username:</StyledLabel>
      <StyledInput
        type="text"
        value={username}
        onChange={(e) => usernameEntered(e)}
      />
      <StyledLabel $invalid={passwordInvalid}>Password:</StyledLabel>
      <StyledInput
        type="password"
        value={password}
        onChange={(e) => passwordEntered(e)}
      />
      {passwordInvalid && <StyledAlert>Password is invalid.</StyledAlert>}
      <StyledButton type="submit" disabled={!username || !password}>
        Login
      </StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
