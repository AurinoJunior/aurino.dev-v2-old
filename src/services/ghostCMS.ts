import GhostContentAPI from '@tryghost/content-api'

type TGhostApiVersion = 'v4' | 'v2' | 'v3' | 'canary'

const ghostApi = new GhostContentAPI({
  url: process.env.GHOST_API_URL || '',
  key: process.env.GHOST_API_KEY_CONTENT || '',
  version: process.env.GHOST_API_VERSION as TGhostApiVersion
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
