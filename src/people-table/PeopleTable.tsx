import { useEffect, useState } from "react";
import { StyledTable, StyledTh, StyledTd, StyledTr} from './PeopleTable.styled';

type Person = {
    id: number;
    firstname: string;
    lastname: string;
}

const PeopleTable = () => {

    const [ peopeList, setPeopleList ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/person', {
                method: 'GET',
                credentials: 'include', // include cookies in the request
            });
            // console.log(response.text());
            const data = await response.json();

            setPeopleList(data);
        }

        fetchData();
    }, []);

    return (
        <StyledTable>
        <thead>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>Firstname</StyledTh>
            <StyledTh>Lastname</StyledTh>
          </tr>
        </thead>
        <tbody>
            {peopeList.map((person: Person) => 
                <StyledTr key={person.id}>
                    <StyledTd>{person.id}</StyledTd>
                    <StyledTd>{person.firstname}</StyledTd>
                    <StyledTd>{person.lastname}</StyledTd>
                </StyledTr>)
            }
        </tbody>
      </StyledTable>
    );

}

export default PeopleTable;