import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledTr,
  StyledButton,
  StyledTableContainer,
} from "./PeopleTable.styled";
import { PersonInfo, PersonInfoFullNames } from "../../types";
import { deletePerson, getAllPeople } from "../../services/api";

const PeopleTable = () => {
  const [peopeList, setPeopleList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getAllPeople();

      const peopleListWithFullNames = data.map((person: PersonInfo) => {
        // Find personOne and personTwo objects based on personIdOne
        const firstParent = data.find(
          (p: PersonInfo) => p.id === person.firstparent_id
        );
        const secondtParent = data.find(
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
      });

      setPeopleList(peopleListWithFullNames); // Set fetched data to state
    };

    fetchPeople();
  }, []);

  const handleTableRowClick = (personId: number) => {
    navigate(`/my-users/${personId}`);
  };

  const deleteHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
    personId: number
  ) => {
    e.stopPropagation();
    const response = await deletePerson(personId);
    console.log(response);
    // TODO Find a way do set this off on promise fulfilled
    //? Possible solution?
    if (response?.status === 200)
      setPeopleList((prevList) =>
        prevList.filter((item: PersonInfoFullNames) => item.id !== personId)
      );
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
