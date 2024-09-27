import { NavbarContainer, Logo, NavLinks, NavLink } from './Navbar.styled';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>MyApp</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/my-users">My Users</NavLink>
        <NavLink to="/add-users">Add User</NavLink>
        <NavLink to="/login">Logout</NavLink>
        <NavLink to="/register">Register</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;