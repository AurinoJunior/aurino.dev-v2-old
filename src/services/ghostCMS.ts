import GhostContentAPI from '@tryghost/content-api'

const ghostApi = new GhostContentAPI({
  url: 'https://auridev-cms.herokuapp.com',
  key: 'e10edebabd0341b9dd7b265ded',
  version: 'v4'
})

const getPosts = async () => {
  return await ghostApi.posts
    .browse({
      limit: 'all'
    })
    .catch((err) => {
      console.error(err)
    })
}

const getSinglePost = async (postSlug: string) => {
  return await ghostApi.posts
    .read({
      slug: postSlug
    })
    .catch((err) => {
      console.error(err)
    })
}

export { getPosts, getSinglePost }
