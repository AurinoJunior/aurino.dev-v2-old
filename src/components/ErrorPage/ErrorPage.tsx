import Head from 'next/head'
import Image, { type StaticImageData } from 'next/image'

import { Container, Footer, Header, Link } from '../_ui'

import {
  ErrorPageBox,
  ErrorPageCTAs,
  ErrorPageContent
} from './ErrorPage.styles'

import commonContent from '../../data/commonContent.json'

interface IErrorPageProps {
  data: {
    title: string
    description: string
    meta: {
      title: string
    }
    ctas: Array<{
      text: string
      link: string
      classname: string
    }>
    imageData: {
      src: StaticImageData
      alt: string
    }
  }
}

export const ErrorPage = ({ data }: IErrorPageProps) => {
  const { title, description, ctas, imageData, meta } = data
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
            <ErrorPageCTAs>
              {ctas.map(({ link, text, classname }) => (
                <Link key={link} className={classname} href={link}>
                  {text}
                </Link>
              ))}
            </ErrorPageCTAs>
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
