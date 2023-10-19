import type { NextPage } from 'next'
import Head from 'next/head'

import { Container, Footer, Header } from '../components/_ui'
import { Hero } from '../components/ProjectsPage'

import projectsData from '../data/projectsContent.json'
import commonData from '../data/commonContent.json'
import { ProjectList } from '../components/ProjectsPage/ProjectsList/ProjectsList'
import { TProjects } from '../data/@types/projectsContent'
import { useState } from 'react'

const Projects: NextPage = () => {
  const { footer, menu } = commonData
  const { meta, title, placeholder, projects } = projectsData

  const [searchProject, setSearchProject] = useState('')

  const filteredProjects = projects.filter(({ name }) =>
    name.toLowerCase().includes(searchProject.toLowerCase())
  )

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header menuData={menu} />

      <Container>
        <Hero
          searchProject={searchProject}
          setSearchProject={setSearchProject}
          title={title}
          placeholder={placeholder}
        />
        <ProjectList projects={filteredProjects as TProjects} />
      </Container>

      <Footer data={footer} />
    </>
  )
}

export default Projects
