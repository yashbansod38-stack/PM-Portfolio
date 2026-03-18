import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export type PostType = 'projects' | 'writings' | 'build-in-public'

export interface PostMeta {
  title: string
  publishedAt: string
  summary: string
  image?: string
  tags?: string[]
  impact?: string
  bespoke?: boolean
}

export function getMdxFiles(dir: string) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx')
}

export function getPostBySlug(slug: string, type: PostType) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(contentDir, type, `${realSlug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return { 
    slug: realSlug, 
    meta: data as PostMeta, 
    content 
  }
}

export function getAllPosts(type: PostType) {
  const dir = path.join(contentDir, type)
  const slugs = getMdxFiles(dir)
  const posts = slugs.map((slug) => getPostBySlug(slug, type)).filter((post): post is NonNullable<typeof post> => post !== null)
  
  // Sort by date descending
  return posts.sort((a, b) => {
    if (a.meta.publishedAt > b.meta.publishedAt) return -1
    return 1
  })
}
