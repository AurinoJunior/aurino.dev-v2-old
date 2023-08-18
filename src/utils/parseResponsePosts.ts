import { IPost } from '../@types/posts'

export function parseResponsePosts(responseAllPosts: IPost[]): IPost[] {
  const parsedAllPosts = responseAllPosts.filter(
    (post) => !post.parent_id && !post.title.includes('[Dúvida]')
  )

  return parsedAllPosts
}
