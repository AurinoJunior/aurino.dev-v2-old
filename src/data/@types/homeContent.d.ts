export type THeroType = {
  title: string
  description: string
  phraseAnimation: string[]
  img: {
    alt: string
  }
  ctas: Array<{
    link: string
    text: string
    variation: 'primary' | 'secondary' | 'white' | 'clean'
  }>
}
