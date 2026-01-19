# Content Writing Guide for SMSIndia Blog

This guide helps content creators write high-quality, SEO-optimized articles for the SMSIndia Blog platform.

## Content Creation Workflow

### Step 1: Research & Planning

1. **Identify Topics**
   - Use the Trends API: `GET /api/trends`
   - Monitor Google Trends for India
   - Check competitor blogs
   - Analyze audience interests

2. **Generate Content Draft**
   - Use the API to generate outline:
     ```bash
     curl -X POST http://localhost:3000/api/trends \
       -H "Content-Type: application/json" \
       -d '{"keyword": "Your Topic", "category": "Category"}'
     ```
   - Review and customize the generated outline

3. **Keyword Research**
   - Target 1-3 primary keywords
   - Include 5-10 related keywords
   - Use keywords naturally in content
   - Include keywords in title, headings, and body

### Step 2: Writing Content

#### Markdown File Structure

Create a file in `content/posts/your-post-slug.md`:

```markdown
---
title: "Your Engaging Title Here"
date: "2026-01-19"
excerpt: "A compelling 150-160 character description for SEO and social sharing"
author: "Your Name"
tags: ["tag1", "tag2", "tag3"]
featured: false
---

# Your Main Title (H1)

Introduction paragraph that hooks the reader and includes your primary keyword naturally.

## Section 1 (H2)

Content for section 1...

### Subsection 1.1 (H3)

More detailed content...

## Section 2 (H2)

Content for section 2...

## Conclusion

Wrap up with key takeaways and call to action.
```

#### Content Structure Best Practices

1. **Title (H1)**
   - Include primary keyword
   - Keep under 60 characters
   - Make it compelling and clickable
   - Use power words when appropriate

2. **Introduction (First Paragraph)**
   - Hook readers immediately
   - Include primary keyword in first 100 words
   - Promise value/solution
   - Keep it under 150 words

3. **Body Content**
   - Use H2 for main sections
   - Use H3 for subsections
   - Keep paragraphs short (2-4 sentences)
   - Use bullet points and numbered lists
   - Include examples and case studies
   - Add statistics with sources

4. **Conclusion**
   - Summarize key points
   - Provide actionable takeaways
   - Include call to action
   - Encourage engagement

### Step 3: SEO Optimization

#### On-Page SEO Checklist

- [ ] Title includes primary keyword
- [ ] Excerpt is 150-160 characters
- [ ] Primary keyword in first paragraph
- [ ] Keywords in 2-3 H2 headings
- [ ] Content length: 1000-2500 words
- [ ] Internal links to 2-3 related posts
- [ ] External links to 2-3 authoritative sources
- [ ] Alt text for images (if any)
- [ ] Proper heading hierarchy (H1 > H2 > H3)
- [ ] No keyword stuffing (natural usage)

#### Keyword Density Guidelines

- Primary keyword: 1-2% density
- Related keywords: Natural inclusion
- Synonyms and variations: Use throughout
- LSI keywords: Include related terms

#### Internal Linking Strategy

Example internal links to add:
```markdown
For more information, check out our guide on [Related Topic](/blog/related-topic-slug).

You might also enjoy: [Another Topic](/blog/another-topic-slug)
```

### Step 4: Content Quality

#### Quality Standards

1. **Originality**
   - 100% original content
   - No plagiarism
   - Unique perspective or insights
   - Fresh data or examples

2. **Accuracy**
   - Fact-check all statistics
   - Verify all claims
   - Include credible sources
   - Update outdated information

3. **Readability**
   - Flesch Reading Ease: 60-70+
   - Avoid jargon unless necessary
   - Use active voice
   - Short sentences and paragraphs
   - Conversational tone

4. **Value**
   - Solve a problem
   - Answer a question
   - Provide actionable advice
   - Teach something new

#### Google AdSense Compliance

Avoid:
- ❌ Adult content
- ❌ Violent content
- ❌ Hate speech
- ❌ Copyright violations
- ❌ False or misleading information
- ❌ Illegal content
- ❌ Excessive profanity

Include:
- ✅ Original content
- ✅ Clear structure
- ✅ Valuable information
- ✅ Proper attribution
- ✅ Family-friendly language

### Step 5: Formatting Guidelines

#### Markdown Formatting

**Bold Text:**
```markdown
**This is bold text**
```

**Italic Text:**
```markdown
*This is italic text*
```

**Lists:**
```markdown
- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3
```

**Links:**
```markdown
[Link Text](https://example.com)
```

**Blockquotes:**
```markdown
> This is a quote or important callout
```

**Code:**
```markdown
`inline code`

\`\`\`
Code block
\`\`\`
```

### Step 6: Publishing

#### Pre-Publish Checklist

- [ ] Spell check completed
- [ ] Grammar check completed
- [ ] All links working
- [ ] Frontmatter complete and accurate
- [ ] Preview looks good locally (`npm run dev`)
- [ ] SEO checklist completed
- [ ] AdSense compliance verified
- [ ] No broken formatting

#### Git Workflow

```bash
# Create the post
touch content/posts/your-post-slug.md

# Edit the post
vim content/posts/your-post-slug.md

# Preview locally
npm run dev
# Visit http://localhost:3000/blog/your-post-slug

# Commit and push
git add content/posts/your-post-slug.md
git commit -m "Add post: Your Post Title"
git push origin main
```

#### Post-Publish

1. **Verify Live**
   - Check post appears on homepage
   - Verify post loads correctly
   - Test on mobile devices
   - Check in different browsers

2. **Promote**
   - Share on social media
   - Add to newsletter
   - Update internal links from older posts
   - Submit to relevant aggregators

3. **Monitor**
   - Track page views
   - Monitor bounce rate
   - Check search rankings
   - Read comments/feedback

### Step 7: Content Updates

#### When to Update

- Information becomes outdated
- New data available
- Ranking drops in search results
- Competitors publish better content
- Seasonal updates needed

#### How to Update

```bash
# Edit the post
vim content/posts/existing-post.md

# Update the date in frontmatter if major update
date: "2026-02-15"

# Commit changes
git add content/posts/existing-post.md
git commit -m "Update post: Post Title"
git push origin main
```

## Writing Tips for India-Focused Content

### Cultural Considerations

1. **Regional Diversity**
   - Acknowledge India's diversity
   - Include examples from different regions
   - Avoid stereotypes
   - Use inclusive language

2. **Local Context**
   - Use Indian examples and case studies
   - Reference Indian brands and companies
   - Include INR for pricing
   - Use Indian English spelling

3. **Trending Topics**
   - Follow Indian festivals and events
   - Cover local trends and news
   - Address India-specific challenges
   - Highlight Indian success stories

### Popular Content Categories

1. **Technology**
   - Digital payments (UPI, wallets)
   - Mobile apps and services
   - Internet trends
   - EdTech platforms

2. **Lifestyle**
   - Travel destinations in India
   - Indian cuisine and recipes
   - Fashion and shopping
   - Health and wellness

3. **Business**
   - Startup ecosystem
   - Investment opportunities
   - Career advice
   - Financial planning

4. **Education**
   - Study guides
   - Career paths
   - Skill development
   - Online courses

5. **Entertainment**
   - Bollywood updates
   - OTT platforms
   - Gaming
   - Music and arts

## Content Ideas Generator

### How-To Guides
- "How to [Task] in India"
- "Complete Guide to [Topic]"
- "Step-by-Step: [Process]"

### Listicles
- "Top 10 [Items] in India"
- "Best [Category] for [Audience]"
- "X Things You Should Know About [Topic]"

### Comparison Articles
- "[Option A] vs [Option B]: Which is Better?"
- "Comparing [Products/Services]"
- "[Year] Review: [Topic]"

### Trend Analysis
- "Why [Trend] is Popular in India"
- "The Rise of [Topic]"
- "Future of [Industry] in India"

### Problem-Solution
- "Solving [Problem] in India"
- "How to Overcome [Challenge]"
- "Dealing with [Issue]: A Guide"

## SEO Resources

### Keyword Research Tools
- Google Keyword Planner
- Google Trends (India)
- Answer the Public
- Also Asked
- Search Console

### Writing Tools
- Grammarly (grammar and spelling)
- Hemingway Editor (readability)
- Yoast SEO (WordPress, for reference)
- CoSchedule Headline Analyzer

### Analytics
- Google Analytics
- Google Search Console
- Vercel Analytics
- SEMrush (optional)

## Content Calendar Planning

### Monthly Themes

**Example Calendar:**

**January:** New Year, Winter Travel, Budget Planning
**February:** Valentine's Day, Personal Finance
**March:** Spring Season, Career Planning
**April:** Festival Season, Summer Travel
**May:** Tech Trends, Education
**June:** Monsoon Preparation, Travel
**July:** Independence Day Month, Patriotic Content
**August:** Festival Preparations, Shopping
**September:** Back to School, Career
**October:** Festive Season, Shopping Guides
**November:** Diwali Special, Winter Planning
**December:** Year in Review, Holiday Travel

### Content Mix

- 40% - Evergreen content (timeless topics)
- 30% - Trending topics (current events)
- 20% - Seasonal content (festivals, seasons)
- 10% - Promotional/updates

## Getting Help

If you need assistance:
- Review this guide
- Check the main README.md
- Review existing blog posts
- Contact the editorial team
- Use the content draft API for inspiration

---

**Happy Writing!** Create content that informs, engages, and ranks well. 🚀
