import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLabel,
} from "./AddPeople.styled";
import Dropdown from "../dropdown/Dropdown";
import { addPerson, getAllPeople } from "../../services/api";

const AddPeople = () => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");

  const [parentOne, setParentOne] = React.useState(0);
  const [parentTwo, setParentTwo] = React.useState(0);
  const [peopeList, setPeopleList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getAllPeople();
      setPeopleList(data); // Set fetched data to state
    };

    fetchPeople();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await addPerson({
      firstname: firstname,
      lastname: lastname,
      firstparent_id: parentOne || null,
      secondparent_id: parentTwo || null,
    });
    console.log(response);
    // TODO Find a way do set this off on promise fulfilled
    //? Possible solution?
    if (response?.status === 201) navigate("/my-users");
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
      <StyledLabel>First Parent:</StyledLabel>
      <Dropdown
        options={peopeList}
        selectedOption={parentOne}
        setSelectedOption={setParentOne}
      />
      <StyledLabel>Second parent:</StyledLabel>
      <Dropdown
        options={peopeList}
        selectedOption={parentTwo}
        setSelectedOption={setParentTwo}
      />
      <StyledButton type="submit" disabled={!firstname || !lastname}>
        Add User
      </StyledButton>
    </StyledForm>
  );
};

export default AddPeople;
