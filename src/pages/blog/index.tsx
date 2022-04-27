import type { GetStaticPropsContext } from 'next'

import { PostList } from '../../components/Blog/PostList'
import { Container, Footer, Header } from '../../components/_ui'

import { IPostList } from '../../@types/PostList.types'

import { getPosts } from '../../services/ghostCMS'

import commonData from '../../data/commonContent.json'

type IBlogProps = IPostList

const Blog = ({ posts }: IBlogProps) => {
  const { menu, footer } = commonData

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
  const allPosts = await getPosts()

  if (!allPosts) {
    return {
      notFound: true
    }
  }

  const posts = allPosts.map((post) => {
    return {
      id: post.id,
      publishedAt: post.published_at as string,
      slug: post.slug,
      title: post.title as string,
      metaDescription: post.meta_description as string
    }
  })

  return {
    props: { posts },
    revalidate: 60 * 60 * 24
  }
}

export default Blog
