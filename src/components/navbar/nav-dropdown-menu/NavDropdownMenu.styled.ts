import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    color: #fff;
  }
`;