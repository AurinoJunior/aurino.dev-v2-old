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
        {/* <PostQuoteDate>{formatDistanceDate(post.publishedAt)}</PostQuoteDate> */}
        {/* <p>{`${post.readingTime} min de leitura.`}</p> */}
      </PostHeadContent>
      {/* <PostSetInnerHtml
        dangerouslySetInnerHTML={{
          __html: post.html || ''
        }}
      /> */}
    </PostBox>
  )
}
