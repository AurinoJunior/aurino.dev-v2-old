import type { NextPage } from 'next'
import Head from 'next/head'
import { Contact, Container, Footer, Header } from '../components/_ui'

import { Hero, About, Worked } from '../components/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aurino Geraldo | Portifolio e blog pessoal</title>
      </Head>
      <Header />
      <Container>
        <Hero />
      </Container>

      <Worked />

      <Container>
        <About />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}

export default Home
