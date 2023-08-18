import { IPost } from '../../../@types/posts'

import { Link } from '../../_ui'

import { PostListBox, PostListItem } from './PostList.styles'

interface IPostListProps {
  allPosts: IPost[]
}

export const PostList = ({ allPosts }: IPostListProps) => {
  return (
    <PostListBox>
      {allPosts.map((post) => (
        <PostListItem key={post.id}>
          <Link href={`/blog/${post.slug}`} variation="clean">
            {/* <PostListParagraph italic>
                {formatDistanceDate(post.publishedAt)}
              </PostListParagraph> */}
            <h2>{post.title}</h2>
          </Link>
        </PostListItem>
      ))}
    </PostListBox>
  )
}
