import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr,
  StyledButton,
  StyledTableContainer,
} from "./PeopleTable.styled";
import { useNavigate } from "react-router-dom";

export interface PersonInfo {
  id: number;
  firstname: string;
  lastname: string;
  firstparent_id: number | null;
  secondparent_id: number | null;
}

interface PersonInfoFullNames extends PersonInfo {
  firstParentFullName: string | null;
  secondtParentFullName: string | null;
}

const PeopleTable = () => {
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

        const peopleListWithFullNames = response.data.map(
          (person: PersonInfo) => {
            // Find personOne and personTwo objects based on personIdOne and personIdTwo
            const firstParent = response.data.find(
              (p: PersonInfo) => p.id === person.firstparent_id
            );
            const secondtParent = response.data.find(
              (p: PersonInfo) => p.id === person.secondparent_id
            );

            // Construct the new object with added full names
            return {
              ...person,
              firstParentFullName: firstParent
                ? `${firstParent.firstname} ${firstParent.lastname}`
                : null,
              secondtParentFullName: secondtParent
                ? `${secondtParent.firstname} ${secondtParent.lastname}`
                : null,
            };
          }
        );

        setPeopleList(peopleListWithFullNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTableRowClick = (personId: number) => {
    console.log(personId);
    navigate(`/my-users/${personId}`);
  };

  const deleteHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
    personId: number
  ) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/person/${personId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Replace with your actual token
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("User deleted!", response.data);
        setPeopleList((prevList) =>
          prevList.filter((item: PersonInfoFullNames) => item.id !== personId)
        );
      }
    } catch (error) {
      const axiosError = error as AxiosError; // Type assertion for the error
      if (axiosError.response) {
        // The request was made and the server responded with a status code
        console.error("Error:", axiosError.response.data);
      } else if (axiosError.request) {
        // The request was made but no response was received
        console.error("Error:", axiosError.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Error:", axiosError.message);
      }
    }
  };

  return (
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>Firstname</StyledTh>
            <StyledTh>Lastname</StyledTh>
            <StyledTh>First Parent</StyledTh>
            <StyledTh>Second Parent</StyledTh>
            <StyledTh></StyledTh>
          </tr>
        </thead>
        <tbody>
          {peopeList.map((person: PersonInfoFullNames) => (
            <StyledTr
              onClick={() => handleTableRowClick(person.id)}
              key={person.id}
            >
              <StyledTd>{person.id}</StyledTd>
              <StyledTd>{person.firstname}</StyledTd>
              <StyledTd>{person.lastname}</StyledTd>
              <StyledTd>{person.firstParentFullName || "Not stated"}</StyledTd>
              <StyledTd>
                {person.secondtParentFullName || "Not stated"}
              </StyledTd>
              <StyledTd>
                <StyledButton
                  type="submit"
                  onClick={(e) => deleteHandler(e, person.id)}
                >
                  Delete
                </StyledButton>
              </StyledTd>
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default PeopleTable;
