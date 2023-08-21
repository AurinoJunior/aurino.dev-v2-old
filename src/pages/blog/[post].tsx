import { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'

import { IPost } from '../../@types/posts'
import { getAllPosts } from '../../services/getAllPosts'
import { getSinglePost } from '../../services/getSinglePost'

import { Container, Footer, Header } from '../../components/_ui'
import { Post } from '../../components/BlogPage'

import commonData from '../../data/commonContent.json'

interface IPostPageProps {
  post: IPost
}

const PostPage: NextPage = ({ post }: IPostPageProps) => {
  const { menu, footer } = commonData

  return (
    <>
      <Head>
        <title>{`${post.title} | Aurino Geraldo`}</title>
      </Head>
      <Header menuData={menu} />

      <Container>
        <Post post={post} />
      </Container>

      <Footer data={footer} fixed />
    </>
  )
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()

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
    props: { post },
    revalidate: 60 * 60 * 24 // 1 day
  }
}

export default PostPage
