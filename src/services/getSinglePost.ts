import { IPost } from '../@types/posts'

import { api } from '../lib/axios'

export async function getSinglePost(slug: string) {
  try {
    const response = await api.get<IPost>(`/contents/aurigod/${slug}`)
    const post = response.data

    if (!post) return null

    return post
  } catch (error) {
    console.error(error.message)
    return null
  }
}
