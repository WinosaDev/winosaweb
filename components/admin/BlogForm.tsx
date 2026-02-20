'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Upload, X, ImageIcon, Loader2, CheckCircle } from 'lucide-react'
import dynamic from 'next/dynamic'
import { BLOG_CATEGORIES, Blog } from '@/constants/blogs'

// Dynamically import RichTextEditor to avoid SSR issues
const RichTextEditor = dynamic(() => import('@/components/admin/RichTextEditor'), {
  ssr: false,
  loading: () => (
    <div className="border border-gray-200 rounded-xl bg-gray-50 min-h-[260px] flex items-center justify-center">
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Loader2 className="w-4 h-4 animate-spin" />
        Loading editor...
      </div>
    </div>
  ),
})

interface BlogFormProps {
  initialData?: Blog
  isEdit?: boolean
}

export default function BlogForm({ initialData, isEdit = false }: BlogFormProps) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
    author: initialData?.author || 'Admin',
    category: initialData?.category || '',
    featuredImage: initialData?.featuredImage || '',
  })
  const [imagePreview, setImagePreview] = useState<string | null>(
    initialData?.featuredImage || null
  )
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [savedStatus, setSavedStatus] = useState<'Draft' | 'Published' | null>(null)

  const update = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.content || formData.content === '<p><br></p>')
      newErrors.content = 'Content is required'
    if (!formData.author.trim()) newErrors.author = 'Author is required'
    if (!formData.category) newErrors.category = 'Category is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, image: 'Image must be under 5MB' }))
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      const result = reader.result as string
      setImagePreview(result)
      update('featuredImage', result)
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (status: 'Draft' | 'Published') => {
    if (!validate()) return
    setLoading(true)
    setTimeout(() => {
      console.log('Blog saved:', { ...formData, status })
      setSavedStatus(status)
      setLoading(false)
      setTimeout(() => router.push('/admin/blogs'), 1200)
    }, 1200)
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">Blog</h1>
        <p className="text-gray-500 italic text-base">Manage Winosa blog content</p>
      </div>

      {/* Success State */}
      {savedStatus && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl px-10 py-8 text-center shadow-2xl">
            <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-3" />
            <p className="text-xl font-bold text-gray-900">
              {savedStatus === 'Published' ? 'Blog Published!' : 'Saved as Draft!'}
            </p>
            <p className="text-sm text-gray-500 mt-1">Redirecting...</p>
          </div>
        </div>
      )}

      <div className="max-w-2xl space-y-7">
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Title <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => update('title', e.target.value)}
            disabled={loading}
            placeholder="Enter blog title"
            className={`w-full px-4 py-3 border rounded-xl bg-gray-50 text-sm placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent
              disabled:opacity-50 transition-all
              ${errors.title ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
          />
          {errors.title && <p className="text-red-400 text-xs mt-1.5">{errors.title}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Category <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.category}
              onChange={(e) => update('category', e.target.value)}
              disabled={loading}
              className={`w-full px-4 py-3 border rounded-xl bg-gray-50 text-sm appearance-none
                focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent
                disabled:opacity-50 transition-all cursor-pointer
                ${errors.category ? 'border-red-400 bg-red-50' : 'border-gray-200'}
                ${!formData.category ? 'text-gray-400' : 'text-gray-900'}`}
            >
              <option value="" disabled>Dropdown</option>
              {BLOG_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {/* Custom chevron */}
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.category && <p className="text-red-400 text-xs mt-1.5">{errors.category}</p>}
        </div>

        {/* Thumbnail Image */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Thumbnail Image
          </label>

          {imagePreview ? (
            <div className="relative w-full h-52 rounded-xl overflow-hidden border border-gray-200 group">
              <img
                src={imagePreview}
                alt="Thumbnail preview"
                className="w-full h-full object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <label
                  htmlFor="thumbnail-upload"
                  className="px-4 py-2 bg-white text-gray-900 text-xs font-semibold rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  Change
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview(null)
                    update('featuredImage', '')
                  }}
                  disabled={loading}
                  className="px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded-lg hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="thumbnail-upload"
                className="hidden"
              />
            </div>
          ) : (
            <div
              className={`border-2 border-dashed rounded-xl bg-gray-50 transition-all
                ${errors.image ? 'border-red-300' : 'border-gray-200 hover:border-yellow-400 hover:bg-yellow-50/30'}`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={loading}
                className="hidden"
                id="thumbnail-upload"
              />
              <label
                htmlFor="thumbnail-upload"
                className="flex flex-col items-center justify-center gap-3 py-10 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Upload blog thumbnail</p>
                  <span className="inline-block px-5 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-colors">
                    Upload
                  </span>
                </div>
                <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
              </label>
            </div>
          )}
          {errors.image && <p className="text-red-400 text-xs mt-1.5">{errors.image}</p>}
        </div>

        {/* Content - Rich Text Editor */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Content <span className="text-red-400">*</span>
          </label>
          <RichTextEditor
            value={formData.content}
            onChange={(val) => update('content', val)}
            disabled={loading}
            placeholder="Upload blog thumbnail"
          />
          {errors.content && <p className="text-red-400 text-xs mt-1.5">{errors.content}</p>}
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Author <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) => update('author', e.target.value)}
            disabled={loading}
            placeholder="Admin"
            className={`w-full px-4 py-3 border rounded-xl bg-gray-50 text-sm placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent
              disabled:opacity-50 transition-all
              ${errors.author ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
          />
          {errors.author && <p className="text-red-400 text-xs mt-1.5">{errors.author}</p>}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={() => router.back()}
            disabled={loading}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors disabled:opacity-40"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => handleSubmit('Draft')}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold text-sm rounded-xl transition-all disabled:opacity-50"
            >
              {loading && (
                <Loader2 className="w-4 h-4 animate-spin" />
              )}
              Draft
            </button>
            <button
              type="button"
              onClick={() => handleSubmit('Published')}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-xl transition-all disabled:opacity-50 shadow-sm"
            >
              {loading && (
                <Loader2 className="w-4 h-4 animate-spin" />
              )}
              Published
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}