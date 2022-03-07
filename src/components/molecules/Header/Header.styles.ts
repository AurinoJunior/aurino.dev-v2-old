import styled from "styled-components";
import { gray_800, gray_900 } from "../../../styles/Tokens";

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
`;
