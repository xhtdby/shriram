import { getBlogPostBySlug } from '@/app/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import type { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Shriram Hospital Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back to Blog Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-hospital-green hover:text-hospital-green-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          {post.image && (
            <div className="relative h-64 md:h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-hospital-green text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{post.title}</h1>
              </div>
            </div>
          )}

          <div className="p-8 md:p-12">
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center">
                  <span>{post.readTime} min read</span>
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="prose lg:prose-xl max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500 mr-2">Tags:</span>
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-hospital-green/10 text-hospital-green px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts or Back to Blog CTA */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-hospital-green text-white rounded-lg hover:bg-hospital-green-dark transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
