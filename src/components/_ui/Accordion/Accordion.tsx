import React, { useState } from "react";

import { Box } from "./Accordion.styles";

interface IAccordionProps {
  title: string;
  text: string;
}

export const Accordion = ({ title, text }: IAccordionProps) => {
  const [showText, setShowText] = useState(false);

  const buttonText = showText ? "-" : "+";

  return (
    <>
      <Box>
        <span>{title}</span>
        <button
          type="button"
          onClick={() => setShowText((prevShowText) => !prevShowText)}
        >
          {buttonText}
        </button>
      </Box>
      {showText && <p>{text}</p>}
    </>
  );
};
