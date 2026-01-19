const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { z } = require('zod');

// Frontmatter validation schema
const PostFrontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  author: z.string().min(1, 'Author is required'),
  tags: z.array(z.string()).optional().default([]),
  category: z.string().optional(),
  featured: z.boolean().optional().default(false),
  published: z.boolean().optional().default(true),
  seo: z.object({
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
  }).optional(),
});

const postsDirectory = path.join(process.cwd(), 'content/posts');

function validateContent() {
  console.log('🔍 Validating content...\n');
  
  if (!fs.existsSync(postsDirectory)) {
    console.log('✅ No content directory found. Creating it...');
    fs.mkdirSync(postsDirectory, { recursive: true });
    return true;
  }

  const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
  
  if (files.length === 0) {
    console.log('⚠️  No markdown files found in content/posts/');
    return true;
  }

  console.log(`Found ${files.length} markdown file(s)\n`);

  let hasErrors = false;
  const errors = [];

  files.forEach(file => {
    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    try {
      const { data } = matter(fileContents);
      
      // Validate frontmatter
      PostFrontmatterSchema.parse(data);
      
      console.log(`✅ ${file} - Valid`);
    } catch (error) {
      hasErrors = true;
      console.log(`❌ ${file} - Invalid`);
      
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          const errorMsg = `   - ${err.path.join('.')}: ${err.message}`;
          console.log(errorMsg);
          errors.push({ file, error: errorMsg });
        });
      } else {
        const errorMsg = `   - ${error.message}`;
        console.log(errorMsg);
        errors.push({ file, error: errorMsg });
      }
    }
  });

  console.log('\n' + '='.repeat(50));
  
  if (hasErrors) {
    console.log('\n❌ Content validation failed!');
    console.log(`\nFound ${errors.length} error(s):\n`);
    errors.forEach(({ file, error }) => {
      console.log(`${file}:`);
      console.log(error);
    });
    process.exit(1);
  } else {
    console.log('\n✅ All content validated successfully!');
    return true;
  }
}

// Run validation
try {
  validateContent();
} catch (error) {
  console.error('❌ Validation script error:', error.message);
  process.exit(1);
}
