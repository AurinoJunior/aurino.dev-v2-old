import { PostBox, PostSetInnerHtml, PostTitle } from './Post.styles'

import { formatDistanceDate } from '../../utils/formatDistanceDate'
import { TPostItem } from '../../@types/PostList.types'

interface IPostProps {
  post: TPostItem
}

export const Post = ({ post }: IPostProps) => {
  return (
    <PostBox>
      <PostTitle>{post.title}</PostTitle>
      <div>
        <p>{formatDistanceDate(post.publishedAt)}</p>
        <p>{`${post.readingTime} min de leitura`}</p>
      </div>
      <PostSetInnerHtml
        dangerouslySetInnerHTML={{
          __html: post.html || ''
        }}
      />
    </PostBox>
  )
}
