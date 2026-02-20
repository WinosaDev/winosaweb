'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Search, Trash2, Edit2, FileText } from 'lucide-react'
import DeleteConfirmModal from '@/components/admin/DeleteConfirmModal'
import { DUMMY_BLOGS, Blog } from '@/constants/blogs'

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>(DUMMY_BLOGS)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<'All' | 'Draft' | 'Published'>('All')
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean
    blogId: string | null
    blogTitle: string
  }>({ isOpen: false, blogId: null, blogTitle: '' })

  const filteredBlogs = blogs.filter((blog) => {
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchStatus = filterStatus === 'All' || blog.status === filterStatus
    return matchSearch && matchStatus
  })

  const confirmDelete = () => {
    if (deleteModal.blogId) {
      setBlogs(blogs.filter((b) => b._id !== deleteModal.blogId))
    }
    setDeleteModal({ isOpen: false, blogId: null, blogTitle: '' })
  }

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">Blog</h1>
          <p className="text-gray-500 italic text-base">Manage Winosa blog content</p>
        </div>
        <Link
          href="/admin/blogs/add"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md text-sm"
        >
          <Plus className="w-5 h-5" />
          Add Blog
        </Link>
      </div>

      {/* Search */}
      <div className="relative w-fit">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search Blog Title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-6 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm w-60"
        />
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2">
        {(['All', 'Draft', 'Published'] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
              ${filterStatus === status
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
              }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      {filteredBlogs.length > 0 ? (
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 rounded-xl">
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 w-12 first:rounded-l-xl">
                  No.
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 w-20">
                  Image
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">
                  Author
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-700 last:rounded-r-xl">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.map((blog, index) => (
                <tr
                  key={blog._id}
                  className={`border-b border-gray-100 hover:bg-gray-50/80 transition-colors
                    ${index % 2 !== 0 ? 'bg-gray-50/40' : 'bg-white'}`}
                >
                  {/* No */}
                  <td className="px-4 py-4 text-sm text-gray-500">
                    {index + 1}.
                  </td>

                  {/* Image */}
                  <td className="px-4 py-4">
                    <div className="w-14 h-10 rounded-lg bg-gray-200 overflow-hidden flex items-center justify-center border border-gray-100">
                      {blog.featuredImage && !blog.featuredImage.startsWith('/images') ? (
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-[10px] text-gray-400">Image</span>
                      )}
                    </div>
                  </td>

                  {/* Title */}
                  <td className="px-4 py-4">
                    <p className="text-sm font-medium text-gray-900">{blog.title}</p>
                  </td>

                  {/* Category */}
                  <td className="px-4 py-4 text-sm text-gray-600">{blog.category}</td>

                  {/* Date */}
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {new Date(blog.createdAt).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: '2-digit',
                      year: '2-digit',
                    })}
                  </td>

                  {/* Author */}
                  <td className="px-4 py-4 text-sm text-gray-600">{blog.author}</td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                        ${blog.status === 'Published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-500'
                        }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          blog.status === 'Published' ? 'bg-green-500' : 'bg-gray-400'
                        }`}
                      />
                      {blog.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setDeleteModal({
                            isOpen: true,
                            blogId: blog._id,
                            blogTitle: blog.title,
                          })
                        }
                        className="w-9 h-9 flex items-center justify-center border border-red-200 rounded-lg hover:bg-red-50 transition-colors group"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-red-400 group-hover:text-red-600" />
                      </button>
                      <Link
                        href={`/admin/blogs/edit/${blog._id}`}
                        className="w-9 h-9 flex items-center justify-center border border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors group"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4 text-yellow-500 group-hover:text-yellow-700" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-20 text-center">
          <FileText className="w-12 h-12 text-gray-200 mx-auto mb-3" />
          <p className="text-base font-semibold text-gray-900 mb-1">No blogs found</p>
          <p className="text-sm text-gray-400">Try adjusting your search or filter</p>
        </div>
      )}

      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, blogId: null, blogTitle: '' })}
        onConfirm={confirmDelete}
        title="Delete Blog"
        message={`Are you sure you want to delete "${deleteModal.blogTitle}"? This action cannot be undone.`}
      />
    </div>
  )
}