import styled from "styled-components";
import {
  gray_500,
  gray_800,
  gray_900,
  secondary,
  tablet_size,
  white,
} from "../../../styles/Tokens";

export const Box = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: ${gray_900};

  border-bottom: solid 1px ${gray_800};

  position: fixed;
  left: 0;
  top: 0;

  z-index: 2;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: ${tablet_size}) {
    padding: 0;
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;
  }

  li {
    color: ${gray_500};
    padding: 1rem 0;
    cursor: pointer;

    &:hover {
      filter: brightness(0.4);
    }

    &.active {
      color: ${white};
      font-weight: 600;

      border-bottom: 2px solid ${secondary};

      &:hover {
        filter: none;
      }
    }
  }

  @media (max-width: ${tablet_size}) {
    display: none;
  }
`;
