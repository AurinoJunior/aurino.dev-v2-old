import React from "react";

import { Accordion } from "../../../components/atoms/Accordion/Accordion";

import { Title, Content } from "./Skillset.styles";

export const Skillset = () => {
  return (
    <>
      <Title>Skillset</Title>
      <Content>
        <Accordion
          title="Front-end"
          text="HTML5, CSS, Javascript (ReactJs, NextJS), Typescript."
        />
        <Accordion title="Back-end" text="NodeJs, PHP." />
        <Accordion title="Infraestrutura" text="Docker, AWS, Linux." />
        <Accordion title="Interface" text="Photoshop, Figma." />
        <Accordion title="Projeto" text="Scrum, Kanban." />
      </Content>
    </>
  );
};
