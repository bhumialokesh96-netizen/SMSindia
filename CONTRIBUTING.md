# Contributing to SMS India Blog

Thank you for your interest in contributing to SMS India Blog! We welcome content contributions, bug reports, and feature suggestions.

## Table of Contents

- [Editorial Workflow](#editorial-workflow)
- [Content Guidelines](#content-guidelines)
- [Frontmatter Reference](#frontmatter-reference)
- [Writing Style Guide](#writing-style-guide)
- [Technical Contributions](#technical-contributions)
- [Code of Conduct](#code-of-conduct)

## Editorial Workflow

### For Content Contributors

1. **Fork the Repository**
   ```bash
   git clone https://github.com/bhumialokesh96-netizen/SMSindia.git
   cd SMSindia
   ```

2. **Create a New Branch**
   ```bash
   git checkout -b content/your-article-title
   ```

3. **Write Your Article**
   - Create a new file in `content/posts/`
   - Use kebab-case for filenames: `your-article-title.md`
   - Add required frontmatter (see below)
   - Write your content in Markdown

4. **Validate Your Content**
   ```bash
   npm install  # First time only
   npm run validate-content
   ```

5. **Test Locally** (Optional but recommended)
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000/blog/your-article-slug` to preview

6. **Submit Your Contribution**
   ```bash
   git add content/posts/your-article.md
   git commit -m "Add article: Your Article Title"
   git push origin content/your-article-title
   ```

7. **Create a Pull Request**
   - Go to GitHub and create a pull request
   - Fill in the PR template
   - Wait for editorial review

### Review Process

1. **Automated Checks**
   - Frontmatter validation
   - Build test
   - Link checking

2. **Editorial Review**
   - Content quality
   - Factual accuracy
   - SEO optimization
   - Style compliance

3. **Approval & Merge**
   - Approved articles are merged to main
   - Automatically deployed to production

## Content Guidelines

### Topics We Cover

- Mobile technology and telecommunications
- Digital services and platforms
- Technology trends in India
- Product reviews and comparisons
- Industry news and analysis
- Tech tips and tutorials
- Privacy and security

### What We're Looking For

✅ **Good Content:**
- Original, well-researched articles
- Practical value for readers
- Current and relevant topics
- Clear, engaging writing
- Proper citations and sources
- SEO-optimized

❌ **Avoid:**
- Plagiarized content
- Promotional/marketing material
- Outdated information
- Controversial topics without balance
- Personal attacks or bias
- Clickbait or misleading titles

## Frontmatter Reference

Every article must include frontmatter with the following fields:

### Required Fields

```yaml
---
title: "Your Article Title"           # Required: Main headline
date: "2026-01-19"                    # Required: YYYY-MM-DD format
excerpt: "Brief description..."        # Required: 100-200 characters
author: "Your Name"                    # Required: Author name
---
```

### Optional Fields

```yaml
tags: ["Tag1", "Tag2", "Tag3"]        # Optional: Array of tags
category: "Technology"                 # Optional: Single category
featured: false                        # Optional: Feature on homepage
published: true                        # Optional: Publish status (default: true)
seo:
  metaDescription: "SEO description"  # Optional: Custom meta description
  keywords: ["keyword1", "keyword2"]  # Optional: SEO keywords
  ogImage: "/path/to/image.jpg"      # Optional: Social media image
```

### Complete Example

```markdown
---
title: "The Future of AI in Mobile Technology"
date: "2026-01-19"
excerpt: "Exploring how artificial intelligence is transforming mobile devices and creating new possibilities for users."
author: "Jane Doe"
tags: ["AI", "Mobile", "Technology", "Innovation"]
category: "Technology"
featured: false
published: true
seo:
  metaDescription: "Discover how AI is revolutionizing mobile technology. Learn about the latest AI-powered features in smartphones."
  keywords: ["AI mobile", "artificial intelligence", "smartphone AI", "mobile technology"]
---

# Your content starts here...
```

## Writing Style Guide

### General Principles

1. **Clarity First**
   - Use simple, direct language
   - Avoid jargon unless necessary
   - Define technical terms
   - Short paragraphs (3-4 sentences)

2. **Structure**
   - Start with a clear introduction
   - Use descriptive headings (H2, H3)
   - Include bullet points and lists
   - End with a conclusion

3. **Tone**
   - Professional but approachable
   - Informative, not promotional
   - Respectful and inclusive
   - Engaging and conversational

### Formatting

#### Headings

```markdown
# H1 - Main Title (auto-generated from frontmatter)
## H2 - Major Sections
### H3 - Subsections
```

#### Lists

```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list item
2. Another item
```

#### Links

```markdown
[Link text](https://example.com)
[Internal link](/blog/other-article)
```

#### Images

```markdown
![Alt text](/images/filename.jpg)
```

Place images in `public/images/` directory.

#### Code

Inline code: \`code here\`

Code blocks:
\```javascript
const example = "code block";
\```

#### Emphasis

```markdown
*italic* or _italic_
**bold** or __bold__
***bold italic***
```

### SEO Best Practices

1. **Title (50-60 characters)**
   - Include target keyword
   - Make it compelling
   - Avoid clickbait

2. **Excerpt (100-200 characters)**
   - Summarize the article
   - Include main keyword
   - Encourage click-through

3. **Headings**
   - Use keywords naturally
   - Hierarchical structure (H2, H3)
   - Descriptive and clear

4. **Content**
   - Minimum 800 words
   - Natural keyword usage
   - Internal links to related articles
   - External links to authoritative sources

5. **Tags & Category**
   - 3-7 relevant tags
   - Single most relevant category
   - Use existing tags when possible

## Technical Contributions

### Setting Up Development Environment

```bash
# Clone repository
git clone https://github.com/bhumialokesh96-netizen/SMSindia.git
cd SMSindia

# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm run validate-content
npm run build
```

### Code Standards

- TypeScript for all new code
- Follow existing code style
- Add comments for complex logic
- Update documentation as needed

### Submitting Changes

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Update documentation
5. Submit pull request with clear description

## Content Checklist

Before submitting, verify:

- [ ] Frontmatter is complete and valid
- [ ] Title is compelling and SEO-friendly
- [ ] Excerpt is descriptive and concise
- [ ] Content is original and well-researched
- [ ] Grammar and spelling are correct
- [ ] Links are working and relevant
- [ ] Images are optimized and attributed
- [ ] Tags and category are appropriate
- [ ] Article follows style guide
- [ ] Content validation passes
- [ ] Article builds successfully locally

## Getting Help

- **Questions about content**: Open a Discussion on GitHub
- **Technical issues**: Open an Issue with details
- **Editorial queries**: Contact via repository discussions
- **Documentation**: Check README.md and DEPLOYMENT.md

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome diverse perspectives
- Focus on constructive feedback
- Assume good intentions
- Respect privacy and confidentiality

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or inflammatory comments
- Personal attacks
- Publishing others' private information
- Unprofessional conduct

### Enforcement

Violations may result in:
1. Warning
2. Temporary ban
3. Permanent ban

Report issues to repository maintainers.

## Recognition

Contributors will be:
- Credited in article byline
- Listed in repository contributors
- Acknowledged in release notes (for technical contributions)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

## Questions?

If you have questions not covered here:
1. Check existing documentation
2. Search closed issues
3. Open a new discussion
4. Contact maintainers

Thank you for contributing to SMS India Blog! 🙏
