import styled from "styled-components";
import { gray_800, secondary } from "../../../styles/Tokens";

export const Box = styled.div`
  width: 100%;
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    z-index: 3;
  }
`;

export const Nav = styled.nav`
  background-color: ${gray_800};

  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;

  z-index: 2;
`;

export const NavContent = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  list-style: none;

  font-size: 2rem;
  font-weight: 600;

  .active {
    color: ${secondary};
  }
`;
