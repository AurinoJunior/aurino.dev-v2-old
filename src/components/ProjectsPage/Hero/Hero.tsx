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
  searchProject: string
  setSearchProject: (string) => void
}

export const Hero = ({
  title,
  placeholder,
  searchProject,
  setSearchProject
}: IHeroProps) => {
  return (
    <HeroBox>
      <HeroTitle>{title}</HeroTitle>
      <HeroSearchBox>
        <HeroSearchInput
          placeholder={placeholder}
          value={searchProject}
          onChange={(e) => setSearchProject(e.target.value)}
        />
        <FaSearch size={25} color={gray_500} />
      </HeroSearchBox>
    </HeroBox>
  )
}
