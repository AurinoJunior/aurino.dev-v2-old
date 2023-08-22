import { useEffect } from 'react'
import { hljsInit } from '../../../lib/hljs'
import { formatDistanceDate } from '../../../utils/formartDistanceDate'

import { IComment, IPost } from '../../../@types/posts'

import {
  PostBox,
  PostHeadContent,
  PostQuoteDate,
  PostSetInnerHtml,
  PostTitle,
  CommentHeader,
  CommentBox,
  CommentSetInnerHtml
} from './Post.styles'
import { Link } from '../../_ui'

interface IPostProps {
  post: IPost
  comments: IComment[]
}

export const Post = ({ post, comments }: IPostProps) => {
  useEffect(() => {
    hljsInit()
  }, [])

  const existsComments = comments.length !== 0
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
      {existsComments && (
        <>
          <CommentHeader>Comentários</CommentHeader>
          <Link
            className="no-margins"
            href={`https://www.tabnews.com.br/aurigod/${post.slug}`}
            target="_blank"
            variation="clean"
          >
            Para comentar acesse o post original aqui
          </Link>

          {comments.map((comment) => (
            <CommentBox key={comment.id}>
              <h3>{comment.owner_username}</h3>
              <CommentSetInnerHtml
                dangerouslySetInnerHTML={{
                  __html: comment.html
                }}
              />
            </CommentBox>
          ))}
        </>
      )}
    </PostBox>
  )
}
