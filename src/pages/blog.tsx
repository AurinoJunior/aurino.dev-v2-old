import type { NextPage } from 'next'
import Head from 'next/head'

import { ErrorPage } from '../components/ErrorPage/ErrorPage'

import { maintenance } from '../data/errorContent.json'

import CatNotFound from '../assets/cat-maintenance.png'

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurino Geraldo | Página em manutenção</title>
      </Head>
      <ErrorPage
        title={maintenance.title}
        description={maintenance.description}
        action={maintenance.cta}
        imageData={{ src: CatNotFound, alt: 'Um gato descolado' }}
      />
    </>
  )
}

export default Blog
