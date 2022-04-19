import React, { ReactNode } from "react";

interface IParagraphProps {
  children: string | ReactNode;
}

export const Paragraph = ({ children }: IParagraphProps) => {
  return <p>{children}</p>;
};
