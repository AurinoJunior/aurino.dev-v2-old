import type { GetStaticPropsContext } from 'next'
import { PostsOrPages } from '@tryghost/content-api'

import { PostList } from '../../components/Blog/PostList'
import { Container, Footer, Header } from '../../components/_ui'

import commonData from '../../data/commonContent.json'

import { getPosts } from '../../services/ghostCMS'

interface IBlogProps {
  posts: PostsOrPages
}

const Blog = (props: IBlogProps) => {
  const { menu, footer } = commonData

  const posts = props.posts.map((post) => {
    return {
      id: post.id,
      publishedAt: post.published_at as string,
      title: post.title as string,
      metaDescription: post.meta_description as string
    }
  })

  return (
    <>
      <Header menuData={menu} />

      <Container>
        <PostList posts={posts} />
      </Container>

      <Footer fixed data={footer} />
    </>
  )
}

export async function getStaticProps({}: GetStaticPropsContext) {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true
    }
  }

  return {
    props: { posts },
    revalidate: 60 * 60 * 24
  }
}

export default Blog
