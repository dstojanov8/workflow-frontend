import React from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

import {
    StyledForm,
    StyledInput,
    StyledButton,
    StyledLabel,
  } from "./AddPeople.styled";

  
const AddPeople = () => {

  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem('userToken');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            'http://127.0.0.1:8000/person', 
            {
                firstname: firstname,
                lastname: lastname,
                firstparent_id: null,
                secondparent_id: null
            }, 
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Replace with your actual token
                },
                withCredentials: true
            }
        );

        if (response.status === 200) {
            console.log("User added!", response.data);
            navigate('/my-users');
        }
    } catch (error) {
      const axiosError = error as AxiosError; // Type assertion for the error
      if (axiosError.response) {
          // The request was made and the server responded with a status code
          console.error('Error:', axiosError.response.data);
      } else if (axiosError.request) {
          // The request was made but no response was received
          console.error('Error:', axiosError.request);
      } else {
          // Something happened in setting up the request that triggered an error
          console.error('Error:', axiosError.message);
      }
    }
};

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const response = await fetch('http://127.0.0.1:8000/person', {
  //       method: "POST",
  //       credentials: 'include',
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //           firstname: firstname,
  //           lastname: lastname,
  //           firstparent_id: null,
  //           secondparent_id: null
  //         }),
  //       });
        
  //       if (response.ok) {
  //         console.log("User added!", response.text());
  //         navigate('/my-users');
  //       } else {
  //         console.error('error');
  //       }
  // };

  const firstnameEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };

  const lastaneEntered = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

    return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>Firstname:</StyledLabel>
      <StyledInput
        type="text"
        value={firstname}
        onChange={(e) => firstnameEntered(e)}
      />
      <StyledLabel>Lastname:</StyledLabel>
      <StyledInput
        type="text"
        value={lastname}
        onChange={(e) => lastaneEntered(e)}
      />
      <StyledButton type="submit" disabled={!firstname || !lastname}>
        Add User
      </StyledButton>
    </StyledForm>
    )
}

export default AddPeople;