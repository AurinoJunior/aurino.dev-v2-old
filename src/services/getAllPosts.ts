import { IPost } from '../@types/posts'

import { api } from '../lib/axios'
import { parseResponsePosts } from '../utils/parseResponsePosts'

export async function getAllPosts() {
  try {
    const response = await api.get<IPost[]>('/contents/aurigod')
    const allPosts = parseResponsePosts(response.data)

    if (allPosts.length === 0) return null

    return allPosts
  } catch (error) {
    console.error(error.message)
    return null
  }
}
