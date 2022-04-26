import type { NextPage } from 'next'
import Head from 'next/head'

import { Contact, Container, Footer, Header } from '../components/_ui'
import { Hero, About, Worked } from '../components/Home'

import homeData from '../data/homeContent.json'
import commonData from '../data/commonContent.json'

const Home: NextPage = () => {
  const { about, worked, hero } = homeData
  const { footer, contact, menu } = commonData

  return (
    <>
      <Head>
        <title>Aurino Geraldo | Portifolio e blog pessoal</title>
      </Head>
      <Header menuData={menu} />

      <Container>
        <Hero data={hero} />
      </Container>

      <Worked data={worked} />

      <Container>
        <About data={about} />
        <Contact data={contact} />
      </Container>

      <Footer data={footer} />
    </>
  )
}

export default Home
