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
  placeholder: string
}

export const Hero = ({ title, placeholder }: IHeroProps) => {
  return (
    <HeroBox>
      <HeroTitle>{title}</HeroTitle>
      <HeroSearchBox>
        <HeroSearchInput placeholder={placeholder} />
        <FaSearch size={25} color={gray_500} />
      </HeroSearchBox>
    </HeroBox>
  )
}
