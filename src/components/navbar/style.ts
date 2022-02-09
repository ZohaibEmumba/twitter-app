import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: white;
  padding: 0px 20px;
  border: 1px solid green;
`;

export const NavLink = styled(Link)`
  padding: 29px 20px;
  font-size: 20px;
  color: gray;
  text-decoration: none;
  font-weight:800;
`;
export const Img = styled.img`
  height: 30px;
`;

export const Button = styled.button`
  padding: 15px 25px;
  border-radius: 30px;
  background-color: deepskyblue;
  border: none;
  .btn {
    text-decoration: none;
    font-size: 20px;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
