import {
  MenuContainer,
  MenuLink,
  StuledUl,
  StyledLi,
} from "./NavDropdownMenu.styled";

interface NavDropdownMenuProps {
  routes: {
    name: string;
    route: string;
    onClick?: () => void;
  }[];
}

const NavDropdownMenu = ({ routes }: NavDropdownMenuProps) => {
  return (
    <MenuContainer className="dropdown-menu">
      <StuledUl>
        {routes.map((element) => (
          <StyledLi key={element.name}>
            <MenuLink to={element.route} onClick={element.onClick ?? undefined}>
              {element.name}
            </MenuLink>
          </StyledLi>
        ))}
      </StuledUl>
    </MenuContainer>
  );
};

export default NavDropdownMenu;
