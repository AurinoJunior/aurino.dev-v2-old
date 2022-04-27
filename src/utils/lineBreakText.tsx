import { Fragment } from 'react'

export function lineBreakText(text: string) {
  return text.split('\n').map((phrase, index) => {
    if (index === 0) return <Fragment key={index}>{phrase}</Fragment>
    return (
      <Fragment key={index}>
        <br />
        {phrase}
      </Fragment>
    )
  })
}
