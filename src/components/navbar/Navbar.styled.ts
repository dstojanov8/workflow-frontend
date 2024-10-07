import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  height: 3vh;
  padding: 1rem 2rem;
  color: white;
  font-family: 'Arial', sans-serif;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
  margin: 0px 5px 0px 5px;
  padding: 3px 0px 3px 0px;
  &:hover {
    color: #ff6347; // tomato color on hover
  }
`;

export const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;

export const MenuWrapper = styled.div`
  margin: 0px 5px 0px 5px;
  position: relative;
  padding: 3px 0px 3px 0px;
`;

export const StyledButton = styled.button`
  background: #333;
  box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.05);
  color: #fff;
  font-size: 1rem;
  border: none;
  padding: unset;
  cursor: pointer;

  &:hover {
    color: #ff6347; // tomato color on hover
  }
`;

export const MenuContainer = styled.div`
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.05);
  transition: all linear 0.3s;
  position: absolute;
  z-index: 100;
  border-style: solid;
  border-width: 1px;
  border-color: #333;
  margin-top: 3px;
`;

export const StuledUl = styled.ul`
  list-style: none;
  padding: unset;
  margin: unset;
`;

export const StyledLi = styled.li`
  padding: 10px 15px 10px 15px;
  transition: all linear 0.3s;
  &:hover {
    background: gray;
    cursor: pointer;
    color: #fff;
  }
`;
