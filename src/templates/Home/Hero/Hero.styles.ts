import styled from "styled-components";

import { primary } from "../../../styles/Colors";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: -5rem;
  height: 270px;

  z-index: 1;

  .hero__context {
    font-weight: 600;
    font-size: 16px;
  }

  .hero__description {
    width: 70%;
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

  border-right: solid 2px ${primary};
  white-space: nowrap;
  overflow: hidden;

  animation: blinkCursor 500ms infinite normal,
    typing 3s steps(30) infinite alternate both;

  @keyframes blinkCursor {
    from {
      border-right-color: transparent;
    }

    to {
      border-right-color: ${primary};
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 55%;
    }
  }
`;
