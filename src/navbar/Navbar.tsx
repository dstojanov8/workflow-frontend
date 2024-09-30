import { NavbarContainer, Logo, NavLinks, NavLink } from './Navbar.styled';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>MyApp</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/my-users">My Users</NavLink>
        <NavLink to="/add-user">Add User</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;