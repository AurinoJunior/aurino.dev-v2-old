export type TNotFound = {
  title: string
  description: string
  meta: {
    title: string
  }
  ctas: Array<{
    text: string
    link: string
    variation: 'primary' | 'secondary' | 'white' | 'clean'
  }>
}
