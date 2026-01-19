import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/content'
import { generateRssFeed } from '@/lib/seo'

export async function GET() {
  const posts = await getAllPosts()
  const rssFeed = generateRssFeed(posts)

  return new NextResponse(rssFeed, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
