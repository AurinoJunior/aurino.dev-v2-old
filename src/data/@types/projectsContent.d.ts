export type TProjects = {
  name: string
  description: string
  image: {
    src: string
    alt: string
  }
  ctas: {
    text: string
    link: string
    variation: 'primary' | 'secondary' | 'white' | 'clean'
  }[]
}[]
