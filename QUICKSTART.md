# Quick Start Guide - SMSIndiaBlog

Get SMSIndiaBlog up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git
- A code editor (VS Code recommended)

## 1. Clone & Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/bhumialokesh96-netizen/SMSindia.git
cd SMSindia

# Install dependencies
npm install
```

## 2. Configure Environment (1 minute)

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your text editor
# At minimum, update:
# - NEXT_PUBLIC_SITE_URL (your domain or localhost:3000 for dev)
```

For development, you can use the default values in `.env.example`.

## 3. Run Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see:
- ✅ Homepage with 3 sample articles
- ✅ Navigation menu
- ✅ Footer with policy links
- ✅ Ad placeholders (dev mode)

## 4. Test Features (1 minute)

Click around to verify everything works:

### Pages to Check
- [ ] **/** - Homepage
- [ ] **/blog** - Blog listing
- [ ] **/blog/future-of-5g-india** - Sample post
- [ ] **/trends** - Trending topics
- [ ] **/about** - About page
- [ ] **/privacy** - Privacy policy
- [ ] **/sitemap.xml** - Sitemap
- [ ] **/robots.txt** - Robots file

### Features to Verify
- [ ] Articles display correctly
- [ ] Navigation works
- [ ] Tags appear on posts
- [ ] Related posts show up
- [ ] Ad placeholders visible
- [ ] Footer links work

## 5. Create Your First Article (30 seconds)

```bash
# Copy the template
cp content/article-template.md content/posts/my-first-article.md

# Edit the frontmatter and content
# Save the file

# Validate
npm run validate-content

# Refresh browser - your article appears!
```

## What's Next?

### For Content Creators
1. Read [CONTRIBUTING.md](./CONTRIBUTING.md) for editorial guidelines
2. Use `content/article-template.md` as a starting point
3. Follow the Git workflow for submitting content
4. Run `npm run validate-content` before committing

### For Developers
1. Read [README.md](./README.md) for full documentation
2. Check [ARCHITECTURE.md](./ARCHITECTURE.md) for technical details
3. Explore the codebase structure
4. Make improvements and submit PRs

### For Deployment
1. Read [DEPLOYMENT.md](./DEPLOYMENT.md) for Vercel setup
2. Get Google AdSense approval
3. Configure environment variables
4. Deploy and go live!

## Common Tasks

### Add a New Article
```bash
cp content/article-template.md content/posts/your-title.md
# Edit file, then:
npm run validate-content
git add content/posts/your-title.md
git commit -m "Add article: Your Title"
```

### Build for Production
```bash
npm run build
npm start
```

### Validate All Content
```bash
npm run validate-content
```

### Update Dependencies
```bash
npm update
npm audit fix
```

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Content Not Showing
- Check frontmatter is valid: `npm run validate-content`
- Ensure `published: true` in frontmatter
- Verify file is in `content/posts/` directory
- Restart dev server

### TypeScript Errors
```bash
# Regenerate types
npx next build
```

## Getting Help

- **Documentation**: Check README.md, CONTRIBUTING.md, DEPLOYMENT.md
- **Issues**: Search existing issues on GitHub
- **Questions**: Open a discussion on GitHub
- **Bugs**: Report with reproduction steps

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [Vercel Documentation](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Congratulations! 🎉** You're now ready to build an amazing content platform with SMSIndiaBlog.

Happy blogging! 📝
