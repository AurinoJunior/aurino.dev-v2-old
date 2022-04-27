import Link from 'next/link'

import { PostListBox, PostListParagraph, PostListItem } from './PostList.styles'
import { formatDistanceDate } from '../../utils/formatDistanceDate'

type TPost = {
  id: string
  publishedAt: string
  title: string
  metaDescription: string
}

interface IPostListProps {
  posts: TPost[]
}

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
              <h2>{post.title}</h2>
              <PostListParagraph>{post.metaDescription}</PostListParagraph>
            </PostListItem>
          </a>
        </Link>
      ))}
    </PostListBox>
  )
}
