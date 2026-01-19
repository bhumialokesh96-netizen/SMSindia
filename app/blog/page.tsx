import Link from 'next/link'
import { getAllPosts } from '@/lib/content'

export const metadata = {
  title: 'Blog',
  description: 'Explore all our articles on technology trends, mobile innovations, and digital insights.',
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Explore our collection of articles on technology, trends, and innovations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <Link href={`/blog/${post.slug}`}>
              <div>
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500 mb-3">
                  By {post.author} • {new Date(post.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No posts available yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
