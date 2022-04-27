import type { NextPage, GetStaticPropsContext } from 'next'
import { PostList } from '../../components/Blog/PostList'
import { Container, Footer, Header } from '../../components/_ui'

import commonData from '../../data/commonContent.json'

import { getPosts } from '../../services/ghostCMS'

const Blog: NextPage = () => {
  const { menu, footer } = commonData

  return (
    <>
      <Header menuData={menu} />

      <Container>
        <PostList />
      </Container>

      <Footer fixed data={footer} />
    </>
  )
}

export async function getStaticProps({}: GetStaticPropsContext) {
  const posts = await getPosts()
  console.log({ posts })

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
