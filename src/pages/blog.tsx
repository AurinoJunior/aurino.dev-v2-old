import type { NextPage } from 'next'
import Head from 'next/head'

import { ErrorPage } from '../components/ErrorPage/ErrorPage'

import CatNotFound from '../assets/cat-maintenance.png'

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurino Geraldo | Página em manutenção</title>
      </Head>
      <ErrorPage
        title="Opa, essa pagina ainda está em construção."
        description="Mas em quanto isso de uma olhada em minha homepage."
        action={{ text: 'Voltar para home', link: '/' }}
        imageData={{ src: CatNotFound, alt: 'Um gato descolado' }}
      />
    </>
  )
}

export default Blog
