# Deployment Guide - SMSIndia Blog

This guide covers the complete deployment process for the SMSIndia Blog platform on Vercel.

## Prerequisites

1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account** - Repository should be on GitHub
3. **Google AdSense Account** (optional) - For monetization
4. **Custom Domain** (optional) - For professional hosting

## Step 1: Prepare Your Repository

### 1.1 Verify Your Code

Ensure all files are committed:

```bash
git status
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 1.2 Review Configuration Files

Check these files exist and are configured:
- ✅ `package.json` - All dependencies listed
- ✅ `next.config.js` - Production optimizations enabled
- ✅ `vercel.json` - Deployment configuration
- ✅ `.gitignore` - node_modules and .env excluded
- ✅ `.env.example` - Template for environment variables

## Step 2: Connect to Vercel

### 2.1 Import Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Click "Import"

### 2.2 Configure Project

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

## Step 3: Environment Variables

### 3.1 Required Variables

Add these in Vercel dashboard under "Environment Variables":

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://yourdomain.com` | Your production URL |
| `REVALIDATE_TIME` | `3600` | ISR revalidation (seconds) |

### 3.2 Optional Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | `ca-pub-xxxxx` | Google AdSense ID |

### 3.3 Add Variables via Dashboard

1. Go to your project in Vercel
2. Click "Settings" → "Environment Variables"
3. Add each variable:
   - Name: Variable name
   - Value: Variable value
   - Environment: Production (select all if needed)
4. Click "Save"

### 3.4 Add Variables via CLI (Alternative)

```bash
vercel env add NEXT_PUBLIC_SITE_URL
# Enter value when prompted

vercel env add REVALIDATE_TIME
# Enter value when prompted
```

## Step 4: Deploy

### 4.1 Automatic Deployment (Recommended)

Once connected to GitHub, Vercel automatically deploys:
- **Main Branch** → Production deployment
- **Other Branches** → Preview deployments
- **Pull Requests** → Preview deployments

Just push to trigger deployment:

```bash
git push origin main
```

### 4.2 Manual Deployment via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### 4.3 Monitor Deployment

1. Go to Vercel dashboard
2. Click on your project
3. View deployment logs
4. Check for errors

## Step 5: Configure Custom Domain

### 5.1 Add Domain

1. Go to project settings
2. Click "Domains"
3. Click "Add"
4. Enter your domain name
5. Click "Add"

### 5.2 Update DNS Records

Vercel will show DNS configuration. Update your domain provider:

**For apex domain (example.com):**
```
A Record: 76.76.21.21
```

**For www subdomain (www.example.com):**
```
CNAME: cname.vercel-dns.com
```

### 5.3 Verify Domain

- Wait for DNS propagation (can take 24-48 hours)
- Vercel will automatically issue SSL certificate
- Check domain status in Vercel dashboard

### 5.4 Update Environment Variable

Update `NEXT_PUBLIC_SITE_URL` to your custom domain:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Redeploy after updating.

## Step 6: Post-Deployment Configuration

### 6.1 Update Sitemap

Your sitemap is available at:
```
https://yourdomain.com/sitemap.xml
```

### 6.2 Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### 6.3 Set Up Analytics

**Vercel Analytics** (Built-in):
- Automatically enabled for all projects
- View in Vercel dashboard → Analytics tab

**Google Analytics** (Optional):
1. Create GA4 property
2. Get tracking ID
3. Add to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Step 7: Google AdSense Setup

### 7.1 Apply for AdSense

1. Go to [google.com/adsense](https://www.google.com/adsense)
2. Sign up with your Google account
3. Enter your website URL
4. Wait for approval (1-2 weeks)

### 7.2 Requirements for Approval

- ✅ Original, high-quality content
- ✅ Minimum 15-20 published posts
- ✅ Privacy Policy page
- ✅ Terms of Service page
- ✅ Contact page
- ✅ About page
- ✅ Professional design
- ✅ Custom domain (recommended)

### 7.3 Add AdSense Code

Once approved:

1. Get your AdSense client ID (ca-pub-xxxxx)
2. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxx
   ```
3. Redeploy the site

### 7.4 Create Ad Units

1. Go to AdSense dashboard
2. Create ad units:
   - Display ads
   - In-feed ads
   - In-article ads
3. AdSense will automatically place ads (Auto ads)

### 7.5 Monitor Performance

- Check AdSense dashboard regularly
- Optimize ad placement based on performance
- Ensure compliance with AdSense policies

## Step 8: Optimization

### 8.1 Enable Edge Caching

Already configured in `vercel.json`:
- Static pages: 1 hour cache
- Blog posts: 1 hour cache with stale-while-revalidate
- API routes: Custom cache headers

### 8.2 Configure ISR

Current ISR settings:
- Revalidation: 3600 seconds (1 hour)
- Blog posts regenerate automatically
- No manual rebuild needed

To change revalidation time:
1. Update `REVALIDATE_TIME` environment variable
2. Redeploy

### 8.3 Monitor Performance

Use these tools:
- **Vercel Analytics** - Built-in metrics
- **Google PageSpeed Insights** - Performance scores
- **Lighthouse** - Comprehensive audits
- **WebPageTest** - Detailed performance testing

### 8.4 Optimize Images

For new images:
1. Compress before uploading
2. Use modern formats (WebP, AVIF)
3. Use Next.js Image component if adding images programmatically

## Step 9: Continuous Deployment

### 9.1 GitHub Actions (Optional)

Create `.github/workflows/ci.yml`:

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

### 9.2 Preview Deployments

- Each PR creates a preview deployment
- Test changes before merging
- Share preview URLs with team

### 9.3 Rollback Strategy

If deployment fails:

```bash
# Via CLI
vercel rollback

# Via Dashboard
1. Go to Deployments
2. Find previous successful deployment
3. Click "Promote to Production"
```

## Step 10: Maintenance

### 10.1 Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### 10.2 Content Updates

Add new posts:
```bash
# Create new post
vim content/posts/new-post.md

# Commit and push
git add content/posts/new-post.md
git commit -m "Add new post"
git push origin main

# Vercel auto-deploys
```

### 10.3 Monitoring

Regular checks:
- ✅ Uptime monitoring
- ✅ Performance metrics
- ✅ Error logs (Vercel dashboard)
- ✅ Analytics data
- ✅ AdSense revenue
- ✅ Search Console reports

### 10.4 Backup Strategy

Content is backed up automatically:
- Git repository (GitHub)
- Vercel deployment history
- Manual backups recommended for assets

## Troubleshooting

### Build Failures

**Issue**: Build fails with module errors
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue**: TypeScript errors
```bash
# Solution: Check types
npm run lint
```

### Runtime Errors

**Issue**: 404 on blog posts
- Check `content/posts/` directory exists
- Verify markdown files have correct frontmatter
- Check slug generation in `lib/blog.ts`

**Issue**: Environment variables not working
- Verify variables in Vercel dashboard
- Check variable names (must match code)
- Redeploy after adding variables

### Performance Issues

**Issue**: Slow page loads
- Check Vercel Analytics
- Review build output size
- Optimize images
- Enable ISR properly

### SEO Issues

**Issue**: Pages not indexed
- Verify sitemap.xml is accessible
- Check robots.txt
- Submit to Google Search Console
- Ensure meta tags are present

## Support Resources

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Community**: Vercel Discord, GitHub Discussions

## Deployment Checklist

Before going live:

- [ ] All content reviewed and published
- [ ] Environment variables configured
- [ ] Custom domain connected and SSL active
- [ ] Sitemap submitted to search engines
- [ ] Analytics tracking configured
- [ ] AdSense code added (if approved)
- [ ] Privacy Policy and Terms pages reviewed
- [ ] Contact information updated
- [ ] Mobile responsiveness tested
- [ ] Performance audit completed (Lighthouse score > 90)
- [ ] SEO audit completed
- [ ] Cross-browser testing done
- [ ] 404 page tested
- [ ] Social media sharing tested (OpenGraph tags)

## Post-Launch Tasks

Within first week:
- [ ] Monitor error logs daily
- [ ] Check analytics for traffic
- [ ] Verify all links working
- [ ] Test from different devices/locations
- [ ] Monitor Search Console for indexing
- [ ] Check AdSense impressions (if applicable)

Within first month:
- [ ] Review and adjust ISR timing
- [ ] Optimize based on analytics data
- [ ] Update content based on performance
- [ ] Build backlinks for SEO
- [ ] Engage with audience feedback

---

**Congratulations!** Your SMSIndia Blog is now live and optimized for performance, SEO, and monetization.
