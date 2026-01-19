import Link from 'next/link'
import { getAllPosts } from '@/lib/content'
import AdUnit from '@/components/AdUnit'

export const revalidate = 3600 // Revalidate every hour

export default async function HomePage() {
  const posts = await getAllPosts()
  const featuredPosts = posts.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to SMS India Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your source for the latest technology trends, mobile innovations, 
          and digital insights from India and beyond.
        </p>
      </section>

      {/* Ad Unit - Top */}
      <div className="mb-8">
        <AdUnit slot="top-banner" format="horizontal" />
      </div>

      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="card">
              <Link href={`/blog/${post.slug}`}>
                <div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-blue-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
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
      </section>

      {/* Ad Unit - Middle */}
      <div className="mb-8">
        <AdUnit slot="middle-banner" format="rectangle" />
      </div>

      {/* CTA Section */}
      <section className="text-center bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Explore our latest articles and insights on technology trends
        </p>
        <Link href="/blog" className="btn">
          View All Articles
        </Link>
      </section>
    </div>
  )
}
