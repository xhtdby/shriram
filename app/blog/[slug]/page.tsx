import { getBlogPostBySlug } from '@/app/data'
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

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

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">
          By {post.author} | Published on {new Date(post.publishedDate).toLocaleDateString()}
        </p>
        <div className="prose lg:prose-xl max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  )
}
