import { getBlogPosts } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health Blog | Shriram Hospital',
  description: 'Read the latest health tips, hospital news, and success stories from Shriram Hospital.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Health Blog</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed with the latest health tips, medical insights, and updates from our expert medical team.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                {post.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-hospital-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-hospital-green transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-semibold text-hospital-green hover:text-hospital-green-dark transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
