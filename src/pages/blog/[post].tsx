import Head from 'next/head'
import { GetStaticPropsContext } from 'next'

import { PostsOrPages } from '@tryghost/content-api'

import { Container, Footer, Header } from '../../components/_ui'
import { Post } from '../../components/Post/Post'

import { TPostItem } from '../../@types/PostList.types'

import { getPosts, getSinglePost } from '../../services/ghostCMS'
import commonData from '../../data/commonContent.json'

interface IPostPage {
  post: TPostItem
}

const PostPage = ({ post }: IPostPage) => {
  const { menu, footer } = commonData

  return (
    <>
      <Head>
        <title>{`${post.title} | Aurino Junior`}</title>
      </Head>
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

  const postPropsData = {
    ...post,
    metaDescription: post.meta_description,
    publishedAt: post.published_at,
    readingTime: post.reading_time
  }

  return {
    props: { post: postPropsData as TPostItem }
  }
}

export default PostPage
