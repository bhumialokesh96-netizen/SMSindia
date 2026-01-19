import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/content'
import { generateJsonLd } from '@/lib/seo'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

export const revalidate = 86400 // Revalidate daily (ISR)

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.seo?.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.seo?.metaDescription || post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug)
  const jsonLd = generateJsonLd(post)

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-4">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Ad Unit - Top of Article */}
        <div className="mb-8">
          <AdUnit slot="article-top" format="horizontal" />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Ad Unit - Bottom of Article */}
        <div className="mb-8">
          <AdUnit slot="article-bottom" format="horizontal" />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/blog/${relatedPost.slug}`}
                  className="card hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold mb-2 hover:text-blue-600">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
