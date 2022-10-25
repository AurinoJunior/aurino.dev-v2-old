import Image, { StaticImageData } from 'next/image'

import { Container, Footer, Header, Link } from '../_ui'

import { ErrorPageBox, ErrorPageContent } from './ErrorPage.styles'

import commonContent from '../../data/commonContent.json'
import Head from 'next/head'

interface IErrorPageProps {
  data: {
    title: string
    description: string
    meta: {
      title: string
    }
    cta: {
      text: string
      link: string
    }
    imageData: {
      src: StaticImageData
      alt: string
    }
  }
}

export const ErrorPage = ({ data }: IErrorPageProps) => {
  const { title, description, cta, imageData, meta } = data
  const { footer, menu } = commonContent

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header menuData={menu} />
      <Container>
        <ErrorPageBox>
          <ErrorPageContent>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link href={cta.link}>{cta.text}</Link>
          </ErrorPageContent>
          <picture>
            <Image src={imageData.src} alt={imageData.alt} layout="intrinsic" />
          </picture>
        </ErrorPageBox>
      </Container>
      <Footer fixed={true} data={footer} />
    </>
  )
}
