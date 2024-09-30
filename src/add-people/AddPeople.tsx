import React from "react";
import {
    StyledForm,
    StyledInput,
    StyledButton,
    StyledLabel,
  } from "./AddPeople.styled";

const AddPeople = () => {

  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/person', {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            firstparent_id: null,
            secondparent_id: null
          }),
        });
        
        if (response.ok) {
          console.log("User added!");
        } else {
          console.error('error');
        }
  };

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