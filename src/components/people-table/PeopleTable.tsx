import { useEffect, useState } from "react";
import axios from "axios";

import { StyledTable, StyledTh, StyledTd, StyledTr} from './PeopleTable.styled';


type Person = {
    id: number;
    firstname: string;
    lastname: string;
}

const PeopleTable = () => {

    const [ peopeList, setPeopleList ] = useState([])

    
    useEffect(() => {
        const token = localStorage.getItem('userToken');
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                    withCredentials: true, // include cookies in the request
                }
                const response = await axios.get('http://127.0.0.1:8000/person', config);
    
                setPeopleList(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
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