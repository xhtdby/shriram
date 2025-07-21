import { getBlogPosts } from '@/app/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health Blog | Shriram Hospital',
  description: 'Read the latest health tips, hospital news, and success stories from Shriram Hospital.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
      <div className="max-w-3xl mx-auto">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-2">
              <a href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </a>
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              By {post.author} on {new Date(post.publishedDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}`}
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
