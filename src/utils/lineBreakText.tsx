export function lineBreakText(text: string) {
  return text.split('\n').map((phrase, index) => {
    if (index === 0) return phrase
    return (
      <>
        <br />
        {phrase}
      </>
    )
  })
}
