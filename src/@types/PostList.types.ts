export type TPostItem = {
  id: string
  publishedAt: string
  slug: string
  title: string
  metaDescription: string
  html?: string
  readingTime: number
}

export interface IPostList {
  posts: TPostItem[]
}
