import styled from "styled-components";

import { primary, tablet_size } from "../../../styles/Tokens";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 8rem;

  @media (min-width: ${tablet_size}) {
    flex-direction: row-reverse;
    justify-content: space-evenly;

    height: 70vh;
    margin-top: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: -3rem;
  gap: 1.5rem;

  z-index: 1;

  .hero__context {
    font-weight: 600;
    font-size: 16px;
  }

  .hero__description {
    width: 70%;
  }

  @media (min-width: ${tablet_size}) {
    margin-top: 0;

    .hero__description {
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  background: linear-gradient(90deg, white, ${primary});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const Subtitle = styled.h2`
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HeroAnimation = styled.span`
  display: inline-block;
  color: ${primary};

  white-space: nowrap;
  overflow: hidden;

  &:after {
    content: "|";
    margin-left: 0.25rem;
    color: ${primary};
    animation: blinkCursor 500ms infinite normal;
  }

  @keyframes blinkCursor {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
  }
`;
