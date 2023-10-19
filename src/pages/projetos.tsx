import type { NextPage } from 'next'
import Head from 'next/head'

import { Container, Footer, Header } from '../components/_ui'
import { Hero } from '../components/ProjectsPage'

import projectsData from '../data/projectsContent.json'
import commonData from '../data/commonContent.json'

const Projects: NextPage = () => {
  const { footer, menu } = commonData
  const { meta, title, placeholder } = projectsData

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header menuData={menu} />

      <Container>
        <Hero title={title} placeholder={placeholder} />
      </Container>

      <Footer data={footer} fixed />
    </>
  )
}

export default Projects
