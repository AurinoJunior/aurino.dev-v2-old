import styled from "styled-components";

import { primary, tablet_size } from "../../../styles/Tokens";

export const HeroBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 8rem;

  @media (min-width: ${tablet_size}) {
    flex-direction: row-reverse;
    justify-content: space-evenly;

    height: 70vh;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: -3rem;
  gap: 1.5rem;

  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;

  background: linear-gradient(90deg, white, ${primary});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const HeroDescription = styled.h2`
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
