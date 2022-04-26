import type { NextPage } from 'next'

import { ErrorPage } from '../components/ErrorPage/ErrorPage'

import errorContent from '../data/errorContent.json'

import CatMaintenance from '../assets/cat-maintenance.png'

const Blog: NextPage = () => {
  const { maintenance } = errorContent
  return (
    <>
      <ErrorPage
        data={{
          ...maintenance,
          imageData: { src: CatMaintenance, alt: 'Um gato descolado' }
        }}
      />
    </>
  )
}

export default Blog
