import React, { useState } from 'react'

import * as S from './Accordion.styles'

interface IAccordionProps {
  title: string
  text: string
}

export const Accordion = ({ title, text }: IAccordionProps) => {
  const [showText, setShowText] = useState(false)

  const buttonText = showText ? '-' : '+'

  return (
    <>
      <S.Box>
        <span>{title}</span>
        <button
          type="button"
          onClick={() => {
            setShowText((prevShowText) => !prevShowText)
          }}
        >
          {buttonText}
        </button>
      </S.Box>
      {showText && <p>{text}</p>}
    </>
  )
}
