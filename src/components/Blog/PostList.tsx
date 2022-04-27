import React from 'react'

import { PostListBox, PostListParagraph, PostListItem } from './PostList.styles'

const posts = [
  {
    date: '12 de janeiro de 2022',
    title: 'Criando um web hook',
    description:
      'O naruto me ensinou a nunca desistir nem ganhar nem perder mas procurar evoluir...',
    link: '/'
  },
  {
    date: '12 de janeiro de 2022',
    title: 'Criando um web hook',
    description:
      'O naruto me ensinou a nunca desistir nem ganhar nem perder mas procurar evoluir...',
    link: '/'
  },
  {
    date: '12 de janeiro de 2022',
    title: 'Criando um web hook',
    description:
      'O naruto me ensinou a nunca desistir nem ganhar nem perder mas procurar evoluir...',
    link: '/'
  }
]

export const PostList = () => {
  return (
    <PostListBox>
      {posts.map((post, index) => (
        <PostListItem key={index}>
          <PostListParagraph italic>12 de janeiro de 2022</PostListParagraph>
          <h2>Criando um web hook</h2>
          <PostListParagraph>
            O naruto me ensinou a nunca desistir nem ganhar nem perder mas
            procurar evoluir...
          </PostListParagraph>
        </PostListItem>
      ))}
    </PostListBox>
  )
}
