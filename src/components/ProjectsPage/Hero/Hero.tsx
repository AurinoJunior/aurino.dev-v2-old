import { FaSearch } from 'react-icons/fa'
import {
  HeroBox,
  HeroSearchBox,
  HeroSearchInput,
  HeroTitle
} from './Hero.styles'
import { gray_500 } from '../../../styles/Tokens'

interface IHeroProps {
  title: string
}

export const Hero = ({ title }: IHeroProps) => {
  return (
    <HeroBox>
      <HeroTitle>{title}</HeroTitle>
      <HeroSearchBox>
        <HeroSearchInput placeholder="Pesquisar..." />
        <FaSearch size={25} color={gray_500} />
      </HeroSearchBox>
      <div>
        <button>test</button>
      </div>
    </HeroBox>
  )
}
