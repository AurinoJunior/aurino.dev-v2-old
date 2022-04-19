import type { NextPage } from 'next'
import Head from 'next/head'

import { ErrorPage } from '../components/ErrorPage/ErrorPage'

import CatNotFound from '../assets/cat-not-found.png'

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurino Geraldo | Pagina não encontrada</title>
      </Head>
      <ErrorPage
        title="Ops, parece que você se perdeu."
        description="Mas sem problemas volte para home ou acesse meu blog."
        action={{ text: 'Voltar para home', link: '/' }}
        imageData={{ src: CatNotFound, alt: 'Um gato perdido' }}
      />
    </>
  )
}

export default Custom404
