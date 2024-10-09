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
import { toast } from "react-toastify";

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
        toast.success("User deleted", {
          position: "top-center",
        });
        setPeopleList((prevList) =>
          prevList.filter((item: PersonInfoFullNames) => item.id !== personId)
        );
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
