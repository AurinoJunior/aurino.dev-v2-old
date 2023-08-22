import { IPost } from '../../../@types/posts'
import { formatDistanceDate } from '../../../utils/formartDistanceDate'
import { Link } from '../../_ui'

import {
  PostListBox,
  PostListItem,
  PostListItemDate,
  PostListItemInfos
} from './PostList.styles'

interface IPostListProps {
  allPosts: IPost[]
}

export const PostList = ({ allPosts }: IPostListProps) => {
  return (
    <PostListBox>
      {allPosts.map((post) => (
        <PostListItem key={post.id}>
          <PostListItemDate>
            {formatDistanceDate(post.created_at)}
          </PostListItemDate>
          <Link
            className="no-margins"
            href={`/blog/${post.slug}`}
            variation="clean"
          >
            <h2>{post.title}</h2>
          </Link>
          <PostListItemInfos>
            {!!post.children_deep_count && (
              <p>{`${post.children_deep_count} comentarios`}</p>
            )}
            <p>{`${post.tabcoins} tabcoins`}</p>
          </PostListItemInfos>
        </PostListItem>
      ))}
    </PostListBox>
  )
}
