'use client'

import { useParams } from 'next/navigation'
import { DUMMY_BLOGS } from '@/constants/blogs'
import BlogForm from '@/components/admin/BlogForm'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function EditBlogPage() {
  const params = useParams()
  const blogId = params.id as string
  const blog = DUMMY_BLOGS.find((b) => b._id === blogId)

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-6xl mb-4">📄</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Blog not found</h2>
        <p className="text-gray-500 mb-6">The blog you're looking for doesn't exist.</p>
        <Link
          href="/admin/blogs"
          className="flex items-center gap-2 text-sm font-medium text-yellow-600 hover:text-yellow-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
      </div>
    )
  }

  return <BlogForm initialData={blog} isEdit />
}