import { PostOrPage } from '@tryghost/content-api'
import { PostBox, PostSetInnerHtml, PostTitle } from './Post.styles'

interface IPostPage {
  post: PostOrPage
}

export const Post = ({ post }: IPostPage) => {
  return (
    <PostBox>
      <PostTitle>{post.title}</PostTitle>
      <PostSetInnerHtml
        dangerouslySetInnerHTML={{
          __html: post.html as string
        }}
      />
    </PostBox>
  )
}
