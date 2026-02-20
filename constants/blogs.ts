export interface Blog {
  _id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage: string
  author: string
  category: string
  tags: string[]
  status: 'Draft' | 'Published'
  createdAt: string
  updatedAt: string
}

export const DUMMY_BLOGS: Blog[] = [
  {
    _id: '1',
    title: 'Why Winosa',
    slug: 'why-winosa',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
    excerpt: 'Discover why Winosa is the best choice for your business.',
    featuredImage: '/images/blog/blog-1.jpg',
    author: 'Admin',
    category: 'Company',
    tags: ['company', 'culture', 'values'],
    status: 'Published',
    createdAt: '2026-01-12',
    updatedAt: '2026-01-12',
  },
  {
    _id: '2',
    title: 'Getting Started with Web Development',
    slug: 'getting-started-web-development',
    content: '<p>Web development is an exciting field. Here are some tips to get started...</p>',
    excerpt: 'A beginner guide to web development in 2026.',
    featuredImage: '/images/blog/blog-2.jpg',
    author: 'Admin',
    category: 'Technology',
    tags: ['web development', 'tutorial', 'beginners'],
    status: 'Published',
    createdAt: '2026-01-15',
    updatedAt: '2026-01-15',
  },
  {
    _id: '3',
    title: 'The Future of AI in Business',
    slug: 'future-ai-business',
    content: '<p>Artificial Intelligence is transforming how businesses operate...</p>',
    excerpt: 'Exploring the impact of AI on modern business.',
    featuredImage: '/images/blog/blog-3.jpg',
    author: 'Admin',
    category: 'Technology',
    tags: ['AI', 'business', 'future'],
    status: 'Draft',
    createdAt: '2026-02-01',
    updatedAt: '2026-02-01',
  },
  {
    _id: '4',
    title: 'Design Trends in 2026',
    slug: 'design-trends-2026',
    content: '<p>The design landscape is constantly evolving...</p>',
    excerpt: 'A look at the top design trends shaping 2026.',
    featuredImage: '/images/blog/blog-4.jpg',
    author: 'Admin',
    category: 'Design',
    tags: ['design', 'trends', 'UI/UX'],
    status: 'Published',
    createdAt: '2026-02-10',
    updatedAt: '2026-02-10',
  },
]

export const BLOG_CATEGORIES = [
  'Technology',
  'Company',
  'Design',
  'Development',
  'Business',
  'Tutorial',
]