import { IPost } from '../../../@types/posts'
import { formatDistanceDate } from '../../../utils/formartDistanceDate'

import {
  PostBox,
  PostHeadContent,
  PostQuoteDate,
  PostSetInnerHtml,
  PostTitle
} from './Post.styles'

interface IPostProps {
  post: IPost
}

export const Post = ({ post }: IPostProps) => {
  return (
    <PostBox>
      <PostTitle>{post.title}</PostTitle>
      <PostHeadContent>
        <PostQuoteDate>{formatDistanceDate(post.created_at)}</PostQuoteDate>
        <a
          href={`https://www.tabnews.com.br/aurigod/${post.slug}`}
          target="_blank"
        >
          Ver post no tabnews
        </a>
      </PostHeadContent>
      <PostSetInnerHtml
        dangerouslySetInnerHTML={{
          __html: post.html || ''
        }}
      />
    </PostBox>
  )
}
