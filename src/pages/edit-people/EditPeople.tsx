import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLabel,
} from "./EditPeople.styled";
import Dropdown from "../../components/dropdown/Dropdown";
import { getAllPeople, getPerson, updatePerson } from "../../services/api";

const EditPeople = () => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");

  const [parentOne, setParentOne] = React.useState(0);
  const [parentTwo, setParentTwo] = React.useState(0);
  const [peopeList, setPeopleList] = useState([]);
  // const [ personData, setPersonData] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPeopleData = async () => {
      const data = await getAllPeople();
      setPeopleList(data); // Set fetched data to state
    };

    const fetchPersonData = async () => {
      const data = await getPerson(id);
      setFirstname(data[0].firstname);
      setLastname(data[0].lastname);
      setParentOne(data[0].firstparent_id || 0);
      setParentTwo(data[0].secondparent_id || 0);
    };

    fetchPersonData();
    fetchPeopleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await updatePerson(
      {
        firstname: firstname,
        lastname: lastname,
        firstparent_id: parentOne || null,
        secondparent_id: parentTwo || null,
      },
      id
    );
    // TODO Find a way do set this off on promise fulfilled
    //? Possible solution?
    if (response?.status === 200) navigate("/my-users");
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
        Update User
      </StyledButton>
    </StyledForm>
  );
};

export default EditPeople;
