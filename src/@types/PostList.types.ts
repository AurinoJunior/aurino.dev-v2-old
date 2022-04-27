export type TPostItem = {
  id: string
  publishedAt: string
  title: string
  metaDescription: string
}

export interface IPostList {
  posts: TPostItem[]
}
