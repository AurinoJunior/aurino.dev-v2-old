import type { NextPage } from 'next'
import Head from 'next/head'

import { ErrorPage } from '../components/ErrorPage/ErrorPage'

import { notFound } from '../data/errorContent.json'

import CatNotFound from '../assets/cat-not-found.png'

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurino Geraldo | Pagina não encontrada</title>
      </Head>
      <ErrorPage
        title={notFound.title}
        description={notFound.description}
        action={notFound.cta}
        imageData={{ src: CatNotFound, alt: 'Um gato perdido' }}
      />
    </>
  )
}

export default Custom404
