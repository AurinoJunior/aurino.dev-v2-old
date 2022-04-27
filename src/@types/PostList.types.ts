export type TPostItem = {
  id: string
  publishedAt: string
  slug: string
  title: string
  metaDescription: string
}

export interface IPostList {
  posts: TPostItem[]
}
