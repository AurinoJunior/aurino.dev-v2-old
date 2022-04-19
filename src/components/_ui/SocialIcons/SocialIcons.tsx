import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Content } from "./SocialIcons.styles";

interface ISocialIconsProps {
  size?: number;
}

export const SocialIcons = ({ size = 35 }: ISocialIconsProps) => {
  return (
    <Content>
      <a
        target="_blank"
        href="https://github.com/AurinoJunior"
        rel="noreferrer"
      >
        <FaGithub size={size} />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/aurigod97/"
        rel="noreferrer"
      >
        <FaInstagram size={size} />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/aurino-junior-7718a4158/"
        rel="noreferrer"
      >
        <FaLinkedin size={size} />
      </a>
    </Content>
  );
};
