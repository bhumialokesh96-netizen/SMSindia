# Extension Guide - SMSIndia Blog

This guide provides instructions for extending and customizing the SMSIndia Blog platform with additional features and integrations.

## Table of Contents

1. [Analytics Integration](#analytics-integration)
2. [Newsletter Subscription](#newsletter-subscription)
3. [Search Functionality](#search-functionality)
4. [Comments System](#comments-system)
5. [RSS Feed](#rss-feed)
6. [Social Sharing](#social-sharing)
7. [Related Posts](#related-posts)
8. [Reading Progress Bar](#reading-progress-bar)
9. [Dark Mode](#dark-mode)
10. [Multi-language Support](#multi-language-support)

---

## Analytics Integration

### Google Analytics 4

**1. Install Dependencies:**
```bash
npm install @next/third-parties
```

**2. Add to `app/layout.tsx`:**
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

**3. Add Environment Variable:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Vercel Analytics

Already built-in! Just enable in Vercel dashboard:
1. Go to your project
2. Settings → Analytics
3. Enable Analytics

---

## Newsletter Subscription

### Using Mailchimp

**1. Create Newsletter Component:**

Create `components/Newsletter.tsx`:
```tsx
'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-gray-600 mb-4">Get the latest posts delivered to your inbox.</p>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-grow px-4 py-2 border rounded"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {status === 'success' && (
        <p className="text-green-600 mt-2">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
```

**2. Create API Route:**

Create `app/api/newsletter/route.ts`:
```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  // Mailchimp API integration
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;

  try {
    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
```

**3. Add to Homepage:**

In `app/page.tsx`, import and add:
```tsx
import Newsletter from '@/components/Newsletter';

// Add in your component
<Newsletter />
```

---

## Search Functionality

### Client-Side Search

**1. Create Search Component:**

Create `components/Search.tsx`:
```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface SearchProps {
  posts: BlogPost[];
}

export default function Search({ posts }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BlogPost[]>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    setResults(filtered);
  };

  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search articles..."
        className="w-full px-4 py-2 border rounded-lg"
      />
      
      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border rounded-lg mt-2 shadow-lg z-10">
          {results.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-4 hover:bg-gray-50 border-b last:border-b-0"
            >
              <h4 className="font-semibold">{post.title}</h4>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## Comments System

### Using Giscus (GitHub Discussions)

**1. Set up GitHub Discussions:**
- Enable Discussions on your repository
- Install Giscus app
- Configure at [giscus.app](https://giscus.app)

**2. Create Comments Component:**

Create `components/Comments.tsx`:
```tsx
'use client';

import { useEffect, useRef } from 'react';

export default function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'your-username/your-repo');
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;

    commentsRef.current?.appendChild(script);
  }, []);

  return <div ref={commentsRef} className="mt-8" />;
}
```

**3. Add to Blog Post Page:**

In `app/blog/[slug]/page.tsx`:
```tsx
import Comments from '@/components/Comments';

// Add before closing </article>
<Comments />
```

---

## RSS Feed

**1. Create RSS Route:**

Create `app/feed.xml/route.ts`:
```tsx
import { getAllPosts } from '@/lib/blog';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SMSIndia Blog</title>
    <link>${siteUrl}</link>
    <description>Your source for trending topics and insights from India</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
```

**2. Add RSS Link to Layout:**

In `app/layout.tsx`, add to `<head>`:
```tsx
<link
  rel="alternate"
  type="application/rss+xml"
  title="SMSIndia Blog RSS Feed"
  href="/feed.xml"
/>
```

---

## Social Sharing

**1. Create Share Component:**

Create `components/ShareButtons.tsx`:
```tsx
'use client';

export default function ShareButtons({ title, url }: { title: string; url: string }) {
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
  };

  return (
    <div className="flex gap-4">
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600"
      >
        Twitter
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-800"
      >
        Facebook
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700"
      >
        LinkedIn
      </a>
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700"
      >
        WhatsApp
      </a>
    </div>
  );
}
```

---

## Related Posts

**1. Add Function to `lib/blog.ts`:**

```tsx
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  
  // Filter out current post and calculate relevance scores
  const scoredPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;
      
      // Check for matching tags
      const matchingTags = post.tags?.filter(tag => 
        currentPost.tags?.includes(tag)
      ).length || 0;
      score += matchingTags * 3;
      
      // Check for matching author
      if (post.author === currentPost.author) {
        score += 1;
      }
      
      return { post, score };
    })
    .sort((a, b) => b.score - a.score);
  
  return scoredPosts.slice(0, limit).map(item => item.post);
}
```

**2. Use in Blog Post Page:**

```tsx
const relatedPosts = getRelatedPosts(params.slug);

// Add to page
{relatedPosts.length > 0 && (
  <section className="mt-12">
    <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedPosts.map(post => (
        <article key={post.slug} className="border rounded-lg p-4">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
          </Link>
        </article>
      ))}
    </div>
  </section>
)}
```

---

## Reading Progress Bar

Create `components/ReadingProgress.tsx`:
```tsx
'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / height) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
```

---

## Dark Mode

**1. Install Dependencies:**
```bash
npm install next-themes
```

**2. Create Theme Provider:**

Create `components/ThemeProvider.tsx`:
```tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
```

**3. Update `app/layout.tsx`:**
```tsx
import ThemeProvider from '@/components/ThemeProvider';

// Wrap children
<ThemeProvider>
  {children}
</ThemeProvider>
```

**4. Update `tailwind.config.js`:**
```js
module.exports = {
  darkMode: 'class',
  // ... rest of config
}
```

---

## Multi-language Support

**1. Install Dependencies:**
```bash
npm install next-intl
```

**2. Create Internationalization Config:**

Create `i18n.ts`:
```tsx
export const locales = ['en', 'hi'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];
```

**3. Create Language-Specific Content:**
```
content/
├── posts/
│   ├── en/
│   │   └── post-slug.md
│   └── hi/
│       └── post-slug.md
```

---

## Additional Resources

### Useful Libraries

- **Image Galleries**: `react-photo-view`
- **Code Highlighting**: `rehype-highlight`
- **Table of Contents**: `remark-toc`
- **Reading Time**: `reading-time`
- **Emoji Support**: `remark-emoji`
- **Math Equations**: `remark-math` + `rehype-katex`

### Performance Optimizations

- Use Next.js Image component for images
- Implement lazy loading for images
- Use dynamic imports for heavy components
- Enable compression in `next.config.js`
- Optimize fonts (already using system fonts)

### Security Enhancements

- Add CSP headers
- Implement rate limiting for APIs
- Add CAPTCHA for forms
- Sanitize user inputs
- Regular dependency updates

---

## Getting Help

- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues**: Report bugs or request features
- **Community**: Join Next.js Discord
- **Stack Overflow**: Tag questions with `next.js`

---

**Ready to extend!** Start with one feature at a time and test thoroughly before deploying.
