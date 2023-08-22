import { useEffect } from 'react'
import { hljsInit } from '../../../lib/hljs'
import { formatDistanceDate } from '../../../utils/formartDistanceDate'

import { IPost } from '../../../@types/posts'

import {
  PostBox,
  PostHeadContent,
  PostQuoteDate,
  PostSetInnerHtml,
  PostTitle
} from './Post.styles'
import { Link } from '../../_ui'

interface IPostProps {
  post: IPost
}

export const Post = ({ post }: IPostProps) => {
  useEffect(() => {
    hljsInit()
  }, [])

  return (
    <PostBox>
      <PostTitle>{post.title}</PostTitle>
      <PostHeadContent>
        <PostQuoteDate>{formatDistanceDate(post.created_at)}</PostQuoteDate>
        <Link
          className="no-margins"
          href={`https://www.tabnews.com.br/aurigod/${post.slug}`}
          target="_blank"
          variation="clean"
        >
          Ver post no tabnews
        </Link>
      </PostHeadContent>
      <PostSetInnerHtml
        dangerouslySetInnerHTML={{
          __html: post.html || ''
        }}
      />
    </PostBox>
  )
}
