export interface IPost {
  id: string
  owner_id: string
  parent_id: string | null
  slug: string
  title: string | null
  body?: string
  status: string
  source_url: string | null
  created_at: string
  updated_at: string
  published_at: string
  deleted_at: string | null
  owner_username: string
  tabcoins: number
  children_deep_count: number
}
