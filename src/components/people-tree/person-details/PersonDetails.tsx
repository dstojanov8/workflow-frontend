import { PersonInfo } from "../../people-table/PeopleTable";
import { DetailItem, DetailsContainer, Title } from "./PersonDetails.styled";

interface PersonDetailsProps {
  person: PersonInfo;
}

const PersonDetails = ({ person }: PersonDetailsProps) => {
  return (
    <DetailsContainer>
      <Title>Person Details</Title>
      <DetailItem>ID: {person.id}</DetailItem>
      <DetailItem>First Name: {person.firstname}</DetailItem>
      <DetailItem>Last Name: {person.lastname}</DetailItem>
      <DetailItem>First Parent ID: {person.firstparent_id ?? 'N/A'}</DetailItem>
      <DetailItem>Second Parent ID: {person.secondparent_id ?? 'N/A'}</DetailItem>
    </DetailsContainer>
  );
}

export default PersonDetails;
