# Deployment Guide for SMS India Blog

This guide walks you through deploying SMS India Blog to Vercel, the recommended hosting platform.

## Prerequisites

- Vercel account (sign up at [vercel.com](https://vercel.com))
- GitHub repository access
- Google AdSense account (for monetization)

## Step 1: Prepare Your Repository

1. **Ensure all files are committed**
   ```bash
   git status
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Verify environment variables**
   - Check `.env.example` for required variables
   - Prepare your AdSense client ID and slot IDs

## Step 2: Connect to Vercel

1. **Log in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your repository: `bhumialokesh96-netizen/SMSindia`
   - Click "Import"

## Step 3: Configure Project

1. **Framework Preset**
   - Vercel should auto-detect Next.js
   - Framework Preset: Next.js
   - Root Directory: `./` (leave as default)

2. **Build Settings** (auto-configured)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm ci`

3. **Environment Variables**
   
   Add the following variables:

   ```
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
   NEXT_PUBLIC_ADSENSE_SLOT_TOP_BANNER=0000000000
   NEXT_PUBLIC_ADSENSE_SLOT_MIDDLE_BANNER=0000000000
   NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_TOP=0000000000
   NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM=0000000000
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NODE_ENV=production
   ```

   Replace placeholders with your actual values.

4. **Click "Deploy"**

## Step 4: Monitor Deployment

1. **Watch build logs**
   - Monitor the deployment progress
   - Check for any errors
   - Wait for "Build Completed" message

2. **Verify deployment**
   - Click on the deployment URL
   - Test all pages:
     - Homepage (/)
     - Blog listing (/blog)
     - Individual posts (/blog/[slug])
     - About (/about)
     - Privacy (/privacy)
     - Terms (/terms)
     - Cookies (/cookies)
     - Trends (/trends)

## Step 5: Configure Custom Domain

1. **Add Domain**
   - Go to Project Settings → Domains
   - Click "Add"
   - Enter your domain name

2. **DNS Configuration**
   
   Add these records to your DNS provider:

   **For apex domain (example.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Verify domain**
   - Wait for DNS propagation (can take up to 48 hours)
   - Vercel will automatically issue SSL certificate

4. **Update environment variables**
   - Change `NEXT_PUBLIC_SITE_URL` to your custom domain
   - Redeploy if necessary

## Step 6: Enable Production Features

### 1. Analytics (Optional)

If using Vercel Analytics:
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

// Inside the return statement
<Analytics />
```

### 2. Edge Caching

Edge caching is configured in `vercel.json`. Verify:
- Static assets: Cached for 1 year
- Pages: Cached with stale-while-revalidate
- API routes: Short cache with revalidation

### 3. ISR Configuration

Incremental Static Regeneration is configured:
- Homepage: Revalidates every hour
- Blog posts: Revalidates daily
- Trends page: Revalidates hourly

## Step 7: Post-Deployment Checklist

### SEO Verification

- [ ] Access `/sitemap.xml` - should show all pages
- [ ] Access `/robots.txt` - should show search engine directives
- [ ] Access `/rss.xml` - should show RSS feed
- [ ] Verify meta tags with browser dev tools
- [ ] Test OpenGraph preview (share on social media)

### Google AdSense

- [ ] Verify ads.txt (if required by AdSense)
- [ ] Check ad placements on all pages
- [ ] Ensure ads load correctly
- [ ] Verify compliance with AdSense policies

### Performance Testing

- [ ] Run Google PageSpeed Insights
- [ ] Check Core Web Vitals
- [ ] Test mobile responsiveness
- [ ] Verify load times

### Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (Vercel provides HTML verification)
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

## Step 8: Continuous Deployment

Vercel automatically deploys:
- **Production**: Commits to `main` branch
- **Preview**: Pull requests get preview URLs

### Deployment Workflow

1. Create feature branch
2. Make changes
3. Push to GitHub
4. Open pull request
5. Vercel creates preview deployment
6. Review and test preview
7. Merge to main
8. Automatic production deployment

## Troubleshooting

### Build Failures

**Issue**: Build fails during `npm run build`

**Solutions**:
- Check build logs for specific errors
- Verify all dependencies are in `package.json`
- Test build locally: `npm run build`
- Check TypeScript errors
- Validate content: `npm run validate-content`

### Environment Variables Not Working

**Issue**: AdSense not loading or configuration missing

**Solutions**:
- Verify variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Check variable names match exactly
- Redeploy after adding/changing variables
- Clear browser cache

### Slow Page Load

**Issue**: Pages load slowly

**Solutions**:
- Check ISR configuration in page files
- Verify edge caching in `vercel.json`
- Optimize images
- Review bundle size
- Enable Vercel Analytics to identify bottlenecks

### Domain Not Resolving

**Issue**: Custom domain doesn't work

**Solutions**:
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check domain verification in Vercel
- Try clearing DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

### 404 on Blog Posts

**Issue**: Blog posts return 404

**Solutions**:
- Verify markdown files exist in `content/posts/`
- Check frontmatter is valid
- Run `npm run validate-content`
- Ensure `published: true` in frontmatter
- Rebuild: `npm run build`

## Maintenance

### Regular Updates

- **Weekly**: Check for dependency updates
- **Monthly**: Review and update content
- **Quarterly**: Security audit
- **As needed**: Address user feedback

### Monitoring

- Set up Vercel monitoring alerts
- Monitor Google Search Console
- Track AdSense revenue and performance
- Review analytics regularly

## Scaling Considerations

As traffic grows:

1. **Upgrade Vercel Plan**
   - More bandwidth
   - Better analytics
   - Priority support

2. **Optimize Images**
   - Use Next.js Image component
   - Enable image optimization

3. **Content Delivery**
   - Leverage edge caching
   - Use ISR effectively
   - Consider CDN for assets

4. **Database (Future)**
   - Move to database for more content
   - Implement caching layer
   - Consider search infrastructure

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/next.js/discussions)
- Project README for feature-specific guidance

---

Congratulations! Your SMS India Blog is now deployed and ready for the world. 🚀
