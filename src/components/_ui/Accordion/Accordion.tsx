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
        <label>
          {title}
          <input
            type="button"
            value={buttonText}
            onClick={() => {
              setShowText((prevShowText) => !prevShowText)
            }}
          />
        </label>
      </S.Box>
      {showText && (
        <S.AnimationDescription $activate={showText}>
          {text}
        </S.AnimationDescription>
      )}
    </>
  )
}
