import { PersonInfo } from '../people-table/PeopleTable';
import { DropdownWrapper, StyledOption, StyledSelect } from './Dropdown.styled';


interface DropdownProps {
    options: PersonInfo[];
    selectedOption: number;
    setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
}

// Dropdown component
const Dropdown = ({ options, selectedOption, setSelectedOption }: DropdownProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(Number(e.target.value));
  };

  return (
    <DropdownWrapper>
      <StyledSelect value={selectedOption} onChange={handleChange}>
        <StyledOption value="">Select an option</StyledOption>
        {options.map((option: PersonInfo) => (
          <StyledOption key={option.id} value={option.id}>
            {option.firstname + ' ' + option.lastname}
          </StyledOption>
        ))}
      </StyledSelect>
    </DropdownWrapper>
  );
};

export default Dropdown;