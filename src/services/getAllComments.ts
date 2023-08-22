import { IComment } from '../@types/posts'

import { api } from '../lib/axios'
import { customRemarkHTML } from '../lib/remark'

export async function getAllComments(slug: string) {
  try {
    const response = await api.get<IComment[]>(
      `/contents/aurigod/${slug}/children`
    )
    const allComments = response.data.map((comment) => {
      customRemarkHTML(comment.body).then((result) => {
        comment.html = result
      })
      return comment
    })

    return allComments
  } catch (error) {
    console.error(error.message)
    return null
  }
}
