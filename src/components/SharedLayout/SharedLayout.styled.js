import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: orange;
  }
`;
