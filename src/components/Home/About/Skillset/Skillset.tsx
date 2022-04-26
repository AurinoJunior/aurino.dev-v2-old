import React from 'react'

import { Accordion } from '../../../_ui'

import { SkillsetTitle, SkillsetContent } from './Skillset.styles'

interface ISkillsetProps {
  data: {
    title: string
    contents: {
      title: string
      text: string
    }[]
  }
}

export const Skillset = ({ data }: ISkillsetProps) => {
  const { title, contents } = data
  return (
    <div>
      <SkillsetTitle>{title}</SkillsetTitle>
      <SkillsetContent>
        {contents.map((skill, index) => (
          <Accordion key={index} title={skill.title} text={skill.text} />
        ))}
      </SkillsetContent>
    </div>
  )
}
