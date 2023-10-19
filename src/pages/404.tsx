import type { NextPage } from 'next'

import { ErrorPage } from '../components/ErrorPage/ErrorPage'

import { TNotFound } from '../data/@types/errorContent'
import errorContent from '../data/errorContent.json'

import CatNotFound from '../assets/cat-not-found.png'

const Custom404: NextPage = () => {
  const { notFound } = errorContent
  return (
    <>
      <ErrorPage
        data={{
          ...(notFound as TNotFound),
          imageData: { src: CatNotFound, alt: 'Um gato perdido' }
        }}
      />
    </>
  )
}

export default Custom404
