# SMS India Blog

A high-traffic SEO-optimized content platform built with Next.js 14+, featuring static site generation (SSG), incremental static regeneration (ISR), and intelligent trend analysis.

## 🚀 Features

- **Next.js 14+ with App Router**: Modern React framework with optimal performance
- **Static Site Generation (SSG)**: Pre-rendered pages for best SEO and performance
- **Incremental Static Regeneration (ISR)**: Automatic page updates without full rebuilds
- **TypeScript**: Type-safe development experience
- **Git-based Content Management**: Markdown files with frontmatter validation
- **Trend Intelligence**: Integration with Google Trends API for content insights
- **AdSense Integration**: Non-intrusive ad placements for monetization
- **Automatic SEO Optimization**: Metadata, sitemaps, robots.txt, and RSS feeds
- **Security Headers**: Built-in security best practices
- **Policy Pages**: Privacy Policy, Terms of Service, and Cookie Policy

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bhumialokesh96-netizen/SMSindia.git
   cd SMSindia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your configuration:
   - Google AdSense client ID
   - Ad slot IDs
   - Site URL

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Creating Blog Posts

1. Create a new markdown file in `content/posts/`
2. Add required frontmatter:

```markdown
---
title: "Your Article Title"
date: "2026-01-19"
excerpt: "Brief description of your article"
author: "Author Name"
tags: ["tag1", "tag2"]
category: "Category"
featured: false
published: true
seo:
  metaDescription: "SEO description"
  keywords: ["keyword1", "keyword2"]
---

# Your Article Title

Your content goes here...
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Article title |
| `date` | string (YYYY-MM-DD) | Yes | Publication date |
| `excerpt` | string | Yes | Short description |
| `author` | string | Yes | Author name |
| `tags` | array | No | Article tags |
| `category` | string | No | Article category |
| `featured` | boolean | No | Featured on homepage |
| `published` | boolean | No | Publish status (default: true) |
| `seo` | object | No | SEO metadata |

### Content Validation

Validate content before committing:

```bash
npm run validate-content
```

This checks all markdown files for proper frontmatter structure.

## 🏗️ Project Structure

```
SMSindia/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── blog/                # Blog routes
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/          # Dynamic blog post pages
│   ├── about/               # About page
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms of service
│   ├── cookies/             # Cookie policy
│   ├── trends/              # Trending topics
│   └── api/                 # API routes
│       ├── sitemap/         # Dynamic sitemap
│       ├── robots/          # Robots.txt
│       └── rss/             # RSS feed
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer with links
│   ├── AdSenseScript.tsx    # AdSense initialization
│   └── AdUnit.tsx           # Ad placement component
├── lib/                     # Utility libraries
│   ├── content.ts           # Content management
│   ├── trends.ts            # Trend intelligence
│   └── seo.ts               # SEO utilities
├── content/                 # Content files
│   ├── posts/               # Published posts
│   └── drafts/              # Draft posts
├── public/                  # Static assets
├── scripts/                 # Build scripts
│   └── validate-content.js  # Content validation
├── .github/workflows/       # GitHub Actions
│   ├── content-validation.yml
│   └── nextjs-build.yml
├── next.config.js           # Next.js configuration
├── vercel.json              # Vercel deployment config
└── package.json             # Dependencies
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

2. **Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`

3. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Next.js Configuration (`next.config.js`)

- **Security headers**: CSP, HSTS, X-Frame-Options
- **Image optimization**: Remote patterns, formats
- **Output**: Standalone mode for Docker

### Vercel Configuration (`vercel.json`)

- **Edge caching**: Optimized cache headers
- **Rewrites**: SEO-friendly URLs for API routes

## 📊 SEO Features

### Automatic Generation

- **Sitemap.xml**: Updated with each build
- **Robots.txt**: Search engine directives
- **RSS Feed**: XML feed for subscribers
- **JSON-LD**: Structured data for articles
- **OpenGraph**: Social media previews
- **Twitter Cards**: Twitter-optimized previews

### Best Practices

- Semantic HTML structure
- Optimized meta tags
- Internal linking suggestions
- Mobile-responsive design
- Fast page load times (SSG/ISR)

## 💰 Monetization

### Google AdSense Setup

1. **Get AdSense approval**
   - Apply at [Google AdSense](https://www.google.com/adsense)
   - Ensure content meets quality guidelines

2. **Configure Ad Units**
   - Create ad units in AdSense dashboard
   - Copy client ID and slot IDs
   - Add to `.env.local`

3. **Ad Placement Strategy**
   - Top banner (homepage)
   - Middle section (homepage)
   - Article top (blog posts)
   - Article bottom (blog posts)

### Compliance

- Privacy Policy in place
- Cookie consent (implement if needed)
- Non-intrusive placement
- Clear ad disclosure

## 🔐 Security

### Headers

- Strict-Transport-Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

### Best Practices

- Regular dependency updates
- Environment variable protection
- Input validation
- XSS prevention

## 📈 Trend Intelligence

The platform includes trend analysis features:

- Daily trending topics (Google Trends)
- Related searches suggestions
- Content opportunity identification
- Traffic insights

Access at `/trends` page.

## 🧪 Testing

### Content Validation

```bash
npm run validate-content
```

### Local Build Test

```bash
npm run build
npm start
```

## 🤝 Contributing

### Editorial Workflow

1. Create a branch for your content
2. Add markdown file to `content/posts/`
3. Run `npm run validate-content`
4. Submit pull request
5. Content review
6. Merge to main

### Code Contributions

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For issues, questions, or contributions:
- Open an issue on GitHub
- Check existing documentation
- Review closed issues for solutions

## 🎯 Roadmap

- [ ] Advanced search functionality
- [ ] Comment system
- [ ] Newsletter integration
- [ ] Author profiles
- [ ] Multi-language support
- [ ] Enhanced analytics dashboard
- [ ] Content recommendation engine

## 📞 Contact

- Website: https://smsindiablog.com
- GitHub: https://github.com/bhumialokesh96-netizen/SMSindia

---

Built with ❤️ using Next.js and deployed on Vercel
