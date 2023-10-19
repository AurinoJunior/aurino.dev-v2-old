import type { NextPage } from 'next'
import Head from 'next/head'

import { Container, Footer, Header } from '../components/_ui'
import { Hero } from '../components/ProjectsPage'

import projectsData from '../data/projectsContent.json'
import commonData from '../data/commonContent.json'
import { ProjectList } from '../components/ProjectsPage/ProjectsList/ProjectsList'
import { TProjects } from '../data/@types/projectsContent'

const Projects: NextPage = () => {
  const { footer, menu } = commonData
  const { meta, title, placeholder, projects } = projectsData

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header menuData={menu} />

      <Container>
        <Hero title={title} placeholder={placeholder} />
        <ProjectList projects={projects as TProjects} />
      </Container>

      <Footer data={footer} />
    </>
  )
}

export default Projects
