import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledLabel,
} from "./AddPeople.styled";
import Dropdown from "../dropdown/Dropdown";
import { toast } from "react-toastify";

const AddPeople = () => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");

  const [parentOne, setParentOne] = React.useState(0);
  const [parentTwo, setParentTwo] = React.useState(0);
  const [peopeList, setPeopleList] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // include cookies in the request
        };
        const response = await axios.get(
          "http://127.0.0.1:8000/person",
          config
        );

        setPeopleList(response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.data) {
          const errorData = axiosError.response.data as { message: string };
          toast.error(errorData.message || "An error occurred", {
            position: "top-center",
          });
        } else {
          toast.error(axiosError.message || "An error occurred", {
            position: "top-center",
          });
        }
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/person",
        {
          firstname: firstname,
          lastname: lastname,
          firstparent_id: parentOne || null,
          secondparent_id: parentTwo || null,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Replace with your actual token
          },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        toast.success("User added", {
          position: "top-center",
        });
        navigate("/my-users");
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.data) {
        const errorData = axiosError.response.data as { message: string };
        toast.error(errorData.message || "An error occurred", {
          position: "top-center",
        });
      } else {
        toast.error(axiosError.message || "An error occurred", {
          position: "top-center",
        });
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
