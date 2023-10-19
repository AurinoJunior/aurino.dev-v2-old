import { Link } from '../../_ui'

import {
  Card,
  CardBody,
  CardDescription,
  CardImage,
  CardTitle,
  ProjectListBox
} from './ProjectsList.styles'

interface IProjectListProps {
  projects: {
    name: string
    description: string
    image: {
      src: string
      alt: string
    }
    ctas: {
      text: string
      link: string
      variation: 'primary' | 'secondary' | 'white' | 'clean'
    }[]
  }[]
}

export const ProjectList = ({ projects }: IProjectListProps) => {
  return (
    <ProjectListBox>
      {projects.map(({ name, image, description, ctas }) => (
        <Card key={name}>
          <CardImage src={image.src} alt={image.alt} height={175} />

          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
            {ctas.map(({ link, text, variation }) => (
              <Link
                className="full-btn"
                variation={variation}
                href={link}
                target="_blank"
                key={link}
              >
                {text}
              </Link>
            ))}
          </CardBody>
        </Card>
      ))}
    </ProjectListBox>
  )
}
