import Head from 'next/head'

import { PostList } from '../../components/Blog/PostList'
import { Container, Footer, Header } from '../../components/_ui'

import { IPostList } from '../../@types/PostList.types'

import { getPosts } from '../../services/ghostCMS'

import commonData from '../../data/commonContent.json'
import blogContent from '../../data/blogContent.json'

type IBlogProps = IPostList

const Blog = ({ posts }: IBlogProps) => {
  const { menu, footer } = commonData
  const { meta } = blogContent

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header menuData={menu} />

      <Container>
        <PostList posts={posts} />
      </Container>

      <Footer fixed data={footer} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getPosts()

  if (!allPosts) {
    return {
      notFound: true
    }
  }

  const posts = allPosts.map((post) => {
    return {
      id: post.id,
      publishedAt: post.published_at,
      slug: post.slug,
      title: post.title,
      metaDescription: post.meta_description
    }
  })

  return {
    props: { posts },
    revalidate: 60 * 60 * 24
  }
}

export default Blog
