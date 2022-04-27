import {
  PostBox,
  PostHeadContent,
  PostQuoteDate,
  PostSetInnerHtml,
  PostTitle
} from './Post.styles'

import { formatDistanceDate } from '../../utils/formatDistanceDate'
import { TPostItem } from '../../@types/PostList.types'

interface IPostProps {
  post: TPostItem
}

export const Post = ({ post }: IPostProps) => {
  return (
    <PostBox>
      <PostTitle>{post.title}</PostTitle>
      <PostHeadContent>
        <PostQuoteDate>{formatDistanceDate(post.publishedAt)}</PostQuoteDate>
        <p>{`${post.readingTime} min de leitura.`}</p>
      </PostHeadContent>
      <PostSetInnerHtml
        dangerouslySetInnerHTML={{
          __html: post.html || ''
        }}
      />
    </PostBox>
  )
}
