import { GetStaticPropsContext } from 'next'
import { PostOrPage, PostsOrPages } from '@tryghost/content-api'

import { Container, Footer, Header } from '../../components/_ui'
import { Post } from '../../components/Post/Post'

import { getPosts, getSinglePost } from '../../services/ghostCMS'
import commonData from '../../data/commonContent.json'

interface IPostPage {
  post: PostOrPage
}

const PostPage = ({ post }: IPostPage) => {
  const { menu, footer } = commonData

  return (
    <>
      <Header menuData={menu} />

      <Container>
        <Post post={post} />
      </Container>

      <Footer data={footer} />
    </>
  )
}

export async function getStaticPaths() {
  const allPosts = (await getPosts()) as PostsOrPages

  const paths = allPosts.map((post) => ({
    params: { post: post.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.post as string
  const post = await getSinglePost(slug)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: { post }
  }
}

export default PostPage
