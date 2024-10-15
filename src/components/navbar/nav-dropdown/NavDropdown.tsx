import { useState } from "react";
import { MenuWrapper, StyledButton } from "./NavDropdown.styled";
import NavDropdownMenu from "../nav-dropdown-menu/NavDropdownMenu";

interface NavDropdownProps {
  placeholderName: string;
  routes: {
    name: string;
    route: string;
    onClick?: () => void;
  }[];
}

const NavDropdown = ({ placeholderName, routes }: NavDropdownProps) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <MenuWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledButton>{placeholderName}</StyledButton>
      {isDropdownVisible && <NavDropdownMenu routes={routes} />}
    </MenuWrapper>
  );
};

export default NavDropdown;
