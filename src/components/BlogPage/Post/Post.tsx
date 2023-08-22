import { useEffect } from 'react'

// sytanx highlight for code
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'
import 'highlight.js/styles/tokyo-night-dark.css'

import { IPost } from '../../../@types/posts'
import { formatDistanceDate } from '../../../utils/formartDistanceDate'

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
    hljs.registerLanguage('typescript', typescript)
    hljs.registerLanguage('css', css)
    hljs.highlightAll()
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
