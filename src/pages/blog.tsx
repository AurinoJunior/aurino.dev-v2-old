import type { NextPage } from 'next'
import Head from 'next/head'
import { IPost } from '../@types/posts'

import { getAllPosts } from '../services/getAllPosts'

import commonContent from '../data/commonContent.json'
import blogContent from '../data/blogContent.json'

import { Container, Footer, Header } from '../components/_ui'

import { PostList } from '../components/Blog/PostList/PostLists'

interface IBlogProps {
  allPosts: IPost[]
}

const Blog: NextPage = ({ allPosts }: IBlogProps) => {
  const { menu, footer } = commonContent
  const { meta } = blogContent

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header menuData={menu} />

      <Container>
        <PostList allPosts={allPosts} />
      </Container>

      <Footer fixed data={footer} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  if (!allPosts) {
    return {
      notFound: true
    }
  }

  return {
    props: { allPosts },
    revalidate: 60 * 60 * 24
  }
}

export default Blog
