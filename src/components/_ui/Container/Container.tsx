import { ReactNode } from 'react'
import * as S from './Container.styles'

interface IContainerProps {
  children: ReactNode
}

export const Container = ({ children }: IContainerProps) => {
  return <S.Container>{children}</S.Container>
}
