import { PersonInfo } from "../../people-table/PeopleTable";
import { PersonItem, SideMenu, Title } from "./PeopleList.styled";

interface PeopleListProps {
  people: PersonInfo[];
  onSelectPerson: (person: PersonInfo) => void;
}

const PeopleList = ({ people, onSelectPerson }: PeopleListProps) => {

  return (
    <SideMenu>
      <Title>People List</Title>
      {people.map((person: PersonInfo) => (
        <PersonItem key={person.id} onClick={() => onSelectPerson(person)}>
          {person.firstname} {person.lastname}
        </PersonItem>
      ))}
    </SideMenu>
  );
}

export default PeopleList;