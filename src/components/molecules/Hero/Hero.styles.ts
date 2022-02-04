import styled from "styled-components";

import { primary } from "../../../styles/Colors";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-top: -5rem;
  height: 260px;

  z-index: 1;

  .hero__context {
    font-weight: 600;
    font-size: 16px;
  }

  .hero__title {
    font-size: 3rem;
    font-weight: 700;

    background: linear-gradient(90deg, white, ${primary});
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  .hero__description {
    width: 70%;
  }
`;
