import { PersonInfo } from "../../people-table/PeopleTable";
import { PersonItem, SideMenu } from "./PeopleList.styled";

interface PeopleListProps {
  people: PersonInfo[];
  onSelectPerson: (person: PersonInfo) => void;
}

const PeopleList = ({ people, onSelectPerson }: PeopleListProps) => {

  return (
    <SideMenu>
      <h3>People List</h3>
      {people.map((person: PersonInfo) => (
        <PersonItem key={person.id} onClick={() => onSelectPerson(person)}>
          {person.firstname} {person.lastname}
        </PersonItem>
      ))}
    </SideMenu>
  );
}

export default PeopleList;