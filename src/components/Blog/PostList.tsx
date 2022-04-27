import Link from 'next/link'

import {
  PostListBox,
  PostListParagraph,
  PostListItem,
  Title
} from './PostList.styles'

import { IPostList } from '../../@types/PostList.types'

import { formatDistanceDate } from '../../utils/formatDistanceDate'

type IPostListProps = IPostList

export const PostList = ({ posts }: IPostListProps) => {
  return (
    <PostListBox>
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <a>
            <PostListItem>
              <PostListParagraph italic>
                {formatDistanceDate(post.publishedAt)}
              </PostListParagraph>
              <Title>{post.title}</Title>
              <PostListParagraph>{post.metaDescription}</PostListParagraph>
            </PostListItem>
          </a>
        </Link>
      ))}
    </PostListBox>
  )
}
