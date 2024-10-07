import { useEffect, useState } from "react";
import PeopleList from "./people-list/PeopleList";
import { StyledContainer } from "./PeopleTree.styled";
import axios from "axios";
import { PersonInfo } from "../people-table/PeopleTable";
import Kanban from "./work-flow/Kanban";

const PeopleTree = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState<PersonInfo | null>(null);

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

        setPeople(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledContainer>
      <PeopleList people={people} onSelectPerson={setSelectedPerson} />
      {selectedPerson && <Kanban />}
    </StyledContainer>
  );
};

export default PeopleTree;
