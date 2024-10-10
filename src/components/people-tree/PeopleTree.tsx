import { useEffect, useState } from "react";

import PeopleList from "./people-list/PeopleList";
import { StyledContainer } from "./PeopleTree.styled";
import Kanban from "./work-flow/Kanban";
import { PersonInfo } from "../../types";
import { getAllPeople } from "../../services/api";

const PeopleTree = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState<PersonInfo | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getAllPeople();
      setPeople(data); // Set fetched data to state
    };

    fetchPeople();
  }, []);

  return (
    <StyledContainer>
      <PeopleList people={people} onSelectPerson={setSelectedPerson} />
      {selectedPerson && <Kanban />}
    </StyledContainer>
  );
};

export default PeopleTree;
