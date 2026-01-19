import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { z } from 'zod'

// Frontmatter validation schema
export const PostFrontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  author: z.string().min(1, 'Author is required'),
  tags: z.array(z.string()).optional().default([]),
  category: z.string().optional(),
  featured: z.boolean().optional().default(false),
  published: z.boolean().optional().default(true),
  seo: z.object({
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
  }).optional(),
})

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>

export interface Post extends PostFrontmatter {
  slug: string
  content: string
  html: string
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

// Ensure content directory exists
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true })
}

export function getPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }
    return fs.readdirSync(postsDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading post slugs:', error)
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Validate frontmatter
    const validatedData = PostFrontmatterSchema.parse(data)

    // Convert markdown to HTML
    const html = marked(content)

    return {
      slug,
      ...validatedData,
      content,
      html: typeof html === 'string' ? html : '',
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .filter(post => post.published)
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

  return posts
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => 
    post.tags && post.tags.includes(tag)
  )
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.category === category)
}

export function getAllTags(): string[] {
  const posts = getPostSlugs()
    .map(slug => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)

  const tagSet = new Set<string>()
  posts.forEach(post => {
    post.tags?.forEach(tag => tagSet.add(tag))
  })

  return Array.from(tagSet).sort()
}

export function getAllCategories(): string[] {
  const posts = getPostSlugs()
    .map(slug => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)

  const categorySet = new Set<string>()
  posts.forEach(post => {
    if (post.category) {
      categorySet.add(post.category)
    }
  })

  return Array.from(categorySet).sort()
}

// Generate internal link suggestions based on content similarity
export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  const allPosts = getPostSlugs()
    .map(slug => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && post.slug !== currentSlug && post.published)

  // Simple scoring based on shared tags and category
  const scoredPosts = allPosts.map(post => {
    let score = 0
    
    // Same category gets high score
    if (post.category === currentPost.category) {
      score += 10
    }
    
    // Shared tags
    const sharedTags = post.tags?.filter(tag => 
      currentPost.tags?.includes(tag)
    ) || []
    score += sharedTags.length * 5

    return { post, score }
  })

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}
