import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Content } from "./SocialIcons.styles";

interface ISocialIconsProps {
  size?: number;
}

export const SocialIcons = ({ size = 35 }: ISocialIconsProps) => {
  return (
    <Content>
      <FaGithub size={size} />
      <FaInstagram size={size} />
      <FaLinkedin size={size} />
    </Content>
  );
};
