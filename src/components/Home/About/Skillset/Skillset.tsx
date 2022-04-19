import React from 'react'

import { Accordion } from '../../../_ui'

import { SkillsetTitle, SkillsetContent } from './Skillset.styles'

export const Skillset = () => {
  return (
    <div>
      <SkillsetTitle>Habilidades</SkillsetTitle>
      <SkillsetContent>
        <Accordion
          title="Front-end"
          text="HTML5, CSS, Javascript (ReactJs, NextJS), Typescript."
        />
        <Accordion title="Back-end" text="NodeJs." />
        <Accordion title="Infraestrutura" text="Docker, AWS, Linux." />
        <Accordion title="Interface" text="Photoshop, Figma." />
        <Accordion title="Projeto" text="Scrum, Kanban." />
      </SkillsetContent>
    </div>
  )
}
