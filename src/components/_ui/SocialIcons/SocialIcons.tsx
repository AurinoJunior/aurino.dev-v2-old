import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import * as S from './SocialIcons.styles'

interface ISocialIconsProps {
  size?: number
}

export const SocialIcons = ({ size = 35 }: ISocialIconsProps) => {
  return (
    <S.Content>
      <a
        target="_blank"
        href="https://github.com/AurinoJunior"
        rel="noreferrer"
      >
        <FaGithub size={size} />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/aurigod97"
        rel="noreferrer"
      >
        <FaInstagram size={size} />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/aurinojunior"
        rel="noreferrer"
      >
        <FaLinkedin size={size} />
      </a>
    </S.Content>
  )
}
