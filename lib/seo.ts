import { Post } from './content'

export function generateSitemap(posts: Post[], baseUrl: string = 'https://smsindiablog.com'): string {
  const staticPages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: '/blog', changefreq: 'daily', priority: '0.9' },
    { url: '/about', changefreq: 'monthly', priority: '0.5' },
    { url: '/privacy', changefreq: 'monthly', priority: '0.3' },
    { url: '/terms', changefreq: 'monthly', priority: '0.3' },
    { url: '/cookies', changefreq: 'monthly', priority: '0.3' },
    { url: '/trends', changefreq: 'daily', priority: '0.7' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${posts.map(post => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

export function generateRobotsTxt(baseUrl: string = 'https://smsindiablog.com'): string {
  return `# Robots.txt for SMS India Blog

User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1
`
}

export function generateRssFeed(posts: Post[], baseUrl: string = 'https://smsindiablog.com'): string {
  const latestPosts = posts.slice(0, 20)
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SMS India Blog</title>
    <link>${baseUrl}</link>
    <description>Latest technology trends, news, and insights from India</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${latestPosts.map(post => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${escapeXml(post.author)}</author>
${post.tags?.map(tag => `      <category>${escapeXml(tag)}</category>`).join('\n') || ''}
    </item>`).join('\n')}
  </channel>
</rss>`
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function generateJsonLd(post: Post, baseUrl: string = 'https://smsindiablog.com') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `${baseUrl}/blog/${post.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'SMS India Blog',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
    articleSection: post.category,
  }
}
