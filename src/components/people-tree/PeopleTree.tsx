import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import PeopleList from "./people-list/PeopleList";
import { StyledContainer } from "./PeopleTree.styled";
import axios, { AxiosError } from "axios";
import Kanban from "./work-flow/Kanban";
import { PersonInfo } from "../../types";

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

  return (
    <StyledContainer>
      <PeopleList people={people} onSelectPerson={setSelectedPerson} />
      {selectedPerson && <Kanban />}
    </StyledContainer>
  );
};

export default PeopleTree;
