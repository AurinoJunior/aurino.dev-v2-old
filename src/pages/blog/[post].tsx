import { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'

import { IComment, IPost } from '../../@types/posts'
import { getAllPosts } from '../../services/getAllPosts'
import { getSinglePost } from '../../services/getSinglePost'

import { Container, Footer, Header } from '../../components/_ui'
import { Post } from '../../components/BlogPage'

import commonData from '../../data/commonContent.json'
import { getAllComments } from '../../services/getAllComments'

interface IPostPageProps {
  post: IPost
  allComments: IComment[]
}

const PostPage: NextPage = ({ post, allComments }: IPostPageProps) => {
  const { menu, footer } = commonData

  return (
    <>
      <Head>
        <title>{`${post.title} | Aurino Geraldo`}</title>
      </Head>
      <Header menuData={menu} />

      <Container>
        <Post post={post} comments={allComments} />
      </Container>

      <Footer data={footer} />
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
  let allComments = []

  if (!post) {
    return {
      notFound: true
    }
  }

  if (post.children_deep_count !== 0) {
    allComments = await getAllComments(slug)
  }

  return {
    props: { post, allComments },
    revalidate: 60 * 60 * 24 // 1 day
  }
}

export default PostPage
